import Image from "next/image";
import style from "./style.module.css";
import bg from "../../public/bg-gallery.jpg";

export default function About() {
  return (
    <>
      {/* 
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
      */}
      <section className="pt-5">
        <div className="container">
          <h1 className="fw-bold text-center my-5" data-aos="fade-up">
            About Us
          </h1>
        </div>
      </section>
      <section
        className="container-flex px-sm-2"
        style={
          {backgroundImage: `url("/home/waiting_room.jpg")`}
        }

      >
        <div className="row align-items-center container-flex p-4"
                  style={{
                      background: "rgba(76, 0, 252, 0.74)", // Light overlay
        }}>
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
              At Zayra Dental, we’re on a mission to make high-quality private
              dental care affordable for everyone in Leeds. We believe cost
              should never stand in the way of a healthy smile.
            </p>
            <p className="lead" data-aos="fade-left" data-aos-delay="200">
              Our clinic is built around comfort, honesty, and care that truly
              puts patients first. We don’t push unnecessary treatments — just
              expert dental care that fits your needs and your budget.
            </p>
            <p className="lead" data-aos="fade-left" data-aos-delay="200">
              With flexible payment options and a welcoming atmosphere, we make
              every visit simple, stress-free, and surprisingly affordable —
              often less than the price of your daily coffee.
            </p>

            <ul
              className="list-unstyled mt-3"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <li className="mb-2">
                ✅ Affordable private dental care in Leeds
              </li>
              <li className="mb-2">
                ✅ Patient-first approach with no unnecessary upselling
              </li>
              <li className="mb-2">
                ✅ Comfortable, clean, and modern clinic environment
              </li>
              <li className="mb-2">
                ✅ Friendly, professional staff who put you at ease
              </li>
              <li className="mb-2">
                ✅ Flexible payment plans to fit your budget
              </li>
              <li className="mb-2">✅ Easy access with convenient parking</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5" data-aos="fade-up">
            Meet Our Team
          </h2>
          <div className={style["full-width-image"]}>
            <Image
              src={bg}
              alt="Team Photo"
              layout="responsive"
              width={1920}
              height={500}
              className="img-fluid mb-4"
              style={{ objectFit: "cover", maxHeight: "400px" }}
            />
          </div>

          {/* Team Member 1 */}
          <div
            className={
              style["team_member"] +
              " row align-items-center mb-5 flex-md-row flex-column"
            }
            data-aos="fade-right"
          >
            <div className="col-md-4 text-center">
              <Image
                width={"300"}
                height={"400"}
                src="/bg-gallery.jpg"
                alt="Dr. Rahul Iyer"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "270px",maxWidth:"200px", objectFit: "contain" }}
              />
            </div>
            <div className="col-md-8">
              <h3 className="mb-1">Dr. Reshma Parambil</h3>
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
              <h3 className="mb-1"><strong>Dr. Emilio Cecamore</strong></h3>
              <h6 className="text-white">Orthodontist</h6>
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
            <div className="col-md-4 text-center mb-3 mb-md-0" style={{}}>
              <Image
                width={"300"}
                height={"400"}
                src="/about-us/emilio.jpg"
                alt="Dr. Emilio Cecamore"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "270px",maxWidth:"200px", objectFit: "contain" }}
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
      <section
        className="container-flex"
        style={{ backgroundImage: `url("/home/waiting_room.jpg")`,
         }}
         data-aos="fade-in"
      >
        <div
          className="container-flex p-5"
          style={{
            top: 0,
            left: 0,
            width: "100%",
            background: "rgba(99, 33, 253, 0.74)", // Light overlay
            zIndex: 1,
          }}
        >
          <div className="text-center" data-aos="fade-down">
            <h2 className="fw-bold">Our Aim</h2>
            <p className="text-white">
              At Zayra Dental, we aim to make high-quality private dental care
              affordable, stress-free, and accessible to everyone in Leeds —
              without compromising comfort or integrity.
            </p>
          </div>
          <div className="row g-4 text-center mx-md-5 mx-sm-5 mx-2">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="p-4 border rounded shadow-sm h-100">
                <i className="fas fa-hand-holding-heart fa-2x text-primary mb-3"></i>
                <h5 className="fw-semibold">Compassionate Care</h5>
                <p className="text-white">
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
        </div>
      </section>
    </>
  );
}
