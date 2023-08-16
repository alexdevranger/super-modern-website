import React, { useEffect } from "react";
import { MobWallet, Navbar } from "../components";
import ReactGA from "react-ga";

const MobilePage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <div>
      <div className="gradient-bg-welcome">
        <Navbar />
        <MobWallet />
      </div>
    </div>
  );
};

export default MobilePage;
