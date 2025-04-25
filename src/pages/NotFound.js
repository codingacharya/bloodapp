// src/pages/NotFound.js

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="error-code">404</h1>
      <p className="error-message">Oops! Page not found.</p>
      <Link to="/" className="go-home">Go back to Home</Link>
    </div>
  );
};

export default NotFound;
