import React, { useState } from "react";
import { calculateBill } from "../services/api";
import "./BillingForm.css";

const BillingForm = ({ setResult }) => {
  const [formData, setFormData] = useState({
    model: "flat",
    trips: "",
    client_rate: "",
    vendor_rate: "",
    driver_rate: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ validation
    if (!formData.trips || !formData.client_rate) {
      alert("Please fill required fields");
      return;
    }

    const data = {
      ...formData,
      trips: Number(formData.trips),
      client_rate: Number(formData.client_rate),
      vendor_rate: Number(formData.vendor_rate),
      driver_rate: Number(formData.driver_rate)
    };

    setLoading(true);

    const result = await calculateBill(data);

    setLoading(false);

    setResult(result);
  };

  return (
    <div className="billing-container">
      <h2>🚚 Billing Calculator</h2>

      <form onSubmit={handleSubmit} className="billing-form">

        <label>Billing Model</label>
        <select name="model" value={formData.model} onChange={handleChange}>
          <option value="flat">Flat</option>
          <option value="monthly">Monthly</option>
          <option value="slab">Slab</option>
          <option value="shift">Shift</option>
        </select>

        <label>Trips</label>
        <input
          type="number"
          name="trips"
          placeholder="Enter trips"
          value={formData.trips}
          onChange={handleChange}
        />

        <label>Client Rate</label>
        <input
          type="number"
          name="client_rate"
          placeholder="Enter client rate"
          value={formData.client_rate}
          onChange={handleChange}
        />

        <label>Vendor Rate</label>
        <input
          type="number"
          name="vendor_rate"
          placeholder="Enter vendor rate"
          value={formData.vendor_rate}
          onChange={handleChange}
        />

        <label>Driver Rate</label>
        <input
          type="number"
          name="driver_rate"
          placeholder="Enter driver rate"
          value={formData.driver_rate}
          onChange={handleChange}
        />

        <button type="submit">
          {loading ? "Calculating..." : "Calculate"}
        </button>
      </form>
    </div>
  );
};

export default BillingForm;