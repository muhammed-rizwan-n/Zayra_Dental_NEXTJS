"use client";

export default function ServicesCard({ serviceList }) {
  const service = [
    {
      name: "Composite and Veneers",
      img: "/services/dental_bonding.jpg",
      href: "/services/composite-and-veneers",
    },
    {
      name: "Teeth Whitening",
      img: "/bg-gallery.jpg",
      href: "/services/teeth-whitening",
    },
    {
      name: "Dental Aligners",
      img: "/bg-gallery.jpg",
      href: "/services/dental-aligners",
    },
    {
      name: "Dental Implants",
      img: "/bg-gallery.jpg",
      href: "/services/dental-implants",
    },
    {
      name: "Facial Aesthetics",
      img: "/bg-gallery.jpg",
      href: "/services/facial-aesthetics",
    },
    {
      name: "Cosmetic Dentist",
      img: "/bg-gallery.jpg",
      href: "/services/cosmetic-dental",
    },
    {
      name: "Dental Treatment",
      img: "/bg-gallery.jpg",
      href: "/services/dental-treatment",
    },
    {
      name: "Dental Spa",
      img: "/bg-gallery.jpg",
      href: "/services/dental-spa",
    },
    {
      name: "Emergency Dental Care",
      img: "/bg-gallery.jpg",
      href: "/services/emergency-dental-care",
    },
    {
      name: "Root Canal",
      img: "/bg-gallery.jpg",
      href: "/services/root-canal",
    },
    {
      name: "Dental Implants",
      img: "/bg-gallery.jpg",
      href: "/services/dental-implants",
    },
    {
      name: "Braces & Aligners",
      img: "/bg-gallery.jpg",
      href: "/services/braces-aligners",
    },
  ];
  return (
    <div className="row g-4">
      {service.map((service, index) => (
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
  );
}
