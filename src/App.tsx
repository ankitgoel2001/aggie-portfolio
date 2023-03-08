import React, { useState } from 'react';
import './App.css';
import InputForm from './InputForm';
import AggieCard from './AggieCard';
import { FormInput } from './types';

function App() {
  const [formData, setFormData] = useState<FormInput | null>(null);

  const handleFormSubmit = async (data: FormInput) => {
    try {
      const response = await fetch('/api/aggie-card', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const aggieCardData = await response.json();
      setFormData(aggieCardData);
    } catch (error) {
      console.error(error);
      alert('Failed to generate Aggie Card');
    }
  };

  const handleViewAggieCardClick = () => {
    window.open('/api/aggie-card', '_blank');
  }

  return (
    <div>
      <h1 className="heading">ID Card Generator</h1>
      <div className="logo"></div>
      <InputForm onSubmit={handleFormSubmit} />
      {formData !== null && (
        <button type="button" onClick={handleViewAggieCardClick}>
          View Aggie Card
        </button>
      )}
    </div>
  );
}

export default App;



