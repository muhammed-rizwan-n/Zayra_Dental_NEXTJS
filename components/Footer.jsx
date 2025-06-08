import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import image from "../public/zayra-dental.png";
import GoogleReviewWidget from "./GoogleReviewWidget";

export default function Footer() {
  return (
    <footer className="bg-white text-dark py-5 mt-5">
      <div className="container">
        <div className="row gy-4 align-items-start">
          {/* Left: Logo & Contact Info */}
          <div className="col-md-4">
            <Image
              src={image}
              alt="Clinic Logo"
              className="mb-3"
              style={{ width: "220px", height: "auto" }}
            ></Image>
            <p className="mb-1">
              <i className="fas fa-map-marker-alt me-2"></i>123 Smile Street,
              Dental City
            </p>
            <p className="mb-1">
              <i className="fas fa-phone-alt me-2"></i>+1 (123) 456-7890
            </p>
            <p className="mb-2">
              <i className="fas fa-envelope me-2"></i>contact@zayradental.com
            </p>
            <div className="container d-flex flex-column mt-3" style={{justifyItems:"center"}}>
              <p className="h4"><b>Follow Us</b></p>

              <div className="d-flex gap-4 mt-3">
                <a
                  href="https://facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark"
                >
                  <FaFacebookF className="fs-5" />
                </a>
                <a
                  href="https://instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark"
                >
                  <FaInstagram className="fs-3" />
                </a>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark"
                >
                  <FaLinkedinIn className="fs-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Center: Horizontal Quick Links */}
          <div className="col-md-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled d-flex flex-wrap gap-3">
              {[
                { text: "Home", href: "/" },
                { text: "About Us", href: "/about-us" },
                { text: "Services", href: "/services" },
                { text: "Pricing", href: "/pricing" },
                { text: "Contact", href: "/contact" },
                { text: "Appointment", href: "/appointment" },
              ].map(({ text, href }) => (
                <li key={text}>
                  <Link
                    href={href}
                    className="text-dark text-decoration-none px-2 py-1 d-inline-block rounded-pill"
                    style={{ backgroundColor: "#ffffff1a", transition: "0.3s" }}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Feedback / Review CTA */}
          <div className="col-md-4">
            <div
              className="p-4 rounded-4 text-center text-white"
              style={{
                background: "linear-gradient(135deg, #f28dff, #6507fc)",
                boxShadow: "0 0 20px rgba(0,0,0,0.2)",
              }}
            >
              <h5 className="mb-2 fw-bold">What Our Patients Say</h5>
              <p className="mb-3">
                Check out real reviews from our happy patients.
              </p>
              <GoogleReviewWidget />
              
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <hr className="border-dark mt-5" />
        <p className="text-center small text-muted mb-0">
          &copy; {new Date().getFullYear()} Zayra Dental. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
