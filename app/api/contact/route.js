import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
      recaptchaToken,
    } = body;

    // Verify reCAPTCHA
    const recaptchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      },
    );

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed" },
        { status: 400 },
      );
    }

    // Prepare email content
    const emailContent = `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "Not provided"}
Subject: ${subject}

Message:
${message}

Submitted at: ${new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })}
reCAPTCHA Score: ${recaptchaData.score}
    `;

    // Log the email content (in production, you would send this to your email service)
    console.log("Contact form submission:", {
      name: `${firstName} ${lastName}`,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString(),
      recaptchaScore: recaptchaData.score,
    });

    // In a real implementation, you would integrate with your email service here
    // For example: SendGrid, Mailgun, AWS SES, Nodemailer, etc.
    // await sendEmail({
    //   to: 'info@zayradental.co.uk',
    //   from: email,
    //   subject: `Contact Form: ${subject}`,
    //   html: emailContent,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
