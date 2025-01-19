import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import InputPage from './components/InputPage';
import ExerciseRecommendationPage from './components/ExerciseRecommendationPage';

const App = () => {
    const [recommendations, setRecommendations] = useState([]);
    const [dailyCalorieIntake, setDailyCalorieIntake] = useState(0);

    const fetchRecommendations = async (userDetails) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/calculate_and_recommend_daily/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userDetails),
            });
            const data = await response.json();
            console.log('Fetched Recommendations:', data);
            if (data.daily_exercise_plan) {
                setRecommendations(data.daily_exercise_plan);
                setDailyCalorieIntake(data.recommended_daily_calorie_intake || 0);
            } else {
                console.error('No recommendations found:', data);
            }
        } catch (error) {
            console.error('Error fetching recommendations:', error);
        }
    };

    const handleDetailsClick = (exerciseId) => {
        const selectedExercise = recommendations.find((ex) => ex.id === exerciseId);

        if (selectedExercise) {
            alert(`Insights for ${selectedExercise.activity}: ${selectedExercise.insights}`);
        } else {
            alert("Details not found for this exercise.");
        }
    };

    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/input" element={<InputPage fetchRecommendations={fetchRecommendations} />} />
                <Route
                    path="/recommendations"
                    element={
                        <ExerciseRecommendationPage
                            recommendations={recommendations}
                            dailyCalorieIntake={dailyCalorieIntake}
                            onDetailsClick={handleDetailsClick}
                        />
                    }
                />
            </Routes>
        </div>
    );
};

export default App;
