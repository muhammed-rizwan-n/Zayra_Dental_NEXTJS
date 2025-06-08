import Image from "next/image";
import style from "./style.module.css";

export default function About() {
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
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            background:
              "linear-gradient(to right, rgba(48, 33, 253, 0.84), rgba(255, 46, 217, 0))",
            zIndex: 1,
          }}
        ></div>

        {/* Content */}
        <div className="container position-relative z-2">
          <div className="row justify-content-start align-items-center">
            <div
              className="col-lg-6 col-md-8 col-12 text-start"
              data-aos="fade-right"
            >
              <h1
                className="h1 fw-bold text-white"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                About Us
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-5">
        <div className="row align-items-center">
          {/* Clinic Image */}
          <div className="col-md-5 mb-4 mb-md-0 text-center">
            <Image
              src="/bg-gallery.jpg" // Replace with actual image path
              alt="Our Clinic"
              width={"400"}
              height={"300"}
              className="img-fluid rounded shadow"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </div>

          {/* Clinic Content */}
          <div className="col-md-7">
            <h2 className="mb-3 fw-bold" data-aos="fade-left">
              Get to Know Our Clinic
            </h2>
            <p className="lead" data-aos="fade-left" data-aos-delay="200">
              Located in the heart of the city, our clinic offers a warm,
              welcoming environment equipped with the latest dental
              technologies. From the reception to the treatment rooms, every
              corner of our clinic is designed to make your visit stress-free
              and comfortable.
            </p>
            <ul
              className="list-unstyled mt-3"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <li className="mb-2">✅ Modern, sanitized facility</li>
              <li className="mb-2">✅ Relaxing ambiance with friendly staff</li>
              <li className="mb-2">✅ Convenient parking and accessibility</li>
            </ul>
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
            className={
              style["team_member"] +
              " row align-items-center mb-5 flex-md-row flex-column"
            }
            data-aos="fade-right"
          >
            <div className="col-md-4 text-center mb-3 mb-md-0">
              <Image
                width={"300"}
                height={"400"}
                src="/bg-gallery.jpg"
                alt="Dr. Rahul Iyer"
                className="img-fluid rounded shadow"
                style={{ minHeight: "300px", objectFit: "cover" }}
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
            className={
              style["team_member"] +
              " row align-items-center mb-5 flex-md-row flex-column-reverse"
            }
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
                style={{ minHeight: "300px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/*Certifications*/}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold" data-aos="fade-up">
            Our Certifications
          </h2>
          <p className="text-muted" data-aos="fade-up" data-aos-delay="200">
            We are proud to be recognized and accredited by top dental and
            healthcare organizations.
          </p>
        </div>

        <div className="row justify-content-center g-4">
          {/* Example Certification 1 */}
          <div className="col-6 col-md-3 text-center" data-aos="zoom-in">
            <Image
              src="/bg-gallery.jpg" // Replace with actual path
              alt="ADA Certified"
              className="img-fluid mb-3"
              width={"400"}
              height={"300"}
              style={{ height: "80px", objectFit: "contain" }}
            />
            <h6 className="fw-semibold">American Dental Association</h6>
            <small className="text-muted">ADA Accredited Clinic</small>
          </div>

          {/* Example Certification 2 */}
          <div
            className="col-6 col-md-3 text-center"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <Image
              src="/bg-gallery.jpg" // Replace with actual path
              alt="ISO Certified"
              className="img-fluid mb-3"
              width={"400"}
              height={"300"}
              style={{ height: "80px", objectFit: "contain" }}
            />
            <h6 className="fw-semibold">ISO 9001:2015</h6>
            <small className="text-muted">Quality Management Certified</small>
          </div>

          {/* Example Certification 3 */}
          <div
            className="col-6 col-md-3 text-center"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Image
              src="/bg-gallery.jpg" // Replace with actual path
              alt="WHO Affiliation"
              className="img-fluid mb-3"
              width={"400"}
              height={"300"}
              style={{ height: "80px", objectFit: "contain" }}
            />
            <h6 className="fw-semibold">World Health Organization</h6>
            <small className="text-muted">Health & Hygiene Standards</small>
          </div>

          {/* Example Certification 4 */}
          <div
            className="col-6 col-md-3 text-center"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <Image
              src="/bg-gallery.jpg" // Replace with actual path
              alt="DCI Certified"
              className="img-fluid mb-3"
              width={"400"}
              height={"300"}
              style={{ height: "80px", objectFit: "contain" }}
            />
            <h6 className="fw-semibold">Dental Council of India</h6>
            <small className="text-muted">DCI Registered Professionals</small>
          </div>
        </div>
      </section>

      {/*Aim*/}

      <section className="container py-5">
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="fw-bold">Our Aim</h2>
          <p className="text-muted">
            At BrightSmile Dental Clinic, we strive to go beyond dentistry — we
            create experiences that patients trust and smile about.
          </p>
        </div>

        <div className="row g-4 text-center">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="p-4 border rounded shadow-sm h-100">
              <i className="fas fa-hand-holding-heart fa-2x text-primary mb-3"></i>
              <h5 className="fw-semibold">Compassionate Care</h5>
              <p className="text-muted">
                We treat each patient with kindness, empathy, and respect.
              </p>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="p-4 border rounded shadow-sm h-100">
              <i className="fas fa-wallet fa-2x text-success mb-3"></i>
              <h5 className="fw-semibold">Affordable Treatments</h5>
              <p className="text-muted">
                High-quality care that doesn’t break the bank.
              </p>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="p-4 border rounded shadow-sm h-100">
              <i className="fas fa-microscope fa-2x text-info mb-3"></i>
              <h5 className="fw-semibold">Advanced Technology</h5>
              <p className="text-muted">
                Using the latest innovations to ensure precision and comfort.
              </p>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
            <div className="p-4 border rounded shadow-sm h-100">
              <i className="fas fa-user-check fa-2x text-warning mb-3"></i>
              <h5 className="fw-semibold">Personalized Approach</h5>
              <p className="text-muted">
                Every treatment is tailored to your unique smile and needs.
              </p>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="500">
            <div className="p-4 border rounded shadow-sm h-100">
              <i className="fas fa-clock fa-2x text-danger mb-3"></i>
              <h5 className="fw-semibold">Flexible Scheduling</h5>
              <p className="text-muted">
                Convenient appointments that fit your lifestyle.
              </p>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
            <div className="p-4 border rounded shadow-sm h-100">
              <i className="fas fa-star fa-2x text-secondary mb-3"></i>
              <h5 className="fw-semibold">Trust & Transparency</h5>
              <p className="text-muted">
                We explain everything — no hidden costs or confusion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
