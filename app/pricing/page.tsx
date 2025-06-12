import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pricingData from './pricing.json';


export default function PricingSection() {
  return (
    <section className="container py-5">
      <h2 className="text-center my-5 fw-bold" data-aos="fade-down">
        Our Pricing
      </h2>

      {pricingData.map((category, index) => (
        <div key={index} className="mb-5">
          <h4 className="text-white mb-3 border-bottom pb-2">
            {category.category}
          </h4>

          <div className="row gy-3"
           data-aos="fade-right"
           data-aos-delay="100">
            {category.treatments.map((item, idx) => (
              <div className="col-lg-4 col-md-6 col-10" key={idx}>
                <div
                  className="card h-100 shadow-sm border-0"
                  style={{
                    transition: "transform 0.3s ease",
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title fw-semibold">
                      {item.name}
                    </h5>
                    <p className="card-text text-muted">{item.description}</p>
                    <div className="text-end text-success fw-bold fs-5">
                      £{item.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="text-center mt-5 text-white">
        <p>
          <small>
            *Note: Prices are indicative and may vary depending on the complexity of the treatment.
          </small>
        </p>
      </div>
    </section>
  );
}

