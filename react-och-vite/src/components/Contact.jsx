import React from "react";
import ContactForm from "./ContactForm";
import Breadcrumb from "./Breadcrumb";
import Nav from "./Nav";
import OptionOne from "./OptionOne";
import OptionTwo from "./OptionTwo";
import useTitle from "./hooks/useTitle";
import MedicalCenters from "./MedicalCenters";

const Contact = () => {
  useTitle("Contact Us");
  return (
    <div>
      <Nav />
      <section className="contact-us-section">
        <div className="container">
          <Breadcrumb />
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-layout">
            <div className="contact-options">
              <OptionTwo />
              <OptionOne />
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <MedicalCenters />
    </div>
  );
};

export default Contact;
