import { useState } from "react";
import { calculateBill } from "../services/api";

function BillingForm({ setResult }) {
  const [model, setModel] = useState("flat");
  const [value, setValue] = useState(10);

  const handleSubmit = async () => {
    let data = {};

    if (model === "flat") {
      data = {
        model,
        trips: Number(value),
        client_rate: 620,
        vendor_rate: 540,
        driver_rate: 380
      };
    }

    if (model === "shift") {
      data = {
        model,
        shifts: Number(value),
        client_rate: 1500,
        vendor_rate: 1200,
        driver_rate: 800
      };
    }

    if (model === "monthly") {
      data = {
        model,
        client_base: 41000,
        vendor_base: 36000,
        driver_base: 28000,
        extra_km: 200,
        extra_hours: 10,
        client_km_rate: 11,
        vendor_km_rate: 9,
        driver_km_rate: 2,
        client_hour_rate: 125,
        vendor_hour_rate: 100,
        driver_hour_rate: 50
      };
    }

    if (model === "slab") {
      data = {
        model,
        trips: 7,
        client_slabs: [
          { min: 1, max: 5, rate: 600 },
          { min: 6, max: 10, rate: 550 }
        ],
        vendor_slabs: [
          { min: 1, max: 5, rate: 520 },
          { min: 6, max: 10, rate: 480 }
        ],
        driver_slabs: [
          { min: 1, max: 5, rate: 300 },
          { min: 6, max: 10, rate: 280 }
        ]
      };
    }

    const res = await calculateBill(data);
    setResult(res);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      
      <label>Billing Model</label>
      <select
        value={model}
        onChange={(e) => setModel(e.target.value)}
        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
      >
        <option value="flat">Flat</option>
        <option value="monthly">Monthly</option>
        <option value="slab">Slab</option>
        <option value="shift">Shift</option>
      </select>

      <br /><br />

      {(model === "flat" || model === "shift") && (
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter value"
          style={{ width: "100%", padding: "8px" }}
        />
      )}

      <br /><br />

      <button
        onClick={handleSubmit}
        style={{
          width: "100%",
          padding: "10px",
          background: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Calculate
      </button>
    </div>
  );
}

export default BillingForm;