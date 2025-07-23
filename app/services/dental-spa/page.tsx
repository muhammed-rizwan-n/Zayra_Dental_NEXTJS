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
  Clock,
  Leaf,
} from "lucide-react";
import ServiceReview from "@/components/ServiceReview";

export const metadata: Metadata = {
  title: "Dental Spa Leeds | Luxury Dental Treatments | Zayra Dental",
  description:
    "Experience luxury dental care at our dental spa in Leeds. Relaxing treatments, comfort amenities & premium dental services. Award-winning practice with spa-like comfort.",
  keywords: [
    "dental spa Leeds",
    "luxury dental care Leeds",
    "relaxing dental treatment",
    "comfort dentistry Leeds",
    "spa dentistry Leeds",
    "premium dental services",
    "luxury dental practice",
    "comfort dental treatment",
    "relaxation dentistry Leeds",
    "high-end dental care",
  ],
  openGraph: {
    title: "Dental Spa Leeds | Luxury Dental Treatments | Zayra Dental",
    description:
      "Experience luxury dental care at our dental spa in Leeds. Relaxing treatments with spa-like comfort and premium dental services.",
    url: "https://www.zayradental.co.uk/services/dental-spa",
    images: [
      {
        url: "/services/dental_spa.jpg",
        width: 1200,
        height: 630,
        alt: "Dental Spa Leeds - Zayra Dental",
      },
    ],
  },
  alternates: {
    canonical: "https://zayradental.co.uk/services/dental-spa",
  },
};

