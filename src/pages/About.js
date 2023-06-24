import React, { useEffect } from "react";
import { AboutUs, Navbar } from "../components";
import ReactGA from "react-ga";

const About = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <div>
      <div className="gradient-bg-welcome">
        <Navbar />
        <AboutUs />
      </div>
    </div>
  );
};

export default About;
