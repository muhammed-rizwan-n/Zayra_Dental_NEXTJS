import Image from "next/image";
import Link from "next/link";
import data from "./info.json";
import {
  Calendar,
  CheckCircle,
  Clock,
  ArrowRight,
  Phone,
  Heart,
  AlertCircle,
} from "lucide-react";
import ServiceReview from "@/components/ServiceReview";
const { symptoms, treatmentSteps, benefits, afterCareInstructions } = data;
export default function RootCanal() {
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
                <span className="text-subtle">Root Canal Treatment</span>
              </div>

              <h1 className="heading-primary mb-4">
                Pain-Free Root Canal
                <span className="text-primary-brown d-block">Treatment</span>
              </h1>
              <p className="lead text-subtle mb-4">
                Save your natural tooth and eliminate severe dental pain with
                our advanced, comfortable root canal treatment. Using modern
                techniques and anesthesia, we make the procedure virtually
                painless while preserving your smile.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <Link href="/appointment" className="btn-primary-modern">
                  <Calendar size={20} />
                  Emergency Appointment
                </Link>
                <a href="tel:01132488398" className="btn-secondary-modern">
                  <Phone size={20} />
                  Call for Pain Relief
                </a>
              </div>

              {/* Key Features */}
              <div className="row g-4 mt-4">
                <div className="col-4">
                  <div className="text-center">
                    <div className="heading-tertiary text-accent mb-1">95%</div>
                    <div className="small text-subtle">Success Rate</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <div className="heading-tertiary text-accent mb-1">1-2</div>
                    <div className="small text-subtle">Visits</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <div className="heading-tertiary text-accent mb-1">
                      100%
                    </div>
                    <div className="small text-subtle">Pain-Free</div>
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
                <div className="card-elevated">
                  <Image
                    src="/services/dental_treatment.jpeg"
                    alt="Modern Root Canal Treatment"
                    width={600}
                    height={500}
                    className="img-fluid rounded-modern"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>

                {/* Emergency Badge */}
                <div
                  className="card-modern position-absolute d-none d-md-block"
                  style={{
                    top: "20px",
                    right: "20px",
                    padding: "1rem",
                    background: "rgba(220, 53, 69, 0.1)",
                    border: "2px solid #dc3545",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="text-center">
                    <AlertCircle
                      size={32}
                      style={{ color: "#dc3545" }}
                      className="mb-2"
                    />
                    <div className="fw-medium" style={{ color: "#dc3545" }}>
                      Emergency Care
                    </div>
                    <div className="small text-subtle">Same Day Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When You Need Root Canal */}
      <section className="section-modern bg-cream">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">
              When You Need Treatment
            </span>
            <h2 className="heading-secondary mt-2 mb-4">
              Signs You May Need a Root Canal
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Root canal treatment becomes necessary when the tooth&apos;s pulp
              becomes infected or severely inflamed. Don&apos;t ignore these
              warning signs.
            </p>
          </div>

          <div className="row g-4">
            {symptoms.map((symptom, index) => (
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
                      background: "var(--secondary-brown)",
                      color: "white",
                      flexShrink: 0,
                    }}
                  >
                    <AlertCircle size={24} />
                  </div>
                  <div>
                    <p className="mb-0">{symptom}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5" data-aos="fade-up">
            <div
              className="card-modern d-inline-block"
              style={{
                background: "rgba(220, 53, 69, 0.1)",
                border: "1px solid rgba(220, 53, 69, 0.2)",
                maxWidth: "500px",
              }}
            >
              <div className="d-flex align-items-center gap-3">
                <AlertCircle size={32} style={{ color: "#dc3545" }} />
                <div className="text-start">
                  <div className="fw-medium" style={{ color: "#dc3545" }}>
                    Experiencing Severe Pain?
                  </div>
                  <div className="small text-subtle">
                    Don&apos;t wait - call us immediately for emergency
                    treatment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="section-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Treatment Process</span>
            <h2 className="heading-secondary mt-2 mb-4">
              What to Expect During Your Root Canal
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Our modern root canal procedure is comfortable and efficient,
              designed to eliminate your pain while saving your natural tooth.
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
                  <p className="text-subtle small mb-2">{step.description}</p>
                  <div
                    className="small rounded-pill px-2 py-1 d-inline-block"
                    style={{
                      background: "var(--bg-light-gray)",
                      color: "var(--text-primary)",
                    }}
                  >
                    <Clock size={12} className="me-1" />
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
            <span className="text-accent fw-medium">Treatment Benefits</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Why Save Your Tooth with Root Canal?
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Root canal treatment offers significant advantages over tooth
              extraction, preserving your natural smile and oral health.
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

      {/* Aftercare Instructions */}
      <section className="section-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Post-Treatment Care</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Recovery and Aftercare Instructions
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Proper aftercare ensures optimal healing and long-term success of
              your root canal treatment.
            </p>
          </div>

          <div className="row g-4">
            {afterCareInstructions.map((period, index) => (
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
                        width: "60px",
                        height: "60px",
                        background: "var(--accent-teal)",
                        color: "white",
                      }}
                    >
                      <Heart size={28} />
                    </div>
                  </div>
                  <h4 className="heading-tertiary mb-3 text-center">
                    {period.period}
                  </h4>
                  <ul className="list-unstyled">
                    {period.instructions.map(
                      (instruction, instructionIndex) => (
                        <li
                          key={instructionIndex}
                          className="d-flex align-items-start gap-2 mb-2"
                        >
                          <CheckCircle
                            size={16}
                            className="text-accent mt-1"
                            style={{ flexShrink: 0 }}
                          />
                          <span className="small">{instruction}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Myths vs Facts */}
      <section className="section-modern bg-cream">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Common Concerns</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Root Canal Myths vs Facts
            </h2>
          </div>

          <div className="row g-4">
            <div className="col-lg-6" data-aos="fade-up">
              <div
                className="card-modern h-100"
                style={{ background: "rgba(220, 53, 69, 0.05)" }}
              >
                <h5 className="fw-semibold mb-3" style={{ color: "#dc3545" }}>
                  MYTH
                </h5>
                <p className="mb-3">
                  &ldquo;Root canals are extremely painful&rdquo;
                </p>
                <div className="small text-subtle">
                  <strong>FACT:</strong> Modern root canal treatment is
                  virtually painless thanks to advanced anesthesia and
                  techniques. Most patients report feeling comfortable during
                  the procedure.
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div
                className="card-modern h-100"
                style={{ background: "rgba(220, 53, 69, 0.05)" }}
              >
                <h5 className="fw-semibold mb-3" style={{ color: "#dc3545" }}>
                  MYTH
                </h5>
                <p className="mb-3">
                  &ldquo;It&apos;s better to extract the tooth&rdquo;
                </p>
                <div className="small text-subtle">
                  <strong>FACT:</strong> Saving your natural tooth is almost
                  always the best option. Root canal treatment has a 95% success
                  rate and can last a lifetime.
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div
                className="card-modern h-100"
                style={{ background: "rgba(220, 53, 69, 0.05)" }}
              >
                <h5 className="fw-semibold mb-3" style={{ color: "#dc3545" }}>
                  MYTH
                </h5>
                <p className="mb-3">
                  &ldquo;Root canal treatment causes illness&rdquo;
                </p>
                <div className="small text-subtle">
                  <strong>FACT:</strong> This outdated myth has been thoroughly
                  debunked by modern research. Root canals eliminate infection
                  and improve overall health.
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
              <div
                className="card-modern h-100"
                style={{ background: "rgba(220, 53, 69, 0.05)" }}
              >
                <h5 className="fw-semibold mb-3" style={{ color: "#dc3545" }}>
                  MYTH
                </h5>
                <p className="mb-3">&ldquo;Recovery takes weeks&rdquo;</p>
                <div className="small text-subtle">
                  <strong>FACT:</strong> Most patients return to normal
                  activities the next day. Any discomfort is mild and easily
                  managed with over-the-counter pain relief.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Patient Success</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Real Stories of Pain Relief
            </h2>
          </div>

          <ServiceReview data="root-canal" />
        </div>
      </section>

      {/* Emergency CTA */}
      <section
        className="section-modern text-white"
        style={{
          background: "linear-gradient(135deg, #dc3545, #c82333)",
        }}
      >
        <div className="container-modern">
          <div className="row align-items-center">
            <div className="col-lg-8" data-aos="fade-right">
              <div className="d-flex align-items-center gap-3 mb-3">
                <AlertCircle size={40} />
                <div>
                  <h2
                    className="heading-secondary mb-1"
                    style={{ color: "white" }}
                  >
                    Dental Emergency?
                  </h2>
                  <p className="mb-0" style={{ opacity: 0.9 }}>
                    Don&apos;t suffer in pain - we offer same-day emergency root
                    canal treatment
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
                  color: "#dc3545",
                }}
              >
                <Phone size={20} />
                Emergency Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Regular CTA */}
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
                Save Your Tooth with Expert Care
              </h2>
              <p className="lead mb-4" style={{ opacity: 0.9 }}>
                Don&apos;t let dental pain control your life. Our experienced
                team provides comfortable, effective root canal treatment to
                save your natural tooth.
              </p>
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
