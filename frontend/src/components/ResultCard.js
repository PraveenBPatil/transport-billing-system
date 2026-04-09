import React from "react";

const ResultCard = ({ result }) => {
  if (!result) return null;

  return (
    <div>
      <h2>📊 Result</h2>

      <p><strong>Total Amount:</strong> ₹ {result.total_amount}</p>
      <p><strong>Vendor Cost:</strong> ₹ {result.vendor_cost}</p>
      <p><strong>Driver Cost:</strong> ₹ {result.driver_cost}</p>
      <p><strong>Profit:</strong> ₹ {result.profit}</p>
    </div>
  );
};

export default ResultCard;