import React from 'react';
import { FaPhoneAlt, FaGlobe, FaClock } from 'react-icons/fa';
export default function Appointment() {
  return (
    <section className="py-5 bg-transparent">
  <div className="container">
    <h1 className="text-center text-white my-5" data-aos="fade-down">
      Schedule an Appointment
    </h1>

    <div className="row justify-content-center gy-4">
      {/* Phone Appointment Box */}
      <div className="col-md-6" data-aos="fade-right">
        <div className="card h-100 shadow border-0 text-center">
          <div className="card-body">
            <FaPhoneAlt className="fs-1 text-primary mb-3" />
            <h4 className="mb-3">Book via Phone</h4>
            <p className="mb-2 fs-5">Call us directly to schedule your appointment.</p>
            <a
              href="tel:+11234567890"
              className="badge bg-primary fs-5 px-4 py-2 text-decoration-none text-white rounded-pill"
              style={{ letterSpacing: "0.5px" }}
            >
              📞 +1 (123) 456-7890
            </a>
            <p className="text-muted mt-3 mb-0">Available during office hours</p>
          </div>
        </div>
      </div>

      {/* Clinic Opening Hours */}
      <div className="col-md-6" data-aos="fade-left">
        <div className="card h-100 shadow-sm border-0 text-center">
          <div className="card-body">
            <FaClock className="fs-1 text-primary mb-3" />
            <h4 className="mb-3">Clinic Opening Hours</h4>
            <div className="d-flex flex-column align-items-center gap-2 fs-6">
              <div className="d-flex justify-content-between w-100 px-4">
                <span>Mon – Thurs</span>
                <span className="badge bg-light text-dark">9:00 AM – 6:00 PM</span>
              </div>
              <div className="d-flex justify-content-between w-100 px-4">
                <span>Saturday</span>
                <span className="badge bg-light text-dark">9:00 AM – 4:00 PM</span>
              </div>
              <div className="d-flex justify-content-between w-100 px-4">
                <span>Sunday</span>
                <span className="badge bg-danger text-white">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
