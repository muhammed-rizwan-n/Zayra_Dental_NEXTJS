import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Star,
  ArrowRight,
  Phone,
  CheckCircle,
  Calendar,
  Sparkles,
  Heart,
  Shield,
  Users,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Facial Aesthetics Leeds | Anti-Wrinkle Treatments | Zayra Dental",
  description:
    "Professional facial aesthetics in Leeds. Anti-wrinkle treatments, dermal fillers & skin rejuvenation. CQC registered, award-winning practice with expert aesthetic care.",
  keywords: [
    "facial aesthetics Leeds",
    "anti-wrinkle treatment Leeds",
    "dermal fillers Leeds",
    "botox Leeds",
    "skin rejuvenation Leeds",
    "facial treatments Leeds",
    "aesthetic dentist Leeds",
    "cosmetic treatments Leeds",
    "wrinkle reduction Leeds",
    "facial enhancement Leeds",
  ],
  openGraph: {
    title: "Facial Aesthetics Leeds | Anti-Wrinkle Treatments | Zayra Dental",
    description:
      "Professional facial aesthetics in Leeds. Anti-wrinkle treatments, dermal fillers & skin rejuvenation by qualified professionals.",
    url: "https://zayradental.co.uk/services/facial-aesthetics",
    images: [
      {
        url: "/services/facial_aesthetics.jpg",
        width: 1200,
        height: 630,
        alt: "Facial Aesthetics Leeds - Zayra Dental",
      },
    ],
  },
  alternates: {
    canonical: "https://zayradental.co.uk/services/facial-aesthetics",
  },
};

