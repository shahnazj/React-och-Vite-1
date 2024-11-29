import React from "react";
import PropTypes from "prop-types";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa"; // React Icons for the items

const InfoLine = ({ icon, content }) => (
  <p className="line">
    <span className="icon">{icon}</span>
    {content}
  </p>
);

InfoLine.propTypes = {
  icon: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
};

const OperatingHours = ({ weekdays, weekends }) => (
  <p className="line">
    <span className="icon">
      <FaClock />
    </span>
    <span>
      <strong>Mon – Fri:</strong> {weekdays}
      <br />
      <strong>Sat – Sun:</strong> {weekends}
    </span>
  </p>
);

OperatingHours.propTypes = {
  weekdays: PropTypes.string.isRequired,
  weekends: PropTypes.string.isRequired,
};

const MedicalCenterDetails = ({ name, address, phone, hours }) => (
  <div className="center">
    <h3>{name}</h3>
    <InfoLine icon={<FaMapMarkerAlt />} content={address} />
    <InfoLine icon={<FaPhoneAlt />} content={phone} />
    <OperatingHours weekdays={hours.weekdays} weekends={hours.weekends} />
  </div>
);

MedicalCenterDetails.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  hours: PropTypes.shape({
    weekdays: PropTypes.string.isRequired,
    weekends: PropTypes.string.isRequired,
  }).isRequired,
};

export default MedicalCenterDetails;
