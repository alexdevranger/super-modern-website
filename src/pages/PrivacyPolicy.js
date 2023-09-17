import React from 'react';
import { Navbar, PrivacyPolicyPart, ScrollToTop } from "../components";

const PrivacyPolicy = () => {
  return (
    <div>
      {" "}
      <div className="gradient-bg-welcome">
        <ScrollToTop />
        <Navbar />
        <PrivacyPolicyPart />
      </div>
    </div>
  );
}

export default PrivacyPolicy;