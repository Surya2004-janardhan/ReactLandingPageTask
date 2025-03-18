import React from "react";
// import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Services from "./Services.jsx";
import Pricing from "./Pricing.jsx";
import UsersSection from "../components/UsersSection.jsx";
import Contact from "./Contact.jsx";
// import { Navbar } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero />
      <Services />
      <Pricing/>
      <UsersSection/>
      <Contact/>
    </div>
  );
};

export default Home;
