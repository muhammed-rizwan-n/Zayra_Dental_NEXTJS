import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Clock,
  Star,
  ArrowRight,
  Phone,
  AlertTriangle,
  Heart,
  Shield,
  Zap,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Emergency Dental Care Leeds | 24/7 Urgent Dental Treatment | Zayra Dental",
  description:
    "Emergency dental care in Leeds within 24 hours. Expert treatment for toothache, broken teeth, dental abscesses & lost crowns. CQC registered, award-winning practice.",
  keywords: [
    "emergency dentist Leeds",
    "urgent dental care Leeds",
    "dental emergency Leeds",
    "toothache relief Leeds",
    "broken tooth repair Leeds",
    "dental abscess treatment",
    "lost crown replacement",
    "24 hour dentist Leeds",
    "same day dental appointment",
    "dental pain relief Leeds",
  ],
  openGraph: {
    title:
      "Emergency Dental Care Leeds | 24/7 Urgent Dental Treatment | Zayra Dental",
    description:
      "Emergency dental care in Leeds within 24 hours. Expert treatment for toothache, broken teeth & dental emergencies. Award-winning practice.",
    url: "https://zayradental.co.uk/services/emergency-dental-care",
    images: [
      {
        url: "/services/bg-emergency.jpg",
        width: 1200,
        height: 630,
        alt: "Emergency Dental Care Leeds - Zayra Dental",
      },
    ],
  },
  alternates: {
    canonical: "https://zayradental.co.uk/services/emergency-dental-care",
  },
};

