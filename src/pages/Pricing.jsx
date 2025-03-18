import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section fade-in-section">
      <h2>Pricing Plans</h2>
      <br />
      <div className="pricing-container">
        <div className="pricing-card">
          <h3>Basic</h3>
          <p>₹5000/month</p>
        </div>
        <div className="pricing-card">
          <h3>Pro</h3>
          <p>₹10000/month</p>
        </div>
        <div className="pricing-card">
          <h3>Enterprise</h3>
          <p>₹20000/month</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
