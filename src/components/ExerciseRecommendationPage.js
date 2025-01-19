import React from 'react';
import './ExerciseRecommendationPage.css';

const ExerciseRecommendationPage = ({ recommendations = [], onDetailsClick }) => {
  return (
    <div className="recommendations-page">
      <h2 className="page-title">Recommended Exercises</h2>
      <div className="recommendations-grid">
        {recommendations.length > 0 ? (
          recommendations.map((exercise, index) => (
            <div key={index} className="exercise-card">
              <h3 className="exercise-title">{exercise.name}</h3>
              <p className="exercise-description">{exercise.shortDescription}</p>
              <button
                className="details-button"
                onClick={() => onDetailsClick(exercise.id)}
              >
                View Details
              </button>
            </div>
          ))
        ) : (
          <p className="no-recommendations">No exercises available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default ExerciseRecommendationPage;
