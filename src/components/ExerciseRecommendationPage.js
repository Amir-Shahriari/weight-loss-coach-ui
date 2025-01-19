import React from "react";
import "./ExerciseRecommendationPage.css";

const ExerciseRecommendationPage = ({ recommendations = [], onDetailsClick, dailyCalorieIntake }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'start',
      minHeight: '100vh',
      padding: '2rem 0',
      background: 'linear-gradient(90deg, #4CAF50, #81C784)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        background: '#ffffff',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '80%',
        maxWidth: '800px',
        textAlign: 'center',
        overflowY: 'auto',
        maxHeight: '90vh'
      }}>
        <h1 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: '#333'
        }}>Exercise Recommendations</h1>
        <p style={{
          fontSize: '1rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: '#666'
        }}>Your Daily Calorie Intake: {dailyCalorieIntake} kcal</p>
        {recommendations.length > 0 ? (
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            justifyContent: 'center'
          }}>
            {recommendations.map((exercise, index) => (
              <div key={index} style={{
                background: '#f9f9f9',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                padding: '1rem',
                width: '300px',
                textAlign: 'left'
              }}>
                <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#333' }}>{exercise.activity}</h3>
                <p style={{ marginBottom: '0.5rem', color: '#666' }}>Calories Burned per Hour: {exercise.calories_burned_per_hour} kcal</p>
                <p style={{ marginBottom: '0.5rem', color: '#666' }}>Duration: {exercise.daily_duration_minutes} minutes</p>
                <button
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    background: '#4CAF50',
                    color: '#fff',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                  onClick={() => onDetailsClick(exercise.id)}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            background: '#f9f9f9',
            borderRadius: '8px',
            padding: '1.5rem',
            color: '#4CAF50',
            fontWeight: 'bold',
            textAlign: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
          }}>
            No recommendations available. Please provide your input to receive suggestions.
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseRecommendationPage;
