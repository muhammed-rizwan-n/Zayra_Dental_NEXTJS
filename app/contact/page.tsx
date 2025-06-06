import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "aos/dist/aos.css";
//import Footer from "../components/Footer";
//import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <>
    <section className="contact-section py-5 bg-transparent">
  <div className="container">
    <h2 className="text-center my-5">Get in Touch</h2>
    <div className="row g-4">
      {/* Contact Form */}
      <div className="col-md-6">
        <form className="shadow p-4 bg-white rounded">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input type="text" className="form-control" id="name" placeholder="John Doe" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="you@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input type="text" className="form-control" id="subject" placeholder="Appointment Request, Inquiry, etc." />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows={5} placeholder="Write your message..."></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>

      {/* Contact Info + Map */}
      <div className="col-md-6">
        <div className="bg-white p-4 shadow rounded h-100">
          <h4 className="mb-3">Clinic Details</h4>
          <p><i className="fas fa-map-marker-alt me-2"></i>123 Smile Street, Dental City, Smileland 456789</p>
          <p><i className="fas fa-phone me-2"></i>(123) 456-7890</p>
          <p><i className="fas fa-envelope me-2"></i>contact@brightsmile.com</p>

          <h5 className="mt-4">Opening Hours</h5>
          <ul className="list-unstyled mb-4">
            <li>Mon – Fri: 9:00 AM – 6:00 PM</li>
            <li>Saturday: 9:00 AM – 4:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>

          <h5>Follow Us</h5>
          <div className="d-flex gap-3 fs-5">
            <a href="https://www.instagram.com" className="text-danger" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" className="text-primary" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.twitter.com" className="text-info" target="_blank" rel="noreferrer">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="https://www.facebook.com" className="text-primary" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          </div>

          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.452697041917!2d78.39076592375736!3d17.43803374982052"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: '10px' }}
              loading="lazy"
              title="Clinic Location"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="contact-section py-5 bg">
  <div className="container">
    <h2 className="text-center mb-5">Contact Us</h2>
    <div className="row g-4 align-items-stretch">
      
      {/* LEFT: Contact Info */}
      <div className="col-md-5 bg-primary">
        <div className="h-100 bg-primary p-4 shadow rounded d-flex flex-column justify-content-between">
          <div>
            <h4 className="mb-3">Reach Us</h4>
            <p><i className="fas fa-map-marker-alt me-2"></i>123 Smile Street, Dental City, Smileland 456789</p>
            <p><i className="fas fa-phone me-2"></i>(123) 456-7890</p>
            <p><i className="fas fa-envelope me-2"></i>contact@brightsmile.com</p>

            <h5 className="mt-4">Opening Hours</h5>
            <ul className="list-unstyled">
              <li>Mon – Fri: 9:00 AM – 6:00 PM</li>
              <li>Saturday: 9:00 AM – 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="mt-4">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3 fs-5">
              <a href="https://instagram.com" className="text-danger" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" className="text-primary" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com" className="text-info" target="_blank" rel="noreferrer">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="https://facebook.com" className="text-primary" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.452697041917!2d78.39076592375736!3d17.43803374982052"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: '10px' }}
              loading="lazy"
              title="Clinic Location"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* RIGHT: Contact Form */}
      <div className="col-md-7">
        <div className="h-100 bg-white p-4 shadow rounded">
          <h4 className="mb-4">Send Us a Message</h4>
          <form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="name" placeholder="John Doe" />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com" />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" className="form-control" id="subject" placeholder="Appointment, Inquiry, etc." />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows={6} placeholder="Write your message..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </div>

    </div>
  </div>
</section>

    </>
  );
}
