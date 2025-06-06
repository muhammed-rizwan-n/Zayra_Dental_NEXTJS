import React from 'react';
import { FaPhoneAlt, FaGlobe, FaClock } from 'react-icons/fa';
export default function Appointment() {
  return (
    <section className="scroll-snap-container py-5 bg-transparent" style={{"scrollSnapType":"none"}}>
      <div className="container">
        <h1 className="text-center text-white mb-4" data-aos="fade-down">
          Schedule an Appointment
        </h1>

        <p className="text-white text-center mb-5 fs-5" data-aos="fade-up">
          We offer two simple ways to book a consultation. Choose what works best for you!
        </p>

        <div className="row g-5">
          {/* Phone Appointment */}
          <div className="col-md-6" data-aos="fade-right">
            <div className="card h-100 shadow border-0">
              <div className="card-body text-center">
                <FaPhoneAlt className="fs-1 text-primary mb-3" />
                <h4 className="mb-3">Book via Phone</h4>
                <p className="mb-2 fs-5">Call us directly to schedule your appointment.</p>
                <p className="fw-bold fs-4 text-primary">+1 (123) 456-7890</p>
                <p className="text-muted mb-0">Available during office hours</p>
              </div>
            </div>
          </div>

          {/* Website Appointment */}
          <div className="col-md-6" data-aos="fade-left">
            <div className="card h-100 shadow border-0">
              <div className="card-body text-center">
                <FaGlobe className="fs-1 text-primary mb-3" />
                <h4 className="mb-3">Book Online</h4>
                <p className="mb-2 fs-5">Use our website to conveniently book anytime.</p>
                <a href="/contact" className="btn btn-primary px-4">Book Now</a>
                <p className="text-muted mt-3 mb-0">Instant confirmation guaranteed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="m-5">
          <div className="card shadow-sm border-0">
            <div className="card-body text-center">
              <FaClock className="fs-1 text-primary mb-3" />
              <h4 className="mb-3">Clinic Opening Hours</h4>
              <ul className="list-unstyled fs-5 mb-0">
                <li><strong>Mon - Thurs:</strong> 9:00 AM – 6:00 PM</li>
                <li><strong>Saturday:</strong> 9:00 AM – 4:00 PM</li>
                <li><strong>Sunday:</strong> Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
