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
  Articles,
} from "../components";
import NFT from "../components/NFT";

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
      <Articles />
      <Project />
      <Services />
      <Wallets />
      <AnimatedRoutes />
      <NFT />
      <Ai />
      <DBank />
      <ContactUs />
    </div>
  );
};

export default Home;
