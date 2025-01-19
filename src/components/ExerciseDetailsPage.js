// src/components/ExerciseDetailsPage.js
import React from "react";
import { useParams, Link } from "react-router-dom";

const ExerciseDetailsPage = ({ dailyExercisePlan }) => {
  // The :index param from the route
  const { index } = useParams();

  // Convert it to a number
  const exerciseIndex = parseInt(index, 10);

  // If invalid index or empty plan, show fallback
  if (!dailyExercisePlan || exerciseIndex < 0 || exerciseIndex >= dailyExercisePlan.length) {
    return (
      <div>
        <p>Invalid exercise selection. Please go back.</p>
        <Link to="/recommendations">Back to Recommendations</Link>
      </div>
    );
  }

  // Get the chosen exercise
  const exercise = dailyExercisePlan[exerciseIndex];

  // Deconstruct the exercise object
  const {
    activity,
    calories_burned_per_hour,
    daily_burn_allocation,
    daily_duration_hours,
    daily_duration_minutes,
    weekly_duration_hours,
    weekly_duration_minutes,
    insights
  } = exercise;

  return (
    <div>
      <h1>Exercise Details</h1>
      <h2>{activity}</h2>
      <p><strong>Calories Burned Per Hour:</strong> {calories_burned_per_hour}</p>
      <p><strong>Daily Burn Allocation:</strong> {daily_burn_allocation} kcal</p>
      <p><strong>Daily Duration (Hours):</strong> {daily_duration_hours}</p>
      <p><strong>Daily Duration (Minutes):</strong> {daily_duration_minutes}</p>
      <p><strong>Weekly Duration (Hours):</strong> {weekly_duration_hours}</p>
      <p><strong>Weekly Duration (Minutes):</strong> {weekly_duration_minutes}</p>
      <p><strong>Insights:</strong> {insights}</p>

      <Link to="/recommendations">Back to Recommendations</Link>
    </div>
  );
};

export default ExerciseDetailsPage;
