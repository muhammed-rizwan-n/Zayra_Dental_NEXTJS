"use client";
import { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
export default function ReviewCard( {review} ) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLong = review.m.length > 300;

  return (
    <div
      key={review.t}
      className="col-lg-4"
      data-aos="fade-up"
      data-aos-delay={100}
    >
      <div className="testimonial-card h-100">
        <div className="d-flex mb-3">
          {[...Array(review.r)].map((_, i) => (
            <Star
              key={i}
              size={16}
              fill="var(--primary-teal)"
              color="var(--primary-teal)"
            />
          ))}
        </div>
        <p className="text-subtle mb-4 fst-italic d-none">
          &quot;{review.r}&quot;
        </p>

        <div className="fw-semibold">
          {isExpanded || !isLong
            ? review.m
            : review.m.substring(0, 300) + "..."}
          {isLong && (
            <span
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary ms-2"
              style={{ cursor: "pointer", fontWeight: 500 }}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </span>
          )}
        </div>

        <div className="d-flex align-items-center gap-3 mt-3">
          <Image
            src={review.ui || null}
            alt={review.n}
            width={50}
            height={50}
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div>
            <div>
              <a
                key={review.n}
                href={review.revlink}
                className="nav-link-modern text-decoration-none"
                target="_blank"
                rel="noopener"
              >
                {review.n}
              </a>
              <div className="small text-subtle">
                {review.profession ||
                  new Date(review.t * 1).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
