import React, { useState } from "react";

const NewAccordion = ({ button, contents }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {" "}
      <div className={`accordion ${isOpen ? "open" : ""}`}>
        <p onClick={toggleAccordion}>{button}</p>
        <p>{contents}</p>
      </div>
    </div>
  );
};

export default NewAccordion;
