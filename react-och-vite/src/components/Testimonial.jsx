import React from "react";
import StarRating from "./StarRating";
import quoteIcon from "../../public/images/icons/quotes.svg";

const Testimonial = ({ item }) => {
  return (
    <div className="testimonial-card">
      <div class="quote-container">
        <img alt="" className="quote-icon" src={quoteIcon} />
      </div>
      <StarRating starRating={item.starRating} />
      <p className="testimonial-text">{item.comment}</p>
      <div className="profile">
        <img className="profile-img" src={item.avatarUrl} alt={item.author} />
        <div className="profile-info">
          <h6 className="profile-name">{item.author}</h6>
          <p className="profile-role">{item.jobRole}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
