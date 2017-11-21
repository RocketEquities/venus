import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
  	super(props);
  }

  render() {
	  return (
	    <div className="profile">
        <div className="profile-detail">
          <Link className="icon settings" to="/settings"></Link>
          <span className="icon alert"></span>
          <div className="profile-photo"></div>
          <h4>Welcome back Akarsh!</h4>
          <div className="separator"></div>
          <div className="ci">450,000 USD</div>
          <h6>Total Current Investments</h6>
        </div>
        <div className="my-portfolio">
          <h3>My portfolio</h3>
          <div className="line"></div>
          <ul>
            <li>
              <NavLink exact to="/portfolio/1" activeClassName="active-link">
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                <div className="investment-list">
                  <h4>Sierra Madre Cacao Company</h4>
                  <h5>Invested Amount: <span>100,000 USD</span></h5>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/portfolio/2" activeClassName="active-link">
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                <div className="investment-list">
                  <h4>Palaya Dragon Fruit Farm</h4>
                  <h5>Invested Amount: <span>250,000 USD</span></h5>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/portfolio/3" activeClassName="active-link">
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                <div className="investment-list">
                  <h4>XYZ Condo</h4>
                  <h5>Invested Amount: <span>100,000 USD</span></h5>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
	  );
  }
}

export default Profile;