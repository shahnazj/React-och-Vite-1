import React, { useEffect, useState } from "react";
import Testimonial from "./Testimonial";

const ClientTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  const getTestimonials = async () => {
    const res = await fetch(
      "https://win24-assignment.azurewebsites.net/api/testimonials"
    );
    const data = await res.json();
    setTestimonials(data);
  };
  useEffect(() => {
    getTestimonials();
  }, []);

  return (
    <section className="clientTestimonials">
      <h3 className="h4 section-title">
        Clients are
        <br />
        Loving Our App
      </h3>
      <div className="clientTestimonials-container">
        <div className="clientTestimonials-content testimonials-grid">
          {testimonials.map((item) => (
            <Testimonial key={item.id} item={item}></Testimonial>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
