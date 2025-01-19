import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InputPage = ({ fetchRecommendations }) => {
    const [userDetails, setUserDetails] = useState({
        weight: '',
        height: '',
        age: '',
        gender: '',
        activity_level: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    };

    const handleSubmit = () => {
        fetchRecommendations(userDetails);
        navigate('/recommendations');
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: 'linear-gradient(90deg, #4CAF50, #81C784)',
            fontFamily: 'Arial, sans-serif'
        }}>
            <div style={{
                background: '#ffffff',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                width: '400px',
                textAlign: 'center',
                gap: '1rem',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <h1 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    color: '#333'
                }}>Enter Your Details</h1>
                <input
                    style={{
                        width: 'auto',
                        padding: '0.8rem',
                        border: '1px solid #ccc',
                        borderRadius: '8px'
                    }}
                    name="weight"
                    placeholder="Weight (kg)"
                    onChange={handleChange}
                />
                <input
                    style={{
                        width: 'auto',
                        padding: '0.8rem',
                        border: '1px solid #ccc',
                        borderRadius: '8px'
                    }}
                    name="height"
                    placeholder="Height (cm)"
                    onChange={handleChange}
                />
                <input
                    style={{
                        width: 'auto',
                        padding: '0.8rem',
                        border: '1px solid #ccc',
                        borderRadius: '8px'
                    }}
                    name="age"
                    placeholder="Age"
                    onChange={handleChange}
                />
                <select
                    style={{
                        width: '100%',
                        padding: '0.8rem',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        backgroundColor: '#fff',
                        color: '#555',
                        appearance: 'none'
                    }}
                    name="gender"
                    onChange={handleChange}
                >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <select
                    style={{
                        width: '100%',
                        padding: '0.8rem',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        backgroundColor: '#fff',
                        color: '#555',
                        appearance: 'none'
                    }}
                    name="activity_level"
                    onChange={handleChange}
                >
                    <option value="">Select Activity Level</option>
                    <option value="sedentary">Sedentary</option>
                    <option value="light">Light</option>
                    <option value="moderate">Moderate</option>
                    <option value="active">Active</option>
                    <option value="very active">Very Active</option>
                </select>
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
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default InputPage;
