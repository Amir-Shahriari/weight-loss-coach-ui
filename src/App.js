// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import InputPage from "./components/InputPage";
import ResultPage from "./components/ResultPage";

const App = () => {
  const [results, setResults] = useState(null);

  const handleSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/calculate_and_recommend_weekly/",
        data
      );
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<InputPage onSubmit={handleSubmit} />} />
        <Route path="/results" element={<ResultPage results={results} />} />
      </Routes>
    </Router>
  );
};

export default App;
