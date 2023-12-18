import React from 'react';
import './errorPage.css';

const ErrorPage = ({ onBack }) => {
  return (
    <div className="error-page-container">
      <h1>Error</h1>
      <p className="error-message">Invalid username or password.</p>
      <button type="button" className="back-button" onClick={onBack}>
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
