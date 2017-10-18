import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="not-found">
    <div className="container">
    	<div className="logo"></div>
    	<div className="space-404"></div>
    	<h2>houston, we have a problem!</h2>
    	<h3>Sorry, we can’t seem to find the page that you’re looking for.</h3>
    	<Link to="/" className="button">BACK TO DASHBOARD</Link>
      </div>
  </div>
)

export default NotFound;