import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import InputPage from './components/InputPage';
import ExerciseRecommendationPage from './components/ExerciseRecommendationPage';
import ExerciseDetailsPage from './components/ExerciseDetailsPage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<h1>Welcome to MyFitnessApp!</h1>} />
          <Route path="/input" element={<InputPage />} />
          <Route path="/recommendations" element={<ExerciseRecommendationPage />} />
          <Route path="/details" element={<ExerciseDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
