import React from "react";
import "./ResultCard.css";

const ResultCard = ({ result }) => {
  if (!result) return null;

  const isProfit = result.profit >= 0;

  return (
    <div className="result-container">
      <h2>📊 Billing Result</h2>

      <div className="result-grid">

        <div className="box">
          <p>Total Amount</p>
          <h3>₹ {result.total_amount}</h3>
        </div>

        <div className="box">
          <p>Vendor Cost</p>
          <h3>₹ {result.vendor_cost}</h3>
        </div>

        <div className="box">
          <p>Driver Cost</p>
          <h3>₹ {result.driver_cost}</h3>
        </div>

        <div className={`box ${isProfit ? "profit" : "loss"}`}>
          <p>{isProfit ? "Profit" : "Loss"}</p>
          <h3>₹ {result.profit}</h3>
        </div>

      </div>
    </div>
  );
};

export default ResultCard;