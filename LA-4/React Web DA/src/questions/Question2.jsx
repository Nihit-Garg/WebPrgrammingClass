import React, { useState } from 'react';
import './Question2.css';

const Question2 = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    const sum = Number(num1) + Number(num2);
    setResult(sum);
  };

  const handleSubtraction = () => {
    const diff = Number(num1) - Number(num2);
    setResult(diff);
  };

  return (
    <div className="calc-container">
      <div className="calc-card">
        <h3>Nihit Garg - 24BCE0627</h3>
        <h2>Basic Calculator</h2>
        
        <div className="input-group">
          <input 
            type="number" 
            value={num1} 
            onChange={(e) => setNum1(e.target.value)} 
            placeholder="Enter first number"
            className="calc-input"
          />
        </div>
        
        <div className="input-group">
          <input 
            type="number" 
            value={num2} 
            onChange={(e) => setNum2(e.target.value)} 
            placeholder="Enter second number"
            className="calc-input"
          />
        </div>

        <div className="button-group">
          <button onClick={handleAddition} className="calc-btn add-btn">
            Add (+)
          </button>
          <button onClick={handleSubtraction} className="calc-btn sub-btn">
            Subtract (-)
          </button>
        </div>

        {result !== null && (
          <div className="result-display">
            Result: {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default Question2;
