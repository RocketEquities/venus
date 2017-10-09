import React from 'react';
import { Link } from 'react-router-dom';


class Login extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
      type: 'password',
      score: 'null'
    }
    this.showHide = this.showHide.bind(this);
  }

  showHide(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === 'input' ? 'password' : 'input'
    })  
  }

  render() {
	  return (
	    <div className="form-container">
			<h2>Login to your account</h2>
			<div className="separator"></div>
			<input type="email" name="email" ref={node => {this.email = node;}} className="input-text" placeholder="Email" />
			<div className="password-input">
				<input type={this.state.type} name="password" ref={node => {this.password = node;}} className="input-text" placeholder="Password" />
				<span className="password-show" onClick={this.showHide}>{this.state.type === 'input' ? 'Hide' : 'Show'}</span>
				<Link to="/forgot" className="sub-link">Forgot password?</Link>
			</div>
			<input type="button" name="login" value="LOGIN" className="button"/>
			<span>Don’t have an account? <Link to="/register" className="link">Sign up</Link></span>
			</div>
	  );
  }
}

export default Login;