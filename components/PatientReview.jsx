"use client";
import { useState } from "react";
import reviews from "../getReviews/finalReviews.json";
import ReviewCard from "./ReviewCard";
import { Star } from "lucide-react";
export default function PatientReview() {
  const allReviews = Object.entries(reviews["allreviews"]); // [ [id, review], ... ]
  const [visibleCount, setVisibleCount] = useState(3);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className="section-modern bg-cream">
      <div className="container-modern">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="text-accent fw-medium">Patient Reviews</span>
          <h2 className="heading-secondary mt-2 mb-4">
            What Our Patients Say About Us
          </h2>
        </div>

        <div className="row g-4">
          {allReviews.slice(0, visibleCount).map(([index, review]) => (
            <ReviewCard key={review.t} review={review} />
          ))}
        </div>
        {visibleCount < allReviews.length && (
          <div className="text-center mt-5">
            <button className="btn-primary-modern" onClick={loadMore}>
              Load More
            </button>
          </div>
        )}
        <div className="text-center mt-3" data-aos="fade-up">
          <div className="d-inline-flex align-items-center gap-2 text-subtle">
            <Star
              size={20}
              fill="var(--primary-teal)"
              color="var(--primary-teal)"
            />
            <span className="fw-semibold">
              {reviews["averageRating"]}/5 average rating
            </span>
            <span>Based on {reviews["reviewsCount"]}+ Google reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
