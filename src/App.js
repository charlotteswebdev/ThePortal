// App.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as authActions from './authActions';
import './App.css';
import Button from './components/button/button';
import ErrorPage from './components/error_page/errorPage';
import SuccessPage from './components/success_page/successPage';

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const username = useSelector((state) => state.username);
  const error = useSelector((state) => state.error);
  const [password, setPassword] = useState(''); // Add this line

  const handleLogin = () => {
    const correctPassword = 'mcknight';

    if (password === correctPassword) {
      dispatch(authActions.login(username));
      dispatch(authActions.clearError());
    } else {
      dispatch(authActions.setError('Invalid username or password'));
    }
  };

  const handleLogout = () => {
    dispatch(authActions.logout());
    dispatch(authActions.clearError());
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className={isLoggedIn ? 'success-container' : 'App'}>
      <header className="App-header">
      {isLoggedIn ? (
          <SuccessPage  username={username} onLogout={handleLogout} />
        ) : error ? (
          <ErrorPage onBack={() => dispatch(authActions.clearError())} />
        ) : (
          <>
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
          </>
        )}
      </header>
    </div>
  );
}

export default App;
