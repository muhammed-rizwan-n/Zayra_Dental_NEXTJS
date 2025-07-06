"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Eye, ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

interface GalleryClientProps {
  images: GalleryImage[];
  allImages: GalleryImage[];
  sectionColor?: string;
  imageHeight?: string;
  justify?: string;
  isMasonry?: boolean;
}

export default function GalleryClient({
  images,
  allImages,
  sectionColor = "var(--primary-teal)",
  imageHeight = "280px",
  justify = "",
  isMasonry = false,
}: GalleryClientProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState<GalleryImage[]>([]);

  const openLightbox = (image: GalleryImage, imageSet: GalleryImage[]) => {
    const index = imageSet.findIndex((img) => img.src === image.src);
    setCurrentImageIndex(index);
    setCurrentImages(imageSet);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const goToPrevious = () => {
    const newIndex =
      currentImageIndex > 0 ? currentImageIndex - 1 : currentImages.length - 1;
    setCurrentImageIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex =
      currentImageIndex < currentImages.length - 1 ? currentImageIndex + 1 : 0;
    setCurrentImageIndex(newIndex);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, currentImageIndex, currentImages.length]);

  const justifyClass = justify === "center" ? "justify-content-center" : "";

  if (isMasonry) {
    return (
      <>
        {/* Improved masonry grid with better spacing */}
        <div
          style={{
            columnCount: "auto",
            columnWidth: "300px",
            columnGap: "1rem",
            width: "100%",
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                breakInside: "avoid",
                marginBottom: "1rem",
                display: "inline-block",
                width: "100%",
              }}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div
                className="card-modern overflow-hidden p-0"
                style={{
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onClick={() => openLightbox(image, allImages)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "var(--shadow-soft)";
                }}
              >
                <div className="position-relative overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-100"
                    style={{
                      objectFit: "cover",
                      height: "auto",
                      display: "block",
                    }}
                  />

                  {/* Hover Effect */}
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end opacity-0"
                    style={{
                      background:
                        "linear-gradient(transparent, rgba(0,0,0,0.7))",
                      transition: "opacity 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = "1";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = "0";
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

        {/* Lightbox for Masonry */}
        {lightboxOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.95)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              padding: "20px",
              overflow: "hidden",
            }}
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "rgba(255,255,255,0.2)",
                border: "none",
                color: "white",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10001,
                transition: "background 0.3s ease",
              }}
              onClick={closeLightbox}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.2)";
              }}
            >
              <X size={20} />
            </button>

            <div
              style={{
                position: "relative",
                maxWidth: "95%",
                maxHeight: "95%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Previous button */}
              <button
                className="d-none d-md-flex"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "-60px",
                  transform: "translateY(-50%)",
                  background: "rgba(255,255,255,0.2)",
                  border: "none",
                  color: "white",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.3s ease",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                }}
              >
                <ChevronLeft size={24} />
              </button>

              {/* Next button */}
              <button
                className="d-none d-md-flex"
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "-60px",
                  transform: "translateY(-50%)",
                  background: "rgba(255,255,255,0.2)",
                  border: "none",
                  color: "white",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.3s ease",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                }}
              >
                <ChevronRight size={24} />
              </button>

              {/* Image container */}
              <div
                style={{
                  position: "relative",
                  maxWidth: "90vw",
                  maxHeight: "90vh",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <Image
                  src={currentImages[currentImageIndex]?.src || ""}
                  alt={currentImages[currentImageIndex]?.alt || ""}
                  width={1200}
                  height={800}
                  style={{
                    maxWidth: "90vw",
                    maxHeight: "80vh",
                    objectFit: "contain",
                    width: "auto",
                    height: "auto",
                  }}
                  onClick={(e) => e.stopPropagation()}
                />
                {/* Image info */}
                <div
                  style={{
                    color: "white",
                    textAlign: "center",
                    maxWidth: "90%",
                  }}
                >
                  <div style={{ fontWeight: 500, marginBottom: "0.25rem" }}>
                    {currentImages[currentImageIndex]?.alt}
                  </div>
                  <div style={{ fontSize: "0.875rem", opacity: 0.75 }}>
                    {currentImages[currentImageIndex]?.category}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile navigation */}
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "10px",
                zIndex: 10001,
              }}
              className="d-md-none"
            >
              <button
                style={{
                  background: "rgba(255,255,255,0.2)",
                  border: "none",
                  color: "white",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                style={{
                  background: "rgba(255,255,255,0.2)",
                  border: "none",
                  color: "white",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <div className={`row g-4 ${justifyClass}`}>
        {images.map((image, imageIndex) => (
          <div
            key={imageIndex}
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={imageIndex * 100}
          >
            <div
              className="card-modern overflow-hidden p-0 h-100"
              style={{
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onClick={() => openLightbox(image, allImages)}
            >
              <div
                className="position-relative overflow-hidden"
                style={{ height: imageHeight }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.parentElement!.parentElement!.style.transform =
                      "translateY(-5px)";
                    e.currentTarget.parentElement!.parentElement!.style.boxShadow =
                      "0 15px 35px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.parentElement!.parentElement!.style.transform =
                      "translateY(0)";
                    e.currentTarget.parentElement!.parentElement!.style.boxShadow =
                      "var(--shadow-soft)";
                  }}
                />

                {/* Hover Overlay */}
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0"
                  style={{
                    background: `rgba(${
                      sectionColor === "var(--primary-teal)"
                        ? "115, 175, 170"
                        : sectionColor === "var(--primary-brown)"
                          ? "182, 119, 88"
                          : "55, 119, 122"
                    }, 0.9)`,
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "0";
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
                      background: sectionColor,
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

      {/* Lightbox for Regular Grid */}
      {lightboxOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.95)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "20px",
            overflow: "hidden",
          }}
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "rgba(255,255,255,0.2)",
              border: "none",
              color: "white",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10001,
              transition: "background 0.3s ease",
            }}
            onClick={closeLightbox}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.2)";
            }}
          >
            <X size={20} />
          </button>

          <div
            style={{
              position: "relative",
              maxWidth: "95%",
              maxHeight: "95%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Previous button */}
            <button
              className="d-none d-md-flex"
              style={{
                position: "absolute",
                top: "50%",
                left: "-60px",
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.2)",
                border: "none",
                color: "white",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.3s ease",
              }}
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.2)";
              }}
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next button */}
            <button
              className="d-none d-md-flex"
              style={{
                position: "absolute",
                top: "50%",
                right: "-60px",
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.2)",
                border: "none",
                color: "white",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.3s ease",
              }}
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.2)";
              }}
            >
              <ChevronRight size={24} />
            </button>

            {/* Image container */}
            <div
              style={{
                position: "relative",
                maxWidth: "90vw",
                maxHeight: "90vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <Image
                src={currentImages[currentImageIndex]?.src || ""}
                alt={currentImages[currentImageIndex]?.alt || ""}
                width={600}
                height={500}
                style={{
                  maxWidth: "90vw",
                  maxHeight: "80vh",
                  objectFit: "contain",
                  width: "auto",
                  height: "auto",
                }}
                onClick={(e) => e.stopPropagation()}
              />
              {/* Image info */}
              <div
                style={{
                  color: "white",
                  textAlign: "center",
                  maxWidth: "90%",
                }}
              >
                <div style={{ fontWeight: 500, marginBottom: "0.25rem" }}>
                  {currentImages[currentImageIndex]?.alt}
                </div>
                <div style={{ fontSize: "0.875rem", opacity: 0.75 }}>
                  {currentImages[currentImageIndex]?.category}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile navigation */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "10px",
              zIndex: 10001,
            }}
            className="d-md-none"
          >
            <button
              style={{
                background: "rgba(255,255,255,0.2)",
                border: "none",
                color: "white",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              style={{
                background: "rgba(255,255,255,0.2)",
                border: "none",
                color: "white",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
