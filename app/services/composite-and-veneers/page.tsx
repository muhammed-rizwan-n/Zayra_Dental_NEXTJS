import Image from "next/image";
import Link from "next/link";
import data from "./info.json";
import type { Metadata } from "next";
import pricing from "../../pricing/pricing.json";
import ServiceReview from "../../../components/ServiceReview";

const { processSteps, beforeAfter } = data;
import {
  Calendar,
  CheckCircle,
  Clock,
  ArrowRight,
  Phone,
  Sparkles,
  Palette,
} from "lucide-react";

const treatments = [
  {
    type: "Composite Bonding",
    description:
      "Quick, affordable repair for chipped, cracked, or discolored teeth",
    benefits: [
      "Same-day treatment",
      "Natural appearance",
      "Conservative approach",
      "Affordable option",
    ],
    duration: "30-60 minutes per tooth",
    price: `From £?${pricing['Veneers']['Veneer Composite']['price']}`,
  },
  {
    type: "Porcelain Veneers",
    description:
      "Ultra-thin shells that transform your smile with lasting beauty",
    benefits: [
      "Hollywood smile",
      "Stain resistant",
      "Long-lasting",
      "Custom designed",
    ],
    duration: "2-3 appointments",
    price: `From £${pricing['Veneers']['Veneer Porcelain']['price']}`,
  },
  {
    type: "Composite Veneers",
    description: "Direct application veneers completed in one visit",
    benefits: [
      "Single visit",
      "Reversible",
      "Cost-effective",
      "Immediate results",
    ],
    duration: "2-3 hours",
    price: `From £${pricing['Veneers']['Veneer Composite']['price']}`,
  },
];

export const metadata: Metadata = {
  title: "Composite Bonding & Veneers Leeds | Smile Makeover | Zayra Dental",
  description:
    "Transform your smile with composite bonding & porcelain veneers in Leeds. Same-day treatment, natural results. Award-winning cosmetic dentist. Book consultation.",
  keywords: [
    "composite bonding Leeds",
    "porcelain veneers Leeds",
    "cosmetic dentist Leeds",
    "smile makeover Leeds",
    "dental veneers Leeds",
    "tooth bonding Leeds",
    "composite veneers Leeds",
    "dental aesthetics Leeds",
    "smile design Leeds",
    "chipped tooth repair Leeds",
    "cosmetic dentistry Leeds",
    "Hollywood smile Leeds",
  ],
  openGraph: {
    title: "Composite Bonding & Veneers Leeds | Smile Makeover | Zayra Dental",
    description:
      "Transform your smile with composite bonding & porcelain veneers in Leeds. Same-day treatment, natural results. Award-winning cosmetic dentist.",
    url: "https://zayradental.co.uk/services/composite-and-veneers",
    images: [
      {
        url: "/services/dental_bonding.jpg",
        width: 1200,
        height: 630,
        alt: "Composite Bonding and Veneers Results - Zayra Dental Leeds",
      },
    ],
  },
  alternates: {
    canonical: "https://www.zayradental.co.uk/services/composite-and-veneers",
  },
};

