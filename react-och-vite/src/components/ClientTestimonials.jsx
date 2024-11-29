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
    <section className="testimonials">
      <div className="testimonials-container container">
        <div className="testimonials-content">
          <h1 className="d4">
            Clients are
            <br />
            Loving Our App
          </h1>
          <div class="testimonials-grid">
            {testimonials.map((testimonial) => (
              <Testimonial key={testimonial.id} item={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
