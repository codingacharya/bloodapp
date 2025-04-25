// src/pages/Login.js
import React, { useState } from 'react';
import './Login.css'; // Importing the CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setErrorMessage('Both fields are required');
    } else {
      setErrorMessage('');
      // Handle login logic here (e.g., send request to server)
    }
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            className="input-field"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="submit-btn">Login</button>
        </form>
        <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
        <a href="/register" className="sign-up-link">Don't have an account? Sign Up</a>
      </div>
    </div>
  );
};

export default Login;
