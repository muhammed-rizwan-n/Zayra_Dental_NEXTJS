"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Heart } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Cosmetic Dentistry",
    description:
      "Transform your smile with professional teeth whitening, veneers, and cosmetic bonding for stunning, natural-looking results.",
    img: "/services/dental_bonding.jpg",
    href: "/services/cosmetic-dentistry",
    icon: <Sparkles size={24} />,
    color: "var(--primary-teal)",
    features: [
      "Teeth Whitening",
      "Veneers",
      "Cosmetic Bonding",
      "Smile Makeover",
    ],
  },
  {
    id: 2,
    name: "Preventive Care",
    description:
      "Comprehensive checkups, professional cleanings, and preventive treatments to maintain optimal oral health and prevent future problems.",
    img: "/bg-gallery.jpg",
    href: "/services/preventive-care",
    icon: <Shield size={24} />,
    color: "var(--primary-brown)",
    features: [
      "Regular Checkups",
      "Professional Cleaning",
      "Fluoride Treatment",
      "Oral Health Education",
    ],
  },
  {
    id: 3,
    name: "Restorative Dentistry",
    description:
      "Advanced treatments including dental implants, crowns, bridges, and fillings to restore both function and aesthetics of your teeth.",
    img: "/bg-gallery.jpg",
    href: "/services/restorative-dentistry",
    icon: <Heart size={24} />,
    color: "var(--accent-teal)",
    features: ["Dental Implants", "Crowns & Bridges", "Root Canal", "Fillings"],
  },
];

export default function KeyServices() {
  return (
    <section className="section-modern bg-light-modern">
      <div className="container-modern">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="text-accent fw-medium">Featured Services</span>
          <h2 className="heading-secondary mt-2 mb-4">
            Our Most Popular Dental Treatments
          </h2>
          <p className="lead text-subtle mx-auto" style={{ maxWidth: "600px" }}>
            Discover our comprehensive range of dental services designed to keep
            your smile healthy, beautiful, and confident.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
        <div className="col-md-5 col-lg-4" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
          <a href={service.href} className="text-decoration-none">
            <div
              className="col-lg-4 col-md-6"
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="service-card-modern h-100">
                {/* Service Image */}
                <div
                  className="position-relative overflow-hidden"
                  style={{ height: "220px" }}
                >
                  <Image
                    src={service.img}
                    alt={service.name}
                    fill
                    className="service-image"
                    style={{ objectFit: "cover" }}
                  />

                  {/* Icon Overlay */}
                  <div
                    className="position-absolute top-0 end-0 m-3 rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "50px",
                      height: "50px",
                      background: service.color,
                      color: "white",
                      boxShadow: "var(--shadow-soft)",
                    }}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Service Content */}
                <div className="service-content">
                  <h3 className="heading-tertiary mb-3">{service.name}</h3>
                  <p className="text-subtle mb-4">{service.description}</p>

                  {/* Features List */}
                  <div className="mb-4">
                    <div className="row g-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="col-6">
                          <div
                            className="small rounded-pill px-2 py-1 text-center"
                            style={{
                              background: `${service.color}20`,
                              color: service.color,
                              fontSize: "0.8rem",
                            }}
                          >
                            {feature}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={service.href}
                    className="d-inline-flex align-items-center gap-2 text-decoration-none fw-medium"
                    style={{
                      color: service.color,
                      transition: "var(--transition-smooth)",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateX(0)";
                    }}
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
            </a>
        </div>
          ))}

        {/* Bottom CTA */}
        <div className="text-center mt-5" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="card-modern text-center"
                style={{
                  background:
                    "linear-gradient(135deg, var(--primary-teal), var(--accent-teal))",
                  color: "white",
                }}
              >
                <h3
                  className="heading-tertiary mb-3"
                  style={{ color: "white" }}
                >
                  Not Sure Which Treatment You Need?
                </h3>
                <p className="mb-4" style={{ opacity: 0.9 }}>
                  Schedule a consultation with our expert team. We'll assess
                  your oral health and recommend the best treatment plan for
                  your specific needs.
                </p>
                <div className="d-flex flex-wrap gap-3 justify-content-center">
                  <Link
                    href="/appointment"
                    className="btn"
                    style={{
                      background: "white",
                      color: "var(--accent-teal)",
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
                    Book Free Consultation
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/services"
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
                    View All Services
                    <ArrowRight size={18} />
                  </Link>
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
