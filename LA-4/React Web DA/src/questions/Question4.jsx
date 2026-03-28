import React, { useState } from 'react';
import './Question4.css';

const Question4 = () => {
  const [mark1, setMark1] = useState('');
  const [mark2, setMark2] = useState('');
  const [mark3, setMark3] = useState('');
  const [result, setResult] = useState(null);

  const calculateGrade = () => {
    const m1 = Number(mark1);
    const m2 = Number(mark2);
    const m3 = Number(mark3);

    const average = (m1 + m2 + m3) / 3;
    let grade = '';

    if (average >= 90) {
      grade = 'A';
    } else if (average >= 80) {
      grade = 'B';
    } else if (average >= 70) {
      grade = 'C';
    } else if (average >= 60) {
      grade = 'D';
    } else {
      grade = 'F';
    }

    setResult({ average: average.toFixed(2), grade });
  };

  return (
    <div className="grades-container">
      <div className="grades-card">
        <h3>Nihit Garg - 24BCE0627</h3>
        <h2>Grade Calculator</h2>

        <div className="input-group">
          <label>Subject 1 Marks:</label>
          <input
            type="number"
            max={100}
            min={0}
            value={mark1}
            onChange={(e) => setMark1(e.target.value)}
            placeholder="Enter marks"
            className="grades-input"
          />
        </div>

        <div className="input-group">
          <label>Subject 2 Marks:</label>
          <input
            type="number"
            value={mark2}
            max={100}
            min={0}
            onChange={(e) => setMark2(e.target.value)}
            placeholder="Enter marks"
            className="grades-input"
          />
        </div>

        <div className="input-group">
          <label>Subject 3 Marks:</label>
          <input
            type="number"
            value={mark3}
            max={100}
            min={0}
            onChange={(e) => setMark3(e.target.value)}
            placeholder="Enter marks"
            className="grades-input"
          />
        </div>

        <button onClick={calculateGrade} className="calculate-btn">
          Calculate Grade
        </button>

        {result && (
          <div className={`result-display grade-${result.grade}`}>
            <p>Average: {result.average}</p>
            <p>Grade: <strong>{result.grade}</strong></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Question4;
