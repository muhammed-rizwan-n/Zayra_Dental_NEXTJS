import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Users,
  Heart,
  Shield,
  Clock,
  CheckCircle,
  Star,
  Phone,
  Mail,
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
                At Zayra Dental, we're on a mission to make high-quality private
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
                puts patients first. We don't push unnecessary treatments — just
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
<<<<<<< HEAD

      <section
        className="container-flex px-sm-2"
        style={{ backgroundImage: `url("/home/waiting_room.jpg")` }}
      >
        <div
          className="row align-items-center container-flex p-4"
          style={{
            background: "rgba(76, 0, 252, 0.74)", // Light overlay
          }}
        >
          {/* Clinic Image */}
          <div className="col-md-5 mb-4 mb-md-0 text-center">
            <Image
              src="/gallery/Zayradental_Edits_11.jpg" // Replace with actual image path
              alt="Our Clinic"
              width={"400"}
              height={"300"}
              className="img-fluid rounded shadow"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </div>
=======
>>>>>>> fda951ef7fff5b1c2b15769802bd7dc64b86bb8c

      {/* Team Section */}
      <section className="section-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Meet Our Expert Team</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Experienced Dental Professionals
            </h2>
<<<<<<< HEAD
            <p className="lead" data-aos="fade-left" data-aos-delay="200">
              At Zayra Dental, we believe everyone deserves access to
              high-quality dental care that’s both affordable and compassionate.
              Our mission is simple: to provide private dental treatments that
              prioritize your comfort, your health, and your budget — right here
              in the heart of Leeds.
            </p>

            <ul
              className="list-unstyled mt-3"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <li className="mb-2">
                ✅ Affordable private dental care in Leeds
              </li>
              <li className="mb-2">
                ✅ Patient-first approach with no unnecessary upselling
              </li>
              <li className="mb-2">
                ✅ Comfortable, clean, and modern clinic environment
              </li>
              <li className="mb-2">
                ✅ Friendly, professional staff who put you at ease
              </li>
              <li className="mb-2">
                ✅ Flexible payment plans to fit your budget
              </li>
              <li className="mb-2">✅ Easy access with convenient parking</li>
            </ul>
          </div>
        </div>
      </section>

        <section
                className="container-fluid py-5 px-4"
                style={{ background: "rgba(93, 0, 93, 0.55)" }}
              >
                                    <h2 className="fw-bold mb-4" data-aos="fade-left">
                      Meet Our Principal Dentist
                    </h2>
                <div className="row align-items-center flex-md-row flex-column-reverse"
                data-aos="fade-left" data-aos-delay="400">
                  {/* Executive Info */}
                  <div className="col-lg-7">

                    <h4
                      className="text-white mb-2"
                    >
                      Dr. Reshma Parambil
                    </h4>
                    <p
                      className="text-white mb-2"
                    >
                      BDS, MDS – Prosthodontics | 15+ Years of Experience
                    </p>
                    <p className="lead" data-aos="fade-left" data-aos-delay="300">
                      &quot;I believe everyone deserves a healthy, confident
                      smile—without fear or financial worry.&quot;
                    </p>
                    <p>
                      With over 10 years of experience in general dentistry, Dr. Reshma
                      brings advanced training in oral and maxillofacial surgery from
                      Mysore, India, and a strong focus on restorative and cosmetic
                      dentistry. She has completed a one-year restorative program under
                      the renowned Dr. Nigel Hargreaves.
                    </p>
        
                    <div className="mt-4" data-aos="fade-left" data-aos-delay="500">
                      {/* Social Links */}
                      <a
                        href="https://linkedin.com/in/dr-aisha-sharma"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="me-3 text-decoration-none text-dark"
                      >
                        <i className="fab fa-linkedin fa-lg"></i> LinkedIn
                      </a>
                      <a
                        href="mailto:dr.aisha@brightsmile.com"
                        className="text-decoration-none text-dark"
                      >
                        <i className="fas fa-envelope fa-lg"></i> Email
                      </a>
                    </div>
                  </div>
                  {/* Executive Photo */}
                  <div className="col-lg-5 mb-4 mb-lg-0 text-center">
                    <Image
                      src="/about-us/reshma_parambil.jpg" // Replace with real image path
                      alt="Dr. Reshma Parambil"
                      className="img-fluid rounded shadow"
                      data-aos="fade-left" data-aos-delay="400"
                      width={"300"}
                      height={"400"}
                      style={{ maxHeight: "350px", objectFit: "cover" }}
                    />
                  </div>
        
                </div>
              </section>
        
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5" data-aos="fade-up">
            Meet Our Team
          </h2>
          <p>
            Our dedicated team at Zayra Dental is made up of experienced, certified professionals who are passionate about your oral health. From gentle general care to advanced cosmetic treatments, we work together to provide a friendly, stress-free experience — always putting your comfort and confidence first.
          </p>
          <div className={style["full-width-image"]}>
            <Image
              src={bg}
              alt="Team Photo"
              layout="responsive"
              width={1920}
              height={500}
              className="img-fluid mb-4"
              style={{ objectFit: "cover", maxHeight: "400px" }}
            />
          </div>

          {/* Team Member 1 */}
          <div
            className={
              style["team_member"] +
              " row align-items-center mb-5 flex-md-row flex-column"
            }
            data-aos="fade-right"
          >
            <div className="col-md-4 text-center mb-3 mb-md-0">
              <Image
                width={"300"}
                height={"400"}
                src="/about-us/reshma_parambil.jpg"
                alt="Dr. Reshma Parambil"
                className="img-fluid rounded shadow"
                style={{
                  maxHeight: "270px",
                  maxWidth: "200px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="col-md-8">
              <h3 className="mb-1">
                <strong>Dr. Reshma Parambil</strong>
              </h3>
              <h6 className="text-white">Chief Dental Surgeon</h6>
              <p className="mb-1">
                <strong>Specialization:</strong> Cosmetic Dentistry, Full Mouth
                Rehabilitation
              </p>
              <blockquote className="blockquote fst-italic mt-3">
                <p>
                  &quot;A confident smile is the most beautiful thing you can
                  wear.&quot;
                </p>
              </blockquote>
            </div>
          </div>

          {/* Team Member 2 */}
          <div
            className={
              style["team_member"] +
              " row align-items-center mb-5 flex-md-row flex-column-reverse"
            }
            data-aos="fade-left"
          >
            <div className="col-md-8">
              <h3 className="mb-1">
                <strong>Dr. Emilio Cecamore</strong>
              </h3>
              <h6 className="text-white">Orthodontist</h6>
              <p className="mb-1">
                <strong>Specialization:</strong> Dental Aligners, Braces & Smile
                Correction
              </p>
              <blockquote className="blockquote fst-italic mt-3">
                <p>
                  &quot;Precision is the key to unlocking a perfect smile.&quot;
                </p>
              </blockquote>
            </div>
            <div className="col-md-4 text-center mb-3 mb-md-0" style={{}}>
              <Image
                width={"300"}
                height={"400"}
                src="/about-us/emilio.jpg"
                alt="Dr. Emilio Cecamore"
                className="img-fluid rounded shadow"
                style={{
                  maxHeight: "270px",
                  maxWidth: "200px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/*Certifications*/}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold" data-aos="fade-up">
            Our Certifications
          </h2>
          <p className="text-muted" data-aos="fade-up" data-aos-delay="200">
            We are proud to be recognized and accredited by top dental and
            healthcare organizations.
          </p>
        </div>

        <div className="row justify-content-center g-4">
          {/* Example Certification 1 */}
          <div className="col-6 col-md-3 text-center" data-aos="zoom-in">
            <Image
              src="/bg-gallery.jpg" // Replace with actual path
              alt="ADA Certified"
              className="img-fluid mb-3"
              width={"400"}
              height={"300"}
              style={{ height: "80px", objectFit: "contain" }}
            />
            <h6 className="fw-semibold">American Dental Association</h6>
            <small className="text-muted">ADA Accredited Clinic</small>
          </div>

          {/* Example Certification 2 */}
          <div
            className="col-6 col-md-3 text-center"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <Image
              src="/bg-gallery.jpg" // Replace with actual path
              alt="ISO Certified"
              className="img-fluid mb-3"
              width={"400"}
              height={"300"}
              style={{ height: "80px", objectFit: "contain" }}
            />
            <h6 className="fw-semibold">ISO 9001:2015</h6>
            <small className="text-muted">Quality Management Certified</small>
          </div>

          {/* Example Certification 3 */}
          <div
            className="col-6 col-md-3 text-center"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Image
              src="/bg-gallery.jpg" // Replace with actual path
              alt="WHO Affiliation"
              className="img-fluid mb-3"
              width={"400"}
              height={"300"}
              style={{ height: "80px", objectFit: "contain" }}
            />
            <h6 className="fw-semibold">World Health Organization</h6>
            <small className="text-muted">Health & Hygiene Standards</small>
          </div>

          {/* Example Certification 4 */}
          <div
            className="col-6 col-md-3 text-center"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <Image
              src="/bg-gallery.jpg" // Replace with actual path
              alt="DCI Certified"
              className="img-fluid mb-3"
              width={"400"}
              height={"300"}
              style={{ height: "80px", objectFit: "contain" }}
            />
            <h6 className="fw-semibold">Dental Council of India</h6>
            <small className="text-muted">DCI Registered Professionals</small>
          </div>
        </div>
      </section>

      {/*Aim*/}
      <section
        className="container-flex"
        style={{ backgroundImage: `url("/gallery/Zayradental_Edits_02.jpg")` }}
        data-aos="fade-in"
      >
        <div
          className="container-flex p-2 py-4 p-md-5"
          style={{
            top: 0,
            left: 0,
            width: "100%",
            background: "rgba(99, 33, 253, 0.74)", // Light overlay
            zIndex: 1,
          }}
        >
          <div className="text-center" data-aos="fade-down">
            <h2 className="fw-bold">Our Aim</h2>
            <p className="text-white">
              At Zayra Dental, we aim to make high-quality private dental care
              affordable, stress-free, and accessible to everyone in Leeds —
              without compromising comfort or integrity.
            </p>
          </div>
          <div className="row g-4 text-center mx-md-5 mx-sm-5 mx-2">
            {[
              {
                title: "Compassionate Care",
                content:
                  "We treat each patient with kindness, empathy, and respect.",
              },
              {
                title: "Affordable Treatments",
                content: "High-quality care that doesn’t break the bank.",
              },
              {
                title: "Advanced Technology",
                content:
                  "Using the latest innovations to ensure precision and comfort.",
              },
              {
                title: "Personalized Approach",
                content:
                  "Every treatment is tailored to your unique smile and needs.",
              },
              {
                title: "Flexible Scheduling",
                content: "Convenient appointments that fit your lifestyle.",
              },
              {
                title: "Trust & Transparency",
                content:
                  "We explain everything — no hidden costs or confusion.",
              },
            ].map((search) => (
              <div
                className="col-md-6 col-lg-4"
                data-aos="fade-up"
                data-aos-delay="100"
                key={search.title}
              >
                <div className="p-4 border rounded shadow-sm h-100">
                  <i className="fas fa-hand-holding-heart fa-2x text-primary mb-3"></i>
                  <h5 className="fw-semibold">{search.title}</h5>
                  <p className="text-white">{search.content}</p>
=======
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
                          "{member.quote}"
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
>>>>>>> fda951ef7fff5b1c2b15769802bd7dc64b86bb8c
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
                    To be Leeds' most trusted dental practice, known for making
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
              Book your consultation today and discover why we're Leeds'
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
