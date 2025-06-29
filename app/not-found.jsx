import Link from "next/link";
import { Home, ArrowLeft, Calendar, Phone, Search, MapPin } from "lucide-react";

export default function NotFound() {
  const quickLinks = [
    {
      icon: <Home size={20} />,
      title: "Homepage",
      description: "Return to our main page",
      href: "/",
      color: "var(--primary-teal)",
    },
    {
      icon: <Calendar size={20} />,
      title: "Book Appointment",
      description: "Schedule your visit",
      href: "/appointment",
      color: "var(--primary-brown)",
    },
    {
      icon: <Phone size={20} />,
      title: "Contact Us",
      description: "Get in touch with our team",
      href: "/contact",
      color: "var(--accent-teal)",
    },
    {
      icon: <MapPin size={20} />,
      title: "Our Services",
      description: "Explore our treatments",
      href: "/services",
      color: "var(--secondary-brown)",
    },
  ];

  return (
    <section
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, var(--bg-cream), var(--bg-white))",
        paddingTop: "120px",
        paddingBottom: "2rem",
      }}
    >
      <div className="container-modern">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            {/* 404 Number */}
            <div className="mb-4" data-aos="fade-down">
              <h1
                className="display-1 fw-bold mb-0"
                style={{
                  fontSize: "clamp(6rem, 12vw, 10rem)",
                  background:
                    "linear-gradient(135deg, var(--primary-teal), var(--accent-teal))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: "1",
                }}
              >
                404
              </h1>
            </div>

            {/* Error Message */}
            <div className="mb-5" data-aos="fade-up" data-aos-delay="200">
              <h2 className="heading-secondary mb-3">Oops! Page Not Found</h2>
              <p className="lead text-subtle mb-4">
                We're sorry, but the page you're looking for doesn't exist or
                has been moved. Don't worry though - we can help you find what
                you're looking for!
              </p>

              {/* Search Suggestion */}
              <div
                className="d-inline-flex align-items-center gap-2 p-3 rounded-3 mb-4"
                style={{ background: "rgba(115, 175, 170, 0.1)" }}
              >
                <Search size={20} style={{ color: "var(--primary-teal)" }} />
                <span className="text-subtle">
                  Try checking the URL or use our navigation below
                </span>
              </div>
            </div>

            {/* Quick Navigation Cards */}
            <div
              className="row g-3 mb-5"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {quickLinks.map((link, index) => (
                <div key={index} className="col-md-6 col-lg-3">
                  <Link href={link.href} className="text-decoration-none">
                    <div
                      className="card-modern text-center h-100"
                      style={{
                        transition: "var(--transition-smooth)",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                        style={{
                          width: "60px",
                          height: "60px",
                          background: link.color,
                          color: "white",
                        }}
                      >
                        {link.icon}
                      </div>
                      <h5 className="heading-tertiary mb-2">{link.title}</h5>
                      <p className="text-subtle small">{link.description}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Main Action Buttons */}
            <div
              className="d-flex flex-wrap gap-3 justify-content-center mb-5"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Link href="/" className="btn-primary-modern">
                <ArrowLeft size={20} />
                Back to Homepage
              </Link>
              <a href="tel:01132488398" className="btn-secondary-modern">
                <Phone size={20} />
                Call Us Now
              </a>
            </div>

            {/* Emergency Contact */}
            <div
              className="card-modern d-inline-block"
              style={{ maxWidth: "400px" }}
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div className="d-flex align-items-center gap-3">
                <div
                  className="rounded-circle d-inline-flex align-items-center justify-content-center"
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "var(--secondary-brown)",
                    color: "white",
                  }}
                >
                  <Phone size={24} />
                </div>
                <div className="text-start">
                  <div className="fw-medium">Need Emergency Care?</div>
                  <a
                    href="tel:01132488398"
                    className="text-decoration-none"
                    style={{ color: "var(--primary-brown)" }}
                  >
                    Call 0113 248 8398
                  </a>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="mt-5" data-aos="zoom-in" data-aos-delay="1000">
              <div
                className="rounded-circle d-inline-flex align-items-center justify-content-center"
                style={{
                  width: "100px",
                  height: "100px",
                  background:
                    "linear-gradient(135deg, var(--primary-teal-light), var(--primary-teal))",
                  opacity: "0.8",
                }}
              >
                <div
                  className="rounded-circle"
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      background: "var(--primary-teal)",
                      borderRadius: "50% 50% 50% 0",
                      transform: "rotate(-45deg)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
