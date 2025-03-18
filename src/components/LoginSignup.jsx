import React, { useState } from "react";
import "./LoginSignup.css"; // Import styles

const LoginSignup = ({ show, handleClose }) => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className={`custom-modal ${show ? "show" : ""}`} onClick={handleClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={handleClose}>×</button>
        
        <h2>{isSignup ? "Sign Up" : "Log In"}</h2>
        
        <form>
          {isSignup && (
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" />
            </div>
          )}

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password" />
          </div>

          <button type="submit" className="submit-btn">
            {isSignup ? "Sign Up" : "Log In"}
          </button>
        </form>

        <p className="toggle-text" onClick={() => setIsSignup(!isSignup)}>
          {isSignup ? "Already have an account? Log In" : "Don't have an account? Sign Up"}
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
