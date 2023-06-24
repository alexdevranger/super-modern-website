import React, { useEffect } from "react";
import { ContactForm, Navbar } from "../components";
import ReactGA from "react-ga";

const Contact = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <div>
      <div className="gradient-bg-welcome">
        <Navbar />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
