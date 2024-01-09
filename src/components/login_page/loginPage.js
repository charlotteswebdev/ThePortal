import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as authActions from '../../authActions';
import { useNavigate } from 'react-router-dom';
import "./loginPage.css"

function Button({ onClick }) {
    return (
        <button type="button" className="myButton" onClick={onClick}>
            Log In
        </button>
    );
}

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const username = useSelector((state) => state.username);
    const [password, setPassword] = useState(''); 

    const handleLogin = () => {
        const correctPassword = 'mcknight';

        if (password === correctPassword) {
            dispatch(authActions.login(username));
            dispatch(authActions.clearError());
            navigate('/success');
        } else {
            dispatch(authActions.setError('Invalid username or password'));
            navigate('/error');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          handleLogin();
        }
      };

    return (
        <div className="App-header">
          <h1 className="welcome-heading">Welcome to the Portal</h1>
            <h3>Please enter your username and password to login:</h3>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => dispatch(authActions.setUsername(e.target.value))}
              onKeyPress={handleKeyPress}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <Button onClick={handleLogin} />
        </div>
    );
};

export default LoginPage;