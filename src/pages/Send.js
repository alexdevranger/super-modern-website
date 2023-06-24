import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { Navbar, Welcome } from "../components";

const Send = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <div>
      {" "}
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
    </div>
  );
};

export default Send;
