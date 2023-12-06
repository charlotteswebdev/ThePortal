// imports: react and components
import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './components/button/button';
import ErrorPage from './components/error_page/errorPage';
import SuccessPage from './components/success_page/successPage';

function App() {
  useEffect(() => {
    // this function pre-loads my images for faster display between pages.
    const imageUrls = [
      'C:\\Users\\96mck\\.vscode\\LogInLogOut\\src\\components\\images\\portal_background.jpg',
      'C:\\Users\\96mck\\.vscode\\LogInLogOut\\src\\components\\images\\balloon_background.jpg',
      'C:\\Users\\96mck\\.vscode\\LogInLogOut\\src\\components\\images\\lego_background.jpg',
    ];

    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  //useState for login mechanism
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    //sample username and password
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
// added this to allow user to click button or tap enter key on keyboard to submit login info
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className={isLoggedIn ? 'success-container' : 'App'}>
      <header className="App-header">
        {/* The question marks act as a convention for conditional rendering.  
        If isLoggedIn is true, the SuccessPage component is rendered, 
        if error is true, the ErrorPage component is rendered.*/}
        {isLoggedIn ? (
          <SuccessPage onLogout={handleLogout} />
        ) : error ? (
          <ErrorPage onBack={() => setError('')} />
        ) : (
          <>
            <h1 className="welcome-heading">Welcome to the Portal</h1>
            <h3>Please enter your username and password to login:</h3>
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
          </>
        )}
      </header>
    </div>
  );
}

export default App;
