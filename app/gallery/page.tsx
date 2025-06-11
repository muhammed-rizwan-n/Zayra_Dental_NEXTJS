import "./style.css";


export default function gallery() {
  console.log(`Picstueserwd $S{pics}`)

//const images = .keys().map((key) => ({
//  src: imageContext(key).default, // .default is needed for Webpack's file-loader/url-loader
//  alt: key.replace('./', '').split('.')[0], // Extract filename as alt text
//}));
  const pic = [
        { src: "/bg-gallery.jpg", className: "small" },
        { src: "/bg-gallery.jpg", className: "big" },
        { src: "/zayra-dental.png", className: "wide" },
        { src: "/next.svg", className: "" },
        { src: "/vercel.svg", className: "" },
        { src: "/next.svg", className: "big" },
        { src: "/vercel.svg", className: "" },
        { src: "/next.svg", className: "wide" },
      ];
  
  return (
    <>
    <section className="py-5 text-white">
  <div className="container px-3">
    <h2 className="text-center my-5" data-aos="fade-down">Gallery</h2>

    <div className="gallery-grid">
      {/*<div className={`grid-item ${item.className}`} key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
          <img src={item.src} alt={`Gallery ${i + 1}`}/>
        </div> */}
      {pic.map((item, i) => (
        <div className={`grid-item ${item.className}`} key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
          <img src={item.src} alt={`Gallery ${i + 1}`}/>
        </div>
      ))}
    </div>
  </div>
</section>

    </>
  );
}
