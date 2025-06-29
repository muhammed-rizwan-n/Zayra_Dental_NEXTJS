import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Users,
  Heart,
  Shield,
  Clock,
  CheckCircle,
  Phone,
  ArrowRight,
  Target,
  Eye,
  Lightbulb,
} from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Dr. Reshma Parambil",
      title: "Principal Dentist & Founder",
      qualification: "BDS, MDS – Prosthodontics",
      experience: "15+ Years Experience",
      specialization: "Cosmetic Dentistry, Full Mouth Rehabilitation",
      quote: "A confident smile is the most beautiful thing you can wear.",
      image: "/about-us/reshma_parambil.jpg",
      expertise: [
        "Advanced Prosthodontics",
        "Cosmetic Dentistry",
        "Restorative Specialist",
        "Patient-Centered Care",
      ],
    },
    {
      name: "Dr. Emilio Cecamore",
      title: "Specialist Orthodontist",
      qualification: "BDS, MOrth",
      experience: "12+ Years Experience",
      specialization: "Dental Aligners, Braces & Smile Correction",
      quote: "Precision is the key to unlocking a perfect smile.",
      image: "/about-us/emilio.jpg",
      expertise: [
        "Invisalign Specialist",
        "Orthodontics",
        "Smile Correction",
        "Digital Treatment Planning",
      ],
    },
  ];

  const values = [
    {
      icon: <Heart size={32} />,
      title: "Compassionate Care",
      description:
        "We treat each patient with kindness, empathy, and respect, ensuring your comfort throughout your dental journey.",
    },
    {
      icon: <Shield size={32} />,
      title: "Advanced Technology",
      description:
        "Using the latest innovations and modern equipment to ensure precision, comfort, and superior results.",
    },
    {
      icon: <Users size={32} />,
      title: "Personalized Approach",
      description:
        "Every treatment is tailored to your unique smile goals and individual needs, not a one-size-fits-all solution.",
    },
    {
      icon: <Clock size={32} />,
      title: "Flexible Scheduling",
      description:
        "Convenient appointment times that fit your busy lifestyle, including evening and weekend options.",
    },
    {
      icon: <Award size={32} />,
      title: "Trust & Transparency",
      description:
        "We explain everything clearly with no hidden costs, helping you make informed decisions about your dental care.",
    },
    {
      icon: <Target size={32} />,
      title: "Affordable Excellence",
      description:
        "High-quality private dental care that doesn't break the bank, with flexible payment options available.",
    },
  ];

  const certifications = [
    {
      name: "General Dental Council",
      description: "GDC Registered Practice",
      logo: "/bg-gallery.jpg",
    },
    {
      name: "British Dental Association",
      description: "BDA Member Practice",
      logo: "/bg-gallery.jpg",
    },
    {
      name: "Care Quality Commission",
      description: "CQC Regulated",
      logo: "/bg-gallery.jpg",
    },
    {
      name: "Dental Protection",
      description: "Professional Indemnity",
      logo: "/bg-gallery.jpg",
    },
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
            <div className="col-lg-6" data-aos="fade-right">
              <span className="text-accent fw-medium">About Zayra Dental</span>
              <h1 className="heading-primary mt-2 mb-4">
                Your Trusted Dental Practice in
                <span className="text-primary-brown d-block">Leeds</span>
              </h1>
              <p className="lead text-subtle mb-4">
                At Zayra Dental, we&apos;re on a mission to make high-quality private
                dental care affordable and accessible for everyone in Leeds. We
                believe cost should never stand in the way of a healthy,
                confident smile.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4">
                <Link href="/appointment" className="btn-primary-modern">
                  Book Consultation
                  <ArrowRight size={20} />
                </Link>
                <a href="tel:01132488398" className="btn-secondary-modern">
                  <Phone size={20} />
                  Call Us Now
                </a>
              </div>

              {/* Stats */}
              <div className="row g-4 mt-3">
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
                      4.9★
                    </div>
                    <div className="small text-subtle">Patient Rating</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
              <div className="position-relative">
                <div className="card-elevated">
                  <Image
                    src="/gallery/Zayradental_Edits_11.jpg"
                    alt="Modern Zayra Dental Clinic Interior"
                    width={600}
                    height={500}
                    className="img-fluid rounded-modern"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-modern bg-cream">
        <div className="container-modern">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <Image
                src="/home/waiting_room.jpg"
                alt="Zayra Dental Reception Area"
                width={600}
                height={500}
                className="img-fluid rounded-modern shadow-modern"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <span className="text-accent fw-medium">Our Story</span>
              <h2 className="heading-secondary mt-2 mb-4">
                Building Smiles, Building Trust
              </h2>
              <p className="text-subtle mb-4">
                Our clinic is built around comfort, honesty, and care that truly
                puts patients first. We don&apos;t push unnecessary treatments — just
                expert dental care that fits your needs and your budget.
              </p>
              <p className="text-subtle mb-4">
                With flexible payment options and a welcoming atmosphere, we
                make every visit simple, stress-free, and surprisingly
                affordable — often less than the price of your daily coffee.
              </p>

              <div className="row g-3 mb-4">
                {[
                  "Affordable private dental care in Leeds",
                  "Patient-first approach with no unnecessary upselling",
                  "Comfortable, clean, and modern clinic environment",
                  "Friendly, professional staff who put you at ease",
                  "Flexible payment plans to fit your budget",
                  "Easy access with convenient parking",
                ].map((point, index) => (
                  <div key={index} className="col-12">
                    <div className="d-flex align-items-center gap-2">
                      <CheckCircle size={20} className="text-accent" />
                      <span>{point}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-modern" style={{background: "rgb(255, 200, 123)"}}>
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Meet Our Expert Team</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Experienced Dental Professionals
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Our team of qualified dental professionals is committed to
              providing exceptional care with a gentle, patient-centered
              approach.
            </p>
          </div>

          <div className="row g-5">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-modern h-100">
                  <div className="row g-4 align-items-center">
                    <div className="col-md-4 text-center">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={200}
                        height={250}
                        className="img-fluid rounded-modern shadow-modern"
                        style={{ objectFit: "cover", maxHeight: "250px" }}
                      />
                    </div>
                    <div className="col-md-8">
                      <h3 className="heading-tertiary mb-2">{member.name}</h3>
                      <div className="text-primary-brown fw-medium mb-1">
                        {member.title}
                      </div>
                      <div className="text-subtle mb-2">
                        {member.qualification}
                      </div>
                      <div className="small text-accent mb-3">
                        {member.experience}
                      </div>

                      <blockquote
                        className="border-start border-3 ps-3 mb-3"
                        style={{ borderColor: "var(--primary-teal)" }}
                      >
                        <p className="fst-italic text-subtle mb-0">
                          &quot;{member.quote}&quot;
                        </p>
                      </blockquote>

                      <div className="mb-3">
                        <div className="small fw-medium text-primary-brown mb-2">
                          Specialization:
                        </div>
                        <div className="small text-subtle">
                          {member.specialization}
                        </div>
                      </div>

                      <div className="d-flex flex-wrap gap-2">
                        {member.expertise
                          .slice(0, 2)
                          .map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="badge rounded-pill"
                              style={{
                                background: "var(--primary-teal)",
                                color: "white",
                                fontSize: "0.75rem",
                              }}
                            >
                              {skill}
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

      {/* Our Values */}
      <section className="section-modern bg-light-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Our Values</span>
            <h2 className="heading-secondary mt-2 mb-4">What Sets Us Apart</h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              At Zayra Dental, we aim to make high-quality private dental care
              affordable, stress-free, and accessible to everyone in Leeds.
            </p>
          </div>

          <div className="row g-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-modern h-100 text-center">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "var(--primary-teal)",
                      color: "white",
                    }}
                  >
                    {value.icon}
                  </div>
                  <h4 className="heading-tertiary mb-3">{value.title}</h4>
                  <p className="text-subtle">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Accreditations</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Our Professional Certifications
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              We are proud to be recognized and accredited by top dental and
              healthcare organizations, ensuring the highest standards of care.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="col-md-6 col-lg-3"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-modern text-center h-100">
                  <Image
                    src={cert.logo}
                    alt={cert.name}
                    width={80}
                    height={80}
                    className="img-fluid mb-3 mx-auto"
                    style={{ objectFit: "contain" }}
                  />
                  <h5 className="heading-tertiary mb-2">{cert.name}</h5>
                  <p className="text-subtle small">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section
        className="section-modern text-white position-relative"
        style={{
          background:
            "linear-gradient(135deg, var(--primary-teal), var(--accent-teal))",
          overflow: "hidden",
        }}
      >
        <div className="container-modern position-relative">
          <div className="row g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="d-flex align-items-start gap-3 mb-4">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <Eye size={28} />
                </div>
                <div>
                  <h3
                    className="heading-tertiary mb-3"
                    style={{ color: "white" }}
                  >
                    Our Vision
                  </h3>
                  <p style={{ opacity: 0.9 }}>
                    To be Leeds&apos; most trusted dental practice, known for making
                    high-quality dental care accessible, affordable, and
                    anxiety-free for every patient who walks through our doors.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
              <div className="d-flex align-items-start gap-3 mb-4">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <Lightbulb size={28} />
                </div>
                <div>
                  <h3
                    className="heading-tertiary mb-3"
                    style={{ color: "white" }}
                  >
                    Our Mission
                  </h3>
                  <p style={{ opacity: 0.9 }}>
                    To provide exceptional dental care that combines advanced
                    technology with a compassionate, patient-first approach,
                    ensuring every visit is comfortable, transparent, and
                    affordable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-modern bg-cream">
        <div className="container-modern">
          <div className="text-center" data-aos="fade-up">
            <h2 className="heading-secondary mb-4">
              Ready to Experience the Zayra Dental Difference?
            </h2>
            <p className="lead text-subtle mb-4">
              Join over 1000 satisfied patients who trust us with their smiles.
              Book your consultation today and discover why we&apos;re Leeds&apos;
              favorite dental practice.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <Link href="/appointment" className="btn-primary-modern">
                Book Free Consultation
                <ArrowRight size={20} />
              </Link>
              <a href="tel:01132488398" className="btn-secondary-modern">
                <Phone size={20} />
                Call 0113 248 8398
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
