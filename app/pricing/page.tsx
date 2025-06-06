import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pricingData from './pricing.json';


export default function PricingSection() {
  return (
    <section className="container py-5">
      <div className="text-center mb-5" data-aos="fade-down">
        <h2 className="fw-bold">Treatment Pricing</h2>
        <p className="text-muted">Transparent and affordable care for every smile</p>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered shadow-sm">
          <thead className="table-dark">
            <tr>
              <th className="text-start">Treatment</th>
              <th className="text-end">Price</th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((item, idx) => (
              <tr key={idx}>
                <td className="text-start">{item.treatment}</td>
                <td className="text-end">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 p-4 bg-light rounded shadow-sm" data-aos="fade-up">
        <p className="text-muted mb-3">
          <strong>Note:</strong> Prices may vary depending on the complexity of the treatment, patient requirements, and case-by-case diagnosis. Please consult our dentists for an exact estimate.
        </p>
        <div className="text-center">
          <a href="/appointment" className="btn btn-primary btn-lg mt-2">
            Book an Appointment
          </a>
        </div>
      </div>
    </section>
  );
}

