import React from 'react';
import './button.css';

function Button({ onClick }) {
  return (
    <button type="button" className="myButton" onClick={onClick}>
      Log In
    </button>
  );
}

export default Button;
