// src/components/InputPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const InputPage = ({ onSubmit }) => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activityLevel, setActivityLevel] = useState("light");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { weight, height, age, gender, activity_level: activityLevel };
    onSubmit(data); // Pass data to the parent App component
    navigate("/results"); // Navigate to the results page
  };

  return (
    <div>
      <h1>Enter Your Details</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </label>
        <label>
          Height (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </label>
        <label>
          Gender:
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label>
          Activity Level:
          <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
            required
          >
            <option value="sedentary">Sedentary</option>
            <option value="light">Light</option>
            <option value="moderate">Moderate</option>
            <option value="active">Active</option>
            <option value="very active">Very Active</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputPage;
