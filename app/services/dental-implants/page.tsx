import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Calendar,
  CheckCircle,
  Clock,
  Star,
  ArrowRight,
  Phone,
  Award,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Dental Implants Leeds | Tooth Replacement | Zayra Dental Implant Specialist",
  description:
    "Expert dental implants in Leeds - permanent tooth replacement solution. Single implants from £1,200. 20+ year lifespan. Free consultation. Book your implant assessment today.",
  keywords: [
    "dental implants Leeds",
    "tooth implants Leeds",
    "dental implant specialist",
    "single tooth implant",
    "multiple dental implants",
    "implant dentist Leeds",
    "tooth replacement Leeds",
    "dental implant cost",
    "missing teeth Leeds",
    "implant surgery Leeds",
  ],
  openGraph: {
    title: "Dental Implants Leeds | Tooth Replacement | Zayra Dental",
    description:
      "Expert dental implants in Leeds - permanent tooth replacement. Single implants from £1,200. 20+ year lifespan. Free consultation available.",
    url: "https://zayradental.co.uk/services/dental-implants",
    images: [
      {
        url: "/services/dental-implants.jpg",
        width: 1200,
        height: 630,
        alt: "Dental Implants Treatment at Zayra Dental Leeds",
      },
    ],
  },
  alternates: {
    canonical: "https://zayradental.co.uk/services/dental-implants",
  },
};

export default function DentalImplants() {
  const benefits = [
    "Permanent solution that lasts 20+ years with proper care",
    "Natural look and feel - indistinguishable from real teeth",
    "Preserves jawbone health and facial structure",
    "No impact on adjacent healthy teeth",
    "Improved chewing function and speech clarity",
    "Boost confidence with a complete, beautiful smile",
  ];

  const treatmentSteps = [
    {
      step: "1",
      title: "Comprehensive Assessment",
      description:
        "3D imaging and evaluation to create your personalized treatment plan",
      duration: "1 hour",
    },
    {
      step: "2",
      title: "Implant Placement",
      description:
        "Precise surgical placement of titanium implant into jawbone",
      duration: "1-2 hours",
    },
    {
      step: "3",
      title: "Healing & Integration",
      description:
        "Osseointegration period where implant bonds with natural bone",
      duration: "3-6 months",
    },
    {
      step: "4",
      title: "Crown Attachment",
      description:
        "Custom crown designed and attached for perfect fit and appearance",
      duration: "2-3 weeks",
    },
  ];

  const candidateRequirements = [
    "Sufficient bone density in the jaw",
    "Good overall oral health",
    "Non-smoker or willing to quit",
    "Realistic expectations about results",
    "Commitment to excellent oral hygiene",
    "Healthy gums free from disease",
  ];

  const implantTypes = [
    {
      type: "Single Tooth Implant",
      description:
        "Replace one missing tooth with a natural-looking implant and crown",
      idealFor: "Individual missing teeth",
      price: "From £2,500",
    },
    {
      type: "Multiple Implants",
      description:
        "Replace several missing teeth with strategically placed implants",
      idealFor: "Multiple missing teeth",
      price: "From £5,000",
    },
    {
      type: "Full Mouth Restoration",
      description:
        "Complete smile reconstruction with implant-supported dentures",
      idealFor: "Extensive tooth loss",
      price: "From £15,000",
    },
  ];

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
                  Free Consultation
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

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
              <div className="position-relative">
                <div className="card-elevated">
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

          <div className="row g-4">
            <div className="col-lg-4" data-aos="fade-up">
              <div className="card-modern text-center h-100">
                <div className="d-flex justify-content-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="var(--primary-teal)"
                      color="var(--primary-teal)"
                    />
                  ))}
                </div>
                <p className="text-subtle fst-italic mb-3">
                  &ldquo;The implant feels completely natural. I can eat
                  anything I want and smile with confidence again.&rdquo;
                </p>
                <div className="fw-semibold">Sarah M.</div>
                <div className="small text-subtle">Single Implant Patient</div>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card-modern text-center h-100">
                <div className="d-flex justify-content-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="var(--primary-teal)"
                      color="var(--primary-teal)"
                    />
                  ))}
                </div>
                <p className="text-subtle fst-italic mb-3">
                  &ldquo;Best decision I ever made. The team was professional
                  and the results exceeded my expectations.&rdquo;
                </p>
                <div className="fw-semibold">Michael R.</div>
                <div className="small text-subtle">Multiple Implants</div>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card-modern text-center h-100">
                <div className="d-flex justify-content-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="var(--primary-teal)"
                      color="var(--primary-teal)"
                    />
                  ))}
                </div>
                <p className="text-subtle fst-italic mb-3">
                  &ldquo;From consultation to final crown, the entire process
                  was smooth and pain-free.&rdquo;
                </p>
                <div className="fw-semibold">Emma L.</div>
                <div className="small text-subtle">Full Mouth Restoration</div>
              </div>
            </div>
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
                Ready to Restore Your Smile?
              </h2>
              <p className="lead mb-4" style={{ opacity: 0.9 }}>
                Take the first step towards a permanent solution for missing
                teeth. Book your free consultation and discover if dental
                implants are right for you.
              </p>

              <div className="d-flex align-items-center gap-4 mb-4">
                <div>
                  <div className="h4 mb-1" style={{ color: "white" }}>
                    Free
                  </div>
                  <div className="small" style={{ opacity: 0.9 }}>
                    Consultation
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
                  Free Consultation
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
