import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "../../components/ContactForm";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  MessageCircle,
  Navigation,
  Car,
  Bus,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Contact Award-Winning Dentist Leeds | Book Appointment | CQC Registered Zayra Dental",
  description:
    "Contact Business Awards UK Winner Zayra Dental Leeds - Call 0113 248 8398 to book appointment. CQC registered practice on Harehills Lane with free parking. Emergency dental care available.",
  keywords: [
    "contact award winning dentist Leeds",
    "CQC registered dentist Leeds",
    "Business Awards UK winner",
    "book dental appointment Leeds",
    "dentist Harehills Lane",
    "emergency dentist Leeds",
    "Zayra Dental contact",
    "dental clinic Leeds location",
    "dental appointment booking",
    "Leeds dentist phone number",
    "dental emergency Leeds",
    "dentist near me Leeds",
    "patient centered dental care",
  ],
  openGraph: {
    title: "Contact Award-Winning Dentist Leeds | CQC Registered Zayra Dental",
    description:
      "Contact Business Awards UK Winner Zayra Dental Leeds - Call 0113 248 8398 to book appointment. CQC registered practice with free parking & emergency care.",
    url: "https://zayra-dental-nextjs.vercel.app/contact",
    images: [
      {
        url: "/gallery/Zayradental_Edits_11.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Zayra Dental Leeds - Modern Dental Clinic",
      },
    ],
  },
  alternates: {
    canonical: "https://zayra-dental-nextjs.vercel.app/contact",
  },
};

