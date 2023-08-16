import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderItems = items.map((item, index) => {
    const isActive = index === activeIndex;

    return (
      <div key={item.title} className="accordion-item">
        <div
          className={`accordion-title ${isActive ? "active" : ""}`}
          onClick={() => onItemClick(index)}
        >
          {item.title}
        </div>
        {isActive && (
          <div
            className={`accordion-content ${isActive ? "contentactive" : ""}`}
          >
            {item.content}
          </div>
        )}
      </div>
    );
  });

  return <div className="accordion">{renderItems}</div>;
};

export default Accordion;
