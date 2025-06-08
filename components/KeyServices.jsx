"use client";
import Image from "next/image";
import { useState } from "react";

const services = [
  {
    id: 1,
    name: "Teeth Whitening",
    img: "/bg-gallery.jpg",
    href: "/services/1",
    description:
      "Brighten your smile with our safe, effective teeth whitening treatments designed for lasting results.",
  },
  {
    id: 2,
    name: "Root Canal Therapy",
    img: "/bg-gallery.jpg",
    href: "/services/1",
    description:
      "Save damaged teeth painlessly with our advanced root canal techniques using modern technology.",
  },
  {
    id: 3,
    name: "Braces & Aligners",
    img: "/bg-gallery.jpg",
    href: "/services/1",
    description:
      "Get perfectly aligned teeth with our wide range of traditional braces and invisible aligners.",
  },
];

export default function KeyServices() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="py-5 position-relative z-1">
      <div className="container">
        <h2 className="text-center fw-bold mb-5" data-aos="fade-down">
          Our Key Treatments
        </h2>

        <div className="row g-4 justify-content-center">
          {services.map((service, index) => (
        <div className="col-md-6 col-lg-3" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
          <a href={service.href} className="text-decoration-none">
            <div
              className="card border-0 text-white service-card h-100"
              style={{
                background: `linear-gradient(135deg, #6507fcbb, #f28dffaa), url(${service.img}) center/cover no-repeat`,
                borderRadius: "16px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="card-body d-flex align-items-end p-4" style={{ height: "250px" }}>
                <h5 className="card-title fw-bold">{service.name}</h5>
              </div>
            </div>
          </a>
        </div>
      ))}
              </div>

        {selectedService && (
          <div
            className="modal fade show d-block backdrop-blur"
            tabIndex="-1"
            role="dialog"
            onClick={() => setSelectedService(null)}
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div
              className="modal-dialog modal-xl modal-dialog-centered"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content rounded-5 shadow-lg border-0">
                <div className="modal-header border-0">
                  <h5 className="modal-title fs-3 fw-bold">
                    {selectedService.title}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setSelectedService(null)}
                  />
                </div>
                <div className="modal-body">
                  <div className="row g-4 align-items-center">
                    <div className="col-md-6">
                      <Image
                        src={selectedService.image}
                        alt={selectedService.title}
                        width={600}
                        height={400}
                        className="img-fluid rounded-4 shadow"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="col-md-6">
                      <p className="fs-5 text-muted">
                        {selectedService.description}
                      </p>
                      <button
                        className="btn btn-gradient mt-4"
                        onClick={() => setSelectedService(null)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
