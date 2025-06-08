import { FaGoogle } from "react-icons/fa";

export default function GoogleReviewWidget() {
  return (
    <section class="google-reviews-widget">
        {/*Last update: 08-06-2025 */}
      <FaGoogle className="fs-5 text-dark" />

      <div class="reviews-header text-dark">
        <span class="rating-stars">★★★★★</span>
        <span class="rating-value">4.8</span>
        <span class="total-reviews">(86)</span>
      </div>
      <a
        href="https://g.co/kgs/dLNUEWq"
        target="_blank"
        className="btn btn-primary rounded-pill px-4"
      >
        <i className="fas fa-star me-2 text-white"></i>View Reviews
      </a>
    </section>
  );
}
