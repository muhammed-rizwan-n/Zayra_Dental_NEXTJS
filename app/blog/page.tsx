import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  User,
  Tag,
  ArrowRight,
  TrendingUp,
  Eye,
  Heart,
  Share2,
  Filter,
  Search,
  BookOpen,
  Star,
  PlayCircle,
  Award,
  MessageCircle,
} from "lucide-react";
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
      "Stay informed with expert dental health advice from award-winning Zayra Dental in Leeds.",
    type: "website",
    url: "https://zayradental.co.uk/blog",
    images: [
      {
        url: "/services/dental_treatment.jpeg",
        width: 1200,
        height: 630,
        alt: "Zayra Dental Blog",
      },
    ],
  },
  alternates: { canonical: "/blog" },
};

// Process blog data
const sortedPosts = [...blogData].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);
const featuredPosts = sortedPosts.filter((post) => post.featured);
const trendingPosts = sortedPosts.filter((post) => post.trending);
const categories = [...new Set(blogData.map((post) => post.category))];

export default function BlogPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Zayra Dental Blog",
    description:
      "Expert dental health advice from award-winning Zayra Dental in Leeds",
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
      author: { "@type": "Person", name: post.author.name },
      image: `https://zayradental.co.uk${post.images.hero}`,
      description: post.excerpt,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="modern-blog">
        {/* Hero Section */}
        <section className="blog-hero">
          <div className="blog-hero-background">
            <Image
              src="/services/dental_treatment.jpeg"
              alt="Dental Health Blog"
              fill
              className="hero-bg-image"
            />
            <div className="hero-overlay" />
          </div>

          <div className="container-modern">
            <div className="row align-items-center min-vh-75">
              <div className="col-lg-8 mx-auto text-center position-relative">
                <div data-aos="fade-up">
                  <div className="hero-badge">
                    <Award size={16} />
                    <span>Award-Winning Dental Care</span>
                  </div>

                  <h1 className="blog-hero-title">
                    Expert Dental Health
                    <span className="text-gradient"> Insights</span>
                  </h1>

                  <p className="blog-hero-subtitle">
                    Stay informed with cutting-edge dental advice, treatment
                    guides, and oral health tips from our award-winning team in
                    Leeds. Your journey to optimal oral health starts here.
                  </p>

                  <div className="hero-stats">
                    <div className="stat-item">
                      <div className="stat-number">{blogData.length}+</div>
                      <div className="stat-label">Expert Articles</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">1000+</div>
                      <div className="stat-label">Readers</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">5★</div>
                      <div className="stat-label">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filter Bar */}
        <section className="blog-controls">
          <div className="container-modern">
            <div className="controls-wrapper">
              <div className="search-section">
                <div className="search-input-group">
                  <Search size={20} />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="search-input"
                  />
                </div>
              </div>

              <div className="filter-section">
                <div className="filter-label">
                  <Filter size={16} />
                  <span>Filter by:</span>
                </div>
                <div className="category-pills">
                  <button className="category-pill active">All</button>
                  {categories.map((category) => (
                    <button key={category} className="category-pill">
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="featured-section">
          <div className="container-modern">
            <div className="section-header">
              <h2 className="section-title">Featured Articles</h2>
              <p className="section-subtitle">
                Our most comprehensive guides to dental health and treatments
              </p>
            </div>

            <div className="featured-grid">
              {featuredPosts.slice(0, 3).map((post, index) => (
                <article
                  key={post.id}
                  className={`featured-card ${index === 0 ? "featured-main" : "featured-secondary"}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Link href={`/blog/${post.slug}`} className="card-link">
                    <div className="card-image-wrapper">
                      <Image
                        src={post.images.hero}
                        alt={post.title}
                        fill
                        className="card-image"
                      />
                      <div className="image-overlay" />

                      <div className="card-badges">
                        <span className="featured-badge">
                          <Star size={12} />
                          Featured
                        </span>
                        {post.trending && (
                          <span className="trending-badge">
                            <TrendingUp size={12} />
                            Trending
                          </span>
                        )}
                      </div>

                      <div className="card-content">
                        <div className="card-category">{post.category}</div>
                        <h3 className="card-title">{post.title}</h3>
                        <p className="card-excerpt">{post.excerpt}</p>

                        <div className="card-meta">
                          <div className="author-info">
                            <div className="author-avatar">
                              <User size={16} />
                            </div>
                            <div>
                              <div className="author-name">
                                {post.author.name}
                              </div>
                              <div className="post-date">
                                {new Date(post.date).toLocaleDateString(
                                  "en-GB",
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="engagement-stats">
                            <span className="stat">
                              <Eye size={12} />
                              {post.views}
                            </span>
                            <span className="stat">
                              <Clock size={12} />
                              {post.readTime}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Articles */}
        {trendingPosts.length > 0 && (
          <section className="trending-section">
            <div className="container-modern">
              <div className="section-header">
                <h2 className="section-title">
                  <TrendingUp className="section-icon" />
                  Trending Now
                </h2>
                <p className="section-subtitle">
                  What our readers are talking about
                </p>
              </div>

              <div className="trending-grid">
                {trendingPosts.slice(0, 4).map((post, index) => (
                  <article
                    key={post.id}
                    className="trending-card"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <Link href={`/blog/${post.slug}`} className="card-link">
                      <div className="trending-card-content">
                        <div className="trending-number">#{index + 1}</div>

                        <div className="trending-image">
                          <Image
                            src={post.images.thumbnail}
                            alt={post.title}
                            width={80}
                            height={80}
                            className="trending-thumbnail"
                          />
                        </div>

                        <div className="trending-info">
                          <div className="trending-category">
                            {post.category}
                          </div>
                          <h4 className="trending-title">{post.title}</h4>
                          <div className="trending-meta">
                            <span className="trending-stat">
                              <Eye size={12} />
                              {post.views}
                            </span>
                            <span className="trending-stat">
                              <Heart size={12} />
                              {post.socialStats.likes}
                            </span>
                            <span className="trending-stat">
                              <Clock size={12} />
                              {post.readTime}
                            </span>
                          </div>
                        </div>

                        <ArrowRight className="trending-arrow" size={16} />
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Articles Grid */}
        <section className="articles-section">
          <div className="container-modern">
            <div className="section-header">
              <h2 className="section-title">All Articles</h2>
              <p className="section-subtitle">
                Comprehensive dental health resources and expert insights
              </p>
            </div>

            <div className="articles-grid">
              {sortedPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="article-card"
                  data-aos="fade-up"
                  data-aos-delay={(index % 3) * 100}
                >
                  <Link href={`/blog/${post.slug}`} className="card-link">
                    <div className="article-image-wrapper">
                      <Image
                        src={post.images.hero}
                        alt={post.title}
                        fill
                        className="article-image"
                      />
                      <div className="article-overlay" />

                      <div className="article-badges">
                        <span className="category-badge">{post.category}</span>
                        {post.featured && (
                          <span className="featured-indicator">
                            <Star size={10} />
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="article-content">
                      <div className="article-header">
                        <h3 className="article-title">{post.title}</h3>
                        <p className="article-excerpt">{post.excerpt}</p>
                      </div>

                      <div className="article-footer">
                        <div className="article-author">
                          <div className="author-avatar-small">
                            <User size={14} />
                          </div>
                          <span className="author-name-small">
                            {post.author.name}
                          </span>
                        </div>

                        <div className="article-meta">
                          <span className="meta-item">
                            <Calendar size={12} />
                            {new Date(post.date).toLocaleDateString("en-GB")}
                          </span>
                          <span className="meta-item">
                            <Clock size={12} />
                            {post.readTime}
                          </span>
                          <span className="meta-item">
                            <Eye size={12} />
                            {post.views}
                          </span>
                        </div>
                      </div>

                      <div className="engagement-footer">
                        <div className="engagement-stats">
                          <span className="engagement-stat">
                            <Heart size={12} />
                            {post.socialStats.likes}
                          </span>
                          <span className="engagement-stat">
                            <Share2 size={12} />
                            {post.socialStats.shares}
                          </span>
                          <span className="engagement-stat">
                            <MessageCircle size={12} />
                            {post.socialStats.comments}
                          </span>
                        </div>

                        <div className="read-more">
                          <span>Read Article</span>
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter & CTA */}
        <section className="newsletter-section">
          <div className="container-modern">
            <div className="newsletter-wrapper">
              <div className="row align-items-center">
                <div className="col-lg-6" data-aos="fade-right">
                  <div className="newsletter-content">
                    <h2 className="newsletter-title">
                      Stay Updated with Our
                      <span className="text-gradient"> Latest Insights</span>
                    </h2>
                    <p className="newsletter-subtitle">
                      Get expert dental health tips, treatment updates, and
                      exclusive offers delivered straight to your inbox. Join
                      1000+ health-conscious readers.
                    </p>

                    <div className="newsletter-form">
                      <div className="form-group">
                        <input
                          type="email"
                          placeholder="Enter your email address"
                          className="newsletter-input"
                        />
                        <button className="newsletter-btn">
                          Subscribe
                          <ArrowRight size={16} />
                        </button>
                      </div>
                      <p className="form-note">
                        Free to unsubscribe anytime. Your privacy is protected.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6" data-aos="fade-left">
                  <div className="newsletter-image">
                    <Image
                      src="/services/dental_checkup.jpg"
                      alt="Dental Newsletter"
                      width={500}
                      height={400}
                      className="newsletter-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions CTA */}
        <section className="quick-actions">
          <div className="container-modern">
            <div className="quick-actions-grid">
              <div className="action-card" data-aos="fade-up">
                <div className="action-icon">
                  <Calendar size={24} />
                </div>
                <h3 className="action-title">Book Consultation</h3>
                <p className="action-desc">
                  Ready to start your dental journey? Book a personalized
                  consultation.
                </p>
                <Link href="/appointment" className="action-btn">
                  Schedule Now
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div
                className="action-card"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="action-icon">
                  <PlayCircle size={24} />
                </div>
                <h3 className="action-title">Virtual Tour</h3>
                <p className="action-desc">
                  Explore our modern dental practice and advanced equipment.
                </p>
                <Link href="/gallery" className="action-btn">
                  Take Tour
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div
                className="action-card"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="action-icon">
                  <MessageCircle size={24} />
                </div>
                <h3 className="action-title">Ask Expert</h3>
                <p className="action-desc">
                  Have questions? Get personalized advice from our dental
                  experts.
                </p>
                <Link href="/contact" className="action-btn">
                  Contact Us
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
