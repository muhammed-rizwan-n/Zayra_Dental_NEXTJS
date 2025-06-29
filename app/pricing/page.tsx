import React from "react";
import Link from "next/link";
import {
  Calendar,
  CheckCircle,
  CreditCard,
  DollarSign,
  Phone,
  Clock,
  Shield,
  Award,
  Heart,
} from "lucide-react";
import pricingData from "./pricing.json";

export default function PricingSection() {
  const paymentOptions = [
    {
      icon: <CreditCard size={24} />,
      title: "Flexible Payment Plans",
      description:
        "Spread the cost of your treatment with our 0% interest payment plans",
      color: "var(--primary-teal)",
    },
    {
      icon: <DollarSign size={24} />,
      title: "Insurance Accepted",
      description:
        "We work with most dental insurance providers to maximize your benefits",
      color: "var(--primary-brown)",
    },
    {
      icon: <Shield size={24} />,
      title: "Price Guarantee",
      description:
        "Transparent pricing with no hidden costs or surprise charges",
      color: "var(--accent-teal)",
    },
  ];

  const benefits = [
    "No consultation fees for treatment planning",
    "Competitive prices without compromising quality",
    "Payment plans available for treatments over £500",
    "Same-day emergency appointments available",
    "All treatments include follow-up care",
    "Price matching on like-for-like treatments",
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-modern"
        style={{ paddingTop: "120px", minHeight: "70vh" }}
      >
        <div className="container-modern">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center" data-aos="fade-up">
              <span className="text-accent fw-medium">Treatment Pricing</span>
              <h1 className="heading-primary mt-2 mb-4">
                Transparent, Affordable
                <span className="text-primary-brown d-block">
                  Dental Care Pricing
                </span>
              </h1>
              <p className="lead text-subtle mb-4">
                High-quality private dental care at honest, competitive prices.
                No hidden costs, no surprises — just exceptional dental
                treatment that fits your budget.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center mb-4">
                <Link href="/appointment" className="btn-primary-modern">
                  <Calendar size={20} />
                  Book Free Consultation
                </Link>
                <a href="tel:01132488398" className="btn-secondary-modern">
                  <Phone size={20} />
                  Call for Quote
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="d-flex flex-wrap gap-4 justify-content-center text-subtle">
                <div className="d-flex align-items-center gap-2">
                  <Shield size={18} className="text-accent" />
                  <span className="small">No Hidden Costs</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <CreditCard size={18} className="text-accent" />
                  <span className="small">Payment Plans Available</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Award size={18} className="text-accent" />
                  <span className="small">Price Match Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="section-modern bg-cream">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Payment Options</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Making Dental Care Affordable
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              We believe everyone deserves access to quality dental care. That&apos;s
              why we offer flexible payment options to fit your budget.
            </p>
          </div>

          <div className="row g-4">
            {paymentOptions.map((option, index) => (
              <div
                key={index}
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-modern h-100 text-center">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "70px",
                      height: "70px",
                      background: option.color,
                      color: "white",
                    }}
                  >
                    {option.icon}
                  </div>
                  <h3 className="heading-tertiary mb-3">{option.title}</h3>
                  <p className="text-subtle">{option.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="section-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Treatment Prices</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Our Comprehensive Pricing Guide
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Below are our standard treatment prices. All consultations include
              a thorough examination and personalized treatment plan.
            </p>
          </div>

          {pricingData.map((category, index) => (
            <div
              key={index}
              className="mb-5"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card-modern">
                <div
                  className="d-flex align-items-center gap-3 p-4 rounded-top"
                  style={{ background: "var(--bg-light-gray)" }}
                >
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{
                      width: "50px",
                      height: "50px",
                      background: "var(--primary-teal)",
                      color: "white",
                    }}
                  >
                    <Heart size={24} />
                  </div>
                  <h3 className="heading-tertiary mb-0">{category.category}</h3>
                </div>

                <div className="p-4">
                  <div className="row g-4">
                    {category.treatments.map((treatment, treatmentIndex) => (
                      <div key={treatmentIndex} className="col-lg-6">
                        <div
                          className="d-flex justify-content-between align-items-start p-3 rounded"
                          style={{
                            background: "var(--bg-white)",
                            border: "1px solid var(--bg-light-gray)",
                            transition: "var(--transition-smooth)",
                          }}
                        >
                          <div className="flex-grow-1">
                            <h5 className="fw-semibold mb-2">
                              {treatment.name}
                            </h5>
                            <p className="text-subtle small mb-0">
                              {treatment.description}
                            </p>
                          </div>
                          <div className="text-end ms-3">
                            <div
                              className="fw-bold fs-5"
                              style={{ color: "var(--primary-brown)" }}
                            >
                              £{treatment.price}
                            </div>
                            <div className="small text-subtle">from</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Additional Information */}
          <div className="card-modern mt-5" data-aos="fade-up">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h4 className="heading-tertiary mb-3">
                  What&apos;s Included in Our Prices
                </h4>
                <div className="row g-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="col-lg-6">
                      <div className="d-flex align-items-center gap-2">
                        <CheckCircle size={18} className="text-accent" />
                        <span className="small">{benefit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                <Link href="/appointment" className="btn-primary-modern">
                  <Calendar size={20} />
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Pricing */}
      <section className="section-modern bg-light-modern">
        <div className="container-modern">
          <div className="row align-items-center">
            <div className="col-lg-8" data-aos="fade-right">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div
                  className="rounded-circle d-inline-flex align-items-center justify-content-center"
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "var(--secondary-brown)",
                    color: "white",
                  }}
                >
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="heading-tertiary mb-1">
                    Emergency Dental Care
                  </h3>
                  <p className="text-subtle mb-0">
                    Same-day emergency appointments available • Out-of-hours
                    service • Pain relief guaranteed
                  </p>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-4 text-subtle">
                <div>
                  <span
                    className="fw-medium"
                    style={{ color: "var(--primary-brown)" }}
                  >
                    Emergency Consultation:
                  </span>
                  <span className="ms-2">£120</span>
                </div>
                <div>
                  <span
                    className="fw-medium"
                    style={{ color: "var(--primary-brown)" }}
                  >
                    Out-of-hours:
                  </span>
                  <span className="ms-2">£180</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 text-lg-end mt-4 mt-lg-0"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <a
                href="tel:01132488398"
                className="btn btn-danger btn-lg"
                style={{
                  borderRadius: "50px",
                  padding: "1rem 2rem",
                  fontWeight: "500",
                }}
              >
                Emergency Call
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
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h2
                  className="heading-secondary mb-3"
                  style={{ color: "white" }}
                >
                  Need a Personalized Treatment Quote?
                </h2>
                <p className="lead mb-4" style={{ opacity: 0.9 }}>
                  Every smile is unique. Book a free consultation to get a
                  personalized treatment plan and accurate pricing based on your
                  specific needs.
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
                    Book Free Consultation
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
                    Call for Quote
                  </a>
                </div>
              </div>
              <div className="col-lg-4 d-none d-lg-block">
                <div className="text-center">
                  <div className="d-flex justify-content-center gap-4">
                    <div>
                      <div className="h3 mb-1" style={{ color: "white" }}>
                        Free
                      </div>
                      <div className="small" style={{ opacity: 0.9 }}>
                        Consultation
                      </div>
                    </div>
                    <div>
                      <div className="h3 mb-1" style={{ color: "white" }}>
                        0%
                      </div>
                      <div className="small" style={{ opacity: 0.9 }}>
                        Interest Plans
                      </div>
                    </div>
                    <div>
                      <div className="h3 mb-1" style={{ color: "white" }}>
                        24/7
                      </div>
                      <div className="small" style={{ opacity: 0.9 }}>
                        Emergency Care
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-4 bg-light-modern">
        <div className="container-modern">
          <div className="text-center">
            <p className="small text-subtle mb-0">
              *Prices are indicative and may vary depending on the complexity of
              treatment and individual requirements. All prices include VAT
              where applicable. Final pricing will be confirmed during your
              consultation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
