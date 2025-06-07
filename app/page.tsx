import Image from "next/image";
//import Link from "next/link";
import zayra_dental from "../public/zayra-dental.png";
import style from "./page.module.css";
//import Map from "./components/Map";
export default function Home() {
  return (
    <>
      <section
        className="d-flex align-items-center vh-100 text-white"
        style={{
          position: "relative",
          backgroundImage: `url('./bg-gallery.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      >
        {/* Gradient Overlay */}
        <div className="gradient-overlay"></div>

        {/* Content */}
        <div className="container position-relative z-2">
          <div className="row justify-content-start align-items-center">
            <div
              className="col-lg-6 col-md-8 col-12 text-center"
              data-aos="fade-right"
            >
              <h1 className="display-4 fw-bold mb-3"></h1>
              <Image
                src={zayra_dental}
                width={"500"}
                height={"100"}
                alt="zayra_dental Logo"
                className="mb-4 img-fluid"
                data-aos="zoom-in"
                data-aos-delay="400"
              />
              <p className="lead" data-aos="fade-up" data-aos-delay="400">
                &quot;Crafting Smiles, One Tooth at a Time.&quot;
              </p>
              <button
                className="btn btn-outline-light mt-4"
                data-aos="zoom-in-up"
                data-aos-delay="400"
              >
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        className="d-flex align-items-center py-5"
        style={{
          position: "relative",
          backgroundImage: `url('./bg-gallery.jpg')`, // Optional background
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      >
        {/* Optional Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            background: "rgba(99, 33, 253, 0.74)", // Light overlay
            zIndex: 1,
          }}
        ></div>

        <div className="container position-relative z-2">
          <div className="row align-items-center">
            {/* Left Image */}
            <div
              className="col-lg-6 col-md-6 mb-4 mb-md-0"
              data-aos="fade-right"
            >
              <Image
                src="/bg-gallery.jpg" // Replace with your actual image
                width={"500"}
                height={"400"}
                alt="Our Team"
                className="img-fluid rounded shadow"
                data-aos="zoom-in"
                data-aos-delay="400"
              />
            </div>

            {/* Right Content */}
            <div className="col-lg-6 col-md-6 text-start" data-aos="fade-left">
              <h2 className="fw-bold mb-3">Who We Are</h2>
              <p className="lead mb-3">
                At <strong>BrightSmile Dental Clinic</strong>, we are more than
                a team — we are a family of passionate dental professionals
                committed to your oral well-being.
              </p>
              <p>
                Our clinic brings together experienced dentists, cutting-edge
                technology, and a patient-first philosophy. We focus on quality
                care, comfort, and making every visit a positive experience.
              </p>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  ✔️ Passionate & certified dental experts
                </li>
                <li className="mb-2">
                  ✔️ Compassionate care in a modern facility
                </li>
                <li className="mb-2">✔️ Strong focus on hygiene and safety</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5" data-aos="fade-up">
            Meet Our Team
          </h2>

          {/* Team Member 1 */}
          <div
            className={style['team_member'] + " row align-items-center mb-5 flex-md-row flex-column"}
            data-aos="fade-right"
          >
            <div className="col-md-4 text-center mb-3 mb-md-0">
              <Image
                width={"300"}
                height={"400"}
                src="/bg-gallery.jpg"
                alt="Dr. Rahul Iyer"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-8">
              <h3 className="mb-1">Dr. Sophia Mehra</h3>
              <h6 className="text-muted">Chief Dental Surgeon</h6>
              <p className="mb-1">
                <strong>Specialization:</strong> Cosmetic Dentistry, Full Mouth
                Rehabilitation
              </p>
              <blockquote className="blockquote fst-italic mt-3">
                <p>
                  &quot;A confident smile is the most beautiful thing you can
                  wear.&quot;
                </p>
              </blockquote>
            </div>
          </div>

          {/* Team Member 2 */}
          <div
            className={ style['team_member'] + " row align-items-center mb-5 flex-md-row flex-column-reverse"}
            data-aos="fade-left"
          >
            <div className="col-md-8">
              <h3 className="mb-1">Dr. Rahul Iyer</h3>
              <h6 className="text-muted">Orthodontist</h6>
              <p className="mb-1">
                <strong>Specialization:</strong> Dental Aligners, Braces & Smile
                Correction
              </p>
              <blockquote className="blockquote fst-italic mt-3">
                <p>
                  &quot;Precision is the key to unlocking a perfect smile.&quot;
                </p>
              </blockquote>
            </div>
            <div className="col-md-4 text-center mb-3 mb-md-0">
              <Image
                width={"300"}
                height={"400"}
                src="/bg-gallery.jpg"
                alt="Dr. Rahul Iyer"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5"
      style={{

            height: "100%",
            width: "100%",
            background: "rgba(99, 33, 253, 0.74)", // Light overlay
            zIndex: 1,
          }}>
        <div className="container"
        >
          <h2 className="fw-bold text-center mb-5 text-dark" data-aos="fade-up">
            What Our Patients Say
          </h2>

          <div
            id="reviewCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {/* Review 1 */}
              <div className="carousel-item active">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="card border-0 shadow p-4 text-center">
                      <Image
                        src="/bg-gallery.jpg"
                        alt="Customer"
                        className="rounded-circle mx-auto mb-3"
                        width={"100"}
                        height={"100"}
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                      />
                      <h5 className="mb-1">Ayesha Khan</h5>
                      <p className="text-muted mb-2">Software Engineer</p>
                      <div className="mb-3">
                        {"★".repeat(5)}
                        <span className="text-muted"> (5.0)</span>
                      </div>
                      <p className="fst-italic">
                        &quot;BrightSmile made me feel so comfortable. The staff
                        was amazing and the service was top-notch!&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="carousel-item">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="card border-0 shadow p-4 text-center">
                      <Image
                        src="/bg-gallery.jpg"
                        alt="Customer"
                        className="rounded-circle mx-auto mb-3"
                        width={"100"}
                        height={"100"}
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                      />
                      <h5 className="mb-1">Ravi Sharma</h5>
                      <p className="text-muted mb-2">Marketing Manager</p>
                      <div className="mb-3">
                        {"★".repeat(4)}
                        {"☆"}
                        <span className="text-muted"> (4.0)</span>
                      </div>
                      <p className="fst-italic">
                        &quot;Very clean clinic, friendly staff, and
                        professional doctors. Highly recommended!&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review 3 */}
              <div className="carousel-item">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="card border-0 shadow p-4 text-center">
                      <Image
                        src="/bg-gallery.jpg"
                        alt="Customer"
                        className="rounded-circle mx-auto mb-3"
                        width={"100"}
                        height={"100"}
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                      />
                      <h5 className="mb-1">Meena Reddy</h5>
                      <p className="text-muted mb-2">College Student</p>
                      <div className="mb-3">
                        {"★".repeat(5)}
                        <span className="text-muted"> (5.0)</span>
                      </div>
                      <p className="fst-italic">
                        &quot;Dr. Sophia explained every step clearly. I love my
                        new smile!&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#reviewCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#reviewCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-5 bg-primary">
        <div className="container">
          <h2 className="text-center fw-bold mb-4" data-aos="fade-up">
            Get in Touch
          </h2>

          <div className="row g-4 align-items-start">
            {/* Contact Details */}
            <div className="col-md-6" data-aos="fade-right">
              <h4 className="mb-3">Clinic Info</h4>
              <p>
                <strong>📍 Address:</strong> 123 Smile Street, Dental City,
                Smileland 456789
              </p>
              <p>
                <strong>📞 Phone:</strong> (123) 456-7890
              </p>
              <p>
                <strong>✉️ Email:</strong> contact@brightsmile.com
              </p>

              {/* Google Map */}
              <div className="map-wrapper mt-4 rounded shadow overflow-hidden">
                <iframe
                  title="Clinic Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.452697041917!2d78.39076592375736!3d17.43803374982052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9144cdba8c47%3A0x937fe346f411a645!2sTutorials%20Point%20(India)%20Ltd.!5e0!3m2!1sen!2sin!4v1673629212535!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Mini Contact Form */}
            <div className="col-md-6" data-aos="fade-left">
              <h4 className="mb-3">Quick Message</h4>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows={4}
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
