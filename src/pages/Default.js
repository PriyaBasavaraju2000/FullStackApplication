import React from 'react';
import { Link } from 'react-router-dom';

export default function Default() {
  return (
    <div className="center-container">
      <h1 className='header'>User Management System</h1>
      <Link to="/home" className="btn btn-primary mt-4">
        User Details
      </Link>
    </div>
  );
}