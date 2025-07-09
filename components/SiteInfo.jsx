export default function SiteInfo() {
  const lastUpdated = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
      <div className="container align-items-center">
        <div className="container-modern mb-2">
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
            <div className="d-flex flex-wrap gap-4">
              <span
                className="small"
                style={{ color: "rgb(255, 255, 255)" }}
              >
                Designed by{" "}
                <a
                  href="https://www.linkedin.com/in/muhammed-rizwan-n/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                  style={{ color: "var(--primary-teal)" }}
                >
                  Muhammed Rizwan N
                </a>
              </span>
              <span
                className="small"
                style={{ color: "rgb(255, 255, 255)" }}
              >
                Last updated:{" "}6 July 2025
              </span>
            </div>
          </div>
        </div>
      </div>
  );
}
