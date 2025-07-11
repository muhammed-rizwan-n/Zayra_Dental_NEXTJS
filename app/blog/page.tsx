import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, Tag, ArrowRight } from "lucide-react";
import blogData from "./blogData.json";
import "./style.css";

export const metadata: Metadata = {
  title: "Dental Health Blog | Expert Advice from Zayra Dental Leeds",
  description:
    "Stay informed with expert dental health advice, tips, and insights from award-winning Zayra Dental in Leeds. Read our latest blog posts on oral health, cosmetic dentistry, and preventive care.",
  keywords: [
    "dental blog Leeds",
    "oral health tips",
    "dental advice",
    "teeth whitening Leeds",
    "dental implants Leeds",
    "emergency dentist Leeds",
    "cosmetic dentistry blog",
    "preventive dental care",
    "dental hygiene tips",
    "Zayra Dental blog",
  ],
  openGraph: {
    title: "Dental Health Blog | Expert Advice from Zayra Dental Leeds",
    description:
      "Stay informed with expert dental health advice from award-winning Zayra Dental in Leeds. Professional insights on oral health, cosmetic dentistry, and more.",
    type: "website",
    url: "https://zayradental.co.uk/blog",
    images: [
      {
        url: "/blog/dental-health-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Zayra Dental Blog - Expert Dental Health Advice Leeds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Health Blog | Expert Advice from Zayra Dental Leeds",
    description:
      "Stay informed with expert dental health advice from award-winning Zayra Dental in Leeds.",
    images: ["/blog/dental-health-blog.jpg"],
  },
  alternates: {
    canonical: "/blog",
  },
};

// Sort posts by date (newest first) and separate featured posts
const sortedPosts = [...blogData].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);
const featuredPosts = sortedPosts.filter((post) => post.featured);
const regularPosts = sortedPosts.filter((post) => !post.featured);

export default function BlogPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Zayra Dental Blog",
    description:
      "Expert dental health advice and insights from award-winning Zayra Dental in Leeds",
    url: "https://zayradental.co.uk/blog",
    publisher: {
      "@type": "Organization",
      name: "Zayra Dental",
      logo: {
        "@type": "ImageObject",
        url: "https://zayradental.co.uk/logo.png",
      },
    },
    blogPost: blogData.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `https://zayradental.co.uk/blog/${post.slug}`,
      datePublished: post.date,
      dateModified: post.date,
      author: {
        "@type": "Person",
        name: post.author,
      },
      image: `https://zayradental.co.uk${post.image}`,
      description: post.excerpt,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="bg-light-modern">
        {/* Hero Section */}
        <section className="hero-modern bg-professional">
          <div className="container-modern">
            <div className="row align-items-center min-vh-50">
              <div className="col-lg-8 mx-auto text-center">
                <div data-aos="fade-up">
                  <h1 className="heading-primary text-primary-brown mb-4">
                    Dental Health Blog
                  </h1>
                  <p className="lead text-subtle mb-5">
                    Expert advice, tips, and insights from our award-winning
                    dental team in Leeds. Stay informed about the latest in oral
                    health, cosmetic dentistry, and preventive care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="section-modern">
            <div className="container-modern">
              <div className="row mb-5">
                <div className="col-12">
                  <h2
                    className="heading-secondary text-center mb-5"
                    data-aos="fade-up"
                  >
                    Featured Articles
                  </h2>
                </div>
              </div>

              <div className="row g-4">
                {featuredPosts.map((post, index) => (
                  <div
                    key={post.id}
                    className="col-lg-6"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-decoration-none"
                    >
                      <article className="card-modern h-100 overflow-hidden p-0 featured-blog-card">
                        <div className="position-relative">
                          <div className="blog-preview-frame">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="blog-preview-image"
                              style={{ objectFit: "cover" }}
                            />
                            <div className="blog-preview-content">
                              <span className="badge rounded-pill bg-primary-brown mb-2">
                                Featured
                              </span>
                              <h4 className="h6 fw-semibold mb-2 text-white">
                                {post.title}
                              </h4>
                              <div
                                className="d-flex align-items-center gap-2 text-white small"
                                style={{ opacity: 0.9 }}
                              >
                                <Calendar size={12} />
                                <span>
                                  {new Date(post.date).toLocaleDateString(
                                    "en-GB",
                                  )}
                                </span>
                                <Clock size={12} />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-4">
                          <div className="d-flex align-items-center gap-3 mb-3 text-subtle small">
                            <div className="d-flex align-items-center gap-1">
                              <Calendar size={14} />
                              <span>
                                {new Date(post.date).toLocaleDateString(
                                  "en-GB",
                                )}
                              </span>
                            </div>
                            <div className="d-flex align-items-center gap-1">
                              <Clock size={14} />
                              <span>{post.readTime}</span>
                            </div>
                            <div className="d-flex align-items-center gap-1">
                              <User size={14} />
                              <span>{post.author}</span>
                            </div>
                          </div>

                          <h3 className="h5 fw-semibold mb-3 text-primary">
                            {post.title}
                          </h3>
                          <p className="text-subtle mb-3">{post.excerpt}</p>

                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-2">
                              <Tag size={14} className="text-primary-brown" />
                              <span className="small text-primary-brown fw-medium">
                                {post.category}
                              </span>
                            </div>
                            <div className="d-flex align-items-center gap-1 text-primary-brown fw-medium">
                              <span className="small">Read More</span>
                              <ArrowRight size={14} />
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Blog Posts */}
        <section className="section-modern bg-white">
          <div className="container-modern">
            <div className="row mb-5">
              <div className="col-12">
                <h2
                  className="heading-secondary text-center mb-5"
                  data-aos="fade-up"
                >
                  All Articles
                </h2>
              </div>
            </div>

            <div className="row g-4">
              {sortedPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-decoration-none"
                  >
                    <article className="card-modern h-100 overflow-hidden p-0 blog-card">
                      <div className="position-relative">
                        <div className="blog-preview-frame-small d-flex">
                          <div className="w-50 position-relative">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="blog-preview-image"
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                          <div className="w-50">
                            <iframe
                              src={`/blog/${post.slug}?preview=true`}
                              title={`Preview of ${post.title}`}
                              className="blog-preview-iframe-small"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="position-absolute top-0 start-0 w-100 h-100 blog-overlay-light">
                          {post.featured && (
                            <div className="position-absolute top-3 start-3">
                              <span className="badge rounded-pill bg-primary-brown">
                                Featured
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="p-3">
                        <div className="d-flex align-items-center gap-2 mb-2 text-subtle small">
                          <Calendar size={12} />
                          <span>
                            {new Date(post.date).toLocaleDateString("en-GB")}
                          </span>
                          <Clock size={12} />
                          <span>{post.readTime}</span>
                        </div>

                        <h3 className="h6 fw-semibold mb-2 text-primary">
                          {post.title}
                        </h3>
                        <p className="text-subtle small mb-2 line-clamp-2">
                          {post.excerpt}
                        </p>

                        <div className="d-flex justify-content-between align-items-center">
                          <span className="small text-primary-brown fw-medium">
                            {post.category}
                          </span>
                          <ArrowRight
                            size={12}
                            className="text-primary-brown"
                          />
                        </div>
                      </div>
                    </article>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-modern bg-professional">
          <div className="container-modern">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <div data-aos="fade-up">
                  <h2 className="heading-secondary text-primary-brown mb-4">
                    Have Questions About Your Oral Health?
                  </h2>
                  <p className="lead text-subtle mb-5">
                    Our expert dental team in Leeds is here to help. Book a
                    consultation to discuss your dental health needs and create
                    a personalized treatment plan.
                  </p>
                  <div className="d-flex flex-wrap gap-3 justify-content-center">
                    <Link href="/appointment" className="btn-primary-modern">
                      <Calendar size={18} />
                      Book Consultation
                    </Link>
                    <Link href="/contact" className="btn-secondary-modern">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
