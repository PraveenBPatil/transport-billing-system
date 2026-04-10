import React, { useEffect, useState } from "react";
import "./ScrollTimeline.css";

const steps = [
  "Trusted & Compliant Safety",
  "Unified Billing",
  "Seamless Travel",
  "On-Road Assistance",
  "Centralized Tracking",
  "Passenger Feedback",
  "Dedicated Executive",
  "Statutory Compliance"
];

const ScrollTimeline = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="timeline-wrapper">

      {/* vertical line */}
      <div className="line"></div>

      {/* 🚗 Car + Driver */}
      <div
        className="car"
        style={{
          top: `${scrollY * 0.3}px`
        }}
      >
        🚗👨‍✈️
      </div>

      {/* Cards */}
      {steps.map((step, index) => (
        <div
          key={index}
          className={`timeline-card ${scrollY > index * 120 ? "show" : ""}`}
          style={{
            left: index % 2 === 0 ? "10%" : "60%"
          }}
        >
          {step}
        </div>
      ))}
    </div>
  );
};

export default ScrollTimeline;