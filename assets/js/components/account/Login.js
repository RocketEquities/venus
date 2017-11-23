import React from 'react';
import { Link } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import Spiels from '../../utils/Spiels.js';

import { login } from '../../actions/AccountActions.js';

@connect((store) => {
  return {
    login_response: store.account.login_response,
    login_authorized: store.account.login_authorized
  };
})

class Login extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
      type: 'password',
      score: 'null',
      input: {email: '', password: ''},
      toastType: ''

    }
    this.showHide = this.showHide.bind(this);
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.login_authorized) {
        //redirect to homepage
        this.props.history.push('/');
      } else {
        toast(nextProps.login_response.message);
        this.setState({toastType: 'error'});
      }
  }


  login() {

    if(this.state.input.email == '' || this.state.input.password == '') {
      toast(Spiels.loginEmpty());
      this.setState({toastType: 'error'});

    } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.input.email)) {
      toast(Spiels.validEmail());
      this.setState({toastType: 'error'});

    } else {
      var hashP = CryptoJS.SHA1(this.state.input.password);
      hashP     = hashP.toString(CryptoJS.enc.Hex);

      this.props.dispatch(login(this.state.input.email, hashP));
      
    }
  }

  handleChange(property, event) {
    const input = {...this.state.input};
    input[property] = event.target.value;

    this.setState({input: input});
  }

  showHide(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === 'input' ? 'password' : 'input'
    })  
  }

  render() {
    const CloseButton = ({ closeToast }) => (
      <i className="toastify__close fa fa-times" onClick={closeToast} />
    );

    // var responsedisplay = this.props.login_authorized ? this.props.login_response.email : this.props.login_response.message;

	  return (
	    <div className="form-container">
			<h2 className="display-nothing">Login to your account</h2>
      <ToastContainer 
        position="top-center"
        closeButton={<CloseButton />}
        type="default"
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        toastClassName={this.state.toastType}
        newestOnTop={true}
      />

			<div className="separator"></div>
			<input type="email" name="email" value={this.state.input.email} onChange={this.handleChange.bind(this, 'email')} className="input-text" placeholder="Email" />
			<div className="password-input">
				<input type={this.state.type} name="password" value={this.state.input.password} onChange={this.handleChange.bind(this, 'password')} className="input-text" placeholder="Password" />
				<span className="password-show" onClick={this.showHide}>{this.state.type === 'input' ? 'Hide' : 'Show'}</span>
				<Link to="/forgot" className="sub-link">Forgot password?</Link>
			</div>
			<input type="button" name="login" value="LOGIN" className="button" onClick={this.login.bind(this)}/>
			<span>Don’t have an account? <Link to="/register" className="link">Sign up</Link></span>
			</div>
	  );
  }
}

export default Login;
