import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Camera,
  ArrowRight,
  Calendar,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Dental Clinic Gallery Leeds | Before & After Results | Zayra Dental Photos",
  description:
    "See our award-winning modern dental clinic in Leeds & amazing before/after results. View teeth whitening, veneers, implants & smile makeover transformations. Virtual clinic tour available.",
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
    "CQC registered dentist",
    "award winning dental practice",
  ],
  openGraph: {
    title:
      "Dental Clinic Gallery Leeds | Before & After Results | Zayra Dental",
    description:
      "See our award-winning modern dental clinic in Leeds & amazing before/after results. View teeth whitening, veneers & smile makeover transformations.",
    url: "https://zayradental.co.uk/gallery",
    images: [
      {
        url: "/gallery/Zayradental_Edits_11.jpg",
        width: 1200,
        height: 630,
        alt: "Zayra Dental Clinic Gallery Leeds - Award-Winning Modern Dental Practice",
      },
    ],
  },
  alternates: {
    canonical: "https://zayradental.co.uk/gallery",
  },
};

export default function Gallery() {
  const clinicInterior = {
    title: "Clinical Interior & Treatment Rooms",
    description:
      "Modern facilities with multiple treatment rooms and state-of-the-art equipment",
    images: [
      {
        src: "/gallery/Zayradental_Edits_29.jpg",
        alt: "Modern Reception Area - Award-winning dental practice",
        category: "Reception",
      },
      {
        src: "/gallery/Zayradental_Edits_13.jpg",
        alt: "Treatment Room 1 - State-of-the-art equipment",
        category: "Treatment Room",
      },
      {
        src: "/home/waiting_room.jpg",
        alt: "Comfortable Waiting Area - Patient comfort focused",
        category: "Patient Area",
      },
      {
        src: "/gallery/Zayradental_Edits_11.jpg",
        alt: "Treatment Room 2 - Advanced dental technology",
        category: "Treatment Room",
      },
      {
        src: "/about-us/op.jpg",
        alt: "Treatment Room 3 - Modern dental suite",
        category: "Treatment Room",
      },
      {
        src: "/about-us/ab2.jpg",
        alt: "Clinical Area - Professional environment",
        category: "Clinical",
      },
    ],
  };

  const ourTeam = {
    title: "Our Professional Team",
    description:
      "Meet the expert dental professionals providing award-winning care",
    images: [
      {
        src: "/about-us/reshma_parambil.jpg",
        alt: "Dr. Reshma Parambil - Principal Dentist & Award Winner",
        category: "Principal Dentist",
      },
      {
        src: "/about-us/emilio.jpg",
        alt: "Dr. Emilio Cecamore - Associate Dentist",
        category: "Associate Dentist",
      },
      {
        src: "/about-us/bg-team.jpg",
        alt: "Dental Team - Professional care providers",
        category: "Team",
      },
    ],
  };

  const treatmentResults = {
    title: "Treatment Results & Procedures",
    description: "Showcasing our expertise in various dental treatments",
    images: [
      {
        src: "/services/dental_bonding.jpg",
        alt: "Dental Bonding Results - Cosmetic dentistry",
        category: "Cosmetic",
      },
      {
        src: "/services/teeth_white.jpg",
        alt: "Teeth Whitening Results - Professional whitening",
        category: "Whitening",
      },
      {
        src: "/services/dental_aligners.jpeg",
        alt: "Dental Aligners Treatment - Orthodontics",
        category: "Orthodontics",
      },
      {
        src: "/services/dental_implant.jpeg",
        alt: "Dental Implant Procedure - Restorative dentistry",
        category: "Implants",
      },
      {
        src: "/services/facial_aesthetics.jpg",
        alt: "Facial Aesthetics Treatment - Professional care",
        category: "Aesthetics",
      },
      {
        src: "/services/dental_spa.jpg",
        alt: "Dental Spa Experience - Luxury comfort",
        category: "Spa",
      },
    ],
  };

  const allImages = [
    ...clinicInterior.images,
    ...ourTeam.images,
    ...treatmentResults.images,
  ];

  const stats = [
    { number: "1000+", label: "Happy Patients" },
    { number: "15+", label: "Years Experience" },
    { number: "5000+", label: "Successful Treatments" },
    { number: "4.9★", label: "Patient Rating" },
  ];

  return (
    <>
      {/* Lightbox Styles */}
      <style jsx>{`
        .gallery-image {
          cursor: pointer;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }
        .gallery-image:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }
        .gallery-card:hover .gallery-overlay {
          opacity: 1;
        }
        .gallery-overlay {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          display: none;
          z-index: 9999;
          align-items: center;
          justify-content: center;
        }
        .lightbox.active {
          display: flex;
        }
        .lightbox-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
        }
        .lightbox-image {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
        }
        .lightbox-close {
          position: absolute;
          top: -40px;
          right: 0;
          color: white;
          background: none;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          z-index: 10000;
        }
        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease;
        }
        .lightbox-nav:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        .lightbox-prev {
          left: -70px;
        }
        .lightbox-next {
          right: -70px;
        }
        .lightbox-info {
          position: absolute;
          bottom: -50px;
          left: 0;
          right: 0;
          color: white;
          text-align: center;
        }
        .masonry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1rem;
          grid-auto-rows: 10px;
        }
        .masonry-item {
          grid-row-end: span var(--row-span);
        }
        .masonry-item:nth-child(3n) {
          --row-span: 35;
        }
        .masonry-item:nth-child(3n + 1) {
          --row-span: 40;
        }
        .masonry-item:nth-child(3n + 2) {
          --row-span: 30;
        }
      `}</style>

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
                Award-Winning Clinic &
                <span className="text-primary-brown d-block">
                  Amazing Results
                </span>
              </h1>
              <p className="lead text-subtle mb-4">
                Take a virtual tour of our CQC registered, award-winning dental
                practice and see the incredible smile transformations we&apos;ve
                achieved. Every picture tells a story of confidence, health, and
                professional excellence.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4">
                <Link href="/appointment" className="btn-primary-modern">
                  <Calendar size={20} />
                  Book Your Visit
                </Link>
              </div>

              {/* Updated Stats */}
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
                    alt="Award-Winning Zayra Dental Reception Area"
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

      {/* Clinical Interior Section */}
      <section className="section-modern bg-cream">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Clinical Interior</span>
            <h2 className="heading-secondary mt-2 mb-4">
              {clinicInterior.title}
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              {clinicInterior.description}
            </p>
          </div>

          <div className="row g-4">
            {clinicInterior.images.map((image, imageIndex) => (
              <div
                key={imageIndex}
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={imageIndex * 100}
              >
                <div className="card-modern overflow-hidden p-0 h-100 gallery-card">
                  <div
                    className="position-relative overflow-hidden"
                    style={{ height: "280px" }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="gallery-image"
                      style={{ objectFit: "cover" }}
                      onClick={() => {
                        const lightbox = document.getElementById("lightbox");
                        const lightboxImage =
                          document.getElementById("lightbox-image");
                        const lightboxCaption =
                          document.getElementById("lightbox-caption");
                        const lightboxCategory =
                          document.getElementById("lightbox-category");

                        if (
                          lightbox &&
                          lightboxImage &&
                          lightboxCaption &&
                          lightboxCategory
                        ) {
                          lightboxImage.src = image.src;
                          lightboxImage.alt = image.alt;
                          lightboxCaption.textContent = image.alt;
                          lightboxCategory.textContent = image.category;
                          lightbox.dataset.currentIndex = String(
                            allImages.findIndex((img) => img.src === image.src),
                          );
                          lightbox.classList.add("active");
                          document.body.style.overflow = "hidden";
                        }
                      }}
                    />

                    {/* Hover Overlay */}
                    <div
                      className="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                      style={{
                        background: "rgba(115, 175, 170, 0.9)",
                      }}
                    >
                      <div className="text-center text-white">
                        <Eye size={32} className="mb-2" />
                        <div className="fw-medium">View Full Size</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3">
                    <h6 className="fw-semibold mb-2">{image.alt}</h6>
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
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Our Team</span>
            <h2 className="heading-secondary mt-2 mb-4">{ourTeam.title}</h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              {ourTeam.description}
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {ourTeam.images.map((image, imageIndex) => (
              <div
                key={imageIndex}
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={imageIndex * 100}
              >
                <div className="card-modern overflow-hidden p-0 h-100 gallery-card">
                  <div
                    className="position-relative overflow-hidden"
                    style={{ height: "350px" }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="gallery-image"
                      style={{ objectFit: "cover" }}
                      onClick={() => {
                        const lightbox = document.getElementById("lightbox");
                        const lightboxImage =
                          document.getElementById("lightbox-image");
                        const lightboxCaption =
                          document.getElementById("lightbox-caption");
                        const lightboxCategory =
                          document.getElementById("lightbox-category");

                        if (
                          lightbox &&
                          lightboxImage &&
                          lightboxCaption &&
                          lightboxCategory
                        ) {
                          lightboxImage.src = image.src;
                          lightboxImage.alt = image.alt;
                          lightboxCaption.textContent = image.alt;
                          lightboxCategory.textContent = image.category;
                          lightbox.dataset.currentIndex = String(
                            allImages.findIndex((img) => img.src === image.src),
                          );
                          lightbox.classList.add("active");
                          document.body.style.overflow = "hidden";
                        }
                      }}
                    />

                    {/* Hover Overlay */}
                    <div
                      className="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                      style={{
                        background: "rgba(182, 119, 88, 0.9)",
                      }}
                    >
                      <div className="text-center text-white">
                        <Eye size={32} className="mb-2" />
                        <div className="fw-medium">View Full Size</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3">
                    <h6 className="fw-semibold mb-2">{image.alt}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                      <span
                        className="badge rounded-pill"
                        style={{
                          background: "var(--primary-brown)",
                          color: "white",
                          fontSize: "0.75rem",
                        }}
                      >
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Results Section */}
      <section className="section-modern bg-light-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Treatment Gallery</span>
            <h2 className="heading-secondary mt-2 mb-4">
              {treatmentResults.title}
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              {treatmentResults.description}
            </p>
          </div>

          <div className="row g-4">
            {treatmentResults.images.map((image, imageIndex) => (
              <div
                key={imageIndex}
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={imageIndex * 100}
              >
                <div className="card-modern overflow-hidden p-0 h-100 gallery-card">
                  <div
                    className="position-relative overflow-hidden"
                    style={{ height: "250px" }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="gallery-image"
                      style={{ objectFit: "cover" }}
                      onClick={() => {
                        const lightbox = document.getElementById("lightbox");
                        const lightboxImage =
                          document.getElementById("lightbox-image");
                        const lightboxCaption =
                          document.getElementById("lightbox-caption");
                        const lightboxCategory =
                          document.getElementById("lightbox-category");

                        if (
                          lightbox &&
                          lightboxImage &&
                          lightboxCaption &&
                          lightboxCategory
                        ) {
                          lightboxImage.src = image.src;
                          lightboxImage.alt = image.alt;
                          lightboxCaption.textContent = image.alt;
                          lightboxCategory.textContent = image.category;
                          lightbox.dataset.currentIndex = String(
                            allImages.findIndex((img) => img.src === image.src),
                          );
                          lightbox.classList.add("active");
                          document.body.style.overflow = "hidden";
                        }
                      }}
                    />

                    {/* Hover Overlay */}
                    <div
                      className="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                      style={{
                        background: "rgba(55, 119, 122, 0.9)",
                      }}
                    >
                      <div className="text-center text-white">
                        <Eye size={32} className="mb-2" />
                        <div className="fw-medium">View Full Size</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3">
                    <h6 className="fw-semibold mb-2">{image.alt}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                      <span
                        className="badge rounded-pill"
                        style={{
                          background: "var(--accent-teal)",
                          color: "white",
                          fontSize: "0.75rem",
                        }}
                      >
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Gallery Grid */}
      <section className="section-modern">
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
              results, and team pictures. Click any image to view in full size.
            </p>
          </div>

          {/* Masonry-style Gallery Grid */}
          <div className="masonry-grid">
            {allImages.map((image, index) => (
              <div
                key={index}
                className="masonry-item"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="card-modern overflow-hidden p-0 mb-3 gallery-card">
                  <div className="position-relative overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="gallery-image w-100"
                      style={{ objectFit: "cover", height: "auto" }}
                      onClick={() => {
                        const lightbox = document.getElementById("lightbox");
                        const lightboxImage =
                          document.getElementById("lightbox-image");
                        const lightboxCaption =
                          document.getElementById("lightbox-caption");
                        const lightboxCategory =
                          document.getElementById("lightbox-category");

                        if (
                          lightbox &&
                          lightboxImage &&
                          lightboxCaption &&
                          lightboxCategory
                        ) {
                          lightboxImage.src = image.src;
                          lightboxImage.alt = image.alt;
                          lightboxCaption.textContent = image.alt;
                          lightboxCategory.textContent = image.category;
                          lightbox.dataset.currentIndex = String(index);
                          lightbox.classList.add("active");
                          document.body.style.overflow = "hidden";
                        }
                      }}
                    />

                    {/* Hover Effect */}
                    <div
                      className="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end"
                      style={{
                        background:
                          "linear-gradient(transparent, rgba(0,0,0,0.7))",
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
                    Visit our award-winning clinic for a personal tour and
                    experience our facilities firsthand
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
      <section className="section-modern bg-cream">
        <div className="container-modern">
          <div className="text-center" data-aos="fade-up">
            <h2 className="heading-secondary mb-4">
              Ready to Create Your Own Success Story?
            </h2>
            <p className="lead text-subtle mb-4">
              Join hundreds of satisfied patients who have transformed their
              smiles at our award-winning dental practice. Your perfect smile
              journey starts with a simple consultation.
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

      {/* Lightbox */}
      <div
        id="lightbox"
        className="lightbox"
        onClick={(e) => {
          if (e.target.id === "lightbox") {
            e.target.classList.remove("active");
            document.body.style.overflow = "auto";
          }
        }}
      >
        <div className="lightbox-content">
          <button
            className="lightbox-close"
            onClick={() => {
              const lightbox = document.getElementById("lightbox");
              if (lightbox) {
                lightbox.classList.remove("active");
                document.body.style.overflow = "auto";
              }
            }}
          >
            <X size={24} />
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={() => {
              const lightbox = document.getElementById("lightbox");
              const lightboxImage = document.getElementById("lightbox-image");
              const lightboxCaption =
                document.getElementById("lightbox-caption");
              const lightboxCategory =
                document.getElementById("lightbox-category");

              if (
                lightbox &&
                lightboxImage &&
                lightboxCaption &&
                lightboxCategory
              ) {
                const currentIndex = parseInt(
                  lightbox.dataset.currentIndex || "0",
                );
                const newIndex =
                  currentIndex > 0 ? currentIndex - 1 : allImages.length - 1;
                const newImage = allImages[newIndex];

                lightboxImage.src = newImage.src;
                lightboxImage.alt = newImage.alt;
                lightboxCaption.textContent = newImage.alt;
                lightboxCategory.textContent = newImage.category;
                lightbox.dataset.currentIndex = String(newIndex);
              }
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className="lightbox-nav lightbox-next"
            onClick={() => {
              const lightbox = document.getElementById("lightbox");
              const lightboxImage = document.getElementById("lightbox-image");
              const lightboxCaption =
                document.getElementById("lightbox-caption");
              const lightboxCategory =
                document.getElementById("lightbox-category");

              if (
                lightbox &&
                lightboxImage &&
                lightboxCaption &&
                lightboxCategory
              ) {
                const currentIndex = parseInt(
                  lightbox.dataset.currentIndex || "0",
                );
                const newIndex =
                  currentIndex < allImages.length - 1 ? currentIndex + 1 : 0;
                const newImage = allImages[newIndex];

                lightboxImage.src = newImage.src;
                lightboxImage.alt = newImage.alt;
                lightboxCaption.textContent = newImage.alt;
                lightboxCategory.textContent = newImage.category;
                lightbox.dataset.currentIndex = String(newIndex);
              }
            }}
          >
            <ChevronRight size={24} />
          </button>

          <img id="lightbox-image" alt="" className="lightbox-image" />

          <div className="lightbox-info">
            <div id="lightbox-caption" className="fw-medium mb-1"></div>
            <div id="lightbox-category" className="small opacity-75"></div>
          </div>
        </div>
      </div>
    </>
  );
}
