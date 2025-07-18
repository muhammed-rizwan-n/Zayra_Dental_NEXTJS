"use server";

import { z } from "zod";

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  recaptchaToken: z.string().min(1, "Please complete the reCAPTCHA"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export interface ContactFormState {
  success: boolean;
  message: string;
  errors?: Partial<ContactFormData>;
}

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
async function sendEmail(formData: ContactFormData): Promise<boolean> {
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  if (!serviceId || !templateId || !publicKey || !privateKey) {
    console.error("EmailJS configuration missing in environment variables");
    return false;
  }

  try {
    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          accessToken: privateKey,
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            service: formData.service,
            message: formData.message,
            to_email: "info@zayradental.co.uk",
          },
        }),
      },
    );

    return response.ok;
  } catch (error) {
    console.error("Email sending error:", error);
    return false;
  }
}

// Main contact form submission action
export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  try {
    // Parse and validate form data
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
      recaptchaToken: formData.get("recaptchaToken") as string,
    };

    const validatedData = contactSchema.parse(rawData);

    // Verify reCAPTCHA
    const isRecaptchaValid = await verifyRecaptcha(
      validatedData.recaptchaToken,
    );
    if (!isRecaptchaValid) {
      return {
        success: false,
        message: "reCAPTCHA verification failed. Please try again.",
      };
    }

    // Send email
    const emailSent = await sendEmail(validatedData);
    if (!emailSent) {
      return {
        success: false,
        message: "Failed to send email. Please try again or call us directly.",
      };
    }

    return {
      success: true,
      message:
        "Thank you for your inquiry! We will get back to you within 24 hours.",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Please check the form fields and try again.",
        errors: error.flatten().fieldErrors as Partial<ContactFormData>,
      };
    }

    console.error("Contact form submission error:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    };
  }
}

// Appointment booking action
const appointmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  service: z.string().min(1, "Please select a service"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  message: z.string().optional(),
  recaptchaToken: z.string().min(1, "Please complete the reCAPTCHA"),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;

export async function submitAppointmentForm(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  try {
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      service: formData.get("service") as string,
      preferredDate: formData.get("preferredDate") as string,
      preferredTime: formData.get("preferredTime") as string,
      message: (formData.get("message") as string) || "",
      recaptchaToken: formData.get("recaptchaToken") as string,
    };

    const validatedData = appointmentSchema.parse(rawData);

    // Verify reCAPTCHA
    const isRecaptchaValid = await verifyRecaptcha(
      validatedData.recaptchaToken,
    );
    if (!isRecaptchaValid) {
      return {
        success: false,
        message: "reCAPTCHA verification failed. Please try again.",
      };
    }

    // Send appointment email
    const emailSent = await sendAppointmentEmail(validatedData);
    if (!emailSent) {
      return {
        success: false,
        message:
          "Failed to book appointment. Please try again or call us directly.",
      };
    }

    return {
      success: true,
      message:
        "Appointment request submitted! We will confirm your appointment within 24 hours.",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Please check the form fields and try again.",
        errors: error.flatten().fieldErrors as Partial<AppointmentFormData>,
      };
    }

    console.error("Appointment form submission error:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    };
  }
}

async function sendAppointmentEmail(
  formData: AppointmentFormData,
): Promise<boolean> {
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId =
    process.env.EMAILJS_APPOINTMENT_TEMPLATE_ID ||
    process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  if (!serviceId || !templateId || !publicKey || !privateKey) {
    console.error("EmailJS configuration missing in environment variables");
    return false;
  }

  try {
    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          accessToken: privateKey,
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            service: formData.service,
            preferred_date: formData.preferredDate,
            preferred_time: formData.preferredTime,
            message: formData.message,
            to_email: "info@zayradental.co.uk",
          },
        }),
      },
    );

    return response.ok;
  } catch (error) {
    console.error("Appointment email sending error:", error);
    return false;
  }
}