export default function EmergencyDentalCare() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EmergencyService",
    name: "Emergency Dental Care Leeds",
    description:
      "24/7 emergency dental care in Leeds for toothache, broken teeth, dental abscesses and lost crowns",
    provider: {
      "@type": "DentalClinic",
      name: "Zayra Dental",
      address: {
        "@type": "PostalAddress",
        streetAddress: "599 Harehills Lane",
        addressLocality: "Leeds",
        postalCode: "LS9 6NQ",
        addressCountry: "GB",
      },
      telephone: "+441132488398",
    },
    areaServed: "Leeds",
    availableService: [
      "Emergency Toothache Treatment",
      "Dental Abscess Treatment",
      "Broken Tooth Repair",
      "Lost Crown Replacement",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      {/* Hero Section */}
      <section
        className="hero-modern"
        style={{
          paddingTop: "120px",
          minHeight: "80vh",
          background:
            "linear-gradient(135deg, rgba(220, 53, 69, 0.1), rgba(255, 255, 255, 0.9))",
        }}
      >
        <div className="container-modern">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="d-flex align-items-center gap-2 mb-3">
                <Link
                  href="/services"
                  className="text-decoration-none text-accent"
                >
                  Services
                </Link>
                <ArrowRight size={16} className="text-subtle" />
                <span className="text-subtle">Emergency Dental Care</span>
              </div>

              <h1 className="heading-primary mb-4">
                Emergency
                <span className="text-primary-brown d-block">Dental Care</span>
              </h1>
              <p className="lead text-subtle mb-4">
                At Zayra Dental, we understand dental emergencies don&apos;t
                wait for business hours. Our experienced team provides immediate
                relief and expert emergency treatment when you need it most.
              </p>

              {/* Emergency Contact */}
              <div
                className="p-4 rounded-3 mb-4"
                style={{
                  background: "rgba(220, 53, 69, 0.1)",
                  border: "2px solid #dc3545",
                }}
              >
                <div className="d-flex align-items-center gap-3">
                  <AlertTriangle size={32} style={{ color: "#dc3545" }} />
                  <div>
                    <div
                      className="fw-bold h5 mb-1"
                      style={{ color: "#dc3545" }}
                    >
                      Dental Emergency? Call Now!
                    </div>
                    <a
                      href="tel:01132488398"
                      className="btn btn-danger btn-lg"
                      style={{ borderRadius: "50px" }}
                    >
                      <Phone size={20} />
                      0113 248 8398
                    </a>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="row g-4">
                <div className="col-4">
                  <div className="text-center">
                    <div className="heading-tertiary text-accent mb-1">
                      24hr
                    </div>
                    <div className="small text-subtle">Appointment Goal</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <div className="heading-tertiary text-accent mb-1">
                      Fast
                    </div>
                    <div className="small text-subtle">Pain Relief</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <div className="heading-tertiary text-accent mb-1">
                      Expert
                    </div>
                    <div className="small text-subtle">Care</div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 mt-3 md:mt-0"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="position-relative">
                <div className="card-elevated">
                  <Image
                    src="/services/bg-emergency.jpg"
                    alt="Emergency Dental Treatment"
                    width={600}
                    height={500}
                    className="img-fluid rounded-modern"
                    style={{ objectFit: "cover" }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section-modern bg-cream">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">
              Our Emergency Approach
            </span>
            <h2 className="heading-secondary mt-2 mb-4">
              How We Handle Dental Emergencies
            </h2>
          </div>

          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <Image
                src="/gallery/Zayradental_Edits_13.jpg"
                alt="Emergency Treatment Room"
                width={600}
                height={500}
                className="img-fluid rounded-modern shadow-modern"
                style={{ objectFit: "cover" }}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <p className="text-subtle mb-4">
                At Zayra Dental, we care about emergencies and ensure that our
                patients are not left out when they are in pain or a similar
                difficulty. With our best practice, regular appointments and
                preventive treatments in time, we ensure that the chances of our
                patients having dental emergencies is significantly reduced.
              </p>
              <p className="text-subtle mb-4">
                We always try our best to accommodate new patients into the
                reserved slots for emergency care. At Zayra best dentist Leeds
                our mission is to provide affordable dental care to all those
                who need it most.
              </p>
              <p className="text-subtle mb-4">
                We keep our waiting times at the lowest in an attempt to see
                every patient with urgent needs within 24 hours. However, there
                may be times when this is not possible. Our modern telephone
                system is equipped to have a video call and consultation with
                the dentist.
              </p>
              <p className="text-subtle mb-4">
                A lot of the problems could be dealt with advice and medications
                and the surgical treatment can be postponed when the condition
                settle down.
              </p>

              <div className="d-flex flex-wrap gap-2 mb-4">
                <span
                  className="badge rounded-pill px-3 py-2"
                  style={{
                    background: "var(--primary-teal)",
                    color: "white",
                  }}
                >
                  CQC Registered
                </span>
                <span
                  className="badge rounded-pill px-3 py-2"
                  style={{
                    background: "var(--primary-brown)",
                    color: "white",
                  }}
                >
                  Award Winning
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Emergencies */}
      <section className="section-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Common Emergencies</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Emergency Dental Conditions We Treat
            </h2>
          </div>

          <div className="row g-4">
            {/* Toothache */}
            <div className="col-lg-6" data-aos="fade-up">
              <div className="card-modern h-100">
                <div className="d-flex align-items-start gap-3">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "#dc3545",
                      color: "white",
                      flexShrink: 0,
                    }}
                  >
                    <AlertTriangle size={28} />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="fw-semibold mb-3">Toothache</h5>
                    <p className="text-subtle mb-3">
                      Toothache is the commonest dental emergency. Toothache can
                      be caused by several reasons including but not limited to
                      tooth decay, dental abscess, cracked or damaged tooth, a
                      loose or broken filling.
                    </p>
                    <p className="text-subtle mb-3">
                      Unless it is associated with swelling, most causes of
                      toothache can get some relief with pain relief medicines.
                      The best way to prevent toothaches is to have regular
                      dental check-ups and brushing your teeth twice a day.
                    </p>
                    <p className="text-subtle">
                      Regular use of dental floss and interdental brushes are
                      also very important.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Abscesses and Swellings */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="card-modern h-100">
                <div className="d-flex align-items-start gap-3">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "#fd7e14",
                      color: "white",
                      flexShrink: 0,
                    }}
                  >
                    <Shield size={28} />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="fw-semibold mb-3">
                      Abscesses and Swellings
                    </h5>
                    <p className="text-subtle mb-3">
                      A dental abscess is a collection of pus inside the teeth,
                      gums or bone and is caused by infection. Whether or not
                      painful they are one of the few reasons to go to emergency
                      department if you can&apos;t get a dentist appointment.
                    </p>
                    <p className="text-subtle mb-3">
                      A dental abscess will need emergency treatment to address
                      the infection and permanent treatment to either remove or
                      preserve the tooth.
                    </p>
                    <p className="text-subtle">
                      At Zayra private dentist Leeds, our team works hard to
                      ensure that all our patients are seen in time and best
                      quality emergency dental care provided.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Broken Tooth */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="card-modern h-100">
                <div className="d-flex align-items-start gap-3">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "var(--primary-teal)",
                      color: "white",
                      flexShrink: 0,
                    }}
                  >
                    <Heart size={28} />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="fw-semibold mb-3">Broken Tooth</h5>
                    <p className="text-subtle mb-3">
                      A broken tooth is not only unsightly but can also be
                      painful. We can help you fix this very quickly. Although
                      getting an NHS appointment is a good idea, you don&apos;t
                      have to live with the burden for several days.
                    </p>
                    <p className="text-subtle mb-3">
                      There are several inexpensive ways to address a broken
                      tooth. We always aim to see you within 24 hours.
                    </p>
                    <p className="text-subtle">
                      Root canal treatment isn&apos;t always necessary for
                      cracked and chipped teeth. Where there&apos;s no pain or
                      infection, cracks can be filled and bound together, while
                      a broken tooth will be fixed with a crown.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lost Crown */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
              <div className="card-modern h-100">
                <div className="d-flex align-items-start gap-3">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "var(--primary-brown)",
                      color: "white",
                      flexShrink: 0,
                    }}
                  >
                    <Zap size={28} />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="fw-semibold mb-3">Lost Crown</h5>
                    <p className="text-subtle mb-3">
                      Most people have dental crowns to protect a
                      cracked/chipped but still intact tooth, to insulate a
                      tooth following a root canal, or to try and save a decayed
                      tooth that cannot hold a filling.
                    </p>
                    <p className="text-subtle mb-3">
                      If your crown comes off it is important to act quickly. If
                      your dental crown falls off, the underlying tooth is at
                      risk, but the crown can be replaced without further damage
                      to the tooth.
                    </p>
                    <p className="text-subtle">
                      At Zayra dental Leeds we treat this as an emergency and
                      will aim to see you in the next 24 hours. Please call now
                      to book an appointment if your crown has come off the
                      tooth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-modern bg-light-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Emergency Excellence</span>
            <h2 className="heading-secondary mt-2 mb-4">
              Why Choose Zayra Dental for Emergencies?
            </h2>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6" data-aos="fade-up">
              <div className="card-modern text-center h-100">
                <div
                  className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "var(--primary-brown)",
                    color: "white",
                  }}
                >
                  <Clock size={32} />
                </div>
                <h4 className="heading-tertiary mb-3">24 Hour Response</h4>
                <p className="text-subtle">
                  We aim to see emergency patients within 24 hours with video
                  consultation available
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="card-modern text-center h-100">
                <div
                  className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "var(--primary-teal)",
                    color: "white",
                  }}
                >
                  <Heart size={32} />
                </div>
                <h4 className="heading-tertiary mb-3">Pain Relief Priority</h4>
                <p className="text-subtle">
                  Immediate pain management and medication advice while you wait
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="card-modern text-center h-100">
                <div
                  className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "var(--accent-teal)",
                    color: "white",
                  }}
                >
                  <Shield size={32} />
                </div>
                <h4 className="heading-tertiary mb-3">Expert Treatment</h4>
                <p className="text-subtle">
                  Experienced team with advanced training in emergency dental
                  care
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card-modern text-center h-100">
                <div
                  className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "#dc3545",
                    color: "white",
                  }}
                >
                  <Users size={32} />
                </div>
                <h4 className="heading-tertiary mb-3">Patient Focused</h4>
                <p className="text-subtle">
                  No unnecessary treatments - just expert care for your
                  emergency
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="section-modern">
        <div className="container-modern">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="text-accent fw-medium">Emergency Stories</span>
            <h2 className="heading-secondary mt-2 mb-4">
              When We Were There When It Mattered
            </h2>
          </div>

          <div className="row g-4">
            <div className="col-lg-4" data-aos="fade-up">
              <div className="card-modern text-center h-100">
                <div className="d-flex justify-content-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="var(--primary-teal)"
                      color="var(--primary-teal)"
                    />
                  ))}
                </div>
                <p className="text-subtle fst-italic mb-3">
                  &ldquo;Called with severe toothache on weekend. Dr. Reshma
                  gave excellent advice over the phone and saw me first thing
                  Monday morning.&rdquo;
                </p>
                <div className="fw-semibold">Sarah M.</div>
                <div className="small text-subtle">Emergency Toothache</div>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card-modern text-center h-100">
                <div className="d-flex justify-content-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="var(--primary-teal)"
                      color="var(--primary-teal)"
                    />
                  ))}
                </div>
                <p className="text-subtle fst-italic mb-3">
                  &ldquo;Broke my tooth on Friday evening. Got an emergency
                  appointment and had it fixed beautifully. Professional and
                  caring service.&rdquo;
                </p>
                <div className="fw-semibold">David K.</div>
                <div className="small text-subtle">Broken Tooth Repair</div>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card-modern text-center h-100">
                <div className="d-flex justify-content-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="var(--primary-teal)"
                      color="var(--primary-teal)"
                    />
                  ))}
                </div>
                <p className="text-subtle fst-italic mb-3">
                  &ldquo;Dental abscess treated quickly and efficiently. The
                  video consultation helped manage my pain until I could get to
                  the clinic.&rdquo;
                </p>
                <div className="fw-semibold">Emma L.</div>
                <div className="small text-subtle">Dental Abscess</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section
        className="section-modern text-white"
        style={{
          background: "linear-gradient(135deg, #dc3545, #c82333)",
        }}
      >
        <div className="container-modern">
          <div className="row align-items-center">
            <div className="col-lg-8" data-aos="fade-right">
              <div className="d-flex align-items-center gap-3 mb-4">
                <AlertTriangle size={60} />
                <div>
                  <h2
                    className="heading-secondary mb-2"
                    style={{ color: "white" }}
                  >
                    Don&apos;t Wait - Get Emergency Care Now!
                  </h2>
                  <p className="lead mb-0" style={{ opacity: 0.9 }}>
                    Dental emergencies require immediate attention. Call us for
                    expert advice and emergency appointments.
                  </p>
                </div>
              </div>

              <div className="row g-3">
                <div className="col-md-4">
                  <div className="text-center">
                    <div className="h4 mb-1" style={{ color: "white" }}>
                      Award Winning
                    </div>
                    <div className="small" style={{ opacity: 0.9 }}>
                      CQC Registered Practice
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-center">
                    <div className="h4 mb-1" style={{ color: "white" }}>
                      24 Hour Goal
                    </div>
                    <div className="small" style={{ opacity: 0.9 }}>
                      Emergency Appointments
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-center">
                    <div className="h4 mb-1" style={{ color: "white" }}>
                      Video Consultation
                    </div>
                    <div className="small" style={{ opacity: 0.9 }}>
                      Available
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 text-lg-end"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <a
                href="tel:01132488398"
                className="btn btn-light btn-lg d-block mb-3"
                style={{
                  borderRadius: "50px",
                  padding: "1.5rem 2rem",
                  fontWeight: "600",
                  fontSize: "1.2rem",
                  color: "#dc3545",
                }}
              >
                <Phone size={24} />
                Call 0113 248 8398
              </a>
              <div className="small text-center" style={{ opacity: 0.9 }}>
                Call for emergency advice and appointments
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
