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
  Eye,
  Smartphone,
} from "lucide-react";
import ServiceReview from "@/components/ServiceReview";
const alignerTypes = data.alignerTypes;
const benefits = data.benefits;
const treatmentSteps = data.treatmentSteps;
const treatedConditions = data.treatedConditions;

export const metadata: Metadata = {
  title:
    "Dental Aligners Leeds | Invisible Braces | Clear Aligners | Zayra Dental",
  description:
    "Invisible dental aligners in Leeds - straighten teeth discreetly! Clear aligners from £1,500. Faster than traditional braces. Free consultation & 3D scan available.",
  keywords: [
    "dental aligners Leeds",
    "invisible braces Leeds",
    "clear aligners Leeds",
    "teeth straightening Leeds",
    "orthodontics Leeds",
    "invisible orthodontics",
    "clear braces Leeds",
    "teeth alignment Leeds",
    "crooked teeth treatment",
    "adult braces Leeds",
  ],
  openGraph: {
    title:
      "Dental Aligners Leeds | Invisible Braces | Clear Aligners | Zayra Dental",
    description:
      "Invisible dental aligners in Leeds - straighten teeth discreetly! Clear aligners from £1,500. Faster than traditional braces.",
    url: "https://zayradental.co.uk/services/dental-aligners",
    images: [
      {
        url: "/services/dental-aligners.jpg",
        width: 1200,
        height: 630,
        alt: "Dental Aligners and Clear Braces Treatment at Zayra Dental Leeds",
      },
    ],
  },
  alternates: {
    canonical: "https://www.zayradental.co.uk/services/dental-aligners",
  },
};

