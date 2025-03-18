import React from "react";
import "./Services.css";

const ServicesSection = () => {
  return (
    <section id="services" className="services-section fade-in-section">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service-card">
          <h3>Web Development</h3>
          <p>We create stunning websites tailored to your needs.</p>
        </div>
        <div className="service-card">
          <h3>SEO Optimization</h3>
          <p>Boost your online presence and reach a wider audience.</p>
        </div>
        <div className="service-card">
          <h3>Branding</h3>
          <p>Enhance your brand identity with our expert solutions.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
