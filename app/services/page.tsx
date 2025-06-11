import React from "react";
import "aos/dist/aos.css";
import "./style.css";
import serviceList from "./serviceList.json";

export default function Services() {

  /*const servicesList = [
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
    }
  ];
*/
  return (
    <section className="py-5 text-white">
      <div className="container">
        <h1 className="text-center fw-bold my-5" data-aos="fade-up">
          Our Treatments & Services
        </h1>
        <div className="row g-4">
          {serviceList.map((service, index) => (
            <div
              className="col-md-6 col-lg-4 d-flex"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <a href={service.href} className="text-decoration-none w-100">
                <div className="service-card position-relative overflow-hidden w-100">
                  <div
                    className="service-bg"
                    style={{ backgroundImage: `url(${service.img})` }}
                  ></div>
                  <div className="service-overlay position-absolute top-0 start-0 w-100 h-100"></div>
                  <div className="service-title-box position-absolute bottom-0 w-100 text-center">
                    <h5 className="fw-bold m-0 py-3 px-2 text-white">
                      {service.name}
                    </h5>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
