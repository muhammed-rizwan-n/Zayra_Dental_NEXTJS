"use client";

import { useState, useEffect } from "react";
import { Star, Calendar, User } from "lucide-react";
import Image from "next/image";

interface GoogleReview {
  author_name: string;
  author_url?: string;
  language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface ReviewData {
  business_name: string;
  business_rating: number;
  total_reviews: number;
  reviews: GoogleReview[];
  last_updated: string;
  fetch_count: number;
}

export default function GoogleReviews({
  maxReviews = 6,
}: {
  maxReviews?: number;
}) {
  const [reviewData, setReviewData] = useState<ReviewData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    try {
      // In a real implementation, you'd load this from your static file
      // For now, this is a placeholder that would read from data/google-reviews.json
      const response = await fetch("/data/google-reviews.json");
      if (!response.ok) {
        throw new Error("Failed to load reviews");
      }

      const data = await response.json();
      setReviewData(data.latest);
    } catch (err) {
      setError("Unable to load reviews");
      console.error("Error loading reviews:", err);
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="d-flex align-items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={star <= rating ? "text-warning" : "text-muted"}
            fill={star <= rating ? "currentColor" : "none"}
          />
        ))}
        <span className="ms-1 small text-muted">({rating}/5)</span>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="text-center py-4">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading reviews...</span>
        </div>
      </div>
    );
  }

  if (error || !reviewData) {
    return (
      <div className="alert alert-info">
        <p className="mb-0">
          Reviews will be displayed once they are fetched from Google.
        </p>
      </div>
    );
  }

  const displayReviews = reviewData.reviews.slice(0, maxReviews);

  return (
    <div className="google-reviews">
      {/* Business Rating Summary */}
      <div className="card-modern mb-4">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h4 className="heading-tertiary mb-2">
              {reviewData.business_name}
            </h4>
            <div className="d-flex align-items-center gap-3">
              {renderStars(Math.round(reviewData.business_rating))}
              <span className="fw-medium">
                {reviewData.business_rating.toFixed(1)}
              </span>
            </div>
            <p className="text-muted small mb-0">
              Based on {reviewData.total_reviews} Google reviews
            </p>
          </div>
          <div className="col-md-6 text-md-end mt-3 mt-md-0">
            <div className="small text-muted">
              <Calendar size={14} className="me-1" />
              Last updated:{" "}
              {new Date(reviewData.last_updated).toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="row g-4">
        {displayReviews.map((review, index) => (
          <div key={`${review.time}-${index}`} className="col-lg-6">
            <div className="card-modern h-100">
              <div className="d-flex align-items-start gap-3 mb-3">
                <Image
                  src={review.profile_photo_url}
                  alt={review.author_name}
                  className="rounded-circle"
                  width={48}
                  height={48}
                  style={{ objectFit: "cover" }}
                />
                <div className="flex-grow-1">
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <h6 className="mb-0">{review.author_name}</h6>
                    <User size={14} className="text-muted" />
                  </div>
                  {renderStars(review.rating)}
                  <p className="small text-muted mb-0">
                    {review.relative_time_description}
                  </p>
                </div>
              </div>

              <p className="text-subtle mb-0">&ldquo;{review.text}&rdquo;</p>

              {review.language !== "en" && (
                <div className="mt-2">
                  <span className="badge bg-light text-dark small">
                    Translated from {review.language}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {reviewData.reviews.length > maxReviews && (
        <div className="text-center mt-4">
          <p className="text-muted">
            Showing {maxReviews} of {reviewData.reviews.length} reviews
          </p>
        </div>
      )}
    </div>
  );
}
