import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as authActions from '../../authActions';
import './successPage.css';

const SuccessPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector((state) => state.username); // Access username from Redux store

  const onLogout = () => {
    dispatch(authActions.logout());
    dispatch(authActions.clearError());
    navigate('/');
  };

  return (
    <div className="success-container"> 
      <h1>Login Successful!</h1>
      <h1>Welcome, {username || 'Guest'}!</h1>
      <button className="logout-button" onClick={onLogout}>Logout</button>
    </div>
  );
};

export default SuccessPage;