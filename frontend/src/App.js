import React, { useState } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Stats from "./components/Stats";
import BillingForm from "./components/BillingForm";
import ResultCard from "./components/ResultCard";
import Timeline from "./components/Timeline";
import ScrollTimeline from "./components/ScrollTimeline";
import PremiumTimeline from "./components/PremiumTimeline";

function App() {
  const [result, setResult] = useState(null);

  return (
    <>
      <Hero />
      <Services />
      <About />
      <Stats />
      <PremiumTimeline />
      <ScrollTimeline />

      <div style={{ padding: "40px" }}>
        <BillingForm setResult={setResult} />
        <ResultCard result={result} />
      </div>
    </>
  );
}

export default App;