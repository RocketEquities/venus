import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
  	super(props);
  }

  render() {
	  return (
	    <div className="profile">
        <div className="profile-detail">
          <span className="icon settings"></span>
          <span className="icon alert"></span>
          <div className="profile-photo"></div>
          <h4>Welcome back Akarsh!</h4>
          <div className="separator"></div>
          <div className="ci">450,000 USD</div>
          <h6>Total Current Investments</h6>
          <div className="separator"></div>
          <div className="de">1,000 USD</div>
          <h6>Dividends Earned</h6>
        </div>
        <div className="my-portfolio">
          <h3>My portfolio</h3>
          <div className="line"></div>
          <ul>
            <li>
              <Link to="#">
                <div className="investment-list">
                  <h4>Sierra Madre Cacao Company</h4>
                  <h5>Invested Amount: <span>100,000 USD</span></h5>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="investment-list">
                  <h4>Palaya Dragon Fruit Farm</h4>
                  <h5>Invested Amount: <span>250,000 USD</span></h5>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="investment-list">
                  <h4>XYZ Condo</h4>
                  <h5>Invested Amount: <span>100,000 USD</span></h5>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
	  );
  }
}

export default Profile;