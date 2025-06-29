<<<<<<< HEAD
"use client";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import img from "../../../public/home/waiting_room.jpg";

export default function DentalAligners() {
  return (
    <section className="dental-aligners-page text-white">
      {/* Banner Section */}
      <div className="position-relative">
        <Image
          src={img}
          alt="Dental Aligners"
          width={1920}
          height={700}
          className="w-100 object-fit-cover"
          priority
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center">
          <h1 className="display-4 fw-bold text-center" data-aos="fade-down">
            Dental Aligners
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-md-6" data-aos="fade-right">
            <Image
              src={img}
              alt="Aligners Side View"
              width={600}
              height={400}
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <h2 className="fw-bold mb-3">What are Dental Aligners?</h2>
            <p className="text-light mb-3 fs-5">
              Dental aligners are a clear, modern alternative to braces. Custom-made and removable, they gradually adjust your teeth with minimal discomfort and maximum convenience.
            </p>
            <p className="text-light fs-5">
              At Zayra Dental, we use 3D scanning to plan and track your aligner treatment with high precision. Perfect for adults and teens seeking a subtle, hygienic solution to crooked teeth.
            </p>

            <Link href="/appointment" className="btn btn-primary mt-3 px-4 py-2 fs-5">
              Book Appointment
            </Link>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="row mt-5 g-4">
          {[
            {
              title: "Digital Planning",
              text: "We create a 3D simulation of your future smile before you begin treatment.",
              img: "/treatments/aligner_3dscan.jpg",
            },
            {
              title: "Step-by-Step Journey",
              text: "Each stage is customized to your dental profile, ensuring comfort and clarity.",
              img: "/treatments/aligner_steps.jpg",
            },
            {
              title: "Comfortable Fit",
              text: "Smooth, medical-grade plastic makes aligners safe and nearly invisible.",
              img: "/treatments/aligner_care.jpg",
            },
          ].map((item, idx) => (
            <div className="col-md-4" key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
              <div className="card border-0 h-100 shadow text-white position-relative overflow-hidden">
                <Image
                  src={img}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-100 object-fit-cover"
                />
                <div className="position-absolute bottom-0 w-100 p-3" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}>
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="mb-0 small">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Phone CTA */}
        <div className="text-center mt-5" data-aos="fade-up">
          <h4 className="mb-3">Prefer to speak directly?</h4>
          <p className="fs-5">Call us to book your aligner consultation now.</p>
          <a href="tel:+11234567890" className="btn btn-outline-light d-inline-flex align-items-center gap-2">
            <FaPhoneAlt /> +1 (123) 456-7890
          </a>
        </div>
      </div>
    </section>
=======
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  CheckCircle,
  Clock,
  Star,
  ArrowRight,
  Phone,
  Eye,
  Smartphone,
  Award,
} from "lucide-react";

export default function DentalAligners() {
  const alignerTypes = [
    {
      type: "Invisalign",
      description:
        "World's most advanced clear aligner system with proven results",
      features: [
        "Virtually invisible",
        "Custom 3D treatment plan",
        "SmartTrack material",
        "Precision attachments",
      ],
      duration: "6-18 months",
      price: "From £2,500",
    },
    {
      type: "Clear Correct",
      description:
        "High-quality clear aligners offering excellent value and results",
      features: [
        "Crystal clear material",
        "Comfortable fit",
        "Gradual movement",
        "Cost-effective",
      ],
      duration: "8-20 months",
      price: "From £1,800",
    },
    {
      type: "Express Treatment",
      description: "Fast-track aligners for minor corrections and touch-ups",
      features: [
        "Quick results",
        "Fewer aligners needed",
        "Minor corrections",
        "Affordable option",
      ],
      duration: "3-6 months",
      price: "From £1,200",
    },
  ];

  const benefits = [
    "Virtually invisible - no one will know you're straightening your teeth",
    "Removable for eating, drinking, and special occasions",
    "More comfortable than traditional braces with no metal or wires",
    "Better oral hygiene - brush and floss normally",
    "Shorter treatment time compared to conventional braces",
    "Predictable results with 3D treatment visualization",
  ];

  const treatmentSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description:
        "3D scan and assessment to determine if aligners are suitable for you",
    },
    {
      step: "2",
      title: "Treatment Planning",
      description:
        "Custom 3D treatment plan showing your week-by-week progress",
    },
    {
      step: "3",
      title: "Aligner Creation",
      description:
        "Your custom aligners are precisely manufactured for your unique smile",
    },
    {
      step: "4",
      title: "Active Treatment",
      description: "Wear aligners 20-22 hours daily, changing every 1-2 weeks",
    },
    {
      step: "5",
      title: "Retention Phase",
      description: "Retainers maintain your new smile position permanently",
    },
  ];

  const treatedConditions = [
    "Crowded teeth",
    "Gaps between teeth",
    "Overbite",
    "Underbite",
    "Crossbite",
    "Open bite",
    "Relapsed orthodontic treatment",
    "Minor to moderate misalignment",
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
                <span className="text-subtle">Dental Aligners</span>
              </div>

              <h1 className="heading-primary mb-4">
                Invisible Dental Aligners
                <span className="text-primary-brown d-block">
                  Straighten Teeth Discreetly
                </span>
              </h1>
              <p className="lead text-subtle mb-4">
                Achieve the straight, beautiful smile you've always wanted with
                virtually invisible aligners. Our clear aligner treatments offer
                a comfortable, convenient alternative to traditional braces with
                predictable, professional results.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <Link href="/appointment" className="btn-primary-modern">
                  <Calendar size={20} />
                  Free Smile Assessment
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

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
              <div className="position-relative">
                <div className="card-elevated">
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

          <div className="row g-4">
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
                  "Nobody knew I was wearing aligners! The treatment was so
                  convenient and the results are amazing."
                </p>
                <div className="fw-semibold">Rachel M.</div>
                <div className="small text-subtle">8 months treatment</div>
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
                  "Perfect for my busy lifestyle. I could eat normally and
                  maintain my oral hygiene easily."
                </p>
                <div className="fw-semibold">David L.</div>
                <div className="small text-subtle">12 months treatment</div>
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
                  "The 3D preview showed me exactly what my smile would look
                  like. The results matched perfectly!"
                </p>
                <div className="fw-semibold">Sophie T.</div>
                <div className="small text-subtle">6 months treatment</div>
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
                Ready to Start Your Aligner Journey?
              </h2>
              <p className="lead mb-4" style={{ opacity: 0.9 }}>
                Book your free smile assessment and discover how clear aligners
                can give you the straight, confident smile you've always wanted
                - virtually invisibly!
              </p>

              <div className="d-flex align-items-center gap-4 mb-4">
                <div>
                  <div className="h4 mb-1" style={{ color: "white" }}>
                    Free
                  </div>
                  <div className="small" style={{ opacity: 0.9 }}>
                    Smile Assessment
                  </div>
                </div>
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
                  Free Assessment
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
>>>>>>> fda951ef7fff5b1c2b15769802bd7dc64b86bb8c
  );
}
