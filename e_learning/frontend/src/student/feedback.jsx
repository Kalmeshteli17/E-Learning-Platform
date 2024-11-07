import React, { useState } from "react";
import "./feedback.css";  // Make sure to import the correct CSS file
import Navbar from "./Navbar";
function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
    setFormData({ name: "", email: "", feedback: "" });
  };

  return (
    <div className="container mt-4" id="Feedback">
      <Navbar />
      <h2 className="text-center mb-4">Feedback</h2>
      <div className="row">
        <div className="col-md-8">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <br />
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <br />
            <textarea
              className="form-control"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              placeholder="Your Feedback"
              style={{ height: "150px" }}
              required
            ></textarea>
            <br />
            <input
              className="btn btn-primary"
              type="submit"
              value="Submit Feedback"
            />
            <br />
            <br />
          </form>
        </div>
        <div className="col-md-4 stripe text-white text-center">
          <h4>iSchool Feedback</h4>
          <p>We value your feedback and use it to improve our services.</p>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
