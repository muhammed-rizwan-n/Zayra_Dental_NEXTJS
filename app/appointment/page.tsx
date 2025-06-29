import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Clock,
  Phone,
  Mail,
  User,
  MessageCircle,
  CheckCircle,
  Star,
  Shield,
  Heart,
} from "lucide-react";
import "./style.css";

export const metadata: Metadata = {
  title:
    "Book Dental Appointment Leeds Online | Zayra Dental Appointment Booking",
  description:
    "Book your dental appointment online in Leeds. Quick & easy booking for dental check-ups, teeth whitening, implants & emergency care. Same-day appointments available.",
  keywords: [
    "book dental appointment Leeds",
    "online dental booking Leeds",
    "dental appointment booking",
    "dentist appointment Leeds",
    "emergency dental appointment",
    "dental consultation Leeds",
    "same day dental appointment",
    "dental check up booking",
    "Leeds dentist booking online",
    "dental appointment Harehills",
  ],
  openGraph: {
    title: "Book Dental Appointment Leeds Online | Zayra Dental",
    description:
      "Book your dental appointment online in Leeds. Quick & easy booking for check-ups, teeth whitening, implants & emergency care.",
    url: "https://zayradental.co.uk/appointment",
    images: [
      {
        url: "/home/waiting_room.jpg",
        width: 1200,
        height: 630,
        alt: "Book Dental Appointment Online at Zayra Dental Leeds",
      },
    ],
  },
  alternates: {
    canonical: "https://zayradental.co.uk/appointment",
  },
};

export default function Appointment() {
  const appointmentTypes = [
    {
      title: "Initial Consultation",
      description: "Comprehensive dental exam and treatment planning",
      duration: "60 minutes",
      price: "£75",
      icon: <User size={24} />,
    },
    {
      title: "General Check-up",
      description: "Routine dental examination and cleaning",
      duration: "30 minutes",
      price: "£45",
      icon: <CheckCircle size={24} />,
    },
    {
      title: "Emergency Appointment",
      description: "Urgent dental care for pain or dental emergencies",
      duration: "45 minutes",
      price: "£95",
      icon: <Heart size={24} />,
    },
    {
      title: "Cosmetic Consultation",
      description: "Discuss teeth whitening, veneers, and smile makeovers",
      duration: "45 minutes",
      price: "£50",
      icon: <Star size={24} />,
    },
  ];



  const benefits = [
    {
      icon: <Shield size={24} />,
      title: "Expert Care",
      description: "15+ years of dental expertise",
    },
    {
      icon: <Heart size={24} />,
      title: "Gentle Approach",
      description: "Anxiety-free dental experience",
    },
    {
      icon: <Star size={24} />,
      title: "Modern Technology",
      description: "Latest equipment & techniques",
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Flexible Payment",
      description: "Affordable payment plans available",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-modern appointment-hero"
        style={{ paddingTop: "120px", minHeight: "70vh" }}
      >
        <div className="container-modern">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="text-accent fw-medium">Book Your Visit</span>
              <h1 className="heading-primary mt-2 mb-4">
                Schedule Your
                <span className="text-primary-brown d-block">
                  Dental Appointment
                </span>
              </h1>
              <p className="lead text-subtle mb-4">
                Take the first step towards a healthier, more confident smile.
                Book your appointment online or call us directly - we&apos;re here to
                make your dental care convenient and stress-free.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <a href="tel:01132488398" className="btn-primary-modern">
                  <Phone size={20} />
                  Call Now
                </a>
                <Link href="/contact" className="btn-secondary-modern">
                  <MessageCircle size={20} />
                  Ask Questions
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="row g-3 mt-4">
                <div className="col-4">
                  <div className="text-center">
                    <div className="heading-tertiary text-accent mb-1">
                      24hrs
                    </div>
                    <div className="small text-subtle">Response Time</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <div className="heading-tertiary text-accent mb-1">
                      4.9★
                    </div>
                    <div className="small text-subtle">Patient Rating</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <div className="heading-tertiary text-accent mb-1">15+</div>
                    <div className="small text-subtle">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
              <div className="appointment-quick-info">
                <div className="card-elevated">
                  <div className="text-center mb-4">
                    <h3 className="heading-tertiary mb-3">Quick Booking</h3>
                    <p className="text-subtle">
                      Choose your preferred contact method
                    </p>
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="quick-contact-card">
                        <Phone className="quick-contact-icon" size={32} />
                        <h4>Call Direct</h4>
                        <p>Speak to our team now</p>
                        <a
                          href="tel:01132488398"
                          className="quick-contact-link"
                        >
                          0113 248 8398
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="clinic-hours mt-4">
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <Clock size={20} className="text-accent" />
                      <h5 className="mb-0">Opening Hours</h5>
                    </div>
                    <div className="hours-grid">
                      <div className="hour-item">
                        <span>Mon - Thu</span>
                        <span className="time-badge">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="hour-item">
                        <span>Saturday</span>
                        <span className="time-badge">9:00 AM - 4:00 PM</span>
                      </div>
                      <div className="hour-item">
                        <span>Sunday</span>
                        <span className="time-badge closed">
                          Emergency Only
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-modern bg-cream">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">
              Why Choose Zayra Dental
            </span>
            <h2 className="heading-secondary mt-2 mb-4">
              Your Comfort is Our Priority
            </h2>
          </div>

          <div className="row g-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="benefit-card">
                  <div className="benefit-icon">{benefit.icon}</div>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Types */}
      <section className="section-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Treatment Options</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Choose Your Appointment Type
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Select the type of appointment that best suits your needs. All
              prices include consultation and examination.
            </p>
          </div>

          <div className="row g-4">
            {appointmentTypes.map((type, index) => (
              <div
                key={index}
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="appointment-type-card">
                  <div className="appointment-type-header">
                    <div className="appointment-type-icon">{type.icon}</div>
                    <div className="appointment-type-info">
                      <h4>{type.title}</h4>
                      <p>{type.description}</p>
                    </div>
                    <div className="appointment-type-price">
                      <div className="price">{type.price}</div>
                      <div className="duration">{type.duration}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section
        className="section-modern"
        style={{ background: "var(--primary-teal)" }}
      >
        <div className="container-modern">
          <div className="text-center text-white" data-aos="fade-up">
            <h2 className="heading-secondary mb-4" style={{ color: "white" }}>
              Need Urgent Dental Care?
            </h2>
            <p className="lead mb-4" style={{ opacity: 0.9 }}>
              Don&apos;t wait if you&apos;re experiencing dental pain or have a dental
              emergency. Call us immediately for prompt care.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <a
                href="tel:01132488398"
                className="btn"
                style={{
                  background: "white",
                  color: "var(--primary-teal)",
                  border: "none",
                  padding: "1rem 2rem",
                  borderRadius: "50px",
                  fontWeight: "500",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Phone size={20} />
                Call Emergency Line
              </a>
              <Link
                href="/contact"
                className="btn"
                style={{
                  background: "transparent",
                  color: "white",
                  border: "2px solid white",
                  padding: "1rem 2rem",
                  borderRadius: "50px",
                  fontWeight: "500",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Mail size={20} />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
