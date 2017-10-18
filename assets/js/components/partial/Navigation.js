import React from 'react';
import { Link, NavLink } from 'react-router-dom';


class Navigation extends React.Component {
  constructor(props) {
  	super(props);
  	this.navToggle = this.navToggle.bind(this);
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
		          <NavLink activeClassName="selected" exact to="/investments">Investments</NavLink>
		          <NavLink activeClassName="selected" exact to="/logout">Logout</NavLink>
		        </div>
		      </div>
		      <div className="nav-narrow">
		        <i className="fa fa-bars fa-2x" onClick={this.navToggle}></i>
		        <div className="hamburger-link">
		          <NavLink exact to="/portfolio" activeClassName="selected" onClick={this.navToggle}>My Portfolio</NavLink>
		          <NavLink exact to="/investments" activeClassName="selected" onClick={this.navToggle}>Investments</NavLink>
		          <NavLink exact to="/logout" activeClassName="selected" onClick={this.navToggle}>Logout</NavLink>
		        </div>
		      </div>
		    </div>
      </nav>
	  );
  }
}

export default Navigation;