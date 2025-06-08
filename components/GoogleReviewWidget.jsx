import { FaGoogle } from "react-icons/fa";

export default function GoogleReviewWidget() {
  return (
    <section className="google-reviews-widget">
        {/*Last update: 08-06-2025 */}
      <FaGoogle className="fs-5 text-dark" />

      <div className="reviews-header text-dark">
        <span className="rating-stars">★★★★★</span>
        <span className="rating-value">4.8</span>
        <span className="total-reviews">(86)</span>
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
