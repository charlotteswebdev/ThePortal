import React from 'react';
import ErrorPage from './components/error_page/errorPage';
import SuccessPage from './components/success_page/successPage';
import LoginPage from './components/login_page/loginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/success" element={<SuccessPage/>} />
          </Routes>
    </Router>
  );
}

export default App;