export default function Contact() {
  const contactInfo = {
    address: "599 Harehills Lane, Leeds, LS9 6NQ",
    phone: "0113 248 8398",
    email: "info@zayradental.co.uk",
    hours: {
      weekdays: "Monday - Thursday: 9:00 AM - 5:00 PM",
      friday: "Friday: 9:00 AM - 1:00 PM",
    },
  };

  const transportOptions = [
    {
      icon: <Car size={24} />,
      title: "By Car",
      description: "Free parking available on-site",
      color: "var(--primary-teal)",
    },
    {
      icon: <Bus size={24} />,
      title: "Public Transport",
      description: "Multiple bus routes stop nearby",
      color: "var(--primary-brown)",
    },
    {
      icon: <Navigation size={24} />,
      title: "Walking",
      description: "Easily accessible on foot from city center",
      color: "var(--accent-teal)",
    },
  ];

  const quickActions = [
    {
      icon: <Calendar size={32} />,
      title: "Book Appointment",
      description: "Schedule your visit by Call",
      action: "Book Now",
      href: "/appointment",
      color: "var(--primary-brown)",
    },
    {
      icon: <Phone size={32} />,
      title: "Call Us",
      description: "Speak to our friendly team",
      action: "Call 0113 248 8398",
      href: "tel:01132488398",
      color: "var(--primary-teal)",
    },
    {
      icon: <MessageCircle size={32} />,
      title: "Emergency Care",
      description: "National Health Service Emergency",
      action: "National Emergency Line",
      href: "tel:111",
      color: "var(--secondary-brown)",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-modern"
        style={{ paddingTop: "120px", minHeight: "70vh" }}
      >
        <div className="container-modern">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="text-accent fw-medium">Get in Touch</span>
              <h1 className="heading-primary mt-2 mb-4">
                Contact Our Friendly
                <span className="text-primary-brown d-block">Dental Team</span>
              </h1>
              <p className="lead text-subtle mb-4">
                Ready to start your journey to a healthier, more confident
                smile? Our team is here to help you every step of the way. Get
                in touch today to schedule your consultation.
              </p>

              {/* Quick Contact Options */}
              <div className="d-flex flex-wrap gap-3 mb-4">
                <Link href="tel:01132488398" className="btn-primary-modern">
                  <Phone size={20} />
                  Call Now
                </Link>
                <Link href="#form" className="btn-secondary-modern">
                  <Mail size={20} />
                  Send Message
                </Link>
              </div>

              {/* Emergency Notice */}
              <div
                className="p-3 rounded-3 d-flex align-items-center gap-3"
                style={{
                  background: "rgba(220, 53, 69, 0.1)",
                  border: "1px solid rgba(220, 53, 69, 0.2)",
                }}
              >
                <Phone size={20} style={{ color: "#dc3545" }} />
                <div>
                  <div className="fw-medium" style={{ color: "#dc3545" }}>
                    Dental Emergency?
                  </div>
                  <div className="small text-subtle">
                    Call us immediately for urgent care
                  </div>
                </div>
              </div>
            </div>

            <div
              id="map"
              className="col-lg-6 mt-3 md:mt-0"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="card-elevated">
                <iframe
                  title="Zayra Dental Clinic Location"
                  src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d127.90075552939904!2d-1.4995775816851713!3d53.80214847687533!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTPCsDQ4JzA3LjkiTiAxwrAyOSc1OC4xIlc!5e1!3m2!1sen!2sin!4v1751505544205!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0, borderRadius: "15px" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Action Cards */}
      <section className="section-modern bg-cream">
        <div className="container-modern">
          <div className="row g-4">
            {quickActions.map((action, index) => (
              <div
                key={index}
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-modern text-center h-100">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "80px",
                      height: "80px",
                      background: action.color,
                      color: "white",
                    }}
                  >
                    {action.icon}
                  </div>
                  <h3 className="heading-tertiary mb-3">{action.title}</h3>
                  <p className="text-subtle mb-4">{action.description}</p>
                  <a
                    href={action.href}
                    className="btn"
                    style={{
                      background: action.color,
                      color: "white",
                      border: "none",
                      padding: "0.75rem 1.5rem",
                      borderRadius: "50px",
                      fontWeight: "500",
                      textDecoration: "none",
                    }}
                  >
                    {action.action}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-modern">
        <div className="container-modern">
          <div className="row g-5">
            {/* Contact Information */}
            <div className="col-lg-5" data-aos="fade-right">
              <div className="card-modern h-100">
                <span className="text-accent fw-medium">
                  Contact Information
                </span>
                <h2 className="heading-secondary mt-2 mb-4">
                  Visit Our Clinic
                </h2>

                <div className="mb-4">
                  <div className="d-flex align-items-start gap-3 mb-4">
                    <div
                      className="rounded-circle d-inline-flex align-items-center justify-content-center"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "var(--primary-teal)",
                        color: "white",
                      }}
                    >
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h5 className="heading-tertiary mb-2">Our Location</h5>
                      <p className="text-subtle mb-0">{contactInfo.address}</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3 mb-4">
                    <div
                      className="rounded-circle d-inline-flex align-items-center justify-content-center"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "var(--primary-brown)",
                        color: "white",
                      }}
                    >
                      <Phone size={24} />
                    </div>
                    <div>
                      <h5 className="heading-tertiary mb-2">Phone Number</h5>
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="text-decoration-none"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3 mb-4">
                    <div
                      className="rounded-circle d-inline-flex align-items-center justify-content-center"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "var(--accent-teal)",
                        color: "white",
                      }}
                    >
                      <Mail size={24} />
                    </div>
                    <div>
                      <h5 className="heading-tertiary mb-2">Email Address</h5>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-decoration-none"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div
                      className="rounded-circle d-inline-flex align-items-center justify-content-center"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "var(--secondary-brown)",
                        color: "white",
                      }}
                    >
                      <Clock size={24} />
                    </div>
                    <div>
                      <h5 className="heading-tertiary mb-2">Opening Hours</h5>
                      <div className="text-subtle">
                        <div>{contactInfo.hours.weekdays}</div>
                        <div>{contactInfo.hours.friday}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div
                  className="mt-4 pt-4"
                  style={{ borderTop: "1px solid var(--bg-light-gray)" }}
                >
                  <h5 className="heading-tertiary mb-3">Follow Us</h5>
                  <div className="d-flex gap-3">
                    <a
                      href="https://facebook.com/zayradental"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link d-inline-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: "45px",
                        height: "45px",
                        background: "var(--bg-light-gray)",
                        color: "var(--text-primary)",
                        textDecoration: "none",
                      }}
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="https://instagram.com/zayradental"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link d-inline-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: "45px",
                        height: "45px",
                        background: "var(--bg-light-gray)",
                        color: "var(--text-primary)",
                        textDecoration: "none",
                      }}
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="https://linkedin.com/company/zayradental"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link d-inline-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: "45px",
                        height: "45px",
                        background: "var(--bg-light-gray)",
                        color: "var(--text-primary)",
                        textDecoration: "none",
                      }}
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div id="form" className="col-lg-7 scroll-fix" data-aos="fade-left">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Getting Here Section */}
      <section className="section-modern bg-light-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Getting Here</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Easy to Find, Easy to Reach
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Our clinic is conveniently located in Leeds with excellent
              transport links and free parking available for all patients.
            </p>
          </div>

          <div className="row g-4">
            {transportOptions.map((option, index) => (
              <div
                key={index}
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-modern h-100 text-center">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "70px",
                      height: "70px",
                      background: option.color,
                      color: "white",
                    }}
                  >
                    {option.icon}
                  </div>
                  <h4 className="heading-tertiary mb-3">{option.title}</h4>
                  <p className="text-subtle">{option.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5" data-aos="fade-up">
            <a
              href="https://maps.google.com/?q=599+Harehills+Lane+Leeds+LS9+6NQ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-modern"
            >
              <Navigation size={20} />
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
