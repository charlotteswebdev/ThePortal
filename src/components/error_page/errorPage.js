import React from 'react';
import { useNavigate } from 'react-router-dom';
import './errorPage.css';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="error-page-container">
      <h1>Error</h1>
      <p className="error-message">Invalid username or password.</p>
      <button type="button" className="back-button" onClick={handleBackClick}>
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;