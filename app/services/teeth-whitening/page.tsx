import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import data from "./info.json";
import pricing from "../../pricing/pricing.json";

import {
  Calendar,
  CheckCircle,
  ArrowRight,
  Phone,
  Sparkles,
} from "lucide-react";
import ServiceReview from "@/components/ServiceReview";

const { benefits, beforeAfterSteps, faqs } = data;
export const metadata: Metadata = {
  title: "Teeth Whitening Leeds | Professional Tooth Whitening | Zayra Dental",
  description:
    "Professional teeth whitening in Leeds - up to 8 shades whiter! Safe, effective treatment from £199. Same-day results. Book your teeth whitening consultation today.",
  keywords: [
    "teeth whitening Leeds",
    "tooth whitening Leeds",
    "professional teeth whitening",
    "teeth bleaching Leeds",
    "cosmetic dentist Leeds",
    "teeth whitening cost",
    "dental whitening Leeds",
    "laser teeth whitening",
    "teeth whitening near me",
    "smile makeover Leeds",
  ],
  openGraph: {
    title:
      "Teeth Whitening Leeds | Professional Tooth Whitening | Zayra Dental",
    description:
      "Professional teeth whitening in Leeds - up to 8 shades whiter! Safe, effective treatment from £199. Same-day results available.",
    url: "https://zayradental.co.uk/services/teeth-whitening",
    images: [
      {
        url: "/services/teeth-whitening.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Teeth Whitening Treatment at Zayra Dental Leeds",
      },
    ],
  },
  alternates: {
    canonical: "https://zayradental.co.uk/services/teeth-whitening",
  },
};

export default function TeethWhitening() {
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
                <span className="text-subtle">Teeth Whitening</span>
              </div>

              <h1 className="heading-primary mb-4">
                Professional Teeth
                <span className="text-primary-brown d-block">
                  Whitening Treatment
                </span>
              </h1>
              <p className="lead text-subtle mb-4">
                Transform your smile with our advanced teeth whitening
                treatments. Achieve a brighter, more confident smile with
                professional-grade whitening that delivers safe, dramatic
                results in just one visit.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <Link href="/appointment" className="btn-primary-modern">
                  <Calendar size={20} />
                  Book Consultation
                </Link>
                <a href="tel:01132488398" className="btn-secondary-modern">
                  <Phone size={20} />
                  Call for Info
                </a>
              </div>

              {/* Key Stats */}
              <div className="row g-4 mt-4">
                <div className="col-4">
                  <div className="text-center">
                    <div className="heading-tertiary text-accent mb-1">8</div>
                    <div className="small text-subtle">Shades Lighter</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <div className="heading-tertiary text-accent mb-1">1</div>
                    <div className="small text-subtle">Hour Treatment</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <div className="heading-tertiary text-accent mb-1">3</div>
                    <div className="small text-subtle">Years Lasting</div>
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
                    src="/services/teeth_white.jpg"
                    alt="Professional Teeth Whitening Results"
                    width={600}
                    height={500}
                    className="img-fluid rounded-modern"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>

                {/* Floating Feature Card */}
                <div
                  className="card-modern position-absolute d-none d-md-block"
                  style={{
                    bottom: "20px",
                    left: "20px",
                    minWidth: "200px",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="text-center">
                    <Sparkles size={32} className="text-accent mb-2" />
                    <div className="fw-medium">Instant Results</div>
                    <div className="small text-subtle">
                      See immediate improvement
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-modern bg-cream">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Treatment Benefits</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Why Choose Professional Teeth Whitening?
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Professional teeth whitening offers superior results compared to
              over-the-counter products, with longer-lasting effects and
              professional supervision for your safety.
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

      {/* Treatment Process */}
      <section className="section-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Treatment Process</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Your Journey to a Brighter Smile
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Our comprehensive whitening process ensures optimal results while
              maintaining the health and integrity of your teeth.
            </p>
          </div>

          <div className="row g-4">
            {beforeAfterSteps.map((step, index) => (
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
      {/* Patient Success Stories */}
      <section className="section-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Patient Stories</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Real Results from Regular Care
            </h2>
          </div>

          <ServiceReview data="teeth-whitening" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Common Questions</span>
            <h2 className="heading-secondary mt-2 mb-4">Teeth Whitening FAQ</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="card-modern mb-3"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <h5 className="heading-tertiary mb-3">{faq.question}</h5>
                  <p className="text-subtle mb-0">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
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
                Ready for a Brighter Smile?
              </h2>
              <p className="lead mb-4" style={{ opacity: 0.9 }}>
                Professional teeth whitening starting from £
                {pricing["Cosmetic Dentistry"]["Tooth Whitening"]["price"]}.
                Book your consultation today and discover how we can transform
                your smile safely and effectively.
              </p>

              <div className="d-flex align-items-center gap-4 mb-4">
                <div>
                  <div className="h4 mb-1" style={{ color: "white" }}>
                    £{pricing["Cosmetic Dentistry"]["Tooth Whitening"]["price"]}
                  </div>
                  <div className="small" style={{ opacity: 0.9 }}>
                    Starting Price
                  </div>
                </div>
                <div>
                  <div className="h4 mb-1" style={{ color: "white" }}>
                    24/7
                  </div>
                  <div className="small" style={{ opacity: 0.9 }}>
                    Support
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
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-modern bg-cream">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Related Services</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Complete Your Smile Transformation
            </h2>
          </div>

          <div className="row g-4">
            <div className="col-lg-4" data-aos="fade-up">
              <Link
                href="/services/composite-and-veneers"
                className="text-decoration-none"
              >
                <div className="card-modern h-100 text-center">
                  <h4 className="heading-tertiary mb-2">Composite & Veneers</h4>
                  <p className="text-subtle">
                    Perfect smile makeover with custom veneers
                  </p>
                  <ArrowRight size={20} className="text-accent" />
                </div>
              </Link>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <Link
                href="/services/dental-aligners"
                className="text-decoration-none"
              >
                <div className="card-modern h-100 text-center">
                  <h4 className="heading-tertiary mb-2">Dental Aligners</h4>
                  <p className="text-subtle">
                    Straighten your teeth with invisible aligners
                  </p>
                  <ArrowRight size={20} className="text-accent" />
                </div>
              </Link>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <Link
                href="/services/facial-aesthetics"
                className="text-decoration-none"
              >
                <div className="card-modern h-100 text-center">
                  <h4 className="heading-tertiary mb-2">Facial Aesthetics</h4>
                  <p className="text-subtle">
                    Complete facial rejuvenation treatments
                  </p>
                  <ArrowRight size={20} className="text-accent" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
