import React from "react";
import { useState } from "react";

const AccordionItem = ({ item }) => {
  const [isOpen, SetIsOpen] = useState(false);

  const toggleAccordion = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <button
        className={`faq-question ${isOpen ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <span> {item.title} </span>
        <i className="ìtem-icon fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}">
          {" "}
        </i>
      </button>
      <div className="faq-answer">
        <p className={`faq-content ${isOpen ? "activa" : ""}`}>
          {item.content}
        </p>
      </div>
      {isOpen && <p>{item.content}</p>}
    </div>
  );
};

export default AccordionItem;
