import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Star,
  ArrowRight,
  Phone,
  AlertTriangle,
  Heart,
  Shield,
  Zap,
} from "lucide-react";

export default function EmergencyDentalCare() {
  const emergencyTypes = [
    {
      emergency: "Severe Toothache",
      description:
        "Intense, throbbing pain that interferes with daily activities",
      urgency: "Immediate",
      treatment: "Pain relief, antibiotics, root canal if needed",
    },
    {
      emergency: "Knocked-Out Tooth",
      description: "Complete tooth displacement due to trauma or accident",
      urgency: "Within 1 hour",
      treatment:
        "Tooth reimplantation if possible, or immediate replacement options",
    },
    {
      emergency: "Broken/Chipped Tooth",
      description: "Fractured tooth causing pain or sharp edges",
      urgency: "Same day",
      treatment: "Bonding, crown, or temporary restoration",
    },
    {
      emergency: "Lost Filling/Crown",
      description:
        "Dental restoration has fallen out, exposing sensitive tooth",
      urgency: "Within 24 hours",
      treatment: "Temporary or permanent restoration replacement",
    },
    {
      emergency: "Dental Abscess",
      description: "Serious infection causing swelling and severe pain",
      urgency: "Immediate",
      treatment: "Drainage, antibiotics, root canal or extraction",
    },
    {
      emergency: "Bleeding Gums",
      description: "Persistent, heavy bleeding from gums",
      urgency: "Same day",
      treatment: "Deep cleaning, medication, or surgical intervention",
    },
  ];

  const firstAidTips = [
    {
      situation: "Severe Toothache",
      steps: [
        "Rinse mouth with warm salt water",
        "Take over-the-counter pain reliever",
        "Apply cold compress to outside of cheek",
        "Avoid hot or cold foods",
      ],
    },
    {
      situation: "Knocked-Out Tooth",
      steps: [
        "Handle tooth by crown, not root",
        "Rinse gently if dirty (don't scrub)",
        "Try to reinsert in socket if possible",
        "If not possible, store in milk or saliva",
      ],
    },
    {
      situation: "Broken Tooth",
      steps: [
        "Save any broken pieces",
        "Rinse mouth with warm water",
        "Apply gauze to control bleeding",
        "Use cold compress for swelling",
      ],
    },
  ];

  const whyChooseUs = [
    {
      feature: "24/7 Emergency Line",
      description:
        "Call anytime for immediate guidance and appointment scheduling",
      icon: <Phone size={32} />,
    },
    {
      feature: "Same-Day Treatment",
      description: "Emergency appointments available within hours, not days",
      icon: <Clock size={32} />,
    },
    {
      feature: "Pain Relief Guarantee",
      description: "We prioritize immediate pain relief and comfort",
      icon: <Heart size={32} />,
    },
    {
      feature: "Advanced Equipment",
      description: "Digital X-rays and modern tools for accurate diagnosis",
      icon: <Zap size={32} />,
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
            "linear-gradient(135deg, rgba(220, 53, 69, 0.1), rgba(255, 255, 255, 0.9))",
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
                <span className="text-subtle">Emergency Dental Care</span>
              </div>

              <h1 className="heading-primary mb-4">
                24/7 Emergency
                <span className="text-primary-brown d-block">Dental Care</span>
              </h1>
              <p className="lead text-subtle mb-4">
                Dental emergencies don&apos;t wait for business hours. Our
                experienced team provides immediate pain relief and emergency
                dental treatment when you need it most, with same-day
                appointments and 24/7 emergency support.
              </p>

              {/* Emergency Contact */}
              <div
                className="p-4 rounded-3 mb-4"
                style={{
                  background: "rgba(220, 53, 69, 0.1)",
                  border: "2px solid #dc3545",
                }}
              >
                <div className="d-flex align-items-center gap-3">
                  <AlertTriangle size={32} style={{ color: "#dc3545" }} />
                  <div>
                    <div
                      className="fw-bold h5 mb-1"
                      style={{ color: "#dc3545" }}
                    >
                      Dental Emergency? Call Now!
                    </div>
                    <a
                      href="tel:01132488398"
                      className="btn btn-danger btn-lg"
                      style={{ borderRadius: "50px" }}
                    >
                      <Phone size={20} />
                      0113 248 8398
                    </a>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="row g-4">
                <div className="col-4">
                  <div className="text-center">
                    <div className="heading-tertiary text-accent mb-1">
                      24/7
                    </div>
                    <div className="small text-subtle">Available</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <div className="heading-tertiary text-accent mb-1">
                      &lt; 1hr
                    </div>
                    <div className="small text-subtle">Response Time</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <div className="heading-tertiary text-accent mb-1">
                      100%
                    </div>
                    <div className="small text-subtle">Pain Relief</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
              <div className="position-relative">
                <div className="card-elevated">
                  <Image
                    src="/services/dental_treatment.jpeg"
                    alt="Emergency Dental Treatment"
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
                    bottom: "20px",
                    left: "20px",
                    padding: "1rem",
                    background: "#dc3545",
                    color: "white",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="text-center">
                    <Clock size={32} className="mb-2" />
                    <div className="fw-medium">Same Day</div>
                    <div className="small">Emergency Care</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Types */}
      <section className="section-modern bg-cream">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Common Emergencies</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Dental Emergencies We Treat
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              We handle all types of dental emergencies with expertise and
              urgency, providing immediate relief and comprehensive treatment.
            </p>
          </div>

          <div className="row g-4">
            {emergencyTypes.map((emergency, index) => (
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
                        background:
                          emergency.urgency === "Immediate"
                            ? "#dc3545"
                            : emergency.urgency.includes("hour")
                              ? "#fd7e14"
                              : "var(--primary-teal)",
                        color: "white",
                        flexShrink: 0,
                      }}
                    >
                      <AlertTriangle size={28} />
                    </div>
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h5 className="fw-semibold mb-0">
                          {emergency.emergency}
                        </h5>
                        <span
                          className="badge rounded-pill"
                          style={{
                            background:
                              emergency.urgency === "Immediate"
                                ? "#dc3545"
                                : emergency.urgency.includes("hour")
                                  ? "#fd7e14"
                                  : "var(--primary-teal)",
                            color: "white",
                            fontSize: "0.7rem",
                          }}
                        >
                          {emergency.urgency}
                        </span>
                      </div>
                      <p className="text-subtle mb-2">
                        {emergency.description}
                      </p>
                      <div className="small">
                        <strong>Treatment: </strong>
                        <span className="text-subtle">
                          {emergency.treatment}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First Aid Tips */}
      <section className="section-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Emergency First Aid</span>
            <h2 className="heading-secondary mt-2 mb-4">
              What to Do Before You Arrive
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              These immediate steps can help manage pain and prevent further
              damage while you&apos;re on your way to our clinic.
            </p>
          </div>

          <div className="row g-4">
            {firstAidTips.map((tip, index) => (
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
                        background: "var(--accent-teal)",
                        color: "white",
                      }}
                    >
                      <Shield size={32} />
                    </div>
                  </div>
                  <h4 className="heading-tertiary mb-3 text-center">
                    {tip.situation}
                  </h4>
                  <ol className="ps-3">
                    {tip.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="mb-2 small">
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-modern bg-light-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Emergency Excellence</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Why Choose Zayra Dental for Emergencies?
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              When you&apos;re in pain, you need immediate, expert care. We're
              equipped and ready to handle any dental emergency with speed and
              precision.
            </p>
          </div>

          <div className="row g-4">
            {whyChooseUs.map((feature, index) => (
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
                      width: "80px",
                      height: "80px",
                      background: "var(--primary-brown)",
                      color: "white",
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h4 className="heading-tertiary mb-3">{feature.feature}</h4>
                  <p className="text-subtle">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Protocol */}
      <section className="section-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Our Process</span>
            <h2 className="heading-secondary mt-2 mb-4">
              How We Handle Your Emergency
            </h2>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6" data-aos="fade-up">
              <div className="text-center">
                <div
                  className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "#dc3545",
                    color: "white",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  1
                </div>
                <h5 className="fw-semibold mb-3">Emergency Call</h5>
                <p className="text-subtle">
                  Call our 24/7 emergency line for immediate guidance and
                  appointment scheduling
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="text-center">
                <div
                  className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "#fd7e14",
                    color: "white",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  2
                </div>
                <h5 className="fw-semibold mb-3">Immediate Assessment</h5>
                <p className="text-subtle">
                  Quick triage to prioritize your case and provide first aid
                  instructions
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="text-center">
                <div
                  className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "var(--primary-teal)",
                    color: "white",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  3
                </div>
                <h5 className="fw-semibold mb-3">Emergency Treatment</h5>
                <p className="text-subtle">
                  Immediate pain relief and comprehensive treatment to resolve
                  the emergency
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
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
                  4
                </div>
                <h5 className="fw-semibold mb-3">Follow-up Care</h5>
                <p className="text-subtle">
                  Ongoing care plan to ensure complete healing and prevent
                  future emergencies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Pricing */}
      <section className="section-modern bg-cream">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Emergency Pricing</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Transparent Emergency Fees
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              No surprises when you&apos;re already stressed. Our emergency fees are
              clearly defined and competitive, with payment plans available.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-lg-4" data-aos="fade-up">
              <div className="card-modern text-center h-100">
                <h5 className="text-accent mb-3">Emergency Consultation</h5>
                <div className="heading-secondary text-primary-brown mb-3">
                  £120
                </div>
                <ul className="list-unstyled text-subtle small">
                  <li>• Immediate pain assessment</li>
                  <li>• Digital X-rays if needed</li>
                  <li>• Emergency treatment plan</li>
                  <li>• Prescription medications</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card-modern text-center h-100">
                <h5 className="text-accent mb-3">Out-of-Hours Emergency</h5>
                <div className="heading-secondary text-primary-brown mb-3">
                  £180
                </div>
                <ul className="list-unstyled text-subtle small">
                  <li>• Evenings, weekends, holidays</li>
                  <li>• Same emergency consultation</li>
                  <li>• Immediate pain relief</li>
                  <li>• Emergency treatment if needed</li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="text-center mt-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="text-subtle small">
              *Treatment costs are additional and will be discussed before any
              procedures. Payment plans available for emergency treatments over
              £500.
            </p>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="section-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Emergency Stories</span>
            <h2 className="heading-secondary mt-2 mb-4">
              When We Were There When It Mattered
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
                  &ldquo;Called at 11 PM with excruciating pain. Dr. Reshma met me at
                  the clinic within 30 minutes and saved my tooth.&rdquo;
                </p>
                <div className="fw-semibold">Tom W.</div>
                <div className="small text-subtle">Emergency Root Canal</div>
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
                  &ldquo;My son knocked out his front tooth. They saw us immediately
                  and saved the tooth. Amazing emergency care!&rdquo;
                </p>
                <div className="fw-semibold">Linda P.</div>
                <div className="small text-subtle">Dental Trauma</div>
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
                  &ldquo;Weekend emergency with severe abscess. They treated me
                  immediately and the infection cleared up quickly.&rdquo;
                </p>
                <div className="fw-semibold">Robert K.</div>
                <div className="small text-subtle">Dental Abscess</div>
              </div>
            </div>
          </div>
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
              <div className="d-flex align-items-center gap-3 mb-4">
                <AlertTriangle size={60} />
                <div>
                  <h2
                    className="heading-secondary mb-2"
                    style={{ color: "white" }}
                  >
                    Don&apos;t Wait - Get Emergency Care Now!
                  </h2>
                  <p className="lead mb-0" style={{ opacity: 0.9 }}>
                    Dental emergencies require immediate attention. Every minute
                    counts when you&apos;re in pain.
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-4">
                <div>
                  <div className="h4 mb-1" style={{ color: "white" }}>
                    24/7
                  </div>
                  <div className="small" style={{ opacity: 0.9 }}>
                    Emergency Line
                  </div>
                </div>
                <div>
                  <div className="h4 mb-1" style={{ color: "white" }}>
                    &lt; 30min
                  </div>
                  <div className="small" style={{ opacity: 0.9 }}>
                    Response Time
                  </div>
                </div>
                <div>
                  <div className="h4 mb-1" style={{ color: "white" }}>
                    Same Day
                  </div>
                  <div className="small" style={{ opacity: 0.9 }}>
                    Treatment
                  </div>
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
                className="btn btn-light btn-lg d-block mb-3"
                style={{
                  borderRadius: "50px",
                  padding: "1.5rem 2rem",
                  fontWeight: "600",
                  fontSize: "1.2rem",
                  color: "#dc3545",
                }}
              >
                <Phone size={24} />
                Call 0113 248 8398
              </a>
              <div className="small text-center" style={{ opacity: 0.9 }}>
                Available 24 hours a day, 7 days a week
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
