import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  recaptchaToken: z.string().min(1, "Please complete the reCAPTCHA"),
});

// Verify reCAPTCHA token
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.error("RECAPTCHA_SECRET_KEY not found in environment variables");
    return false;
  }

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${secretKey}&response=${token}`,
      },
    );

    const data = await response.json();
    return data.success && data.score > 0.5; // Adjust score threshold as needed
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}

// Send email using EmailJS
async function sendEmail(formData: z.infer<typeof contactSchema>): Promise<boolean> {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "465"),
    secure: true, // Use true for port 465, false for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_USER, // sends to your own info@domain.com
    subject: `New Inquiry from ${formData.name}`,
    replyTo: formData.email,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Service:</strong> ${formData.service}</p>
      <p><strong>Message:</strong><br/>${formData.message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("SMTP Email error:", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate form data
    const validatedData = contactSchema.parse(body);

    // Verify reCAPTCHA
    const isRecaptchaValid = await verifyRecaptcha(
      validatedData.recaptchaToken,
    );
    if (!isRecaptchaValid) {
      return NextResponse.json(
        {
          success: false,
          message: "reCAPTCHA verification failed. Please try again.",
          data: {'isrecaptcha':isRecaptchaValid, "body": validatedData}
        },
        { status: 400 },
      );
    }

    // Send email
    const emailSent = await sendEmail(validatedData);
    if (!emailSent) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Failed to send email. Please try again or call us directly at 0113 248 8398.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you for your inquiry! We will get back to you within 24 hours.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the form fields and try again.",
          errors: error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    console.error("Contact form submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please try again.",
      },
      { status: 500 },
    );
  }
}

// Handle preflight requests
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
