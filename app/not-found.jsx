import Link from "next/link";

export default function NotFound(){
    return(
        <section className="vh-100 d-flex flex-column justify-content-center align-items-center text-center text-white px-3">
  <div data-aos="fade-down">
    <h1 className="display-1 fw-bold text-gradient mb-3" style={{ background: "linear-gradient(135deg,rgb(239, 235, 244),rgb(248, 241, 249))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
      404
    </h1>
    <h2 className="mb-3">Page Not Found</h2>
    <p className="lead mb-4">
      Oops! The page you're looking for doesn't exist or has been moved.
    </p>
    <Link href="/" className="btn btn-outline-light px-4 py-2">
      Go Back Home
    </Link>
  </div>
  <div className="mt-5" data-aos="zoom-in">
    <img
      src="/images/404_tooth.png"
      alt="Lost Tooth Illustration"
      className="img-fluid"
      style={{ maxHeight: "250px" }}
    />
  </div>
</section>

    )
}