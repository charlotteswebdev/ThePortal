import React from 'react';
import './successPage.css';

const SuccessPage = ({ onLogout }) => {
  return (
    <div className="success-container">
      <h1>Login Successful!</h1>
      <h3>Click below to log out</h3>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default SuccessPage;
