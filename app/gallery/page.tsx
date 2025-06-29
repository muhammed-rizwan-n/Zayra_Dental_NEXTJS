import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Camera,
  ArrowRight,
  Calendar,
  Eye,
  Share2,
  Maximize2,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Dental Clinic Gallery Leeds | Before & After Results | Zayra Dental Photos",
  description:
    "See our modern dental clinic in Leeds & amazing before/after results. View teeth whitening, veneers, implants & smile makeover transformations. Virtual clinic tour available.",
  keywords: [
    "dental clinic Leeds photos",
    "dental before after Leeds",
    "teeth whitening results",
    "dental transformation Leeds",
    "smile makeover Leeds",
    "dental clinic interior",
    "dental treatment results",
    "cosmetic dentistry results",
    "dental practice Leeds tour",
    "dental gallery Leeds",
  ],
  openGraph: {
    title:
      "Dental Clinic Gallery Leeds | Before & After Results | Zayra Dental",
    description:
      "See our modern dental clinic in Leeds & amazing before/after results. View teeth whitening, veneers & smile makeover transformations.",
    url: "https://zayradental.co.uk/gallery",
    images: [
      {
        url: "/gallery/Zayradental_Edits_11.jpg",
        width: 1200,
        height: 630,
        alt: "Zayra Dental Clinic Gallery Leeds - Modern Dental Practice",
      },
    ],
  },
  alternates: {
    canonical: "https://zayradental.co.uk/gallery",
  },
};

