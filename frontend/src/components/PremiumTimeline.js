import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./PremiumTimeline.css";

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

const PremiumTimeline = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="premium-wrapper">

      {/* Line */}
      <div className="premium-line"></div>

      {/* 🚗 Real Car */}
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/743/743922.png"
        alt="car"
        className="premium-car"
        style={{ top: scrollY * 0.3 }}
      />

      {/* Cards */}
      {steps.map((step, i) => (
        <motion.div
          key={i}
          className="premium-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: scrollY > i * 120 ? 1 : 0,
            y: scrollY > i * 120 ? 0 : 50
          }}
          transition={{ duration: 0.5 }}
          style={{
            left: i % 2 === 0 ? "10%" : "60%"
          }}
        >
          {step}
        </motion.div>
      ))}
    </div>
  );
};

export default PremiumTimeline;