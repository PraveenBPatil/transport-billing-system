import React from "react";
import "./Timeline.css";

const Timeline = () => {
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

  return (
    <div className="timeline-container">
      <div className="line"></div>

      {/* Moving Car */}
      <div className="car">🚗</div>

      <div className="timeline-items">
        {steps.map((step, index) => (
          <div key={index} className="timeline-box">
            {step}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;