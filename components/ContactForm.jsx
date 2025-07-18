"use client";

import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { MessageCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Get reCAPTCHA token
      const token = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();

      // Submit form
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: token,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          privacy: false,
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card-modern h-100">
      <span className="text-accent fw-medium">Send Us a Message</span>
      <h2 className="heading-secondary mt-2 mb-4">Get in Touch Today</h2>

      {submitStatus === "success" && (
        <div className="alert alert-success mb-4" role="alert">
          <strong>Thank you!</strong> Your message has been sent successfully.
          We'll get back to you soon.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="alert alert-danger mb-4" role="alert">
          <strong>Error!</strong> There was a problem sending your message.
          Please try again or call us directly.
        </div>
      )}

      <form className="form-modern" onSubmit={handleSubmit}>
        <div className="row g-3 mb-3">
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label fw-medium">
              First Name *
            </label>
            <input
              type="text"
              className="form-control-modern"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label fw-medium">
              Last Name *
            </label>
            <input
              type="text"
              className="form-control-modern"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              required
            />
          </div>
        </div>

        <div className="row g-3 mb-3">
          <div className="col-md-6">
            <label htmlFor="email" className="form-label fw-medium">
              Email Address *
            </label>
            <input
              type="email"
              className="form-control-modern"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john.doe@example.com"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="phone" className="form-label fw-medium">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control-modern"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="07123 456789"
            />
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <label htmlFor="subject" className="form-label fw-medium">
            Subject *
          </label>
          <select
            className="form-control-modern"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          >
            <option value="">Select a subject</option>
            <option value="appointment">Book an Appointment</option>
            <option value="consultation">About Consultation</option>
            <option value="emergency">Dental Emergency</option>
            <option value="information">General Information</option>
            <option value="pricing">Pricing Inquiry</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="col-md-7 mb-4">
          <label htmlFor="message" className="form-label fw-medium">
            Message *
          </label>
          <textarea
            className="form-control-modern"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            placeholder="Please tell us how we can help you..."
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="privacy"
              name="privacy"
              checked={formData.privacy}
              onChange={handleChange}
              required
            />
            <label
              className="form-check-label small text-subtle"
              htmlFor="privacy"
            >
              I agree to the privacy policy and consent to my personal data
              being processed for the purpose of responding to my inquiry. *
            </label>
          </div>
        </div>

        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey={
            process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeGlocrAAAAAOcBXke1QhswSORS0OdxAqJG6zHy"
          }
        />

        <button
          type="submit"
          className="btn-primary-modern w-100"
          disabled={isSubmitting}
        >
          <MessageCircle size={20} />
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
