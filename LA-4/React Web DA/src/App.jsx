import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Question1 from './questions/Question1';
import Question2 from './questions/Question2';
import Question3 from './questions/Question3';
import Question4 from './questions/Question4';
import Question5 from './questions/Question5';
import Question6 from './questions/Question6';
import Question7 from './questions/Question7';
import Question8 from './questions/Question8';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
            <h1>React LAB Assessments</h1>
            <p>Navigate to specific questions using the URL directly.</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><Link to="/q1">Question 1: Welcome Message</Link></li>
              <li><Link to="/q2">Question 2: Basic Calculator</Link></li>
              <li><Link to="/q3">Question 3: Image Gallery</Link></li>
              <li><Link to="/q4">Question 4: Grade Calculator</Link></li>
              <li><Link to="/q5">Question 5: Todo List</Link></li>
              <li><Link to="/q6">Question 6: Weather Dashboard</Link></li>
              <li><Link to="/q7">Question 7: Book Explorer</Link></li>
              <li><Link to="/q8">Question 8: Country Explorer</Link></li>
            </ul>
          </div>
        } />
        
        {/* Pass custom props to Question1 as an example */}
        <Route path="/q1" element={<Question1 name="Nihit Garg" city="Vellore" />} />
        <Route path="/q2" element={<Question2 />} />
        <Route path="/q3" element={<Question3 />} />
        <Route path="/q4" element={<Question4 />} />
        <Route path="/q5" element={<Question5 />} />
        <Route path="/q6" element={<Question6 />} />
        <Route path="/q7" element={<Question7 />} />
        <Route path="/q8" element={<Question8 />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;
