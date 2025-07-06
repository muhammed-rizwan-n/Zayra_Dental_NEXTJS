export default function SiteInfo() {
  const lastUpdated = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className="fixed-bottom d-none d-lg-block"
      style={{
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        maxWidth: "300px",
      }}
    >
      <div
        className="card-modern small p-3"
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(0,0,0,0.1)",
          fontSize: "0.75rem",
          opacity: 0.8,
        }}
      >
        <div className="text-center">
          <div className="mb-1">
            <strong>Website by:</strong>{" "}
            <a
              href="https://muhammed-rizwan.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
              style={{ color: "var(--primary-teal)" }}
            >
              Muhammed Rizwan
            </a>
          </div>
          <div style={{ color: "var(--text-subtle)" }}>
            Last updated: {lastUpdated}
          </div>
        </div>
      </div>
    </div>
  );
}
