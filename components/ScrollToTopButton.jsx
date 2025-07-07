"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-to-top-btn ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        background: "var(--primary-brown)",
        color: "white",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "var(--shadow-medium)",
        zIndex: 1040,
        opacity: isVisible ? "1" : "0",
        visibility: isVisible ? "visible" : "hidden",
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--secondary-brown)";
        e.currentTarget.style.transform = isVisible
          ? "translateY(-5px)"
          : "translateY(20px)";
        e.currentTarget.style.boxShadow = "var(--shadow-strong)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "var(--primary-brown)";
        e.currentTarget.style.transform = isVisible
          ? "translateY(0)"
          : "translateY(20px)";
        e.currentTarget.style.boxShadow = "var(--shadow-medium)";
      }}
    >
      <ChevronUp size={24} />
    </button>
  );
}
