import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

import { logout } from '../../actions/AccountActions.js';
import { portfolio } from '../../actions/BusinessActions.js';

@connect((store) => {
  return {
    logout_response: store.account.logout_response,
    portfolio_widget: store.business.portfolio_widget
  };
})

class Navigation extends React.Component {
  constructor(props) {
  	super(props);
  	this.navToggle = this.navToggle.bind(this);
  }

  resfreshPage() {
    history.go(0);
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
    history.go(0);
  }

  render() {
    var currentid = '';

    if(this.props.portfolio_widget.investments != undefined) {
      currentid = "/portfolio/" + this.props.portfolio_widget.investments[0].id;
    }
    
	  return (
	    <nav>
		    <div className="nav-container">
		    	<Link to="/"><div className="nav-logo"></div></Link>
		      <div className="nav-wide">
		        <div className="wide">
		          <NavLink activeClassName="selected" exact to={currentid} onClick={this.resfreshPage.bind(this)} >My Portfolio</NavLink>
		          <NavLink activeClassName="selected" exact to="/businesses">Investments</NavLink>
		          <NavLink activeClassName="selected" exact to="/login" onClick={this.logout.bind(this)}>Logout</NavLink>
		        </div>
		      </div>
		      <div className="nav-narrow">
		        <i className="fa fa-bars fa-2x" onClick={this.navToggle}></i>
		        <div className="hamburger-link">
		          <NavLink exact to={currentid} activeClassName="selected" onClick={this.navToggleLink}>My Portfolio</NavLink>
		          <NavLink exact to="/businesses" activeClassName="selected" onClick={this.navToggleLink}>Investments</NavLink>
		          <NavLink exact to="/login" onClick={this.logout.bind(this)} activeClassName="selected">Logout</NavLink>
		        </div>
		      </div>
		    </div>
      </nav>
	  );
  }
}

export default Navigation;