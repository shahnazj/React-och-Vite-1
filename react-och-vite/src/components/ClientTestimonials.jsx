{
  import React, { useEffect, useState } from "react";
import Testimonial from './Testimonials'

const ClientTestimonials = () => {
  const [Testimonials, setTestimonials] = useState([]);

  const getTestimonials = async () => {
    const res = await fetch(
      "https://win24-assignment.azurewebsites.net/api/testimonials"
    );

    const data = await res.json()
    setTestimonials(data);
  };
  useEffect(() => {
    getTestimonials();
  }, []);

  return (
    <section className="ClienTestimonials">
      <div className="clientTestimonials-container">
        <div className="clientTestimonials-content">
          <h3 className="h4 section-title">
            Clients are
            <br />
            Loving Our App
          </h3>

          {clientTestimonials.map((clientTestimonial) => (
            <Testimonial
              key={clientTestimonial.id}
              item={clientTestimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default testimonials;


}
