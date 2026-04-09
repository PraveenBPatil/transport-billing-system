import React, { useState } from "react";
import { calculateBill } from "../services/api";

const BillingForm = ({ setResult }) => {
  const [formData, setFormData] = useState({
    model: "flat",
    trips: 0,
    client_rate: 0,
    vendor_rate: 0,
    driver_rate: 0
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await calculateBill(formData);
    setResult(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Billing Form</h2>

      <select name="model" onChange={handleChange}>
        <option value="flat">Flat</option>
        <option value="monthly">Monthly</option>
        <option value="slab">Slab</option>
        <option value="shift">Shift</option>
      </select>

      <input name="trips" placeholder="Trips" onChange={handleChange} />
      <input name="client_rate" placeholder="Client Rate" onChange={handleChange} />
      <input name="vendor_rate" placeholder="Vendor Rate" onChange={handleChange} />
      <input name="driver_rate" placeholder="Driver Rate" onChange={handleChange} />

      <button type="submit">Calculate</button>
    </form>
  );
};

export default BillingForm;