export default function FacialAesthetics() {
  const treatments = [
    {
      name: "Anti-Wrinkle Treatments",
      description: "Reduce fine lines and wrinkles with precision injections",
      benefits: [
        "Smoother skin",
        "Youthful appearance",
        "Minimal downtime",
        "Natural results",
      ],
      duration: "30 minutes",
      results: "2-14 days",
    },
    {
      name: "Dermal Fillers",
      description: "Restore volume and enhance facial contours naturally",
      benefits: [
        "Plump lips",
        "Define cheeks",
        "Smooth lines",
        "Instant results",
      ],
      duration: "45 minutes",
      results: "Immediate",
    },
    {
      name: "Skin Rejuvenation",
      description: "Advanced treatments to refresh and revitalize your skin",
      benefits: [
        "Improved texture",
        "Even tone",
        "Reduced blemishes",
        "Glowing skin",
      ],
      duration: "60 minutes",
      results: "2-4 weeks",
    },
  ];

  const beforeAfter = [
    {
      title: "Forehead Lines",
      description:
        "Smooth, natural-looking results that maintain facial expression",
    },
    {
      title: "Lip Enhancement",
      description: "Subtle volume increase for fuller, more defined lips",
    },
    {
      title: "Cheek Contouring",
      description: "Enhanced facial structure with natural-looking definition",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-modern"
        style={{
          paddingTop: "120px",
          minHeight: "80vh",
          background:
            "linear-gradient(135deg, rgba(115, 175, 170, 0.1), rgba(255, 255, 255, 0.9))",
        }}
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
                <span className="text-subtle">Facial Aesthetics</span>
              </div>

              <h1 className="heading-primary mb-4">
                Facial
                <span className="text-primary-brown d-block">Aesthetics</span>
              </h1>
              <p className="lead text-subtle mb-4">
                Enhance your natural beauty with our professional facial
                aesthetic treatments. Our expert team provides safe, effective
                anti-wrinkle treatments and dermal fillers to help you look and
                feel your best.
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

              {/* Trust Indicators */}
              <div className="d-flex flex-wrap gap-4 text-subtle">
                <div className="d-flex align-items-center gap-2">
                  <Award size={18} className="text-accent" />
                  <span className="small">Qualified Practitioners</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Shield size={18} className="text-accent" />
                  <span className="small">CQC Registered</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Users size={18} className="text-accent" />
                  <span className="small">Natural Results</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 mt-3 md:mt-0"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="position-relative">
                <div className="card-elevated">
                  <Image
                    src="/services/facial_aesthetics.jpg"
                    alt="Facial Aesthetics Treatment"
                    width={600}
                    height={500}
                    className="img-fluid rounded-modern"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>

                {/* Floating Stats Card */}
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
                    <div className="d-flex justify-content-center mb-2">
                      <Sparkles size={24} className="text-accent" />
                    </div>
                    <div className="heading-tertiary text-accent mb-1">
                      Expert Care
                    </div>
                    <div className="small text-subtle">
                      Professional Results
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="section-modern bg-cream">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Our Treatments</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Professional Facial Aesthetic Services
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              We offer a comprehensive range of facial aesthetic treatments
              designed to enhance your natural beauty and boost your confidence.
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
                        background:
                          index === 0
                            ? "var(--primary-teal)"
                            : index === 1
                              ? "var(--primary-brown)"
                              : "var(--accent-teal)",
                        color: "white",
                      }}
                    >
                      <Sparkles size={32} />
                    </div>
                  </div>
                  <h4 className="heading-tertiary mb-3 text-center">
                    {treatment.name}
                  </h4>
                  <p className="text-subtle mb-3 text-center">
                    {treatment.description}
                  </p>

                  <div className="mb-3">
                    <h6 className="fw-semibold mb-2">Benefits:</h6>
                    <ul className="list-unstyled">
                      {treatment.benefits.map((benefit, bIndex) => (
                        <li
                          key={bIndex}
                          className="d-flex align-items-center gap-2 mb-1"
                        >
                          <CheckCircle size={16} className="text-accent" />
                          <span className="small">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="row g-3 mt-auto">
                    <div className="col-6">
                      <div className="text-center">
                        <div className="small text-subtle">Duration</div>
                        <div className="fw-medium">{treatment.duration}</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="text-center">
                        <div className="small text-subtle">Results</div>
                        <div className="fw-medium">{treatment.results}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">
              Why Choose Zayra Dental
            </span>
            <h2 className="heading-secondary mt-2 mb-4">
              Expert Aesthetic Care You Can Trust
            </h2>
          </div>

          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <Image
                src="/gallery/Zayradental_Edits_29.jpg"
                alt="Modern Treatment Environment"
                width={600}
                height={500}
                className="img-fluid rounded-modern shadow-modern"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <div className="row g-4">
                <div className="col-12">
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
                      <Shield size={24} />
                    </div>
                    <div>
                      <h5 className="fw-semibold mb-2">
                        Qualified Professionals
                      </h5>
                      <p className="text-subtle">
                        Our practitioners are fully qualified and experienced in
                        facial aesthetic treatments with ongoing training.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12">
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
                      <Heart size={24} />
                    </div>
                    <div>
                      <h5 className="fw-semibold mb-2">Natural Results</h5>
                      <p className="text-subtle">
                        We focus on enhancing your natural beauty with subtle,
                        natural-looking results that maintain your facial
                        expressions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="d-flex align-items-start gap-3">
                    <div
                      className="rounded-circle d-inline-flex align-items-center justify-content-center"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "var(--accent-teal)",
                        color: "white",
                        flexShrink: 0,
                      }}
                    >
                      <Users size={24} />
                    </div>
                    <div>
                      <h5 className="fw-semibold mb-2">
                        Personalized Approach
                      </h5>
                      <p className="text-subtle">
                        Every treatment is tailored to your individual needs and
                        aesthetic goals with thorough consultation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="d-flex align-items-start gap-3">
                    <div
                      className="rounded-circle d-inline-flex align-items-center justify-content-center"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "#dc3545",
                        color: "white",
                        flexShrink: 0,
                      }}
                    >
                      <Award size={24} />
                    </div>
                    <div>
                      <h5 className="fw-semibold mb-2">Safe Environment</h5>
                      <p className="text-subtle">
                        CQC registered practice with the highest standards of
                        safety, hygiene, and professional care.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-modern bg-light-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Treatment Results</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Beautiful, Natural-Looking Results
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              See the subtle yet transformative results our facial aesthetic
              treatments can achieve while maintaining your natural beauty.
            </p>
          </div>

          <div className="row g-4">
            {beforeAfter.map((result, index) => (
              <div
                key={index}
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-modern text-center h-100">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "var(--primary-teal)",
                      color: "white",
                    }}
                  >
                    <Sparkles size={32} />
                  </div>
                  <h4 className="heading-tertiary mb-3">{result.title}</h4>
                  <p className="text-subtle">{result.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="section-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Patient Reviews</span>
            <h2 className="heading-secondary mt-2 mb-4">
              What Our Patients Say
            </h2>
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
                  &ldquo;The anti-wrinkle treatment was so natural looking.
                  Professional service and I felt completely comfortable
                  throughout.&rdquo;
                </p>
                <div className="fw-semibold">Rachel T.</div>
                <div className="small text-subtle">Anti-wrinkle Treatment</div>
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
                  &ldquo;Amazing results with my lip enhancement. Subtle and
                  natural - exactly what I wanted. Highly recommend!&rdquo;
                </p>
                <div className="fw-semibold">Sophie M.</div>
                <div className="small text-subtle">Dermal Fillers</div>
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
                  &ldquo;Professional, knowledgeable, and caring. The
                  consultation was thorough and results exceeded my
                  expectations.&rdquo;
                </p>
                <div className="fw-semibold">James R.</div>
                <div className="small text-subtle">Full Consultation</div>
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
              <div className="d-flex align-items-center gap-3 mb-3">
                <div
                  className="rounded-circle d-inline-flex align-items-center justify-content-center"
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <Sparkles size={28} />
                </div>
                <div>
                  <h3
                    className="heading-tertiary mb-1"
                    style={{ color: "white" }}
                  >
                    Ready to Enhance Your Natural Beauty?
                  </h3>
                  <p className="mb-0" style={{ opacity: 0.9 }}>
                    Book a consultation to discuss your aesthetic goals with our
                    expert team
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-4">
                <div>
                  <div className="h5 mb-1" style={{ color: "white" }}>
                    Free
                  </div>
                  <div className="small" style={{ opacity: 0.9 }}>
                    Consultation
                  </div>
                </div>
                <div>
                  <div className="h5 mb-1" style={{ color: "white" }}>
                    Natural
                  </div>
                  <div className="small" style={{ opacity: 0.9 }}>
                    Results
                  </div>
                </div>
                <div>
                  <div className="h5 mb-1" style={{ color: "white" }}>
                    Expert
                  </div>
                  <div className="small" style={{ opacity: 0.9 }}>
                    Care
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 text-lg-end"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <Link
                href="/appointment"
                className="btn btn-light btn-lg d-block mb-3"
                style={{
                  borderRadius: "50px",
                  padding: "1.5rem 2rem",
                  fontWeight: "600",
                  fontSize: "1.2rem",
                  color: "var(--accent-teal)",
                }}
              >
                <Calendar size={24} />
                Book Consultation
              </Link>
              <div className="small text-center" style={{ opacity: 0.9 }}>
                Professional aesthetic treatments in Leeds
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
