import React from 'react';
import './successPage.css'; // Import the CSS for SuccessPage

const SuccessPage = ({ onLogout, username }) => {
  return (
    <div className="success-container"> 
      <h1>Login Successful!</h1>
      <h1>Welcome, {username || 'Guest'}!</h1>
      <button className="logout-button" onClick={onLogout}>Logout</button>
    </div>
  );
};

export default SuccessPage;
