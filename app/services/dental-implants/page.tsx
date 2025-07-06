import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import data from "./info.json";
import {
  Calendar,
  CheckCircle,
  Clock,
  ArrowRight,
  Phone,
  Award,
  Heart,
} from "lucide-react";
import ServiceReview from "@/components/ServiceReview";

const implantTypes = data.implantTypes;
const treatmentSteps = data.treatmentSteps;
const benefits = data.benefits;
const candidateRequirements = data.benefits;
export const metadata: Metadata = data.meta;

export default function DentalImplants() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-modern"
        style={{ paddingTop: "120px", minHeight: "80vh" }}
      >
        <div className="container-modern">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="d-flex align-items-center gap-2 mb-3">
                <Link
                  href="/services"
                  className="text-decoration-none text-accent"
                >
                  Services
                </Link>
                <ArrowRight size={16} className="text-subtle" />
                <span className="text-subtle">Dental Implants</span>
              </div>

              <h1 className="heading-primary mb-4">
                Advanced Dental
                <span className="text-primary-brown d-block">
                  Implant Solutions
                </span>
              </h1>
              <p className="lead text-subtle mb-4">
                Restore your smile with permanent, natural-looking dental
                implants. Our advanced implant technology provides a lifetime
                solution for missing teeth, giving you back the confidence to
                eat, speak, and smile naturally.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <Link href="/appointment" className="btn-primary-modern">
                  <Calendar size={20} />
                  Book Consultation
                </Link>
                <a href="tel:01132488398" className="btn-secondary-modern">
                  <Phone size={20} />
                  Call Expert
                </a>
              </div>

              {/* Key Features */}
              <div className="row g-4 mt-4">
                <div className="col-4">
                  <div className="text-center">
                    <div className="heading-tertiary text-accent mb-1">98%</div>
                    <div className="small text-subtle">Success Rate</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <div className="heading-tertiary text-accent mb-1">20+</div>
                    <div className="small text-subtle">Years Lasting</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <div className="heading-tertiary text-accent mb-1">
                      100%
                    </div>
                    <div className="small text-subtle">Natural Look</div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 mt-3 md:mt-0"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="position-relative">
                <div className="card-elevated text-center">
                  <Image
                    src="/services/dental_implant.jpeg"
                    alt="Dental Implant Treatment Results"
                    width={600}
                    height={500}
                    className="img-fluid rounded-modern"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>

                {/* Quality Badge */}
                <div
                  className="card-modern position-absolute d-none d-md-block"
                  style={{
                    top: "20px",
                    right: "20px",
                    padding: "1rem",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="text-center">
                    <Award size={32} className="text-accent mb-2" />
                    <div className="fw-medium">Premium Quality</div>
                    <div className="small text-subtle">Swiss Made Implants</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implant Types */}
      <section className="section-modern bg-cream">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Treatment Options</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Dental Implant Solutions for Every Need
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Whether you&apos;re missing one tooth or need a complete smile
              restoration, we have the perfect implant solution tailored to your
              specific needs.
            </p>
          </div>

          <div className="row g-4">
            {implantTypes.map((implant, index) => (
              <div
                key={index}
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-modern h-100">
                  <div className="text-center mb-3">
                    <div
                      className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                      style={{
                        width: "70px",
                        height: "70px",
                        background: "var(--primary-teal)",
                        color: "white",
                      }}
                    >
                      <Heart size={32} />
                    </div>
                  </div>
                  <h4 className="heading-tertiary mb-3 text-center">
                    {implant.type}
                  </h4>
                  <p className="text-subtle mb-3">{implant.description}</p>
                  <div className="mb-3">
                    <span className="fw-medium text-primary-brown">
                      Ideal for:{" "}
                    </span>
                    <span className="text-subtle">{implant.idealFor}</span>
                  </div>
                  <div
                    className="text-center pt-3"
                    style={{ borderTop: "1px solid var(--bg-light-gray)" }}
                  >
                    <div className="fw-bold text-accent h5">
                      {implant.price}
                    </div>
                    <div className="small text-subtle">Per treatment</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="section-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Treatment Journey</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Your Path to a Perfect Smile
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Our systematic approach ensures optimal results with minimal
              discomfort and the highest success rates in dental implantology.
            </p>
          </div>

          <div className="row g-4">
            {treatmentSteps.map((step, index) => (
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
                      width: "80px",
                      height: "80px",
                      background: "var(--primary-brown)",
                      color: "white",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    {step.step}
                  </div>
                  <h4 className="heading-tertiary mb-3">{step.title}</h4>
                  <p className="text-subtle mb-2">{step.description}</p>
                  <div
                    className="small rounded-pill px-3 py-1 d-inline-block"
                    style={{
                      background: "var(--bg-light-gray)",
                      color: "var(--text-primary)",
                    }}
                  >
                    <Clock size={14} className="me-1" />
                    {step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-modern bg-light-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Why Choose Implants</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Life-Changing Benefits of Dental Implants
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Dental implants offer unmatched advantages over traditional
              dentures and bridges, providing a permanent solution that enhances
              both function and aesthetics.
            </p>
          </div>

          <div className="row g-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="d-flex align-items-start gap-3">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{
                      width: "50px",
                      height: "50px",
                      background: "var(--primary-teal)",
                      color: "white",
                      flexShrink: 0,
                    }}
                  >
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <p className="mb-0">{benefit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidate Assessment */}
      <section className="section-modern">
        <div className="container-modern">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="text-accent fw-medium">Am I a Candidate?</span>
              <h2 className="heading-secondary mt-2 mb-4">
                Ideal Candidates for Dental Implants
              </h2>
              <p className="text-subtle mb-4">
                Most people with missing teeth are good candidates for dental
                implants. Our comprehensive assessment will determine if
                implants are right for you.
              </p>

              <div className="row g-3">
                {candidateRequirements.map((requirement, index) => (
                  <div key={index} className="col-12">
                    <div className="d-flex align-items-center gap-2">
                      <CheckCircle size={20} className="text-accent" />
                      <span>{requirement}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <Link href="/appointment" className="btn-primary-modern">
                  <Calendar size={20} />
                  Schedule Assessment
                </Link>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <div className="card-elevated">
                <Image
                  src="/services/dental_implant.jpeg"
                  alt="Dental Implant Consultation"
                  width={600}
                  height={500}
                  className="img-fluid rounded-modern"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-modern bg-cream">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Patient Success</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Life-Changing Results
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              See how dental implants have transformed the lives of our
              patients, giving them back their confidence and quality of life.
            </p>
          </div>

          <ServiceReview data="dental-implant" />
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section-modern text-white"
        style={{
          background:
            "linear-gradient(135deg, var(--primary-teal), var(--accent-teal))",
        }}
      >
        <div className="container-modern">
          <div className="row align-items-center">
            <div className="col-lg-8" data-aos="fade-right">
              <h2 className="heading-secondary mb-3" style={{ color: "white" }}>
                Ready to Restore Your Smile?
              </h2>
              <p className="lead mb-4" style={{ opacity: 0.9 }}>
                Take the first step towards a permanent solution for missing
                teeth. Book your consultation and discover if dental implants
                are right for you.
              </p>

              <div className="d-flex align-items-center gap-4 mb-4">
                <div>
                  <div className="h4 mb-1" style={{ color: "white" }}>
                    GDC
                  </div>
                  <div className="small" style={{ opacity: 0.9 }}>
                    Certified Dentists
                  </div>
                </div>
                <div>
                  <div className="h4 mb-1" style={{ color: "white" }}>
                    98%
                  </div>
                  <div className="small" style={{ opacity: 0.9 }}>
                    Success Rate
                  </div>
                </div>
                <div>
                  <div className="h4 mb-1" style={{ color: "white" }}>
                    20+
                  </div>
                  <div className="small" style={{ opacity: 0.9 }}>
                    Years Warranty
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 text-lg-end"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="d-flex flex-column gap-3">
                <Link
                  href="/appointment"
                  className="btn btn-light btn-lg"
                  style={{
                    borderRadius: "50px",
                    padding: "1rem 2rem",
                    fontWeight: "500",
                    color: "var(--accent-teal)",
                  }}
                >
                  <Calendar size={20} />
                  Book Consultation
                </Link>
                <a
                  href="tel:01132488398"
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
                  <Phone size={20} />
                  Call Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
