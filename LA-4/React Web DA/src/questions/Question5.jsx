import React, { useState } from 'react';
import './Question5.css';

const Question5 = () => {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (taskText.trim() === '') return;
    
    // Using spread operator for array immutability as required
    const newTask = {
      id: Date.now(),
      text: taskText
    };
    
    setTasks([...tasks, newTask]);
    setTaskText(''); // Clear input
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="todo-container">
      <div className="todo-card">
        <h3>Nihit Garg - 24BCE0627</h3>
        <h2>Todo List</h2>
        
        <div className="todo-input-group">
          <input 
            type="text" 
            value={taskText} 
            onChange={(e) => setTaskText(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="What needs to be done?"
            className="todo-input"
          />
          <button onClick={handleAddTask} className="todo-add-btn">
            Add
          </button>
        </div>

        <div className="todo-list">
          {tasks.length === 0 ? (
            <p className="empty-state">No tasks yet. Add one above!</p>
          ) : (
            <ul>
              {tasks.map((task) => (
                <li key={task.id} className="todo-item">
                  <span className="task-text">{task.text}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question5;
