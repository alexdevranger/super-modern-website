import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { Roadmap, Navbar } from "../components";

const RoadmapPage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <div>
      <div className="gradient-bg-welcome">
        <Navbar />
        <Roadmap />
      </div>
    </div>
  );
};

export default RoadmapPage;
