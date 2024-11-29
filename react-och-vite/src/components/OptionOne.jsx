import React from "react";
import addGroup from "../../public/images/icons/add-group.svg";

const OptionOne = () => {
  return (
    <div className="option content">
      <div className="icon careers-icon">
        <img src={addGroup} alt="Careers Icon" />
      </div>
      <div className="details text">
        <h3>Careers</h3>
        <p>
          Sit ac ipsum leo lorem magna nunc
          <br /> mattis maecenas non vestibulum.
        </p>
        <a href="#" className="link">
          Send an application &rarr;
        </a>
      </div>
    </div>
  );
};

export default OptionOne;
