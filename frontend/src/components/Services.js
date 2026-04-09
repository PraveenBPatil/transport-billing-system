import React from "react";
import "./Services.css";

const Services = () => {
  const items = [
    "Corporate Travel",
    "Fleet Management",
    "Airport Transfers",
    "Outstation Trips",
    "Employee Transport",
    "Luxury Cars"
  ];

  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="card">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Services;