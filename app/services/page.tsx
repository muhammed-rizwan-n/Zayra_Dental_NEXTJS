import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Clock,
  Award,
  CheckCircle,
  Sparkles,
  Shield,
  Heart,
  Zap,
} from "lucide-react";
import serviceList from "./serviceList.json";

export { metadata } from "./metadata";

export default function Services() {
  const serviceCategories = [
    {
      title: "Cosmetic Dentistry",
      icon: <Sparkles size={32} />,
      description: "Transform your smile with our advanced cosmetic treatments",
      color: "var(--primary-teal)",
      services: [
        "Teeth Whitening",
        "Composite and Veneers",
        "Cosmetic Dentist",
        "Facial Aesthetics",
      ],
    },
    {
      title: "Restorative Care",
      icon: <Heart size={32} />,
      description:
        "Repair and restore your teeth to optimal health and function",
      color: "var(--primary-brown)",
      services: [
        "Dental Implants",
        "Dental Treatment",
        "Emergency Dental Care",
      ],
    },
    {
      title: "Dental Implants",
      icon: <Shield size={32} />,
      description:
        "Restore missing teeth with strong, natural-looking dental implants for long-term oral health.",
      color: "var(--accent-teal)",
      services: [
        "Implant Placement",
        "Full Arch Restoration",
        "Implant Retained Dentures",
      ],
    },
    {
      title: "Wellness",
      icon: <Zap size={32} />,
      description:
        "Comprehensive care for your overall oral health and wellbeing",
      color: "var(--secondary-brown)",
      services: ["Dental Spa", "Preventive Care"],
    },
  ];

  const features = [
    {
      icon: <Award size={24} />,
      title: "Expert Specialists",
      description:
        "Highly qualified dentists with years of specialized experience",
    },
    {
      icon: <Clock size={24} />,
      title: "Advanced Technology",
      description:
        "State-of-the-art equipment for precise, comfortable treatments",
    },
    {
      icon: <Shield size={24} />,
      title: "Pain-Free Experience",
      description:
        "Modern techniques and sedation options for anxiety-free visits",
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Guaranteed Results",
      description:
        "We stand behind our work with comprehensive treatment guarantees",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-modern"
        style={{
          paddingTop: "130px",
          paddingBottom: "20px",
          minHeight: "70vh",
        }}
      >
        <div className="container-modern">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="text-accent fw-medium">Our Services</span>
              <h1 className="heading-primary mt-2 mb-4">
                Comprehensive Dental Care for
                <span className="text-primary-brown d-block">Every Smile</span>
              </h1>
              <p className="lead text-subtle mb-4">
                From routine checkups to advanced cosmetic procedures, we offer
                a complete range of dental services using the latest technology
                and gentle techniques to ensure your comfort and satisfaction.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4">
                <Link href="/appointment" className="btn-primary-modern">
                  <Calendar size={20} />
                  Book Consultation
                </Link>
                <Link href="/pricing" className="btn-secondary-modern">
                  View Pricing
                  <ArrowRight size={20} />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="d-flex flex-wrap gap-4 text-subtle">
                <div className="d-flex align-items-center gap-2">
                  <Award size={18} className="text-accent" />
                  <span className="small">GDC Registered</span>
                </div>
                <div className="d-flex align-items-center gap-2 d-none">
                  <Clock size={18} className="text-accent" />
                  <span className="small">15+ Years Experience</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Shield size={18} className="text-accent" />
                  <span className="small">Pain-Free Guarantee</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 md"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="position-relative">
                <div className="card-elevated">
                  <Image
                    src="/services/bg-contact.jpg"
                    alt="Modern Dental Treatment Room"
                    width={600}
                    height={500}
                    className="img-fluid rounded-modern"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="section-modern bg-cream">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Treatment Categories</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Specialized Care for Every Need
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Our comprehensive dental services are organized into specialized
              categories to address every aspect of your oral health and
              aesthetic goals.
            </p>
          </div>

          <div className="row g-4">
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-modern h-100">
                  <div className="d-flex align-items-start gap-3 mb-3">
                    <div
                      className="rounded-circle d-inline-flex align-items-center justify-content-center"
                      style={{
                        width: "70px",
                        height: "70px",
                        background: category.color,
                        color: "white",
                      }}
                    >
                      {category.icon}
                    </div>
                    <div className="flex-grow-1">
                      <h3 className="heading-tertiary mb-2">
                        {category.title}
                      </h3>
                      <p className="text-subtle mb-3">{category.description}</p>
                    </div>
                  </div>

                  <div className="d-flex flex-wrap gap-2">
                    {category.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="badge rounded-pill"
                        style={{
                          background: `${category.color}20`,
                          color: category.color,
                          fontSize: "0.8rem",
                        }}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Services Grid */}
      <section className="section-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">All Services</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Complete Range of Dental Treatments
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Browse our comprehensive selection of dental services, each
              delivered with the highest standards of care and the latest
              technology.
            </p>
          </div>

          <div className="row g-4">
            {serviceList.map((service, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <Link href={service.href} className="text-decoration-none">
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

                      {/* Overlay on hover */}
                      <div
                        className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0"
                        style={{
                          background: "rgba(115, 175, 170, 0.9)",
                          transition: "var(--transition-smooth)",
                        }}
                      >
                        <div className="text-center text-white">
                          <ArrowRight size={32} className="mb-2" />
                          <div className="fw-medium">Learn More</div>
                        </div>
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className="service-content">
                      <h3 className="heading-tertiary mb-2">{service.name}</h3>
                      <p className="text-subtle mb-3">
                        Expert {service.name.toLowerCase()} treatment using
                        advanced techniques for optimal results.
                      </p>

                      <div className="d-flex align-items-center justify-content-between">
                        <span className="small text-accent fw-medium">
                          Learn More
                        </span>
                        <ArrowRight size={16} className="text-accent" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-modern bg-light-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">
              Why Choose Zayra Dental
            </span>
            <h2 className="heading-secondary mt-2 mb-4">
              Excellence in Every Treatment
            </h2>
          </div>

          <div className="row g-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-center">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "70px",
                      height: "70px",
                      background: "var(--primary-teal)",
                      color: "white",
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h4 className="heading-tertiary mb-3">{feature.title}</h4>
                  <p className="text-subtle">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services Banner */}
      <section
        className="section-modern text-white"
        style={{
          background:
            "linear-gradient(135deg, var(--secondary-brown), var(--primary-brown))",
        }}
      >
        <div className="container-modern">
          <div className="row align-items-center">
            <div className="col-lg-8" data-aos="fade-right">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div
                  className="rounded-circle d-inline-flex align-items-center justify-content-center"
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <Clock size={28} />
                </div>
                <div>
                  <h3
                    className="heading-tertiary mb-1"
                    style={{ color: "white" }}
                  >
                    Dental Emergency?
                  </h3>
                  <p className="mb-0" style={{ opacity: 0.9 }}>
                    We provide urgent dental care when you need it most
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 text-lg-end"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <a
                href="tel:01132488398"
                className="btn btn-light btn-lg"
                style={{
                  borderRadius: "50px",
                  padding: "1rem 2rem",
                  fontWeight: "500",
                }}
              >
                Call Emergency Line
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-modern">
        <div className="container-modern">
          <div
            className="card-elevated text-center"
            style={{
              background:
                "linear-gradient(135deg, var(--primary-teal), var(--accent-teal))",
              color: "white",
            }}
          >
            <h2 className="heading-secondary mb-3" style={{ color: "white" }}>
              Ready to Transform Your Smile?
            </h2>
            <p className="lead mb-4" style={{ opacity: 0.9 }}>
              Book your consultation today and discover how our expert team can
              help you achieve the healthy, beautiful smile you&apos;ve always
              wanted.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <Link
                href="/appointment"
                className="btn btn-light"
                style={{
                  borderRadius: "50px",
                  padding: "1rem 2rem",
                  fontWeight: "500",
                  color: "var(--accent-teal)",
                }}
              >
                <Calendar size={20} />
                Book Appointment
              </Link>
              <Link
                href="/pricing"
                className="btn"
                style={{
                  background: "transparent",
                  color: "white",
                  border: "2px solid white",
                  borderRadius: "50px",
                  padding: "1rem 2rem",
                  fontWeight: "500",
                  textDecoration: "none",
                }}
              >
                View Treatment Prices
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
