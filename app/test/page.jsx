"use client";

import Image from "next/image";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const teamMembers = [
  {
    name: "Dr. Aneesha Rao",
    role: "Pediatric Dentist",
    specialization: "Child-friendly procedures, oral hygiene guidance",
    image: "/team/dr_aneesha.jpg",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Dr. Rohan Mehta",
    role: "Orthodontist",
    specialization: "Braces, aligners, smile corrections",
    image: "/team/dr_rohan.jpg",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Dr. Priya Nair",
    role: "Endodontist",
    specialization: "Root canal specialist",
    image: "/team/dr_priya.jpg",
    linkedin: "#",
    instagram: "#",
  },
];

export default function MeetOurTeamSection() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <section className="py-5 bg-transparent">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-down">
            <h2 className="fw-bold">Meet Our Dedicated Team</h2>
            <p className="text-muted">
              At Zayra Dental, our skilled and friendly team is committed to
              delivering expert care with a personal touch — making every visit
              comfortable and reassuring.{" "}
            </p>
          </div>
          <div className="mb-5" data-aos="fade-up">
            <Image
              src="/about-us/bg-team.jpg" // Replace with your actual path
              alt="Clinic Team"
              width={1200}
              height={500}
              className="img-fluid rounded-4 shadow"
              style={{ objectFit: "cover", width: "100%", maxHeight: "400px" }}
            />
          </div>
          <div className="row g-4">
            {teamMembers.map((member, idx) => (
              <div
                className="col-md-6 col-lg-4"
                key={member.name}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="card h-100 border-0 shadow rounded-4 overflow-hidden">
                  <div style={{ height: "300px", overflow: "hidden" }}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={600}
                      height={400}
                      className="img-fluid w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="fw-bold mb-0">{member.name}</h5>
                    <small className="text-muted">{member.role}</small>
                    <p
                      className="mt-2 text-muted"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {member.specialization}
                    </p>
                    <div className="d-flex justify-content-center gap-3 mt-2">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin className="text-primary fs-5" />
                      </a>
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram className="text-danger fs-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="position-relative py-5 my-5">
        <h2 className="fw-bold">Meet Our Dedicated Team</h2>
        <div className="container" style={{display:"flex", flexDirection:"row"}}>
          <p className="text-muted">
          At Zayra Dental, our skilled and friendly team is committed to
          delivering expert care with a personal touch — making every visit
          comfortable and reassuring.
        </p>
        <div
          className=""
          style={{
            backgroundImage: `url("/about-us/bg-team.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "400px",
          }}
        >
          <div className="container-flex h-100 bg-dark opacity-50"></div>
        </div>
        </div>
        <div className="container h-100 d-flex align-items-center justify-content-center text-white z-2">
          <h2 className="fw-bold" data-aos="fade-down">
            Together, We Create Smiles
          </h2>
        </div>
      </section>
    </>
  );
}
