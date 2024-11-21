import React, { useEffect, useState } from "react";
import AccordionItem from "./AccordionItem";

const FAQ = () => {
  const [accordions, setAccordions] = useState([]);
  const fetchFaq = async () => {
    const res = await fetch(
      "https://win24-assignment.azurewebsites.net/api/faq"
    );
    const data = await res.json();
    setAccordions(data);
  };

  useEffect(() => {
    fetchFaq();
  }, []);
  return (
    <section className="faq-contact-container">
      <div className="faq-section">
        <div className="faq-header">
          <h2 className="h1">Any questions? Check out the FAQs</h2>
          <p> Still have unanswered questions and need to get in touch?</p>
        </div>

        <div className="contact">
          <div className="contact-us">
            <a href="#" className="btn btn-primary">
              <span>Contact us now</span>
            </a>
          </div>

          <div className="call-message">
            <div className="card">
              <div className="icon">
                <img src="/images/icons/phone.svg" alt="" />
              </div>
              <div className="text">
                <p>Still have questions?</p>
                <a href="#" className="contact-link">
                  Contact us <span className="arrow">→</span>
                </a>
              </div>
            </div>

            <div className="card">
              <div className="icon">
                <img src="/images/icons/message.svg" alt="" />
              </div>
              <div className="text">
                <p>Don't like phone calls?</p>
                <a href="#" className="contact-link green">
                  Contact us <span className="arrow">→</span>
                </a>
              </div>

              {accordions.map((item) => (
                <AccordionItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
