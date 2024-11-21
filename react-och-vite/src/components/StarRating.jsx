import React from "react";

const StarRating = ({ StarRating }) => {
  console.log("We are here");
  console.log(StarRating);
  const maxStars = 5;
  const filledStars = Math.min(StarRating, maxStars);
  const emptyStars = maxStars - filledStars;
  return (
    <div className="rating">
      {[...Array(filledStars)].map((_, index) => (
        <span key={index} className="star">
          ★
        </span>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={index} className="star filled">
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
