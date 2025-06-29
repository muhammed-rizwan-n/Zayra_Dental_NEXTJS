import React from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Phone,
  Mail,
  User,
  MessageCircle,
  CheckCircle,
  Star,
  Shield,
  Heart,
} from "lucide-react";
import "./style.css";

export default function Appointment() {
  const appointmentTypes = [
    {
      title: "Initial Consultation",
      description: "Comprehensive dental exam and treatment planning",
      duration: "60 minutes",
      price: "£75",
      icon: <User size={24} />,
    },
    {
      title: "General Check-up",
      description: "Routine dental examination and cleaning",
      duration: "30 minutes",
      price: "£45",
      icon: <CheckCircle size={24} />,
    },
    {
      title: "Emergency Appointment",
      description: "Urgent dental care for pain or dental emergencies",
      duration: "45 minutes",
      price: "£95",
      icon: <Heart size={24} />,
    },
    {
      title: "Cosmetic Consultation",
      description: "Discuss teeth whitening, veneers, and smile makeovers",
      duration: "45 minutes",
      price: "£50",
      icon: <Star size={24} />,
    },
  ];

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
  ];

  const benefits = [
    {
      icon: <Shield size={24} />,
      title: "Expert Care",
      description: "15+ years of dental expertise",
    },
    {
      icon: <Heart size={24} />,
      title: "Gentle Approach",
      description: "Anxiety-free dental experience",
    },
    {
      icon: <Star size={24} />,
      title: "Modern Technology",
      description: "Latest equipment & techniques",
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Flexible Payment",
      description: "Affordable payment plans available",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-modern appointment-hero"
        style={{ paddingTop: "120px", minHeight: "70vh" }}
      >
        <div className="container-modern">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="text-accent fw-medium">Book Your Visit</span>
              <h1 className="heading-primary mt-2 mb-4">
                Schedule Your
                <span className="text-primary-brown d-block">
                  Dental Appointment
                </span>
              </h1>
              <p className="lead text-subtle mb-4">
                Take the first step towards a healthier, more confident smile.
                Book your appointment online or call us directly - we&apos;re here to
                make your dental care convenient and stress-free.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <a href="tel:01132488398" className="btn-primary-modern">
                  <Phone size={20} />
                  Call Now
                </a>
                <Link href="/contact" className="btn-secondary-modern">
                  <MessageCircle size={20} />
                  Ask Questions
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="row g-3 mt-4">
                <div className="col-4">
                  <div className="text-center">
                    <div className="heading-tertiary text-accent mb-1">
                      24hrs
                    </div>
                    <div className="small text-subtle">Response Time</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <div className="heading-tertiary text-accent mb-1">
                      4.9★
                    </div>
                    <div className="small text-subtle">Patient Rating</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <div className="heading-tertiary text-accent mb-1">15+</div>
                    <div className="small text-subtle">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
              <div className="appointment-quick-info">
                <div className="card-elevated">
                  <div className="text-center mb-4">
                    <h3 className="heading-tertiary mb-3">Quick Booking</h3>
                    <p className="text-subtle">
                      Choose your preferred contact method
                    </p>
                  </div>

                  <div className="row g-3 justify-content-center">
                    <div className="col-md-6">
                      <div className="quick-contact-card">
                        <Phone className="quick-contact-icon" size={32} />
                        <h4>Call Direct</h4>
                        <p>Speak to our team now</p>
                        <a
                          href="tel:01132488398"
                          className="quick-contact-link"
                        >
                          0113 248 8398
                        </a>
                      </div>
                    </div>

                  </div>

                  <div className="clinic-hours mt-4">
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <Clock size={20} className="text-accent" />
                      <h5 className="mb-0">Opening Hours</h5>
                    </div>
                    <div className="hours-grid">
                      <div className="hour-item">
                        <span>Mon - Thu</span>
                        <span className="time-badge">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="hour-item">
                        <span>Saturday</span>
                        <span className="time-badge">9:00 AM - 4:00 PM</span>
                      </div>
                      <div className="hour-item">
                        <span>Sunday</span>
                        <span className="time-badge closed">
                          Emergency Only
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-modern bg-cream">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">
              Why Choose Zayra Dental
            </span>
            <h2 className="heading-secondary mt-2 mb-4">
              Your Comfort is Our Priority
            </h2>
          </div>

          <div className="row g-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="benefit-card">
                  <div className="benefit-icon">{benefit.icon}</div>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Types */}
      <section className="section-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Treatment Options</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Choose Your Appointment Type
            </h2>
            <p
              className="lead text-subtle mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Select the type of appointment that best suits your needs. All
              prices include consultation and examination.
            </p>
          </div>

          <div className="row g-4">
            {appointmentTypes.map((type, index) => (
              <div
                key={index}
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="appointment-type-card">
                  <div className="appointment-type-header">
                    <div className="appointment-type-icon">{type.icon}</div>
                    <div className="appointment-type-info">
                      <h4>{type.title}</h4>
                      <p>{type.description}</p>
                    </div>
                    <div className="appointment-type-price">
                      <div className="price">{type.price}</div>
                      <div className="duration">{type.duration}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking-form" className="section-modern bg-light-modern" style={{display: "none"}}>
        <div className="container-modern">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card-elevated">
                <div className="text-center mb-5" data-aos="fade-up">
                  <span className="text-accent fw-medium">Book Online</span>
                  <h2 className="heading-secondary mt-2 mb-4">
                    Schedule Your Appointment
                  </h2>
                  <p className="text-subtle">
                    Fill out the form below and we&aposll get back to you within 24
                    hours to confirm your appointment.
                  </p>
                </div>

                <form
                  className="appointment-form"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {/* Personal Information */}
                  <div className="form-section">
                    <h3 className="form-section-title">Personal Information</h3>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">
                          First Name *
                        </label>
                        <input
                          type="text"
                          className="form-control-modern"
                          id="firstName"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          className="form-control-modern"
                          id="lastName"
                          placeholder="Doe"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          className="form-control-modern"
                          id="email"
                          placeholder="john.doe@example.com"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          className="form-control-modern"
                          id="phone"
                          placeholder="07123 456789"
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="dob" className="form-label">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          className="form-control-modern"
                          id="dob"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div className="form-section">
                    <h3 className="form-section-title">Appointment Details</h3>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="appointmentType" className="form-label">
                          Appointment Type *
                        </label>
                        <select
                          className="form-control-modern"
                          id="appointmentType"
                          required
                        >
                          <option value="">Select appointment type</option>
                          <option value="initial">
                            Initial Consultation (£75)
                          </option>
                          <option value="checkup">
                            General Check-up (£45)
                          </option>
                          <option value="emergency">
                            Emergency Appointment (£95)
                          </option>
                          <option value="cosmetic">
                            Cosmetic Consultation (£50)
                          </option>
                          <option value="cleaning">
                            Professional Cleaning (£65)
                          </option>
                          <option value="whitening">
                            Teeth Whitening Consultation (£40)
                          </option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="preferredDate" className="form-label">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          className="form-control-modern"
                          id="preferredDate"
                          min={new Date().toISOString().split("T")[0]}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="preferredTime" className="form-label">
                          Preferred Time *
                        </label>
                        <select
                          className="form-control-modern"
                          id="preferredTime"
                          required
                        >
                          <option value="">Select preferred time</option>
                          {timeSlots.map((time, index) => (
                            <option key={index} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="alternativeDate" className="form-label">
                          Alternative Date
                        </label>
                        <input
                          type="date"
                          className="form-control-modern"
                          id="alternativeDate"
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Medical Information */}
                  <div className="form-section">
                    <h3 className="form-section-title">Medical Information</h3>
                    <div className="row g-3">
                      <div className="col-12">
                        <label className="form-label">
                          Do you have any of the following? (Check all that
                          apply)
                        </label>
                        <div className="medical-conditions">
                          <div className="row g-2">
                            <div className="col-md-6">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="diabetes"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="diabetes"
                                >
                                  Diabetes
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="heartDisease"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="heartDisease"
                                >
                                  Heart Disease
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="highBP"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="highBP"
                                >
                                  High Blood Pressure
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="allergies"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="allergies"
                                >
                                  Allergies
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="pregnant"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="pregnant"
                                >
                                  Pregnant
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="medications"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="medications"
                                >
                                  Taking Medications
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="dentalConcerns" className="form-label">
                          Current Dental Concerns or Symptoms
                        </label>
                        <textarea
                          className="form-control-modern"
                          id="dentalConcerns"
                          rows={4}
                          placeholder="Please describe any pain, discomfort, or specific concerns you'd like us to address..."
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <label htmlFor="lastVisit" className="form-label">
                          When was your last dental visit?
                        </label>
                        <select className="form-control-modern" id="lastVisit">
                          <option value="">Select timeframe</option>
                          <option value="0-6months">0-6 months ago</option>
                          <option value="6-12months">6-12 months ago</option>
                          <option value="1-2years">1-2 years ago</option>
                          <option value="2+years">More than 2 years ago</option>
                          <option value="never">Never been to a dentist</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="form-section">
                    <h3 className="form-section-title">
                      Additional Information
                    </h3>
                    <div className="row g-3">
                      <div className="col-12">
                        <label htmlFor="howHeard" className="form-label">
                          How did you hear about us?
                        </label>
                        <select className="form-control-modern" id="howHeard">
                          <option value="">Please select</option>
                          <option value="google">Google Search</option>
                          <option value="facebook">Facebook</option>
                          <option value="instagram">Instagram</option>
                          <option value="friend">Friend/Family Referral</option>
                          <option value="doctor">GP Referral</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label htmlFor="additionalNotes" className="form-label">
                          Additional Notes
                        </label>
                        <textarea
                          className="form-control-modern"
                          id="additionalNotes"
                          rows={3}
                          placeholder="Any special requests, accessibility needs, or additional information..."
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  {/* Terms and Submit */}
                  <div className="form-section">
                    <div className="form-check mb-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="terms"
                        required
                      />
                      <label className="form-check-label" htmlFor="terms">
                        I agree to the{" "}
                        <Link href="/privacy" className="text-decoration-none">
                          privacy policy
                        </Link>{" "}
                        and consent to my personal data being processed for
                        appointment booking and dental care. *
                      </label>
                    </div>

                    <div className="form-check mb-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="marketing"
                      />
                      <label className="form-check-label" htmlFor="marketing">
                        I would like to receive updates about dental health tips
                        and special offers.
                      </label>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn-primary-modern btn-lg"
                      >
                        <Calendar size={20} />
                        Book My Appointment
                      </button>
                      <p className="small text-subtle mt-3">
                        We&aposll confirm your appointment within 24 hours via email
                        or phone.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section
        className="section-modern"
        style={{ background: "var(--primary-teal)" }}
      >
        <div className="container-modern">
          <div className="text-center text-white" data-aos="fade-up">
            <h2 className="heading-secondary mb-4" style={{ color: "white" }}>
              Need Urgent Dental Care?
            </h2>
            <p className="lead mb-4" style={{ opacity: 0.9 }}>
              Don&apos;t wait if you&aposre experiencing dental pain or have a dental
              emergency. Call us immediately for prompt care.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <a
                href="tel:01132488398"
                className="btn"
                style={{
                  background: "white",
                  color: "var(--primary-teal)",
                  border: "none",
                  padding: "1rem 2rem",
                  borderRadius: "50px",
                  fontWeight: "500",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Phone size={20} />
                Call Emergency Line
              </a>
              <Link
                href="/contact"
                className="btn"
                style={{
                  background: "transparent",
                  color: "white",
                  border: "2px solid white",
                  padding: "1rem 2rem",
                  borderRadius: "50px",
                  fontWeight: "500",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Mail size={20} />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
