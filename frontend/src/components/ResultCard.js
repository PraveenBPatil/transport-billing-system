function ResultCard({ result }) {
  if (!result) return null;

  return (
    <div style={{
      marginTop: "20px",
      padding: "15px",
      background: "#f1f3f5",
      borderRadius: "8px"
    }}>
      <h3>Result</h3>
      <p>Client: ₹{result.client_amount}</p>
      <p>Vendor: ₹{result.vendor_amount}</p>
      <p>Driver: ₹{result.driver_amount}</p>
      <p><strong>Margin: ₹{result.margin}</strong></p>
    </div>
  );
}

export default ResultCard;