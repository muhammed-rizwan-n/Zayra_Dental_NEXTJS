"use client";
import { useState } from "react";
import reviews from "../getReviews/finalReviews.json";
import { Star } from "lucide-react";
export default function ServiceReview({ data }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="row g-4">
      {reviews[data].map((userid, index) => (
        <div key={userid} className="col-lg-4" data-aos="fade-up">
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
              &ldquo;{isExpanded || !reviews["allreviews"][userid].m
                ? reviews["allreviews"][userid].m
                : reviews["allreviews"][userid].m.substring(0, 300) + "..."}&rdquo;
              {reviews["allreviews"][userid].m && (
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
        // <div
        //       key={reviews['allreviews'][userid].t}
        //       className="col-lg-4"
        //       data-aos="fade-up"
        //       data-aos-delay={100}
        //     >
        //       <div className="testimonial-card h-100">
        //         <div className="d-flex mb-3">
        //           {[...Array(reviews['allreviews'][userid].r)].map((_, i) => (
        //             <Star
        //               key={i}
        //               size={16}
        //               fill="var(--primary-teal)"
        //               color="var(--primary-teal)"
        //             />
        //           ))}
        //         </div>
        //         <p className="text-subtle mb-4 fst-italic d-none">
        //           &quot;{reviews['allreviews'][userid].r}&quot;
        //         </p>

        //         <div className="fw-semibold">
        //           {isExpanded || !isLong
        //             ? reviews['allreviews'][userid].m
        //             : reviews['allreviews'][userid].m.substring(0, 300) + "..."}
        //           {isLong && (
        //             <span
        //               onClick={() => setIsExpanded(!isExpanded)}
        //               className="text-primary ms-2"
        //               style={{ cursor: "pointer", fontWeight: 500 }}
        //             >
        //               {isExpanded ? "Read Less" : "Read More"}
        //             </span>
        //           )}
        //         </div>

        //         <div className="d-flex align-items-center gap-3 mt-3">
        //           <Image
        //             src={reviews['allreviews'][userid].ui || null}
        //             alt={reviews['allreviews'][userid].n}
        //             width={50}
        //             height={50}
        //             className="rounded-circle"
        //             style={{ objectFit: "cover" }}
        //           />
        //           <div>
        //             <div>
        //               <a
        //                 key={reviews['allreviews'][userid].n}
        //                 href={reviews['allreviews'][userid].revlink}
        //                 className="nav-link-modern text-decoration-none"
        //                 target="_blank"
        //                 rel="noopener"
        //               >
        //                 {reviews['allreviews'][userid].n}
        //               </a>
        //               <div className="small text-subtle">
        //                 {review.profession ||
        //                   new Date(review.t * 1).toLocaleDateString("en-US", {
        //                     year: "numeric",
        //                     month: "long",
        //                     day: "numeric",
        //                   })}
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
      ))}
    </div>
  );
}
