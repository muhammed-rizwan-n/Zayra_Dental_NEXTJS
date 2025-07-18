import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  User,
  Tag,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  Eye,
  Heart,
  BookOpen,
  CheckCircle,
  DollarSign,
  Star,
  TrendingUp,
  Award,
  ChevronRight,
  Play,
  Download,
  Bookmark,
} from "lucide-react";
import blogData from "../blogData.json";

interface BlogPostProps {
  params: { slug: string };
  searchParams: { preview?: string };
}

export async function generateStaticParams() {
  return blogData.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const post = blogData.find((post) => post.slug === params.slug);
  if (!post) {
    return {
      title: "Blog Post Not Found | Zayra Dental",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Zayra Dental Leeds Blog`,
    description: post.metaDescription,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://zayradental.co.uk/blog/${post.slug}`,
      images: [
        { url: post.images.hero, width: 1200, height: 630, alt: post.title },
      ],
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

function getBlogPostContent(slug: string) {
  const post = blogData.find((post) => post.slug === slug);
  if (!post) return null;

  const contentMap: Record<string, string> = {
    "importance-of-regular-dental-checkups": `
      <p class="lead-paragraph">Regular dental checkups are the cornerstone of preventive dental care and your first line of defense against serious oral health issues. At Zayra Dental in Leeds, we've seen countless patients benefit from our comprehensive six-monthly assessments that catch problems early and save both discomfort and costs.</p>

      <div class="highlight-box">
        <h3>Why Every Six Months Matters</h3>
        <p>The six-month interval isn't arbitrary—it's based on decades of dental research and clinical evidence. This timeframe allows us to intercept problems before they escalate into painful and expensive treatments.</p>
      </div>

      <h2>What We Detect During Your Checkup</h2>
      <div class="benefits-grid">
        <div class="benefit-item">
          <div class="benefit-icon">🦷</div>
          <h4>Early Tooth Decay</h4>
          <p>Microscopic cavities that are painless but growing</p>
        </div>
        <div class="benefit-item">
          <div class="benefit-icon">🩺</div>
          <h4>Gum Disease Signs</h4>
          <p>Inflammation and infection before they spread</p>
        </div>
        <div class="benefit-item">
          <div class="benefit-icon">🔍</div>
          <h4>Oral Cancer Screening</h4>
          <p>Early detection can be life-saving</p>
        </div>
        <div class="benefit-item">
          <div class="benefit-icon">🦴</div>
          <h4>Bone Loss Assessment</h4>
          <p>Monitoring jawbone health and density</p>
        </div>
      </div>

      <h2>Your Comprehensive Examination Experience</h2>
      <p>At Zayra Dental, we've refined our examination process to be thorough yet comfortable. Here's what you can expect during your visit:</p>

      <div class="process-steps">
        <div class="step">
          <div class="step-number">1</div>
          <div class="step-content">
            <h4>Digital Health Assessment</h4>
            <p>We begin with a review of your medical history and any concerns you might have.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-number">2</div>
          <div class="step-content">
            <h4>Visual & Physical Examination</h4>
            <p>Thorough inspection of teeth, gums, tongue, and soft tissues using advanced diagnostic tools.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-number">3</div>
          <div class="step-content">
            <h4>Digital X-ray Analysis</h4>
            <p>State-of-the-art imaging reveals hidden problems between teeth and below the gumline.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-number">4</div>
          <div class="step-content">
            <h4>Professional Cleaning</h4>
            <p>Removal of plaque and tartar buildup that home brushing cannot eliminate.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-number">5</div>
          <div class="step-content">
            <h4>Personalized Treatment Plan</h4>
            <p>Custom recommendations based on your unique oral health needs and lifestyle.</p>
          </div>
        </div>
      </div>

      <div class="callout-box primary">
        <h3>💡 Professional Insight</h3>
        <p>"In my 15 years of practice, I've found that patients who maintain regular checkups have 85% fewer emergency dental visits and significantly lower lifetime treatment costs." - Dr. Reshma Parambil</p>
      </div>

      <h2>The Financial Benefits of Prevention</h2>
      <p>Many patients worry about the cost of regular checkups, but the mathematics of prevention are compelling:</p>

      <div class="comparison-table">
        <div class="comparison-item preventive">
          <h4>Preventive Care Route</h4>
          <div class="cost">£50-80 per visit</div>
          <ul>
            <li>Six-monthly checkups</li>
            <li>Early intervention</li>
            <li>Simple treatments</li>
            <li>Maintained oral health</li>
          </ul>
        </div>
        <div class="comparison-item reactive">
          <h4>Reactive Treatment Route</h4>
          <div class="cost">£500-5000+ per issue</div>
          <ul>
            <li>Emergency appointments</li>
            <li>Complex procedures</li>
            <li>Multiple visits required</li>
            <li>Potential tooth loss</li>
          </ul>
        </div>
      </div>

      <h2>Warning Signs Between Visits</h2>
      <p>While regular checkups are essential, certain symptoms require immediate attention. Contact us immediately if you experience:</p>

      <div class="warning-signs">
        <div class="warning-sign urgent">
          <div class="warning-icon">🚨</div>
          <h4>Severe Pain</h4>
          <p>Persistent or throbbing tooth pain, especially when biting down</p>
        </div>
        <div class="warning-sign urgent">
          <div class="warning-icon">🩸</div>
          <h4>Bleeding Gums</h4>
          <p>Spontaneous bleeding or excessive bleeding when brushing</p>
        </div>
        <div class="warning-sign moderate">
          <div class="warning-icon">🦷</div>
          <h4>Loose Teeth</h4>
          <p>Adult teeth that feel mobile or shift position</p>
        </div>
        <div class="warning-sign moderate">
          <div class="warning-icon">😷</div>
          <h4>Chronic Bad Breath</h4>
          <p>Persistent halitosis despite good oral hygiene</p>
        </div>
      </div>

      <h2>Maximizing Your Checkup Benefits</h2>
      <p>To get the most from your dental visits:</p>
      <ul class="enhanced-list">
        <li><strong>Prepare Questions:</strong> Write down any concerns or symptoms you've noticed</li>
        <li><strong>Update Medical History:</strong> Inform us of any medications or health changes</li>
        <li><strong>Maintain Good Hygiene:</strong> Continue your home care routine between visits</li>
        <li><strong>Follow Recommendations:</strong> Act on treatment suggestions promptly</li>
        <li><strong>Schedule Consistently:</strong> Book your next appointment before leaving</li>
      </ul>
    `,
    "teeth-whitening-options-leeds": `
      <p class="lead-paragraph">A brilliant smile can transform not just your appearance, but your confidence and the way others perceive you. At Zayra Dental in Leeds, we've helped hundreds of patients achieve their dream smile through professional teeth whitening—and the results speak for themselves.</p>

      <div class="before-after-showcase">
        <h3>Real Patient Transformations</h3>
        <p>See the dramatic difference professional whitening can make in just one session.</p>
        <div class="transformation-grid">
          <div class="transformation-item">
            <div class="before-after">
              <span class="label">Before</span>
              <span class="label">After</span>
            </div>
            <p class="patient-info">Sarah, 32 - Coffee enthusiast who gained 6 shades in 90 minutes</p>
          </div>
        </div>
      </div>

      <h2>Professional vs At-Home: The Complete Comparison</h2>

      <div class="comparison-detailed">
        <div class="comparison-section professional">
          <div class="section-header">
            <div class="icon">⭐</div>
            <h3>Professional In-Office Whitening</h3>
            <div class="rating">
              <div class="stars">★★★★★</div>
              <span>Recommended</span>
            </div>
          </div>

          <div class="feature-list">
            <div class="feature">
              <CheckCircle className="check-icon" size={20} />
              <div>
                <h4>Immediate Results</h4>
                <p>3-8 shades whiter in just 60-90 minutes</p>
              </div>
            </div>
            <div class="feature">
              <CheckCircle className="check-icon" size={20} />
              <div>
                <h4>Professional Supervision</h4>
                <p>Monitored by qualified dentists for safety</p>
              </div>
            </div>
            <div class="feature">
              <CheckCircle className="check-icon" size={20} />
              <div>
                <h4>Customized Treatment</h4>
                <p>Tailored to your specific tooth color and sensitivity</p>
              </div>
            </div>
            <div class="feature">
              <CheckCircle className="check-icon" size={20} />
              <div>
                <h4>Long-lasting Results</h4>
                <p>Effects can last 2-3 years with proper maintenance</p>
              </div>
            </div>
          </div>

          <div class="investment-info">
            <div class="cost-range">£300-600</div>
            <div class="value-prop">Best long-term value</div>
          </div>
        </div>

        <div class="comparison-section home">
          <div class="section-header">
            <div class="icon">🏠</div>
            <h3>Over-the-Counter Options</h3>
            <div class="rating">
              <div class="stars">★★☆☆☆</div>
              <span>Limited Results</span>
            </div>
          </div>

          <div class="limitation-list">
            <div class="limitation">
              <span className="x-icon">✗</span>
              <div>
                <h4>Slow Progress</h4>
                <p>1-2 shades improvement over several weeks</p>
              </div>
            </div>
            <div class="limitation">
              <span className="x-icon">✗</span>
              <div>
                <h4>One-Size-Fits-All</h4>
                <p>Generic approach may cause uneven whitening</p>
              </div>
            </div>
            <div class="limitation">
              <span className="x-icon">✗</span>
              <div>
                <h4>Sensitivity Risk</h4>
                <p>No professional guidance on safe application</p>
              </div>
            </div>
            <div class="limitation">
              <span className="x-icon">✗</span>
              <div>
                <h4>Temporary Results</h4>
                <p>Effects fade quickly, requiring frequent retreatment</p>
              </div>
            </div>
          </div>

          <div class="investment-info">
            <div class="cost-range">£20-100</div>
            <div class="value-prop">Higher long-term cost</div>
          </div>
        </div>
      </div>

      <h2>Our Advanced Whitening Technology</h2>
      <p>At Zayra Dental, we use the latest in professional whitening technology to ensure optimal results with minimal sensitivity:</p>

      <div class="technology-features">
        <div class="tech-feature">
          <div class="tech-icon">🔬</div>
          <h4>LED Light Activation</h4>
          <p>Advanced light technology accelerates the whitening process for faster, more dramatic results.</p>
        </div>
        <div class="tech-feature">
          <div class="tech-icon">🛡️</div>
          <h4>Gum Protection System</h4>
          <p>Custom barriers protect your gums from whitening gel, ensuring comfort throughout treatment.</p>
        </div>
        <div class="tech-feature">
          <div class="tech-icon">⚡</div>
          <h4>Quick Treatment Protocol</h4>
          <p>Our streamlined process delivers maximum whitening in minimum time without compromising safety.</p>
        </div>
        <div class="tech-feature">
          <div class="tech-icon">📊</div>
          <h4>Progress Monitoring</h4>
          <p>Digital shade matching ensures precise results and tracks your whitening progress.</p>
        </div>
      </div>

      <div class="candidacy-assessment">
        <h2>Are You a Good Candidate for Whitening?</h2>
        <p>Most people can achieve excellent whitening results, but certain factors affect the outcome:</p>

        <div class="candidacy-grid">
          <div class="candidacy-item excellent">
            <h4>🟢 Excellent Candidates</h4>
            <ul>
              <li>Healthy teeth and gums</li>
              <li>Yellow or brown staining</li>
              <li>Coffee, tea, or wine stains</li>
              <li>Age-related discoloration</li>
              <li>Realistic expectations</li>
            </ul>
          </div>

          <div class="candidacy-item good">
            <h4>🟡 Good Candidates with Considerations</h4>
            <ul>
              <li>Mild tooth sensitivity</li>
              <li>Previous dental work</li>
              <li>Minor enamel defects</li>
              <li>Orthodontic treatment history</li>
            </ul>
          </div>

          <div class="candidacy-item limited">
            <h4>🔴 Limited Results Expected</h4>
            <ul>
              <li>Gray staining from medication</li>
              <li>Severe tetracycline staining</li>
              <li>Extensive dental restorations</li>
              <li>Enamel erosion or thinning</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Maintaining Your Brilliant Results</h2>
      <p>Professional whitening is an investment in your smile. Here's how to protect that investment:</p>

      <div class="maintenance-timeline">
        <div class="timeline-item">
          <div class="timeline-marker">24h</div>
          <div class="timeline-content">
            <h4>First 24 Hours - Critical Period</h4>
            <ul>
              <li>Avoid all staining foods and drinks</li>
              <li>No coffee, tea, red wine, or colored beverages</li>
              <li>Stick to white foods: chicken, rice, milk, white bread</li>
              <li>No smoking or tobacco products</li>
            </ul>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-marker">48h</div>
          <div class="timeline-content">
            <h4>48 Hours - Gradual Reintroduction</h4>
            <ul>
              <li>Slowly reintroduce colored foods</li>
              <li>Use a straw for beverages</li>
              <li>Rinse mouth after eating/drinking</li>
              <li>Continue excellent oral hygiene</li>
            </ul>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-marker">1 Week+</div>
          <div class="timeline-content">
            <h4>Long-term Maintenance</h4>
            <ul>
              <li>Touch-up treatments every 6-12 months</li>
              <li>Professional cleanings every 6 months</li>
              <li>Whitening toothpaste for daily use</li>
              <li>Lifestyle modifications for stain prevention</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="expert-tip">
        <h3>💡 Dr. Parambil's Pro Tip</h3>
        <p>"The most successful whitening patients are those who view it as part of their overall oral health routine, not a one-time cosmetic fix. Regular maintenance and good habits ensure your investment lasts for years."</p>
      </div>
    `,
    // Add more content for other blog posts...
  };

  return { ...post, fullContent: contentMap[slug] || post.content };
}

export default function BlogPost({ params, searchParams }: BlogPostProps) {
  const post = getBlogPostContent(params.slug);
  const isPreview = searchParams.preview === "true";

  if (!post) notFound();

  const relatedPosts = blogData
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://zayradental.co.uk${post.images.hero}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.title,
      description: post.author.bio,
    },
    publisher: {
      "@type": "Organization",
      name: "Zayra Dental",
      logo: {
        "@type": "ImageObject",
        url: "https://zayradental.co.uk/logo.png",
      },
    },
    mainEntityOfPage: `https://zayradental.co.uk/blog/${post.slug}`,
    articleSection: post.category,
    keywords: post.tags.join(", "),
    wordCount: post.fullContent.split(" ").length,
  };

  // Preview mode for iframe
  if (isPreview) {
    return (
      <div className="blog-preview-container">
        <div className="blog-preview-header">
          <Image
            src={post.images.hero || "/services/dental_treatment.jpeg"}
            alt={post.title}
            width={400}
            height={200}
            className="blog-preview-image"
          />
          <div className="blog-preview-overlay">
            <span className="blog-preview-category">{post.category}</span>
            <h1 className="blog-preview-title">{post.title}</h1>
          </div>
        </div>
        <div className="blog-preview-content">
          <p className="blog-preview-excerpt">{post.excerpt}</p>
          <div className="blog-preview-meta">
            <span>📅 {new Date(post.date).toLocaleDateString("en-GB")}</span>
            <span>⏱️ {post.readTime}</span>
            <span>👤 {post.author.name}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="modern-blog-post">
        {/* Hero Section */}
        <section className="post-hero">
          <div className="hero-background">
            <Image
              src={post.images.hero || "/services/dental_treatment.jpeg"}
              alt={post.title}
              fill
              className="hero-image"
            />
            <div className="hero-gradient" />
          </div>

          <div className="container-modern">
            <div className="hero-content">
              <div className="breadcrumb" data-aos="fade-up">
                <Link href="/blog" className="breadcrumb-link">
                  <ArrowLeft size={16} />
                  Back to Blog
                </Link>
              </div>

              <div
                className="post-badges"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <span className="category-badge">{post.category}</span>
                {post.featured && (
                  <span className="featured-badge">
                    <Star size={12} />
                    Featured
                  </span>
                )}
                {post.trending && (
                  <span className="trending-badge">
                    <TrendingUp size={12} />
                    Trending
                  </span>
                )}
              </div>

              <h1
                className="post-title"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {post.title}
              </h1>

              <p
                className="post-subtitle"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {post.excerpt}
              </p>

              <div
                className="post-meta"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="author-section">
                  <div className="author-avatar">
                    <User size={20} />
                  </div>
                  <div className="author-info">
                    <div className="author-name">{post.author.name}</div>
                    <div className="author-title">{post.author.title}</div>
                  </div>
                </div>

                <div className="post-details">
                  <div className="detail-item">
                    <Calendar size={16} />
                    <span>
                      {new Date(post.date).toLocaleDateString("en-GB")}
                    </span>
                  </div>
                  <div className="detail-item">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="detail-item">
                    <Eye size={16} />
                    <span>{post.views} views</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="post-content-section">
          <div className="container-modern">
            <div className="content-grid">
              {/* Social Share Sidebar */}
              <div className="social-sidebar">
                <div className="share-widget">
                  <div className="share-title">Share Article</div>
                  <div className="share-buttons">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=https://zayradental.co.uk/blog/${post.slug}`}
                      className="share-btn facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=https://zayradental.co.uk/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
                      className="share-btn twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter size={20} />
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=https://zayradental.co.uk/blog/${post.slug}`}
                      className="share-btn linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(post.title)} https://zayradental.co.uk/blog/${post.slug}`}
                      className="share-btn whatsapp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle size={20} />
                    </a>
                  </div>

                  <div className="engagement-stats">
                    <div className="stat-item">
                      <Heart size={16} />
                      <span>{post.socialStats.likes}</span>
                    </div>
                    <div className="stat-item">
                      <Share2 size={16} />
                      <span>{post.socialStats.shares}</span>
                    </div>
                    <div className="stat-item">
                      <MessageCircle size={16} />
                      <span>{post.socialStats.comments}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="main-content">
                {/* Key Takeaways */}
                <div className="takeaways-box" data-aos="fade-up">
                  <h3>🎯 Key Takeaways</h3>
                  <ul className="takeaways-list">
                    {post.keyTakeaways.map((takeaway, index) => (
                      <li key={index}>
                        <CheckCircle size={16} />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Article Content */}
                <article
                  className="article-content"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div dangerouslySetInnerHTML={{ __html: post.fullContent }} />
                </article>

                {/* Image Gallery */}
                {post.images.gallery.length > 0 && (
                  <div className="content-gallery" data-aos="fade-up">
                    <h3>Related Images</h3>
                    <div className="gallery-grid">
                      {post.images.gallery
                        .filter(Boolean)
                        .map((image, index) => (
                          <div key={index} className="gallery-item">
                            <Image
                              src={image || "/services/dental_treatment.jpeg"}
                              alt={`${post.title} - Image ${index + 1}`}
                              width={300}
                              height={200}
                              className="gallery-image"
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {/* FAQs Section */}
                {post.faqs.length > 0 && (
                  <div className="faqs-section" data-aos="fade-up">
                    <h3>Frequently Asked Questions</h3>
                    <div className="faqs-list">
                      {post.faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                          <h4 className="faq-question">
                            <span className="faq-icon">❓</span>
                            {faq.question}
                          </h4>
                          <p className="faq-answer">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Treatment Info */}
                <div className="treatment-info" data-aos="fade-up">
                  <div className="info-grid">
                    <div className="info-item">
                      <div className="info-icon">📊</div>
                      <div className="info-content">
                        <div className="info-label">Difficulty Level</div>
                        <div className="info-value">{post.difficulty}</div>
                      </div>
                    </div>
                    <div className="info-item">
                      <div className="info-icon">💰</div>
                      <div className="info-content">
                        <div className="info-label">Estimated Cost</div>
                        <div className="info-value">{post.estimatedCost}</div>
                      </div>
                    </div>
                    <div className="info-item">
                      <div className="info-icon">⭐</div>
                      <div className="info-content">
                        <div className="info-label">Patient Rating</div>
                        <div className="info-value">4.9/5</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="post-tags" data-aos="fade-up">
                  <div className="tags-label">Tags:</div>
                  <div className="tags-list">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar Content */}
              <div className="content-sidebar">
                {/* Author Bio */}
                <div className="author-bio-card" data-aos="fade-up">
                  <div className="author-header">
                    <div className="author-avatar-large">
                      <User size={32} />
                    </div>
                    <div>
                      <h4 className="author-name-large">{post.author.name}</h4>
                      <p className="author-title-large">{post.author.title}</p>
                    </div>
                  </div>
                  <p className="author-bio-text">{post.author.bio}</p>
                  <div className="author-credentials">
                    <Award size={16} />
                    <span>15+ Years Experience</span>
                  </div>
                </div>

                {/* Quick Actions */}
                <div
                  className="quick-actions-card"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h4>Take Action</h4>
                  <div className="action-buttons">
                    <Link href="/appointment" className="action-button primary">
                      <Calendar size={16} />
                      Book Consultation
                    </Link>
                    <Link href="/contact" className="action-button secondary">
                      <MessageCircle size={16} />
                      Ask Question
                    </Link>
                    <button className="action-button tertiary">
                      <Bookmark size={16} />
                      Save Article
                    </button>
                  </div>
                </div>

                {/* Related Services */}
                {post.relatedServices.length > 0 && (
                  <div
                    className="related-services-card"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <h4>Related Services</h4>
                    <div className="services-list">
                      {post.relatedServices.map((service, index) => (
                        <Link
                          key={index}
                          href={`/services/${service}`}
                          className="service-link"
                        >
                          <span>
                            {service
                              .replace("-", " ")
                              .replace(/\b\w/g, (l) => l.toUpperCase())}
                          </span>
                          <ChevronRight size={16} />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="related-posts-section">
            <div className="container-modern">
              <h2 className="related-title" data-aos="fade-up">
                Related Articles
              </h2>
              <div className="related-grid">
                {relatedPosts.map((relatedPost, index) => (
                  <article
                    key={relatedPost.id}
                    className="related-card"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="related-link"
                    >
                      <div className="related-image">
                        <Image
                          src={
                            relatedPost.images.thumbnail ||
                            "/services/dental_treatment.jpeg"
                          }
                          alt={relatedPost.title}
                          width={300}
                          height={200}
                          className="related-img"
                        />
                      </div>
                      <div className="related-content">
                        <div className="related-category">
                          {relatedPost.category}
                        </div>
                        <h3 className="related-post-title">
                          {relatedPost.title}
                        </h3>
                        <p className="related-excerpt">{relatedPost.excerpt}</p>
                        <div className="related-meta">
                          <span className="related-date">
                            {new Date(relatedPost.date).toLocaleDateString(
                              "en-GB",
                            )}
                          </span>
                          <span className="related-read-time">
                            {relatedPost.readTime}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="post-cta-section">
          <div className="container-modern">
            <div className="cta-wrapper" data-aos="fade-up">
              <div className="cta-content">
                <h2>Ready to Transform Your Smile?</h2>
                <p>
                  Take the next step towards optimal oral health with our
                  award-winning dental team in Leeds.
                </p>
              </div>
              <div className="cta-actions">
                <Link href="/appointment" className="cta-button primary">
                  <Calendar size={20} />
                  Book Consultation
                </Link>
                <Link href="/contact" className="cta-button secondary">
                  <MessageCircle size={20} />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
