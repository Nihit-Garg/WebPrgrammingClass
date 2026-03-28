import React from 'react';

const Question1 = ({ name = "Nihit Garg", city = "Vellore" }) => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      width: '100vw',
      backgroundColor: '#f0f4f8',
      fontFamily: 'Arial, sans-serif',
      position: 'fixed',
      top: 0,
      left: 0
    }}>
      <div style={{ 
        backgroundColor: '#ffffff', 
        padding: '40px', 
        borderRadius: '12px', 
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        textAlign: 'center',
        maxWidth: '550px'
      }}>
        <h3 style={{ 
          color: '#64748b', 
          margin: '0 0 15px 0',
          fontSize: '14px',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          Nihit Garg - 24BCE0627
        </h3>
        
        <h1 style={{ color: '#1e293b', marginBottom: '10px' }}>
          Welcome, <span style={{ color: '#3b82f6' }}>{name}</span>!
        </h1>
        
        <h2 style={{ color: '#334155', fontSize: '22px', marginTop: '0', fontWeight: 'normal' }}>
          Greetings from <span style={{ color: '#ef4444' }}>{city}</span>
        </h2>
        
        <p style={{ 
          fontSize: '16px', 
          color: '#475569', 
          lineHeight: '1.6', 
          marginTop: '25px' 
        }}>
          This is a personalized welcome message demonstrating the use of React functional components, props, JSX syntax, and inline styling.
        </p>
      </div>
    </div>
  );
};

export default Question1;
