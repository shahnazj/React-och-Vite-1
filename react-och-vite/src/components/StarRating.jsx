import React from "react";

const StarRating = ({ starRating }) => {
  console.log("starRating is ", starRating);
  const maxStars = 5;
  const filledStars = Math.min(starRating, maxStars);
  const emptyStars = maxStars - filledStars;

  return (
    <div className="rating">
      {[...Array(filledStars)].map((_, index) => (
        <span class="star filled">★</span>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <span class="star">★</span>
      ))}
    </div>
  );
};

export default StarRating;
