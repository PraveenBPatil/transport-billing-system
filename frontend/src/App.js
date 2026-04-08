import { useState } from "react";
import BillingForm from "./components/BillingForm";
import ResultCard from "./components/ResultCard";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f4f6f8",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        background: "#fff",
        padding: "30px",
        borderRadius: "12px",
        width: "400px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ textAlign: "center" }}>
          🚚 Transport Billing
        </h2>

        <BillingForm setResult={setResult} />
        <ResultCard result={result} />
      </div>
    </div>
  );
}

export default App;