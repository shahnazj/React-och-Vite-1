import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import SocialMedias from "./SocialMedias";
import MedicalCenterDetails from "./MedicalCenterDetails";
import mapIcon from "../../public/images/icons/subtract.svg";

const customIcon = new L.Icon({
  iconUrl: mapIcon,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const MedicalCenters = () => {
  const medicalCenters = [
    {
      name: "Medical Center 1",
      address: "4517 Washington Ave. Manchester, Kentucky 39495",
      phone: "(406) 555-0120",
      location: [37.73664, -122.40585],
      hours: { weekdays: "9:00 am – 22:00 pm", weekends: "9:00 am – 20:00 pm" },
    },
    {
      name: "Medical Center 2",
      address: "2464 Royal Ln. Mesa, New Jersey 45463",
      phone: "(406) 544-0123",
      location: [40.743991, -74.032363],
      hours: { weekdays: "9:00 am – 22:00 pm", weekends: "9:00 am – 20:00 pm" },
    },
  ];

  return (
    <section className="medical-centers">
      <div className="container address-content">
        <div className="map">
          <MapContainer
            center={medicalCenters[0].location}
            zoom={13}
            style={{ height: "450px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {medicalCenters.map((center, index) => (
              <Marker key={index} position={center.location} icon={customIcon}>
                <Popup>{center.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        <div className="medical-info">
          {medicalCenters.map((center, index) => (
            <MedicalCenterDetails key={index} {...center} />
          ))}
          <SocialMedias />
        </div>
      </div>
    </section>
  );
};

export default MedicalCenters;
