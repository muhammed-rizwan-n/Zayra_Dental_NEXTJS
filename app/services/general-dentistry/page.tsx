import Image from "next/image";
import Link from "next/link";
import data from "./info.json";
import {
  Calendar,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Shield,
  Heart,
  Stethoscope,
  Award,
} from "lucide-react";
type IconName = "shield" | "checkcircle" | "heart";
const icons = {
  shield: <Shield size={32} />,
  checkcircle: <CheckCircle size={32} />,
  heart: <Heart size={32} />,
};
const {
  services,
  preventiveBenefits,
  whatToExpect,
  oralHealthTips,
} = data;
export default function GeneralDentistry() {
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
                <span className="text-subtle">General Dentistry</span>
              </div>

              <h1 className="heading-primary mb-4">
                Comprehensive General
                <span className="text-primary-brown d-block">
                  Dentistry Care
                </span>
              </h1>
              <p className="lead text-subtle mb-4">
                Maintain optimal oral health with our comprehensive general
                dentistry services. From routine checkups to advanced preventive
                care, we provide the foundation for a lifetime of healthy smiles
                with gentle, expert care.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <Link href="/appointment" className="btn-primary-modern">
                  <Calendar size={20} />
                  Book Checkup
                </Link>
                <a href="tel:01132488398" className="btn-secondary-modern">
                  <Phone size={20} />
                  Call Practice
                </a>
              </div>

              {/* Key Features */}
              <div className="row g-4 mt-4">
                <div className="col-4">
                  <div className="text-center">
                    <div className="heading-tertiary text-accent mb-1">15+</div>
                    <div className="small text-subtle">Years Experience</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <div className="heading-tertiary text-accent mb-1">
                      1000+
                    </div>
                    <div className="small text-subtle">Happy Patients</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <div className="heading-tertiary text-accent mb-1">
                      100%
                    </div>
                    <div className="small text-subtle">Gentle Care</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-3 md:mt-0" data-aos="fade-left" data-aos-delay="200">
              <div className="position-relative">
                <div className="card-elevated">
                  <Image
                    src="/services/dental_treatment.jpeg"
                    alt="General Dentistry Treatment"
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
                    left: "20px",
                    padding: "1rem",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="text-center">
                    <Award size={32} className="text-accent mb-2" />
                    <div className="fw-medium">GDC Registered</div>
                    <div className="small text-subtle">Professional Care</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-modern bg-cream">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Our Services</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Comprehensive General Dentistry Services
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              We provide a complete range of general dentistry services to
              maintain and improve your oral health with the latest techniques
              and technology.
            </p>
          </div>

          <div className="row g-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-modern h-100">
                  <div className="d-flex align-items-start gap-3">
                    <div
                      className="rounded-circle d-inline-flex align-items-center justify-content-center"
                      style={{
                        width: "60px",
                        height: "60px",
                        background: "var(--primary-teal)",
                        color: "white",
                        flexShrink: 0,
                      }}
                    >
                      <Stethoscope size={28} />
                    </div>
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h5 className="fw-semibold mb-0">{service.service}</h5>
                        <span
                          className="badge rounded-pill"
                          style={{
                            background: "var(--bg-light-gray)",
                            color: "var(--text-primary)",
                            fontSize: "0.7rem",
                          }}
                        >
                          {service.frequency}
                        </span>
                      </div>
                      <p className="text-subtle mb-3">{service.description}</p>
                      <div className="d-flex flex-wrap gap-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <span
                            key={benefitIndex}
                            className="badge rounded-pill"
                            style={{
                              background: "var(--primary-teal-light)",
                              color: "var(--text-primary)",
                              fontSize: "0.75rem",
                            }}
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Your Visit</span>
            <h2 className="heading-secondary mt-2 mb-4">
              What to Expect During Your Checkup
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Our comprehensive approach ensures every aspect of your oral
              health is thoroughly examined and properly maintained.
            </p>
          </div>

          <div className="flex justify-content-center row g-4">
            {whatToExpect.map((step, index) => (
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

      {/* Preventive Benefits */}
      <section className="section-modern bg-light-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">
              Preventive Care Benefits
            </span>
            <h2 className="heading-secondary mt-2 mb-4">
              Why Regular Dental Care Matters
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Preventive dental care is the most effective way to maintain oral
              health and avoid costly, painful dental problems in the future.
            </p>
          </div>

          <div className="row g-4">
            {preventiveBenefits.map((benefit, index) => (
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

      {/* Oral Health Tips */}
      <section className="section-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Home Care Tips</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Maintain Your Oral Health at Home
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Combine professional care with excellent home hygiene for optimal
              oral health results.
            </p>
          </div>

          <div className="row g-4">
            {oralHealthTips.map((tip, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-modern text-center h-100">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "70px",
                      height: "70px",
                      background: "var(--accent-teal)",
                      color: "white",
                    }}
                  >
                    { tip.icon as IconName ? icons[tip.icon as IconName]:""}
                  </div>
                  <h4 className="heading-tertiary mb-3">{tip.tip}</h4>
                  <p className="text-subtle">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age-Specific Care */}
      <section className="section-modern bg-cream">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Family Care</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Dental Care for Every Age
            </h2>
          </div>

          <div className="row g-4">
            <div className="col-lg-4" data-aos="fade-up">
              <div className="card-modern text-center h-100">
                <h4 className="heading-tertiary mb-3 text-accent">
                  Children (Ages 3-12)
                </h4>
                <ul className="list-unstyled text-subtle">
                  <li className="mb-2">• First dental visit by age 3</li>
                  <li className="mb-2">
                    • Fun, gentle approach to build confidence
                  </li>
                  <li className="mb-2">
                    • Preventive treatments and education
                  </li>
                  <li className="mb-2">• Fluoride treatments and sealants</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card-modern text-center h-100">
                <h4 className="heading-tertiary mb-3 text-accent">
                  Adults (Ages 18-65)
                </h4>
                <ul className="list-unstyled text-subtle">
                  <li className="mb-2">
                    • Comprehensive oral health maintenance
                  </li>
                  <li className="mb-2">
                    • Gum disease prevention and treatment
                  </li>
                  <li className="mb-2">• Cosmetic and restorative options</li>
                  <li className="mb-2">
                    • Lifestyle-related oral health guidance
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card-modern text-center h-100">
                <h4 className="heading-tertiary mb-3 text-accent">
                  Seniors (65+)
                </h4>
                <ul className="list-unstyled text-subtle">
                  <li className="mb-2">• Age-related oral health management</li>
                  <li className="mb-2">• Medication impact assessment</li>
                  <li className="mb-2">• Denture care and maintenance</li>
                  <li className="mb-2">• Dry mouth treatment options</li>
                </ul>
              </div>
            </div>
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
                  &ldquo;Regular cleanings and checkups have kept my teeth
                  healthy for years. The team is thorough and gentle.&rdquo;
                </p>
                <div className="fw-semibold">Patricia M.</div>
                <div className="small text-subtle">Long-term Patient</div>
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
                  &ldquo;They caught a cavity early during my routine checkup.
                  Quick treatment prevented a bigger problem.&rdquo;
                </p>
                <div className="fw-semibold">Andrew R.</div>
                <div className="small text-subtle">Preventive Care Success</div>
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
                  &ldquo;My whole family comes here. Professional, caring staff
                  who make dental visits comfortable for everyone.&rdquo;
                </p>
                <div className="fw-semibold">The Johnson Family</div>
                <div className="small text-subtle">Family Practice</div>
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
                Ready for Your Next Checkup?
              </h2>
              <p className="lead mb-4" style={{ opacity: 0.9 }}>
                Don&apos;t wait for problems to develop. Schedule your routine
                checkup and cleaning today to maintain optimal oral health and
                prevent costly future treatments.
              </p>

              <div className="d-flex align-items-center gap-4 mb-4">
                <div>
                  <div className="h4 mb-1" style={{ color: "white" }}>
                    £95
                  </div>
                  <div className="small" style={{ opacity: 0.9 }}>
                    Checkup & Clean
                  </div>
                </div>
                <div>
                  <div className="h4 mb-1" style={{ color: "white" }}>
                    Same Day
                  </div>
                  <div className="small" style={{ opacity: 0.9 }}>
                    Appointments
                  </div>
                </div>
                <div>
                  <div className="h4 mb-1" style={{ color: "white" }}>
                    15+
                  </div>
                  <div className="small" style={{ opacity: 0.9 }}>
                    Years Experience
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
                  Book Checkup
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
                  Call Practice
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
