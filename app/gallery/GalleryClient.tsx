"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, X, ChevronLeft, ChevronRight } from "lucide-react";

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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
  };

  const justifyClass = justify === "center" ? "justify-content-center" : "";

  if (isMasonry) {
    return (
      <>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1rem",
            gridAutoRows: "10px",
          }}
        >
          {images.map((image, index) => {
            const rowSpan = index % 5 === 0 ? 35 : index % 2 === 0 ? 38 : 30;
            return (
              <div
                key={index}
                style={{ gridRowEnd: `span ${rowSpan}` }}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div
                  className="card-modern overflow-hidden p-0 mb-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => openLightbox(image, allImages)}
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
                        transition: "transform 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
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
            );
          })}
        </div>

        {/* Lightbox for Masonry */}
        {lightboxOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
            }}
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div
              style={{
                position: "relative",
                maxWidth: "90%",
                maxHeight: "90%",
              }}
            >
              <button
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "0",
                  color: "white",
                  background: "none",
                  border: "none",
                  fontSize: "2rem",
                  cursor: "pointer",
                  zIndex: 10000,
                }}
                onClick={closeLightbox}
              >
                <X size={24} />
              </button>

              <button
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "-70px",
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
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
              >
                <ChevronLeft size={24} />
              </button>

              <button
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "-70px",
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
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
              >
                <ChevronRight size={24} />
              </button>

              <div
                style={{ position: "relative", width: "100%", height: "80vh" }}
              >
                <Image
                  src={
                    currentImages[currentImageIndex]?.src || "/placeholder.jpg"
                  }
                  alt={currentImages[currentImageIndex]?.alt || ""}
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>

              <div
                style={{
                  position: "absolute",
                  bottom: "-50px",
                  left: 0,
                  right: 0,
                  color: "white",
                  textAlign: "center",
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
              style={{ cursor: "pointer" }}
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
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.parentElement!.style.boxShadow =
                      "0 15px 35px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.parentElement!.style.boxShadow = "none";
                  }}
                />

                {/* Hover Overlay */}
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0"
                  style={{
                    background: `rgba(${sectionColor === "var(--primary-teal)" ? "115, 175, 170" : sectionColor === "var(--primary-brown)" ? "182, 119, 88" : "55, 119, 122"}, 0.9)`,
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
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div
            style={{ position: "relative", maxWidth: "90%", maxHeight: "90%" }}
          >
            <button
              style={{
                position: "absolute",
                top: "-40px",
                right: "0",
                color: "white",
                background: "none",
                border: "none",
                fontSize: "2rem",
                cursor: "pointer",
                zIndex: 10000,
              }}
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>

            <button
              style={{
                position: "absolute",
                top: "50%",
                left: "-70px",
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

            <button
              style={{
                position: "absolute",
                top: "50%",
                right: "-70px",
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

            <div
              style={{ position: "relative", width: "100%", height: "80vh" }}
            >
              <Image
                src={
                  currentImages[currentImageIndex]?.src || "/placeholder.jpg"
                }
                alt={currentImages[currentImageIndex]?.alt || ""}
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "-50px",
                left: 0,
                right: 0,
                color: "white",
                textAlign: "center",
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
      )}
    </>
  );
}
