import React, { useEffect } from "react";
import ReactGA from "react-ga";

import {
  Navbar,
  Arabian,
  Services,
  ContactUs,
  Project,
  Ai,
  DBank,
  AnimatedRoutes,
  Wallets,
} from "../components";

const Home = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <div>
      {" "}
      <div className="gradient-bg-welcome">
        <Navbar />
        <Arabian />
      </div>
      <Project />
      <Services />
      <Wallets />
      <AnimatedRoutes />
      <Ai />
      <DBank />
      <ContactUs />
    </div>
  );
};

export default Home;
