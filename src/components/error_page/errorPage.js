import React from 'react';

const ErrorPage = ({ onBack }) => {
  return (
    <div>
      <h1>Error Page</h1>
      <p>Invalid username or password.</p>
      <button type="button" onClick={onBack}>
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
