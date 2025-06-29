"use client";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import img from "../../../public/home/waiting_room.jpg";

export default function DentalAligners() {
  return (
    <section className="dental-aligners-page text-white">
      {/* Banner Section */}
      <div className="position-relative">
        <Image
          src={img}
          alt="Dental Aligners"
          width={1920}
          height={700}
          className="w-100 object-fit-cover"
          priority
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center">
          <h1 className="display-4 fw-bold text-center" data-aos="fade-down">
            Dental Aligners
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-md-6" data-aos="fade-right">
            <Image
              src={img}
              alt="Aligners Side View"
              width={600}
              height={400}
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <h2 className="fw-bold mb-3">What are Dental Aligners?</h2>
            <p className="text-light mb-3 fs-5">
              Dental aligners are a clear, modern alternative to braces. Custom-made and removable, they gradually adjust your teeth with minimal discomfort and maximum convenience.
            </p>
            <p className="text-light fs-5">
              At Zayra Dental, we use 3D scanning to plan and track your aligner treatment with high precision. Perfect for adults and teens seeking a subtle, hygienic solution to crooked teeth.
            </p>

            <Link href="/appointment" className="btn btn-primary mt-3 px-4 py-2 fs-5">
              Book Appointment
            </Link>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="row mt-5 g-4">
          {[
            {
              title: "Digital Planning",
              text: "We create a 3D simulation of your future smile before you begin treatment.",
              img: "/treatments/aligner_3dscan.jpg",
            },
            {
              title: "Step-by-Step Journey",
              text: "Each stage is customized to your dental profile, ensuring comfort and clarity.",
              img: "/treatments/aligner_steps.jpg",
            },
            {
              title: "Comfortable Fit",
              text: "Smooth, medical-grade plastic makes aligners safe and nearly invisible.",
              img: "/treatments/aligner_care.jpg",
            },
          ].map((item, idx) => (
            <div className="col-md-4" key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
              <div className="card border-0 h-100 shadow text-white position-relative overflow-hidden">
                <Image
                  src={img}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-100 object-fit-cover"
                />
                <div className="position-absolute bottom-0 w-100 p-3" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}>
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="mb-0 small">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Phone CTA */}
        <div className="text-center mt-5" data-aos="fade-up">
          <h4 className="mb-3">Prefer to speak directly?</h4>
          <p className="fs-5">Call us to book your aligner consultation now.</p>
          <a href="tel:+11234567890" className="btn btn-outline-light d-inline-flex align-items-center gap-2">
            <FaPhoneAlt /> +1 (123) 456-7890
          </a>
        </div>
      </div>
    </section>
  );
}
