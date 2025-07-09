"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Calendar, Menu, Phone, X } from "lucide-react";
import logo from "../public/zayra-dental.png";

const navItems = [
  { label: "About", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
    let ticking = false;
    const navbar = document.getElementById("navbar");

    function handleScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;

          // Update scrolled state for styling
          setIsScrolled(scrollTop > 50);

          if (window.innerWidth < 768) {
            // Mobile behavior - hide on scroll down, show on scroll up
            if (scrollTop > lastScrollTop && scrollTop > 100) {
              // Scrolling down - hide navbar
              navbar.style.transform = "translateY(-100%)";
              navbar.style.transition = "transform 0.3s ease";
            } else {
              // Scrolling up - show navbar
              navbar.style.transform = "translateY(0)";
              navbar.style.transition = "transform 0.3s ease";
            }
          } else {
            // Desktop/tablet - always visible and fixed
            navbar.style.transform = "translateY(0)";
            navbar.style.transition = "none";
          }

          lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Initial call to set proper state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={`navbar-modern ${isScrolled ? "scrolled" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1050,
        background: isScrolled
          ? "rgba(255, 255, 255, 0.98)"
          : "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(20px)",
        borderBottom: isScrolled ? "1px solid rgba(0,0,0,0.1)" : "none",
        transition:
          "background 0.3s ease, backdrop-filter 0.3s ease, border-bottom 0.3s ease",
        transform: "none",
      }}
    >
      <div className="container-modern">
        <div className="d-flex justify-content-between align-items-center py-3">
          {/* Logo */}
          <Link href="/" className="navbar-brand d-flex align-items-center">
            <Image
              src={logo}
              alt="Zayra Dental"
              width={140}
              height={45}
              style={{ height: "auto" }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="d-none d-lg-flex align-items-center gap-4">
            <div className="d-flex gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="nav-link-modern text-decoration-none"
                  style={{
                    padding: "0.5rem 0",
                    position: "relative",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Contact Info */}
            <div className="d-flex align-items-center gap-3 ms-4">
              <a
                href="tel:01132488398"
                className="d-flex align-items-center gap-2 text-decoration-none"
                style={{ color: "var(--text-primary)" }}
              >
                <Phone size={18} />
                <span className="fw-medium">0113 248 8398</span>
              </a>

              <Link
                href="/appointment"
                className="btn-primary-modern"
                style={{
                  textDecoration: "none",
                  borderRadius: "25px",
                  padding: "0.75rem 1.5rem",
                }}
              >
                <Calendar size={18} />
                Book Appointment
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="d-lg-none btn border-0 bg-transparent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="d-lg-none"
            style={{
              background: "white",
              borderRadius: "15px",
              padding: "1.5rem",
              marginTop: "1rem",
              boxShadow: "var(--shadow-medium)",
            }}
          >
            <div className="d-flex flex-column gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="nav-link-modern text-decoration-none py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <hr style={{ margin: "1rem 0", opacity: 0.2 }} />

              <a
                href="tel:01132488398"
                className="d-flex align-items-center gap-2 text-decoration-none py-2"
                style={{ color: "var(--text-primary)" }}
              >
                <Phone size={18} />
                <span>0113 248 8398</span>
              </a>

              <Link
                href="/appointment"
                className="btn-primary-modern justify-content-center mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Calendar size={18} />
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
