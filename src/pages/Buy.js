import React, { useEffect } from "react";
import { EasyBuy, Navbar } from "../components";
import ReactGA from "react-ga";

const Buy = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <div style={{ width: "100%", minHeight: "100vh", overflow: "hidden" }}>
      <div className="gradient-bg-welcome">
        <Navbar />
        <EasyBuy />
      </div>
    </div>
  );
};

export default Buy;
