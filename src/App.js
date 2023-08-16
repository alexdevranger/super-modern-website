import Home from "./pages/Home";
import Send from "./pages/Send";
import About from "./pages/About";
// import Buy from "./pages/Buy";
import Disclaimer from "./pages/Disclaimer";
import Contact from "./pages/Contact";
import RoadmapPage from "./pages/RoadmapPage";
import { Footer } from "./components";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ReactGA from "react-ga4";
import MobilePage from "./pages/MobilePage";

const TRACKING_ID = "G-8QLT3DFJM7";
ReactGA.initialize(TRACKING_ID, {
  gaOptions: {
    debug_mode: true,
  },
  gtagOptions: {
    debug_mode: true,
  },
});
ReactGA.send("pageview");

function App() {
  return (
    <div className="min-h-screen">
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/send" element={<Send />} />
          <Route exact path="/about-us" element={<About />} />
          {/* <Route exact path="/easy-buy" element={<Buy />} /> */}
          <Route exact path="/roadmap" element={<RoadmapPage />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/disclaimer" element={<Disclaimer />} />
          <Route exact path="/mobile-wallet" element={<MobilePage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
