"use client"
import { useState } from "react";
import axios from "axios";

function LeadForm() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    product: "",
    projectDetails: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      await axios.post("https://am-backend-2968.onrender.com/api/leads", form, {
        headers: { "Content-Type": "application/json" },
      });
      setSuccess("Thanks! Your request was submitted.");
      setForm({
        fullName: "",
        phone: "",
        email: "",
        product: "",
        projectDetails: "",
      });
    } catch (err) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="lead-form">
      <input
        type="text"
        placeholder="Full Name"
        value={form.fullName}
        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        required
      />

      <input
        type="tel"
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        required
      />

      <input
        type="email"
        placeholder="Email (optional)"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <select
        value={form.product}
        onChange={(e) => setForm({ ...form, product: e.target.value })}
        required
      >
        <option value="">Select Product</option>
        <option value="Portable Office Cabin">Portable Office Cabin</option>
        <option value="Security Guard Cabin">Security Guard Cabin</option>
        <option value="Portable Cafe Cabin">Portable Cafe Cabin</option>
        <option value="Prefab House">Prefab House</option>
      </select>

      <textarea
        placeholder="Project Details (optional)"
        value={form.projectDetails}
        onChange={(e) => setForm({ ...form, projectDetails: e.target.value })}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Submit"}
      </button>

      {success && <p style={{ color: "green" }}>{success}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default LeadForm;
