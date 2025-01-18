// src/components/ResultPage.js
import React from "react";

const ResultPage = ({ results }) => {
  if (!results) {
    return <p>No results available. Please go back and enter your details.</p>;
  }

  const { daily_calorie_intake, weekly_exercise_plan } = results;

  return (
    <div>
      <h1>Your Results</h1>
      <p>
        <strong>Recommended Daily Calorie Intake:</strong> {daily_calorie_intake.toFixed(2)} kcal
      </p>

      <h2>Weekly Exercise Plan</h2>
      {weekly_exercise_plan.length > 0 ? (
        <ul>
          {weekly_exercise_plan.map((exercise, index) => (
            <li key={index}>
              <h3>{exercise.exercise}</h3>
              <p><strong>Calories Burned Per Hour:</strong> {exercise.calories_burned_per_hour}</p>
              <p><strong>Weekly Duration (Hours):</strong> {exercise.weekly_duration_hours}</p>
              <p><strong>Daily Duration (Minutes):</strong> {exercise.daily_duration_minutes}</p>
              <p><strong>Insights:</strong> {exercise.insights}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No exercises were suggested for this plan.</p>
      )}
    </div>
  );
};

export default ResultPage;
