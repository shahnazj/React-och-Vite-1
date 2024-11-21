import React from "react";

const StarRating = ({ rating }) => {
  const maxStars = 5;
  const emptyStars = maxStars - rating;
  var i = 0;
  return (
    <div className="rating">
      {[...Array(rating)].map((_, index) => (
        <i key={index + i} className="fa-sharp fa-solid fa-star"></i>
      ))}
      {(i += rating)}
      {[...Array(emptyStars)].map((_, index) => (
        <i key={index + i} className="fa-sharp fa-regular fa-star"></i>
      ))}
    </div>
  );
};

export default StarRating;
