"use client";

import image from "../public/zayra-dental.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    // Only load Bootstrap once on client side
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <nav
      className="navbar navbar-expand-md navbar-light fixed-top bg-white bg-opacity-75 shadow-sm backdrop-blur z-3"
      style={{ transition: "all 0.3s ease" }}
    >
      <div className="container-fluid px-4">
        {/* Logo */}
        <Link href="/" className="navbar-brand p-0">
          <Image
            src={image}
            alt="Clinic Logo"
            style={{ width: "120px", height: "auto" }}
          />
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Items */}
        <div className="navbar-collapse collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-3 mt-3 mt-md-0">
            {["About Us", "Services", "Pricing", "Contact"].map((page) => {
              const href =
                page === "About Us" ? "/about-us" : `/${page.toLowerCase()}`;
              return (
                <li className="nav-item" key={page}>
                  <Link
                    href={href}
                    className="nav-link fw-medium text-dark position-relative"
                    style={{
                      paddingBottom: "6px",
                    }}
                  >
                    {page}
                  </Link>
                </li>
              );
            })}

            {/* Appointment Button */}
            <li className="nav-item">
              <Link
                href="/appointment"
                className="btn text-white px-4 py-2"
                style={{
                  background: "linear-gradient(135deg, #6507fc, #f28dff)",
                  borderRadius: "30px",
                  boxShadow: "0 4px 15px rgba(100, 0, 255, 0.3)",
                  fontWeight: "500",
                }}
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
