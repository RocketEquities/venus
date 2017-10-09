import React from 'react';
import { Link } from 'react-router-dom';

const New = () => (
  <div className="form-container">
    <h2>Create your account</h2>
    <div className="separator"></div>
    <input type="email" name="email" ref={node => {this.email = node;}} className="input-text" placeholder="Email" />
    <input type="text" name="fullName" ref={node => {this.email = node;}} className="input-text" placeholder="Full Name" />
    <input type="password" name="password" ref={node => {this.password = node;}} className="input-text" placeholder="Password" />
    <input type="button" name="login" value="SIGN UP" className="button"/>
    <span>Already have an account? <Link to="/login" className="link">Log in</Link></span>
  </div>
)

export default New;