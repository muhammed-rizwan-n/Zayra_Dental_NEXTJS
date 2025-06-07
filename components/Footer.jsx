import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-light pt-5 pb-4 border-top shadow-sm">
      <div className="container">
        <div className="row justify-content-between align-items-start">

          {/* Contact Info */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <p className="mb-1">📞 <a href="tel:+911234567890">+91 12345 67890</a></p>
            <p className="mb-1">📧 <a href="mailto:contact@zayradental.com">contact@zayradental.com</a></p>
            <p className="mb-0">📍 123 Smile Street, Dental City, India 400001</p>
          </div>

          {/* Appointment Button */}
          <div className="col-md-4 mb-4 mb-md-0 text-center">
            <h5 className="fw-bold mb-3">Book Your Visit</h5>
            <Link
              href="/appointment"
              className="btn btn-gradient px-4 py-2"
              style={{
                background: "linear-gradient(135deg, #6507fc, #f28dff)",
                color: "#fff",
                borderRadius: "25px",
              }}
            >
              Book Appointment
            </Link>
          </div>

          {/* Social Links */}
          <div className="col-md-4 text-md-end text-center">
            <h5 className="fw-bold mb-3">Follow Us</h5>
            <div className="d-flex justify-content-md-end justify-content-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

        </div>

        <hr className="my-4" />

        {/* Copyright */}
        <div className="row">
          <div className="col text-center text-muted small">
            © 2025 Zayra Dental Clinic. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
