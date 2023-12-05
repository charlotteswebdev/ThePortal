import React, { useState } from 'react';
import './App.css';
import Button from './components/button/button';
import ErrorPage from './components/error_page/errorPage';
import SuccessPage from './components/success_page/successPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const isValidUser = username === '1' && password === '1';

    if (isValidUser) {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
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
          <SuccessPage onLogout={handleLogout} />
        ) : error ? (
          <ErrorPage onBack={() => setError('')} />
        ) : (
          <>
            <h1>Welcome to the Portal!</h1>
            <h4>Please enter your username and password to login:</h4>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </>
        )}
      </header>
    </div>
  );
}

export default App;
