{
  import React from "react";
import StarRating from "./StarRating";

const Testimonial = ({ item }) => {
  return (
    <div className="testimonials-grid">
      <div className="testimonial-card">
        <div className="quote-container">
          <img src="/images/icons/quotes.svg" alt="" className="quote-icon" />
        </div>
            <StarRating starRating={item.starRating} />
            <p className="testimonial-text">{item.comment}</p>
            <div className="profile">
            <img src={item.avatarUrl} alt={item.author} className="profile-img" />
            <div className="profile-info">
            <h4 className="profile-name">{item.author}</h4>
            <p className="profile-role">{item.jobRole}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
}
