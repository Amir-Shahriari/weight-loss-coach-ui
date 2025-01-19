import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InputPage.css';

const InputPage = () => {
  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    age: '',
    gender: '',
  });

  const navigate = useNavigate(); // Initialize the navigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userDetails = {
      weight: parseFloat(formData.weight),
      height: parseFloat(formData.height),
      age: parseInt(formData.age, 10),
      gender: formData.gender,
      activity_level: "moderate", // Replace this with user input if required
    };

    try {
      const response = await fetch("http://localhost:8000/calculate_and_recommend_daily/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Recommendations:", data);

      // Navigate to the recommendation page and pass the data as state
      navigate('/recommendations', { state: { recommendations: data.daily_exercise_plan } });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="input-page">
      <div className="input-card">
        <h2 className="card-title">Enter Your Details</h2>
        <form className="input-form" onSubmit={handleSubmit}>
          <label className="form-label">
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <label className="form-label">
            Weight (kg):
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <label className="form-label">
            Height (cm):
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <label className="form-label">
            Gender:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="form-input"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <button type="submit" className="form-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default InputPage;
