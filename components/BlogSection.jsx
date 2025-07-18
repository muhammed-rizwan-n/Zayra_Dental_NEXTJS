"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import blogData from "../app/blog/blogData.json";

export default function BlogSection({
  title = "Latest from Our Blog",
  subtitle = "Stay informed with expert dental health advice",
  showCount = 3,
  showFeatured = false,
  compact = false,
}) {
  // Sort posts by date and filter based on requirements
  const sortedPosts = [...blogData]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((post) => (showFeatured ? post.featured : true))
    .slice(0, showCount);

  if (compact) {
    return (
      <section className="section-modern bg-light-modern">
        <div className="container-modern">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h2
                className="heading-secondary text-primary-brown mb-3"
                data-aos="fade-up"
              >
                {title}
              </h2>
              {subtitle && (
                <p
                  className="lead text-subtle mb-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          <div className="row g-3">
            {sortedPosts.map((post, index) => (
              <div
                key={post.id}
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-decoration-none"
                >
                  <article className="card-modern h-100 p-3 blog-card-compact">
                    <div className="d-flex align-items-start gap-3">
                      <div className="blog-preview-mini position-relative">
                        <Image
                          src={
                            post.images?.hero ||
                            "/services/dental_treatment.jpeg"
                          }
                          alt={post.title}
                          fill
                          className="blog-preview-image"
                          style={{ objectFit: "cover" }}
                        />
                      </div>

                      <div className="flex-1">
                        <div className="d-flex align-items-center gap-2 mb-2 text-subtle small">
                          <Calendar size={12} />
                          <span>
                            {new Date(post.date).toLocaleDateString("en-GB")}
                          </span>
                          <Clock size={12} />
                          <span>{post.readTime}</span>
                        </div>

                        <h3 className="h6 fw-semibold mb-2 text-primary line-clamp-2">
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
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>

          <div className="row mt-4">
            <div className="col-12 text-center">
              <Link
                href="/blog"
                className="btn-secondary-modern"
                data-aos="fade-up"
              >
                <BookOpen size={18} />
                View All Articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-modern bg-white">
      <div className="container-modern">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2
              className="heading-secondary text-primary-brown mb-4"
              data-aos="fade-up"
            >
              {title}
            </h2>
            {subtitle && (
              <p
                className="lead text-subtle mb-0"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {subtitle}
              </p>
            )}
          </div>
        </div>

        <div className="row g-4">
          {sortedPosts.map((post, index) => (
            <div
              key={post.id}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
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
                          src={
                            post.images?.hero ||
                            "/services/dental_treatment.jpeg"
                          }
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

                  <div className="p-4">
                    <div className="d-flex align-items-center gap-3 mb-3 text-subtle small">
                      <div className="d-flex align-items-center gap-1">
                        <Calendar size={14} />
                        <span>
                          {new Date(post.date).toLocaleDateString("en-GB")}
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="h5 fw-semibold mb-3 text-primary">
                      {post.title}
                    </h3>
                    <p className="text-subtle mb-3 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center gap-2">
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

        <div className="row mt-5">
          <div className="col-12 text-center">
            <Link
              href="/blog"
              className="btn-primary-modern"
              data-aos="fade-up"
            >
              <BookOpen size={18} />
              View All Articles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
