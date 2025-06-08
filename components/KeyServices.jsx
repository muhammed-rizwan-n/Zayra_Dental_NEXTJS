"use client";
import Image from "next/image";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Teeth Whitening",
    image: "/bg-gallery.jpg",
    description:
      "Brighten your smile with our safe, effective teeth whitening treatments designed for lasting results.",
  },
  {
    id: 2,
    title: "Root Canal Therapy",
    image: "/bg-gallery.jpg",
    description:
      "Save damaged teeth painlessly with our advanced root canal techniques using modern technology.",
  },
  {
    id: 3,
    title: "Braces & Aligners",
    image: "/bg-gallery.jpg",
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
            <div
              key={service.id}
              className="col-sm-6 col-md-4"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              
            >
              <div
                className="card h-100 shadow-lg border-0 rounded-4 overflow-hidden cursor-pointer hover-scale"
                onClick={() => setSelectedService(service)}
                style={{ cursor: "pointer" }}
              >
                <div className="position-relative" style={{background: "linear-gradient(100deg,rgb(240, 13, 232), #f28dff)"}}
>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-100 object-fit-cover"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <div className="position-absolute bottom-0 w-100 p-3 bg-gradient-to-top from-dark to-transparent text-white" style={{background: "linear-gradient(to top,rgba(144, 0, 255, 0.91),rgba(242, 141, 255, 0.5))"}}>
                    <h5 className="container-flex mb-0 text-shadow-sm">{service.title}</h5>
                  </div>
                </div>
              </div>
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
