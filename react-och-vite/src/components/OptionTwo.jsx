import React from "react";
import envelopeIcon from "../../public/images/icons/bx-envelope.svg";

const OptionTwo = () => {
  return (
    <div className="option content">
      <div className="icon email-icon">
        <img src={envelopeIcon} alt="Email Icon" />
      </div>
      <div className="details text">
        <h3>Email us</h3>
        <p>
          Please feel free to drop us a line.
          <br /> We will respond as soon as possible.
        </p>
        <a href="#" className="link">
          Leave a message &rarr;
        </a>
      </div>
    </div>
  );
};
export default OptionTwo;
