import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import { logout } from '../../actions/AccountActions.js';

@connect((store) => {
  return {
    logout_response: store.account.logout_response
  };
})

class Navigation extends React.Component {
  constructor(props) {
  	super(props);
  	this.navToggle = this.navToggle.bind(this);
  }

  resfreshPage() {
   
  }

  logout() {
    this.props.dispatch(logout());
    
  }

  componentWillReceiveProps(nextProps){
  }

  navToggle() {
    let hamburgerLink = document.querySelector('.hamburger-link');
    if (hamburgerLink.style.display === 'block') {
      hamburgerLink.style.display = 'none';
    } else {
      hamburgerLink.style.display = 'block';
    }
  }

  navToggleLink() {
    let hamburgerLink = document.querySelector('.hamburger-link');
    if (hamburgerLink.style.display === 'block') {
      hamburgerLink.style.display = 'none';
    } else {
      hamburgerLink.style.display = 'block';
    }
  }

  render() {
    
	  return (
	    <nav>
		    <div className="nav-container">
		    	<Link to="/"><div className="nav-logo"></div></Link>
		      <div className="nav-wide">
		        <div className="wide">
		          <NavLink activeClassName="selected" to="/portfolio" >My Portfolio</NavLink>
		          <NavLink activeClassName="selected" to="/businesses">Investments</NavLink>
		          <a href="/logout" onClick={this.logout.bind(this)}>Logout</a>
		        </div>
		      </div>
		      <div className="nav-narrow">
		        <i className="fa fa-bars fa-2x" onClick={this.navToggle}></i>
		        <div className="hamburger-link">
		          <NavLink to="/portfolio" activeClassName="selected" onClick={this.navToggleLink}>My Portfolio</NavLink>
		          <NavLink to="/businesses" activeClassName="selected" onClick={this.navToggleLink}>Investments</NavLink>
		          <a href="/logout" onClick={this.logout.bind(this)}>Logout</a>
		        </div>
		      </div>
		    </div>
      </nav>
	  );
  }
}

export default withRouter(Navigation);