export default function DentalAligners() {
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
                <span className="text-subtle">Dental Aligners</span>
              </div>

              <h1 className="heading-primary mb-4">
                Invisible Dental Aligners
                <span className="text-primary-brown d-block">
                  Straighten Teeth Discreetly
                </span>
              </h1>
              <p className="lead text-subtle mb-4">
                Achieve the straight, beautiful smile you&quot;ve always wanted
                with virtually invisible aligners. Our clear aligner treatments
                offer a comfortable, convenient alternative to traditional
                braces with predictable, professional results.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <Link href="/appointment" className="btn-primary-modern">
                  <Calendar size={20} />
                  Book Appointment
                </Link>
                <a href="tel:01132488398" className="btn-secondary-modern">
                  <Phone size={20} />
                  Call Orthodontist
                </a>
              </div>

              {/* Key Features */}
              <div className="row g-4 mt-4">
                <div className="col-4">
                  <div className="text-center">
                    <div className="heading-tertiary text-accent mb-1">99%</div>
                    <div className="small text-subtle">Invisible</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <div className="heading-tertiary text-accent mb-1">
                      6-18
                    </div>
                    <div className="small text-subtle">Months</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <div className="heading-tertiary text-accent mb-1">95%</div>
                    <div className="small text-subtle">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-3 md:mt-0" data-aos="fade-left" data-aos-delay="200">
              <div className="position-relative">
                <div className="card-elevated text-center">
                  <Image
                    src="/services/dental_aligners.jpeg"
                    alt="Clear Dental Aligners Treatment"
                    width={600}
                    height={500}
                    className="img-fluid rounded-modern"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>

                {/* Feature Badge */}
                <div
                  className="card-modern position-absolute d-none d-md-block"
                  style={{
                    top: "20px",
                    left: "20px",
                    padding: "1rem",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="text-center">
                    <Eye size={32} className="text-accent mb-2" />
                    <div className="fw-medium">Virtually Invisible</div>
                    <div className="small text-subtle">Clear Aligners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aligner Types */}
      <section className="section-modern bg-cream">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Aligner Options</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Choose Your Ideal Clear Aligner System
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              We offer multiple clear aligner systems to suit different needs,
              preferences, and budgets, all delivering excellent results.
            </p>
          </div>

          <div className="row g-4">
            {alignerTypes.map((aligner, index) => (
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
                        background:
                          index === 0
                            ? "var(--primary-teal)"
                            : "var(--primary-brown)",
                        color: "white",
                      }}
                    >
                      <Smartphone size={32} />
                    </div>
                    {index === 0 && (
                      <div
                        className="badge rounded-pill mb-2"
                        style={{
                          background: "var(--accent-teal)",
                          color: "white",
                        }}
                      >
                        Most Popular
                      </div>
                    )}
                  </div>
                  <h4 className="heading-tertiary mb-3 text-center">
                    {aligner.type}
                  </h4>
                  <p className="text-subtle mb-3">{aligner.description}</p>

                  <div className="mb-3">
                    {aligner.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="d-flex align-items-center gap-2 mb-1"
                      >
                        <CheckCircle size={16} className="text-accent" />
                        <span className="small">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="small text-subtle">
                        <Clock size={14} className="me-1" />
                        {aligner.duration}
                      </span>
                      <span className="fw-bold text-accent">
                        {aligner.price}
                      </span>
                    </div>
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
              Your Path to Straight Teeth
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Our comprehensive aligner treatment process ensures optimal
              results with maximum comfort and convenience.
            </p>
          </div>

          <div className="flex justify-content-center row g-4">
            {treatmentSteps.map((step, index) => (
              <div
                key={index}
                className="col-lg-2 col-md-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-center">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "70px",
                      height: "70px",
                      background: "var(--primary-brown)",
                      color: "white",
                      fontSize: "1.25rem",
                      fontWeight: "bold",
                    }}
                  >
                    {step.step}
                  </div>
                  <h5 className="fw-semibold mb-3">{step.title}</h5>
                  <p className="text-subtle small">{step.description}</p>
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
            <span className="text-accent fw-medium">Treatment Benefits</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Why Choose Clear Aligners?
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Clear aligners offer significant advantages over traditional
              braces, making orthodontic treatment more convenient and
              comfortable than ever.
            </p>
          </div>

          <div className="flex justify-content-center row g-4">
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

      {/* Treatable Conditions */}
      <section className="section-modern">
        <div className="container-modern">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="text-accent fw-medium">What We Treat</span>
              <h2 className="heading-secondary mt-2 mb-4">
                Conditions Treated with Clear Aligners
              </h2>
              <p className="text-subtle mb-4">
                Clear aligners can effectively treat a wide range of orthodontic
                issues, from simple spacing problems to complex bite
                corrections.
              </p>

              <div className="row g-3">
                {treatedConditions.map((condition, index) => (
                  <div key={index} className="col-md-6">
                    <div className="d-flex align-items-center gap-2">
                      <CheckCircle size={20} className="text-accent" />
                      <span>{condition}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <Link href="/appointment" className="btn-primary-modern">
                  <Calendar size={20} />
                  Check Eligibility
                </Link>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <div className="card-elevated">
                <Image
                  src="/services/dental_aligners.jpeg"
                  alt="Before and After Aligner Treatment"
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

      {/* Treatment Timeline */}
      <section className="section-modern bg-cream">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Treatment Timeline</span>
            <h2 className="heading-secondary mt-2 mb-4">
              What to Expect During Treatment
            </h2>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6" data-aos="fade-up">
              <div className="card-modern text-center h-100">
                <h5 className="text-accent mb-2">Week 1-2</h5>
                <h6 className="fw-semibold mb-3">Getting Started</h6>
                <ul className="list-unstyled text-subtle small">
                  <li>• First aligner fitting</li>
                  <li>• Initial adjustment period</li>
                  <li>• Learning care routine</li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="card-modern text-center h-100">
                <h5 className="text-accent mb-2">Month 1-3</h5>
                <h6 className="fw-semibold mb-3">Early Progress</h6>
                <ul className="list-unstyled text-subtle small">
                  <li>• Visible tooth movement</li>
                  <li>• Regular check-ups</li>
                  <li>• Habit formation</li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="card-modern text-center h-100">
                <h5 className="text-accent mb-2">Mid Treatment</h5>
                <h6 className="fw-semibold mb-3">Significant Changes</h6>
                <ul className="list-unstyled text-subtle small">
                  <li>• Major improvements</li>
                  <li>• Refinement if needed</li>
                  <li>• Progress monitoring</li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card-modern text-center h-100">
                <h5 className="text-accent mb-2">Final Phase</h5>
                <h6 className="fw-semibold mb-3">Completion</h6>
                <ul className="list-unstyled text-subtle small">
                  <li>• Final positioning</li>
                  <li>• Retainer fitting</li>
                  <li>• Maintenance plan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Stories */}
      <section className="section-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Patient Success</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Real Results from Real Patients
            </h2>
          </div>

          <div className="row g-4">
                        <ServiceReview data="dental-aligner" />
            
          </div>
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
                Ready to Start Your Aligner Journey?
              </h2>
              <p className="lead mb-4" style={{ opacity: 0.9 }}>
                Book your appointment and discover how clear aligners
                can give you the straight, confident smile you&quot;ve always
                wanted - virtually invisibly!
              </p>

              <div className="d-flex align-items-center gap-4 mb-4">
                <div>
                  <div className="h4 mb-1" style={{ color: "white" }}>
                    3D
                  </div>
                  <div className="small" style={{ opacity: 0.9 }}>
                    Treatment Preview
                  </div>
                </div>
                <div>
                  <div className="h4 mb-1" style={{ color: "white" }}>
                    0%
                  </div>
                  <div className="small" style={{ opacity: 0.9 }}>
                    Finance Available
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
                  Book Appointment
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
                  Call Orthodontist
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
