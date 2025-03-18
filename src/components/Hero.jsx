import React, { useState } from "react";
import "./Hero.css";
import LoginSignup from "./LoginSignup"; // Import LoginSignup modal

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={`hero-section ${showModal ? "blur-background" : ""}`}>
      <div className="hero-image"></div>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Empower Your Business with Innovation</h1>
        <p>Explore cutting-edge solutions tailored for your success.</p>
        <button className="hero-btn" onClick={() => setShowModal(true)}>
          Get Started
        </button>
      </div>

      {/* Login/Signup Modal */}
      <LoginSignup show={showModal} handleClose={() => setShowModal(false)} />
    </div>
  );
};

export default Hero;
