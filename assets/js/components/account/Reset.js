import React from 'react';
import { Link } from 'react-router-dom';

class Reset extends React.Component {
    render() {
      return (
        <div className="form-container">
            <h2>Forgot Password</h2>
            <div className="separator"></div>
            <input type="email" name="email" ref={node => {this.email = node;}} className="input-text" placeholder="Email" />
            <input type="button" name="login" value="RESET PASSWORD" className="button"/>
        </div>
      );
    }
}

export default Reset;