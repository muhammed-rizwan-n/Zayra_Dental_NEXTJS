import React from "react";
//import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";
import Image from "next/image";
//import style from "../styles/Home.module.css"
//import Footer from "../components/Footer";
//AOS.init();

export default function Services() {
  const servicesList = [
    {
      title: "General Dentistry",
      services: [
        {
          name: "Dental Check-ups",
          desc: "Routine exams to maintain oral health and detect issues early.",
        },
        {
          name: "Fillings",
          desc: "Repair cavities and restore tooth function with durable materials.",
        },
        {
          name: "Crowns & Bridges",
          desc: "Strengthen damaged teeth or replace missing ones with natural-looking restorations.",
        },
      ],
    },
    {
      title: "Cosmetic Dentistry",
      services: [
        {
          name: "Teet Whitening",
          desc: "Brighten your smile with safe and effective in-office whitening.",
        },
        {
          name: "Veneers",
          desc: "Improve the shape, size, and color of your teeth with custom porcelain shells.",
        },
      ],
    },
    {
      title: "Preventative Care",
      services: [
        {
          name: "Cleanings",
          desc: "Professional dental cleaning to remove plaque and prevent gum disease.",
        },
        {
          name: "Fluoride Treatments",
          desc: "Strengthen enamel and help protect teeth from decay.",
        },
        {
          name: "Sealants",
          desc: "A protective coating applied to molars to prevent cavities.",
        },
      ],
    },
  ];

  return (
    <section className="container py-5">
  <div className="text-center mb-5" data-aos="fade-down">
    <h2 className="fw-bold py-5">Our Treatments & Services</h2>
    <p className="text-muted">Explore the wide range of dental care we offer at BrightSmile Clinic</p>
  </div>

  <div className="row g-4">
    {servicesList.map((service, index) => (
      <div className="col-sm-6 col-md-4 col-lg-3" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
        <div className="card service-card border-0 shadow-sm overflow-hidden position-relative">
          <Image
            src="/bg-gallery.jpg"
            className="card-img"
            alt={service.title}
            width= {300}
            height={300}
            style={{ height: "250px", objectFit: "cover" }}
          />
          <div className="overlay d-flex flex-column justify-content-end p-3">
            <h5 className="text-white fw-bold mb-1">{service.title}</h5>
            <p className="text-white small">{service.title}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

  );
}
