import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Award,
  Calendar,
  CheckCircle,
  MapPin,
  Phone,
  Star,
  Users,
  Shield,
  Clock,
  Heart,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Private Dentist Leeds | Zayra Dental - Expert Dental Care",
  description:
    "Award-winning private dentist in Leeds offering affordable dental care, cosmetic dentistry, teeth whitening, dental implants & emergency dental services. Book online today!",
  keywords: [
    "private dentist Leeds",
    "dentist Leeds",
    "cosmetic dentist Leeds",
    "teeth whitening Leeds",
    "dental implants Leeds",
    "emergency dentist Leeds",
    "affordable dentist Leeds",
    "dental clinic Leeds",
    "Dr Reshma Parambil",
    "Harehills Lane dentist",
    "dental check up Leeds",
    "root canal Leeds",
  ],
  openGraph: {
    title: "Private Dentist Leeds | Zayra Dental - Expert Dental Care",
    description:
      "Award-winning private dentist in Leeds offering affordable dental care, cosmetic dentistry, teeth whitening & dental implants. Book your appointment today!",
    url: "https://zayradental.co.uk",
    images: [
      {
        url: "/home/waiting_room.jpg",
        width: 1200,
        height: 630,
        alt: "Zayra Dental Modern Clinic Leeds - Award Winning Dentist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Dentist Leeds | Zayra Dental",
    description:
      "Award-winning private dentist in Leeds. Affordable dental care, cosmetic dentistry & emergency services.",
    images: ["/home/waiting_room.jpg"],
  },
  alternates: {
    canonical: "https://zayradental.co.uk",
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-modern" style={{ paddingTop: "120px" }}>
        <div className="container-modern">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="hero-content">
                <h1 className="heading-primary mb-4">
                  Crafting Beautiful Smiles with
                  <span className="text-accent d-block">
                    Expert Dental Care
                  </span>
                </h1>
                <p
                  className="lead text-subtle mb-4"
                  style={{ fontSize: "1.2rem", lineHeight: "1.8" }}
                >
                  At Zayra Dental in Leeds, we combine advanced technology with
                  compassionate care to deliver exceptional dental treatments in
                  a comfortable, modern environment.
                </p>
                <div className="d-flex flex-wrap gap-3 mb-5">
                  <Link href="/appointment" className="btn-primary-modern">
                    <Calendar size={20} />
                    Schedule Appointment
                  </Link>
                  <Link href="/services" className="btn-secondary-modern">
                    Our Services
                    <ArrowRight size={20} />
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="d-flex flex-wrap gap-4 text-subtle">
                  <div className="d-flex align-items-center gap-2">
                    <Award size={18} className="text-accent" />
                    <span className="small">Award Winning</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <Shield size={18} className="text-accent" />
                    <span className="small">GDC Registered</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <Users size={18} className="text-accent" />
                    <span className="small">1000+ Happy Patients</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-3 md:mt-0" data-aos="fade-left" data-aos-delay="200">
              <div className="position-relative">
                <div className="card-elevated">
                  <Image
                    src="/home/waiting_room.jpg"
                    alt="Modern Zayra Dental Clinic"
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
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill="var(--primary-teal)"
                          color="var(--primary-teal)"
                        />
                      ))}
                    </div>
                    <div className="heading-tertiary text-accent mb-1">
                      4.9/5
                    </div>
                    <div className="small text-subtle">
                      Based on 200+ reviews
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Action Cards */}
      <section className="section-modern bg-cream overflow-y-hidden">
        <div className="container-modern" >
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up">
              <div className="card-modern text-center h-100">
                <div className="mb-3">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "var(--primary-teal)",
                      color: "white",
                    }}
                  >
                    <Phone size={32} />
                  </div>
                </div>
                <h3 className="heading-tertiary mb-3">Call Us</h3>
                <p className="text-subtle mb-3">
                  Speak directly with our friendly team for immediate assistance
                </p>
                <a
                  href="tel:01132488398"
                  className="btn-teal"
                  style={{ textDecoration: "none" }}
                >
                  Call 0113 248 8398
                </a>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div
                className="card-elevated text-center h-100"
                style={{ transform: "translateY(-20px)" }}
              >
                <div className="mb-3">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "var(--primary-brown)",
                      color: "white",
                    }}
                  >
                    <Calendar size={32} />
                  </div>
                </div>
                <h3 className="heading-tertiary mb-3">Send Enquiry</h3>
                <p className="text-subtle mb-3">
                  Send your Enquiry online 24/7 at your convenience
                </p>
                <Link href="/contact" className="btn-primary-modern">
                  Contact
                </Link>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card-modern text-center h-100">
                <div className="mb-3">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "var(--accent-teal)",
                      color: "white",
                    }}
                  >
                    <MapPin size={32} />
                  </div>
                </div>
                <h3 className="heading-tertiary mb-3">Find Us</h3>
                <p className="text-subtle mb-3">
                  Located in the heart of Leeds, easily accessible by car or
                  public transport
                </p>
                <Link href="/contact" className="btn-secondary-modern">
                  Get Directions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-modern bg-white">
        <div className="container-modern">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="position-relative">
                <Image
                  src="/about-us/reshma_parambil.jpg"
                  alt="Dr. Reshma Parambil - Principal Dentist"
                  width={500}
                  height={600}
                  className="img-fluid rounded-modern shadow-modern"
                  style={{ objectFit: "cover" }}
                />

                {/* Experience Badge */}
                <div
                  className="card-modern position-absolute d-none d-md-block"
                  style={{
                    top: "30px",
                    right: "30px",
                    padding: "1rem",
                  }}
                >
                  <div className="text-center">
                    <div className="heading-tertiary text-accent mb-1">15+</div>
                    <div className="small text-subtle">Years Experience</div>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <div className="mb-4">
                <span className="text-accent fw-medium">
                  About Zayra Dental
                </span>
                <h2 className="heading-secondary mt-2 mb-4">
                  Meet Our Award-Winning Principal Dentist
                </h2>
              </div>

              <div className="mb-4">
                <h3 className="heading-tertiary text-primary-brown mb-2">
                  Dr. Reshma Parambil
                </h3>
                <p className="text-subtle mb-3">BDS, MDS – Oral & Maxillofacial Surgery</p>
                <blockquote
                  className="border-start border-5 ps-4 mb-4"
                  style={{ borderColor: "var(--primary-teal)" }}
                >
                  <p className="fst-italic lead">
                    &quot;I believe everyone deserves a healthy, confident
                    smile—without fear or financial worry.&quot;
                  </p>
                </blockquote>
              </div>

              <p className="text-subtle mb-4">
                With over 15 years of experience in general and surgical dentistry, Dr.
                Reshma brings advanced training in oral and maxillofacial
                surgery from Mysore, India, Implantology Training in the UK and specialized expertise in
                restorative and cosmetic dentistry.
              </p>

              <div className="row g-3 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <CheckCircle size={20} className="text-accent" />
                    <span>Implantologist Specialist</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <CheckCircle size={20} className="text-accent" />
                    <span>Cosmetic Dentistry Expert</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <CheckCircle size={20} className="text-accent" />
                    <span>Restorative Specialist</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <CheckCircle size={20} className="text-accent" />
                    <span>Patient-Centered Care</span>
                  </div>
                </div>
              </div>

              <Link href="/about-us" className="btn-secondary-modern">
                Learn More About Us
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-modern bg-light-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Our Services</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Comprehensive Dental Care Solutions
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              From routine checkups to advanced cosmetic procedures, we offer a
              complete range of dental services to keep your smile healthy and
              beautiful.
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                icon: <Sparkles size={32} />,
                title: "Cosmetic Dentistry",
                description:
                  "Transform your smile with veneers, teeth whitening, and cosmetic bonding",
                color: "var(--primary-teal)",
              },
              {
                icon: <Shield size={32} />,
                title: "Preventive Care",
                description:
                  "Regular checkups, cleanings, and preventive treatments to maintain oral health",
                color: "var(--primary-brown)",
              },
              {
                icon: <Heart size={32} />,
                title: "Restorative Dentistry",
                description:
                  "Dental implants, crowns, bridges, and fillings to restore function and beauty",
                color: "var(--accent-teal)",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="service-card-modern h-100">
                  <div className="service-content text-center">
                    <div
                      className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                      style={{
                        width: "80px",
                        height: "80px",
                        background: service.color,
                        color: "white",
                      }}
                    >
                      {service.icon}
                    </div>
                    <h3 className="heading-tertiary mb-3">{service.title}</h3>
                    <p className="text-subtle mb-4">{service.description}</p>
                    <Link
                      href="/services"
                      className="text-decoration-none d-inline-flex align-items-center gap-2"
                      style={{ color: service.color, fontWeight: "500" }}
                    >
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5" data-aos="fade-up">
            <Link href="/services" className="btn-primary-modern">
              View All Services
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="section-modern"
        style={{ background: "rgb(255, 216, 174)" }}
      >
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">
              Why Choose Zayra Dental
            </span>
            <h2 className="heading-secondary mt-2 mb-4">
              Excellence in Every Aspect of Care
            </h2>
          </div>

          <div className="row g-4">
            {[
              {
                icon: <Clock size={40} />,
                title: "Flexible Hours",
                description:
                  "Emergency appointments to suit your needs",
              },
              {
                icon: <Shield size={40} />,
                title: "Latest Technology",
                description:
                  "State-of-the-art equipment and modern techniques for better outcomes",
              },
              {
                icon: <Heart size={40} />,
                title: "Gentle Care",
                description:
                  "Comfortable, anxiety-free environment with sedation options available",
              },
              {
                icon: <Award size={40} />,
                title: "Expert Team",
                description:
                  "Highly qualified professionals committed to continuing education",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="col-md-6 col-lg-3"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-center">
                  <div className="text-accent mb-3">{feature.icon}</div>
                  <h4 className="heading-tertiary mb-3">{feature.title}</h4>
                  <p className="text-subtle">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Reviews */}
      <section className="section-modern bg-cream">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Patient Reviews</span>
            <h2 className="heading-secondary mt-2 mb-4">
              What Our Patients Say About Us
            </h2>
          </div>

          <div className="row g-4">
            {[
              {
                name: "Sarah Johnson",
                profession: "Marketing Manager",
                rating: 5,
                review:
                  "Exceptional service from start to finish. Dr. Reshma and her team made me feel completely at ease during my treatment. Highly recommend!",
                image: "/bg-gallery.jpg",
              },
              {
                name: "Michael Chen",
                profession: "Software Engineer",
                rating: 5,
                review:
                  "The best dental experience I've ever had. Modern facility, friendly staff, and painless procedures. My smile has never looked better!",
                image: "/bg-gallery.jpg",
              },
              {
                name: "Emma Williams",
                profession: "Teacher",
                rating: 5,
                review:
                  "Professional, caring, and thorough. The team at Zayra Dental genuinely cares about their patients' wellbeing and comfort.",
                image: "/bg-gallery.jpg",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="testimonial-card h-100">
                  <div className="d-flex mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill="var(--primary-teal)"
                        color="var(--primary-teal)"
                      />
                    ))}
                  </div>
                  <p className="text-subtle mb-4 fst-italic">
                    &quot;{review.review}&quot;
                  </p>
                  <div className="d-flex align-items-center gap-3">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={50}
                      height={50}
                      className="rounded-circle"
                      style={{ objectFit: "cover" }}
                    />
                    <div>
                      <div className="fw-semibold">{review.name}</div>
                      <div className="small text-subtle">
                        {review.profession}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5" data-aos="fade-up">
            <div className="d-inline-flex align-items-center gap-2 text-subtle">
              <Star
                size={20}
                fill="var(--primary-teal)"
                color="var(--primary-teal)"
              />
              <span className="fw-semibold">4.9/5 average rating</span>
              <span>based on 200+ reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-modern bg-white">
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
                  Ready to Transform Your Smile?
                </h2>
                <p className="lead mb-4 opacity-90">
                  Schedule your consultation today and take the first step
                  towards a healthier, more confident smile.
                </p>
                <div className="d-flex flex-wrap gap-3 justify-content-center">
                  <Link
                    href="/appointment"
                    className="btn"
                    style={{
                      background: "white",
                      color: "var(--accent-teal)",
                      border: "none",
                      padding: "1rem 2rem",
                      borderRadius: "50px",
                      fontWeight: "500",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
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
                      padding: "1rem 2rem",
                      borderRadius: "50px",
                      fontWeight: "500",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Phone size={20} />
                    Call Now
                  </a>
                </div>
              </div>
              <div className="col-lg-4 d-none d-lg-block">
                <div className="text-center">
                  <div className="d-flex justify-content-center gap-4">
                    <div>
                      <div className="h3 mb-1" style={{ color: "white" }}>
                        15+
                      </div>
                      <div className="small opacity-90">Years Experience</div>
                    </div>
                    <div>
                      <div className="h3 mb-1" style={{ color: "white" }}>
                        1000+
                      </div>
                      <div className="small opacity-90">Happy Patients</div>
                    </div>
                    <div>
                      <div className="h3 mb-1" style={{ color: "white" }}>
                        4.9★
                      </div>
                      <div className="small opacity-90">Average Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
