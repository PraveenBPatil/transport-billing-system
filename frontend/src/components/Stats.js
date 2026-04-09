import React from "react";
import "./Stats.css";

const Stats = () => {
  const stats = [
    { value: "8.5K+", label: "Trips" },
    { value: "10+", label: "Cities" },
    { value: "35K+", label: "Customers" },
    { value: "11K+", label: "Vehicles" }
  ];

  return (
    <div className="stats">
      {stats.map((s, i) => (
        <div key={i} className="stat-box">
          <h3>{s.value}</h3>
          <p>{s.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;