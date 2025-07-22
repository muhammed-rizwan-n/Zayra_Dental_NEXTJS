"use client";
import { useState } from "react";
import reviews from "../getReviews/finalReviews.json";
import { Star } from "lucide-react";


export function ServiceReviewCard({userid, data, index}){
  const [isExpanded, setIsExpanded] = useState(false);
return (
        <div key={data+userid} className="col-lg-4" data-aos="fade-up">
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
            <p className="whitespace-pre-line text-subtle fst-italic mb-3">
              &ldquo;{isExpanded || !(reviews["allreviews"][userid].m.length> 300)
                ? reviews["allreviews"][userid].m
                : reviews["allreviews"][userid].m.substring(0, 300) + "..."}&rdquo;
              {reviews["allreviews"][userid].m.length > 300 && (
                <span
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-primary ms-2"
                  style={{ cursor: "pointer", fontWeight: 500 }}
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </span>
              )}{" "}
            </p>
            <div className="fw-semibold"></div>
            <div className="fw-semibold">{reviews["allreviews"][userid].n}</div>
            {/* <div className="small text-subtle">8 months treatment</div> */}
          </div>
        </div>
)
}

export default function ServiceReview({ data }) {
  return (
    <div className="row g-4">
        {reviews[data].map((userid, index) => (
      <ServiceReviewCard data= {data} userid={userid} key={data} />
        ))}
    </div>
  );
}
