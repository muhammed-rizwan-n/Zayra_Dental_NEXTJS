"use client";

export default function ServicesCard(){
    const service = [
        {
          name: "Teeth Whitening",
          img: "/bg-gallery.jpg",
          href: "/services/teeth-whitening"
        },
        {
          name: "Root Canal",
          img: "/bg-gallery.jpg",
          href: "/services/root-canal"
        },
        {
          name: "Dental Implants",
          img: "/bg-gallery.jpg",
          href: "/services/dental-implants"
        },
        {
          name: "Braces & Aligners",
          img: "/bg-gallery.jpg",
          href: "/services/braces-aligners"
        }
      ];
    return(
        <div className="row g-4">
        {service.map((service, index) => (
        <div className="col-md-6 col-lg-3" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
          <a href={service.href} className="text-decoration-none">
            <div
              className="card border-0 text-white service-card h-100"
              style={{
                background: `linear-gradient(135deg, #6507fcbb, #f28dffaa), url(${service.img}) center/cover no-repeat`,
                borderRadius: "16px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="card-body d-flex align-items-end p-4" style={{ height: "250px" }}>
                <h5 className="card-title fw-bold">{service.name}</h5>
              </div>
            </div>
          </a>
        </div>
      ))}
      </div>
    )
}