export default function Gallery() {
  const galleryCategories = [
    {
      title: "Clinic Interior",
      description:
        "Take a virtual tour of our modern, comfortable dental practice",
      images: [
        {
          src: "/gallery/Zayradental_Edits_11.jpg",
          alt: "Reception Area",
          category: "interior",
        },
        {
          src: "/gallery/Zayradental_Edits_02.jpg",
          alt: "Treatment Room",
          category: "interior",
        },
        {
          src: "/home/waiting_room.jpg",
          alt: "Waiting Area",
          category: "interior",
        },
        {
          src: "/gallery/file.svg",
          alt: "Modern Equipment",
          category: "interior",
        },
      ],
    },
    {
      title: "Before & After",
      description:
        "See the amazing transformations we've achieved for our patients",
      images: [
        {
          src: "/services/dental_bonding.jpg",
          alt: "Dental Bonding Results",
          category: "results",
        },
        {
          src: "/services/teeth_white.jpg",
          alt: "Teeth Whitening Results",
          category: "results",
        },
        {
          src: "/services/dental_aligners.jpeg",
          alt: "Aligner Treatment",
          category: "results",
        },
        {
          src: "/services/dental_implant.jpeg",
          alt: "Dental Implant",
          category: "results",
        },
      ],
    },
    {
      title: "Our Team",
      description:
        "Meet the friendly professionals who will take care of your smile",
      images: [
        {
          src: "/about-us/reshma_parambil.jpg",
          alt: "Dr. Reshma Parambil",
          category: "team",
        },
        {
          src: "/about-us/emilio.jpg",
          alt: "Dr. Emilio Cecamore",
          category: "team",
        },
        { src: "/bg-gallery.jpg", alt: "Team Photo", category: "team" },
        { src: "/bg-gallery.jpg", alt: "Staff Meeting", category: "team" },
      ],
    },
  ];

  const allImages = galleryCategories.flatMap((category) => category.images);

  const stats = [
    { number: "500+", label: "Happy Patients" },
    { number: "15+", label: "Years Experience" },
    { number: "1000+", label: "Successful Treatments" },
    { number: "4.9★", label: "Patient Rating" },
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
              <span className="text-accent fw-medium">Our Gallery</span>
              <h1 className="heading-primary mt-2 mb-4">
                See Our Modern Clinic &
                <span className="text-primary-brown d-block">
                  Amazing Results
                </span>
              </h1>
              <p className="lead text-subtle mb-4">
                Take a virtual tour of our state-of-the-art dental practice and
                see the incredible smile transformations we&apos;ve achieved for
                our patients. Every picture tells a story of confidence, health,
                and happiness.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4">
                <Link href="/appointment" className="btn-primary-modern">
                  <Calendar size={20} />
                  Book Your Visit
                </Link>
                <Link href="/about-us" className="btn-secondary-modern">
                  <Eye size={20} />
                  Virtual Tour
                </Link>
              </div>

              {/* Stats */}
              <div className="row g-3 mt-4">
                {stats.map((stat, index) => (
                  <div key={index} className="col-6 col-lg-3">
                    <div className="text-center">
                      <div className="heading-tertiary text-accent mb-1">
                        {stat.number}
                      </div>
                      <div className="small text-subtle">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
              <div className="position-relative">
                <div className="card-elevated">
                  <Image
                    src="/gallery/Zayradental_Edits_11.jpg"
                    alt="Zayra Dental Reception Area"
                    width={600}
                    height={500}
                    className="img-fluid rounded-modern"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>

                {/* Floating Gallery Icon */}
                <div
                  className="position-absolute d-none d-md-block"
                  style={{
                    bottom: "20px",
                    right: "20px",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "var(--primary-teal)",
                      color: "white",
                      boxShadow: "var(--shadow-medium)",
                    }}
                  >
                    <Camera size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Categories */}
      {galleryCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`section-modern ${categoryIndex % 2 === 1 ? "bg-cream" : ""}`}
        >
          <div className="container-modern">
            <div className="text-center mb-5" data-aos="fade-up">
              <span className="text-accent fw-medium">Gallery</span>
              <h2 className="heading-secondary mt-2 mb-4">{category.title}</h2>
              <p
                className="lead text-subtle mx-auto"
                style={{ maxWidth: "600px" }}
              >
                {category.description}
              </p>
            </div>

            <div className="row g-4">
              {category.images.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className="col-lg-6 col-xl-3"
                  data-aos="fade-up"
                  data-aos-delay={imageIndex * 100}
                >
                  <div className="card-modern overflow-hidden p-0 h-100">
                    <div
                      className="position-relative overflow-hidden"
                      style={{ height: "250px" }}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="img-fluid"
                        style={{
                          objectFit: "cover",
                          transition: "var(--transition-smooth)",
                        }}
                      />

                      {/* Hover Overlay */}
                      <div
                        className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0"
                        style={{
                          background: "rgba(115, 175, 170, 0.9)",
                          transition: "var(--transition-smooth)",
                        }}
                      >
                        <div className="text-center text-white">
                          <Maximize2 size={32} className="mb-2" />
                          <div className="fw-medium">View Full Size</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-3">
                      <h5 className="fw-semibold mb-2">{image.alt}</h5>
                      <div className="d-flex justify-content-between align-items-center">
                        <span
                          className="badge rounded-pill"
                          style={{
                            background: "var(--primary-teal)",
                            color: "white",
                            fontSize: "0.75rem",
                          }}
                        >
                          {image.category}
                        </span>
                        <button
                          className="btn btn-sm"
                          style={{
                            background: "transparent",
                            border: "none",
                            color: "var(--primary-teal)",
                          }}
                        >
                          <Share2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Interactive Gallery Grid */}
      <section className="section-modern bg-light-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Complete Gallery</span>
            <h2 className="heading-secondary mt-2 mb-4">
              All Our Photos in One Place
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Browse through our complete collection of clinic photos, treatment
              results, and team pictures to get a comprehensive view of Zayra
              Dental.
            </p>
          </div>

          {/* Masonry-style Gallery Grid */}
          <div
            className="row g-3"
            style={{
              columnCount: "auto",
              columnFill: "balance",
            }}
          >
            {allImages.map((image, index) => (
              <div
                key={index}
                className={`col-lg-${index % 4 === 0 ? "6" : index % 3 === 0 ? "4" : "3"} col-md-6`}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div
                  className="card-modern overflow-hidden p-0 mb-3"
                  style={{
                    height:
                      index % 5 === 0
                        ? "350px"
                        : index % 3 === 0
                          ? "280px"
                          : "220px",
                  }}
                >
                  <div className="position-relative h-100 overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        transition: "var(--transition-smooth)",
                        cursor: "pointer",
                      }}
                    />

                    {/* Hover Effect */}
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end opacity-0"
                      style={{
                        background:
                          "linear-gradient(transparent, rgba(0,0,0,0.7))",
                        transition: "var(--transition-smooth)",
                      }}
                    >
                      <div className="p-3 text-white w-100">
                        <div className="fw-medium">{image.alt}</div>
                        <div className="small opacity-75">{image.category}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
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
                  <Eye size={28} />
                </div>
                <div>
                  <h3
                    className="heading-tertiary mb-1"
                    style={{ color: "white" }}
                  >
                    Want to See More?
                  </h3>
                  <p className="mb-0" style={{ opacity: 0.9 }}>
                    Visit our clinic for a personal tour and see our facilities
                    firsthand
                  </p>
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
                className="btn btn-light btn-lg"
                style={{
                  borderRadius: "50px",
                  padding: "1rem 2rem",
                  fontWeight: "500",
                  color: "var(--accent-teal)",
                }}
              >
                <Calendar size={20} />
                Schedule Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-modern">
        <div className="container-modern">
          <div className="text-center" data-aos="fade-up">
            <h2 className="heading-secondary mb-4">
              Ready to Create Your Own Success Story?
            </h2>
            <p className="lead text-subtle mb-4">
              Join hundreds of satisfied patients who have transformed their
              smiles at Zayra Dental. Your perfect smile journey starts with a
              simple consultation.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <Link href="/appointment" className="btn-primary-modern">
                <Calendar size={20} />
                Book Consultation
              </Link>
              <Link href="/contact" className="btn-secondary-modern">
                Get in Touch
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
