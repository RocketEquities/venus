import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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

  render() {
	  return (
	    <nav>
		    <div className="nav-container">
		    	<Link to="/"><div className="nav-logo"></div></Link>
		      <div className="nav-wide">
		        <div className="wide">
		          <NavLink activeClassName="selected" exact to="/portfolio">My Portfolio</NavLink>
		          <NavLink activeClassName="selected" exact to="/businesses">Investments</NavLink>
		          <NavLink activeClassName="selected" exact to="/" onClick={this.logout.bind(this)}>Logout</NavLink>
		        </div>
		      </div>
		      <div className="nav-narrow">
		        <i className="fa fa-bars fa-2x" onClick={this.navToggle}></i>
		        <div className="hamburger-link">
		          <NavLink exact to="/portfolio" activeClassName="selected" onClick={this.navToggle}>My Portfolio</NavLink>
		          <NavLink exact to="/businesses" activeClassName="selected" onClick={this.navToggle}>Investments</NavLink>
		          <NavLink exact to="/" onClick={this.logout.bind(this)} activeClassName="selected" onClick={this.navToggle}>Logout</NavLink>
		        </div>
		      </div>
		    </div>
      </nav>
	  );
  }
}

export default Navigation;