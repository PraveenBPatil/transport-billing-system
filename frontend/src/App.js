import React, { useState } from "react";
import BillingForm from "./components/BillingForm";
import ResultCard from "./components/ResultCard";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Transport Billing System</h1>
      <BillingForm setResult={setResult} />
      <ResultCard result={result} />
    </div>
  );
}

export default App;