export default function DentalSpa() {
  const spaServices = [
    {
      name: "Relaxation Dentistry",
      description:
        "Dental treatments in a spa-like environment with comfort amenities",
      features: [
        "Aromatherapy",
        "Soft music",
        "Comfort blankets",
        "Gentle approach",
      ],
      icon: <Leaf size={32} />,
      color: "var(--primary-teal)",
    },
    {
      name: "Premium Cleaning",
      description: "Comprehensive dental cleaning with luxury touch",
      features: [
        "Deep cleaning",
        "Polish & fluoride",
        "Comfort experience",
        "Oral health advice",
      ],
      icon: <Sparkles size={32} />,
      color: "var(--primary-brown)",
    },
    {
      name: "Whitening Spa",
      description: "Professional teeth whitening in relaxing spa setting",
      features: [
        "Professional grade",
        "Comfortable setting",
        "Immediate results",
        "Aftercare kit",
      ],
      icon: <Star size={32} />,
      color: "var(--accent-teal)",
    },
  ];

  const amenities = [
    {
      name: "Comfort Environment",
      description: "Relaxing atmosphere with soft lighting and calming music",
      icon: <Heart size={24} />,
    },
    {
      name: "Premium Care",
      description:
        "Extended appointment times for unhurried, thorough treatment",
      icon: <Clock size={24} />,
    },
    {
      name: "Luxury Amenities",
      description: "Comfort blankets, aromatherapy, and refreshments",
      icon: <Sparkles size={24} />,
    },
    {
      name: "Gentle Approach",
      description: "Pain-free techniques with sedation options available",
      icon: <Shield size={24} />,
    },
  ];

  const packages = [
    {
      name: "Spa Clean & Polish",
      duration: "90 minutes",
      includes: [
        "Comprehensive examination",
        "Professional cleaning",
        "Polish & fluoride",
        "Relaxation amenities",
      ],
      ideal: "Maintenance and prevention",
    },
    {
      name: "Smile Renewal Spa",
      duration: "2 hours",
      includes: [
        "Deep cleaning",
        "Teeth whitening",
        "Oral health consultation",
        "Premium aftercare",
      ],
      ideal: "Special occasions",
    },
    {
      name: "Complete Wellness Package",
      duration: "3 hours",
      includes: [
        "Full examination",
        "Professional cleaning",
        "Whitening treatment",
        "Relaxation experience",
      ],
      ideal: "Complete oral health reset",
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
                <span className="text-subtle">Dental Spa</span>
              </div>

              <h1 className="heading-primary mb-4">
                Dental
                <span className="text-primary-brown d-block">
                  Spa Experience
                </span>
              </h1>
              <p className="lead text-subtle mb-4">
                Transform your dental visit into a luxury spa experience. Enjoy
                premium dental care in a relaxing, comfortable environment
                designed to pamper you while maintaining your oral health.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <Link href="/appointment" className="btn-primary-modern">
                  <Calendar size={20} />
                  Book Spa Experience
                </Link>
                <a href="tel:01132488398" className="btn-secondary-modern">
                  <Phone size={20} />
                  Enquire Now
                </a>
              </div>

              {/* Spa Features */}
              <div className="d-flex flex-wrap gap-4 text-subtle">
                <div className="d-flex align-items-center gap-2">
                  <Leaf size={18} className="text-accent" />
                  <span className="small">Aromatherapy</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Heart size={18} className="text-accent" />
                  <span className="small">Comfort Care</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Star size={18} className="text-accent" />
                  <span className="small">Premium Service</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 mt-3 md:mt-0"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="position-relative">
                <div className="card-elevated text-center">
                  <Image
                    src="/services/dental_spa.jpg"
                    alt="Dental Spa Experience"
                    width={600}
                    height={500}
                    className="img-fluid rounded-modern"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>

                {/* Floating Spa Badge */}
                <div
                  className="card-modern position-absolute d-none d-md-block"
                  style={{
                    bottom: "20px",
                    left: "20px",
                    minWidth: "200px",
                    background: "var(--primary-teal)",
                    color: "white",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="text-center">
                    <Sparkles size={24} className="mb-2" />
                    <div className="fw-medium">Luxury</div>
                    <div className="small opacity-90">Spa Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spa Services */}
      <section className="section-modern bg-cream">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Spa Services</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Luxury Dental Treatments with Spa Comfort
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Experience dental care like never before with our spa-inspired
              treatments that combine clinical excellence with ultimate comfort.
            </p>
          </div>

          <div className="row g-4">
            {spaServices.map((service, index) => (
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
                        width: "80px",
                        height: "80px",
                        background: service.color,
                        color: "white",
                      }}
                    >
                      {service.icon}
                    </div>
                  </div>
                  <h4 className="heading-tertiary mb-3 text-center">
                    {service.name}
                  </h4>
                  <p className="text-subtle mb-3 text-center">
                    {service.description}
                  </p>

                  <div className="mb-3">
                    <h6 className="fw-semibold mb-2">Features:</h6>
                    <ul className="list-unstyled">
                      {service.features.map((feature, fIndex) => (
                        <li
                          key={fIndex}
                          className="d-flex align-items-center gap-2 mb-1"
                        >
                          <CheckCircle size={16} className="text-accent" />
                          <span className="small">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spa Amenities */}
      <section className="section-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Spa Amenities</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Comfort & Luxury at Every Step
            </h2>
          </div>

          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <Image
                src="/gallery/Zayradental_Edits_11.jpg"
                alt="Luxury Dental Spa Environment"
                width={600}
                height={500}
                className="img-fluid rounded-modern shadow-modern"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <div className="row g-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="col-12">
                    <div className="d-flex align-items-start gap-3">
                      <div
                        className="rounded-circle d-inline-flex align-items-center justify-content-center"
                        style={{
                          width: "50px",
                          height: "50px",
                          background:
                            index % 2 === 0
                              ? "var(--primary-teal)"
                              : "var(--primary-brown)",
                          color: "white",
                          flexShrink: 0,
                        }}
                      >
                        {amenity.icon}
                      </div>
                      <div>
                        <h5 className="fw-semibold mb-2">{amenity.name}</h5>
                        <p className="text-subtle">{amenity.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spa Packages */}
      <section className="section-modern bg-light-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Spa Packages</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Choose Your Perfect Dental Spa Experience
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Our carefully curated spa packages combine essential dental care
              with luxury comfort for a truly relaxing experience.
            </p>
          </div>

          <div className="row g-4">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-modern h-100 text-center">
                  <div className="mb-3">
                    <div
                      className="badge rounded-pill px-3 py-2 mb-3"
                      style={{
                        background:
                          index === 1
                            ? "var(--primary-brown)"
                            : "var(--primary-teal)",
                        color: "white",
                        fontSize: "0.9rem",
                      }}
                    >
                      {pkg.duration}
                    </div>
                    <h4 className="heading-tertiary mb-3">{pkg.name}</h4>
                  </div>

                  <div className="mb-4">
                    <h6 className="fw-semibold mb-3">Package Includes:</h6>
                    <ul className="list-unstyled">
                      {pkg.includes.map((item, iIndex) => (
                        <li
                          key={iIndex}
                          className="d-flex align-items-center gap-2 mb-2"
                        >
                          <CheckCircle size={16} className="text-accent" />
                          <span className="small text-start">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <div className="small text-subtle mb-3">
                      <strong>Ideal for:</strong> {pkg.ideal}
                    </div>
                    <Link
                      href="/appointment"
                      className="btn btn-outline-primary rounded-pill"
                      style={{
                        borderColor: "var(--primary-teal)",
                        color: "var(--primary-teal)",
                      }}
                    >
                      Book Package
                    </Link>
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
            <span className="text-accent fw-medium">Your Spa Journey</span>
            <h2 className="heading-secondary mt-2 mb-4">
              What to Expect During Your Visit
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
                    background: "var(--primary-teal)",
                    color: "white",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  1
                </div>
                <h5 className="fw-semibold mb-3">Welcome & Relaxation</h5>
                <p className="text-subtle">
                  Arrive to a calming environment with aromatherapy and
                  refreshments while you unwind
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
                    background: "var(--primary-brown)",
                    color: "white",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  2
                </div>
                <h5 className="fw-semibold mb-3">Comfortable Consultation</h5>
                <p className="text-subtle">
                  Thorough discussion of your needs in our comfortable
                  consultation room
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
                    background: "var(--accent-teal)",
                    color: "white",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  3
                </div>
                <h5 className="fw-semibold mb-3">Luxury Treatment</h5>
                <p className="text-subtle">
                  Enjoy your dental treatment with comfort amenities and gentle
                  care techniques
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
                    background: "#dc3545",
                    color: "white",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  4
                </div>
                <h5 className="fw-semibold mb-3">Aftercare & Follow-up</h5>
                <p className="text-subtle">
                  Receive aftercare instructions and schedule follow-up
                  appointments as needed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="section-modern bg-cream">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Spa Reviews</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Luxury Dental Experience Reviews
            </h2>
          </div>

          <ServiceReview data="dental-spa" />
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
                    Ready for Your Luxury Dental Spa Experience?
                  </h3>
                  <p className="mb-0" style={{ opacity: 0.9 }}>
                    Book your spa appointment and experience dental care like
                    never before
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-4">
                <div>
                  <div className="h5 mb-1" style={{ color: "white" }}>
                    Luxury
                  </div>
                  <div className="small" style={{ opacity: 0.9 }}>
                    Comfort
                  </div>
                </div>
                <div>
                  <div className="h5 mb-1" style={{ color: "white" }}>
                    Premium
                  </div>
                  <div className="small" style={{ opacity: 0.9 }}>
                    Care
                  </div>
                </div>
                <div>
                  <div className="h5 mb-1" style={{ color: "white" }}>
                    Relaxing
                  </div>
                  <div className="small" style={{ opacity: 0.9 }}>
                    Experience
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
                Book Spa Experience
              </Link>
              <div className="small text-center" style={{ opacity: 0.9 }}>
                Luxury dental spa treatments in Leeds
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
