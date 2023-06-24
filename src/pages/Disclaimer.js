import React from "react";
import { Navbar, DisclaimerPart, ScrollToTop } from "../components";

const Disclaimer = () => {
  return (
    <div>
      {" "}
      <div className="gradient-bg-welcome">
        <ScrollToTop />
        <Navbar />
        <DisclaimerPart />
      </div>
    </div>
  );
};

export default Disclaimer;