export default function CompositeAndVeneers() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Composite Bonding and Porcelain Veneers",
    description:
      "Cosmetic dental treatments including composite bonding and porcelain veneers for smile makeovers",
    provider: {
      "@type": "DentalClinic",
      name: "Zayra Dental",
      address: {
        "@type": "PostalAddress",
        streetAddress: "599 Harehills Lane",
        addressLocality: "Leeds",
        postalCode: "LS9 6NQ",
        addressCountry: "GB",
      },
    },
    procedureType: [
      "Composite Bonding",
      "Porcelain Veneers",
      "Composite Veneers",
      "Smile Makeover",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
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
                <span className="text-subtle">Composite & Veneers</span>
              </div>

              <h1 className="heading-primary mb-4">
                Composite Bonding &
                <span className="text-primary-brown d-block">
                  Porcelain Veneers
                </span>
              </h1>
              <p className="lead text-subtle mb-4">
                Transform your smile with our advanced cosmetic treatments. From
                quick composite bonding repairs to stunning porcelain veneers,
                we create beautiful, natural-looking smiles that boost your
                confidence and enhance your appearance.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <Link href="/appointment" className="btn-primary-modern">
                  <Calendar size={20} />
                  Book Smile Design
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
                    <div className="heading-tertiary text-accent mb-1">1</div>
                    <div className="small text-subtle">Visit Treatment</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <div className="heading-tertiary text-accent mb-1">10+</div>
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
                    src="/services/dental_bonding.jpg"
                    alt="Composite Bonding and Veneers Results"
                    width={600}
                    height={500}
                    className="img-fluid rounded-modern"
                    style={{ objectFit: "cover" }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                </div>

                {/* Feature Badge */}
                <div
                  className="card-modern position-absolute d-none d-md-block"
                  style={{
                    bottom: "20px",
                    right: "20px",
                    padding: "1rem",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="text-center">
                    <Palette size={32} className="text-accent mb-2" />
                    <div className="fw-medium">Custom Shade</div>
                    <div className="small text-subtle">Perfect Color Match</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="section-modern bg-cream">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Treatment Options</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Choose Your Perfect Smile Solution
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              We offer multiple cosmetic solutions to address different needs
              and budgets, from quick repairs to complete smile makeovers.
            </p>
          </div>

          <div className="row g-4">
            {treatments.map((treatment, index) => (
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
                      <Sparkles size={32} />
                    </div>
                  </div>
                  <h4 className="heading-tertiary mb-3 text-center">
                    {treatment.type}
                  </h4>
                  <p className="text-subtle mb-3">{treatment.description}</p>

                  <div className="mb-3">
                    {treatment.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className="d-flex align-items-center gap-2 mb-1"
                      >
                        <CheckCircle size={16} className="text-accent" />
                        <span className="small">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="small text-subtle">
                        <Clock size={14} className="me-1" />
                        {treatment.duration}
                      </span>
                      <span className="fw-bold text-accent">
                        {treatment.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Conditions */}
      <section className="section-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">What We Treat</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Common Smile Concerns We Address
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Our composite and veneer treatments can dramatically improve a
              wide range of dental aesthetic concerns, giving you the confident
              smile you deserve.
            </p>
          </div>

          <div className="row g-4">
            {beforeAfter.map((item, index) => (
              <div
                key={index}
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-modern">
                  <div className="d-flex align-items-start gap-3">
                    <div
                      className="rounded-circle d-inline-flex align-items-center justify-content-center"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "var(--primary-brown)",
                        color: "white",
                        flexShrink: 0,
                      }}
                    >
                      <ArrowRight size={24} />
                    </div>
                    <div>
                      <h5 className="fw-semibold mb-2">{item.condition}</h5>
                      <p className="text-subtle mb-0">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="section-modern bg-light-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Treatment Process</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Your Journey to a Perfect Smile
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Our meticulous process ensures exceptional results that look
              natural and complement your facial features perfectly.
            </p>
          </div>

          <div className="row g-4">
            {processSteps.map((step, index) => (
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
                  <p className="text-subtle">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Treatment Comparison</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Composite vs Porcelain Veneers
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card-modern" data-aos="fade-up">
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead>
                      <tr
                        style={{
                          borderBottom: "2px solid var(--bg-light-gray)",
                        }}
                      >
                        <th className="fw-semibold">Feature</th>
                        <th className="fw-semibold text-center">
                          Composite Bonding
                        </th>
                        <th className="fw-semibold text-center">
                          Porcelain Veneers
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="fw-medium">Treatment Time</td>
                        <td className="text-center">1 visit (30-60 mins)</td>
                        <td className="text-center">2-3 visits</td>
                      </tr>
                      <tr>
                        <td className="fw-medium">Durability</td>
                        <td className="text-center">3-7 years</td>
                        <td className="text-center">10-15 years</td>
                      </tr>
                      <tr>
                        <td className="fw-medium">Stain Resistance</td>
                        <td className="text-center">Moderate</td>
                        <td className="text-center">Excellent</td>
                      </tr>
                      <tr>
                        <td className="fw-medium">Reversibility</td>
                        <td className="text-center">Fully reversible</td>
                        <td className="text-center">Permanent</td>
                      </tr>
                      <tr>
                        <td className="fw-medium">Pricing</td>
                        <td className="text-center">
                          £{pricing["Veneers"]["Veneer Composite"]["price"]}
                        </td>
                        <td className="text-center">
                          £{pricing["Veneers"]["Veneer Porcelain"]["price"]}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Results */}
      <section className="section-modern bg-cream">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Patient Results</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Beautiful Smile Transformations
            </h2>
          </div>
            <ServiceReview data="composite and veneer" />
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
                Ready for Your Smile Makeover?
              </h2>
              <p className="lead mb-4" style={{ opacity: 0.9 }}>
                Book your smile design consultation and discover how composite
                bonding or veneers can transform your appearance and boost your
                confidence.
              </p>

              <div className="d-flex align-items-center gap-4 mb-4">
                <div>
                  <div className="h4 mb-1" style={{ color: "white" }}>
                    Same Day
                  </div>
                  <div className="small" style={{ opacity: 0.9 }}>
                    Treatment Available
                  </div>
                </div>
                <div>
                  <div className="h4 mb-1" style={{ color: "white" }}>
                    10+
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
