import React from "react";
//import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";
import ServiceCard from "../../components/Services";
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

  return (
    <section className="py-5 text-white">
  <div className="container">
    
    <h2 className="text-center fw-bold my-5" data-aos="fade-up">Our Treatments & Services</h2>
    <ServiceCard />
  </div>
</section>


  );
}
