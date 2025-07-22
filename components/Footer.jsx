import Link from "next/link";
import Image from "next/image";
import reviews from "../getReviews/finalReviews.json";
import SiteInfo from "../components/SiteInfo";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Star,
  ArrowRight,
} from "lucide-react";
import logo from "../public/zayra-dental.png";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { text: "About Us", href: "/about-us" },
    { text: "Services", href: "/services" },
    { text: "Pricing", href: "/pricing" },
    { text: "Gallery", href: "/gallery" },
    { text: "Contact", href: "/contact" },
    { text: "Appointment", href: "/appointment" },
  ];

  const services = [
    { name: "General Dentistry", href: "/services/general-dentistry" },
    { name: "Teeth Whitening", href: "/services/teeth-whitening" },
    { name: "Dental Implants", href: "/services/dental-implants" },
    { name: "Composite & Veneers", href: "/services/composite-and-veneers" },
    { name: "Dental Aligners", href: "/services/dental-aligners" },
    { name: "Root Canal Treatment", href: "/services/root-canal" },
    { name: "Emergency Care", href: "/services/emergency-dental-care" },
  ];

  return (
    <footer
      style={{
        background:
          "linear-gradient(135deg, var(--text-primary) 0%, var(--secondary-brown) 100%)",
        color: "white",
      }}
    >
      {/* Main Footer Content */}
      <div className="container-modern py-5">
        <div className="row g-5">
          {/* Company Info */}
          <div className="col-lg-4">
            <div className="mb-4">
              <Image
                src={logo}
                alt="Zayra Dental"
                width={180}
                height={60}
                style={{
                  height: "auto",
                  filter: "brightness(0) invert(1)", // Makes logo white
                }}
              />
            </div>
            <p className="text-light mb-4" style={{ opacity: 0.9 }}>
              Your trusted dental practice in Leeds, delivering exceptional care
              through modern technology and a gentle, patient-focused approach —
              creating beautiful, healthy smiles every day.
            </p>

            {/* Review Summary */}
            <div
              className="p-3 rounded-3 mb-4"
              style={{ background: "rgba(255, 255, 255, 0.1)" }}
            >
              <div className="d-flex align-items-center gap-2 mb-2">
                <div className="d-flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="gold" color="gold" />
                  ))}
                </div>
                <span className="fw-semibold">
                  {reviews["averageRating"]}/5
                </span>
              </div>
              <p className="small mb-0" style={{ opacity: 0.9 }}>
                Based on Google reviews
              </p>
            </div>

            {/* Social Links */}
            <div className="d-flex gap-3">
              <a
                href="https://www.facebook.com/Zayra-Dental-100487084965519"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link d-inline-flex align-items-center justify-content-center rounded-circle"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/zayradentalleeds/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link d-inline-flex align-items-center justify-content-center rounded-circle"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://x.com/zayradental1"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link d-inline-flex align-items-center justify-content-center rounded-circle"
              >
                <svg
                  className="footer-icon-x"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  style={{ width: "18px", height: "18px" }}
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="heading-tertiary mb-4" style={{ color: "white" }}>
              Quick Links
            </h5>
            <ul className="list-unstyled">
              {quickLinks.map(({ text, href }) => (
                <li key={text} className="mb-2">
                  <Link
                    href={href}
                    className="footer-link d-flex align-items-center gap-2 text-decoration-none"
                  >
                    <ArrowRight size={14} />
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6">
            <h5 className="heading-tertiary mb-4" style={{ color: "white" }}>
              Our Services
            </h5>
            <ul className="list-unstyled">
              {services.map((service) => (
                <li key={service.name} className="mb-2">
                  <Link
                    href={service.href}
                    className="footer-link d-flex align-items-center gap-2 text-decoration-none"
                  >
                    <ArrowRight size={14} />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3">
            <h5 className="heading-tertiary mb-4" style={{ color: "white" }}>
              Contact Information
            </h5>

            <div className="mb-3">
              <div className="d-flex align-items-start gap-3 mb-3">
                <MapPin
                  size={20}
                  className="mt-1"
                  style={{ color: "var(--primary-teal)" }}
                />
                <div>
                  <div className="fw-medium mb-1">Our Location</div>
                  <Link
                    href="https://maps.app.goo.gl/mXJS7FprA4n6NTRdA"
                    target="_blank"
                    className="mb-0 text-decoration-none"
                    style={{ color: "rgba(255, 255, 255, 0.8)" }}
                  >
                    599 Harehills Lane
                    <br />
                    Leeds, LS9 6NQ
                  </Link>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3 mb-3">
                <Phone
                  size={20}
                  className="mt-1"
                  style={{ color: "var(--primary-teal)" }}
                />
                <div>
                  <div className="fw-medium mb-1">Phone</div>
                  <a
                    href="tel:01132488398"
                    className="text-decoration-none"
                    style={{ color: "rgba(255, 255, 255, 0.8)" }}
                  >
                    0113 248 8398
                  </a>
                  <br />
                  <a
                    href="tel:01132120933"
                    className="text-decoration-none"
                    style={{ color: "rgba(255, 255, 255, 0.8)" }}
                  >
                    0113 212 0933
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3 mb-3">
                <Mail
                  size={20}
                  className="mt-1"
                  style={{ color: "var(--primary-teal)" }}
                />
                <div>
                  <div className="fw-medium mb-1">Email</div>
                  <a
                    href="mailto:info@zayradental.co.uk"
                    className="text-decoration-none"
                    style={{ color: "rgba(255, 255, 255, 0.8)" }}
                  >
                    info@zayradental.co.uk
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3">
                <Clock
                  size={20}
                  className="mt-1"
                  style={{ color: "var(--primary-teal)" }}
                />
                <div>
                  <div className="fw-medium mb-1">Opening Hours</div>
                  <div
                    style={{
                      color: "rgba(255, 255, 255, 0.8)",
                      fontSize: "0.9rem",
                    }}
                  >
                    <div>Mon - Thu: 9:00 AM - 5:00 PM</div>
                    <div>Fri: 9:00 AM - 1:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Banner */}
      <div
        style={{
          background: "var(--primary-teal)",
          padding: "1rem 0",
          display: "none",
        }}
      >
        <div className="container-modern">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
            <div className="d-flex align-items-center gap-3">
              <Phone size={20} />
              <div>
                <span className="fw-medium">24/7 Emergency Dental Care</span>
                <div className="small" style={{ opacity: 0.9 }}>
                  Call us anytime for urgent dental problems
                </div>
              </div>
            </div>
            <a
              href="tel:01132488398"
              className="btn"
              style={{
                background: "white",
                color: "var(--primary-teal)",
                border: "none",
                padding: "0.75rem 1.5rem",
                borderRadius: "25px",
                fontWeight: "500",
                textDecoration: "none",
              }}
            >
              Call Emergency Line
            </a>
          </div>
        </div>
      </div>

      <SiteInfo />

      {/* Bottom Footer */}
      <div
        style={{
          background: "rgba(0, 0, 0, 0.2)",
          padding: "1.5rem 0",
        }}
      >
        <div className="container-modern">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
            <div className="d-flex flex-wrap gap-4">
              <span style={{ color: "rgb(255, 255, 255)" }}>
                &copy; {currentYear} Zayra Dental. All rights reserved.
              </span>
            </div>

            <div className="d-flex align-items-center gap-2">
              <span className="small" style={{ color: "rgb(255, 255, 255)" }}>
                CQC Registered Practice
              </span>
              <div
                className="rounded px-2 py-1"
                style={{
                  background: "var(--primary-teal)",
                  fontSize: "0.75rem",
                  fontWeight: "500",
                }}
              >
                1-7765941135
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
