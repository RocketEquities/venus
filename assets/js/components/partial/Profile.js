import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { portfolio } from '../../actions/BusinessActions.js';

@connect((store) => {
  return {
    portfolio_widget: store.business.portfolio_widget
  };
})

class Profile extends React.Component {
  componentWillMount() {
    this.props.dispatch(portfolio());
  }

  constructor(props) {
  	super(props);
  }

  resfreshPage() {
    history.go(0);
  }

  render() {
    var investmentLinks = "";
    var totalInvestedAmount = "";

    if(this.props.portfolio_widget.investments != undefined) {
      investmentLinks = this.props.portfolio_widget.investments.map(i_links =>
                        <li key={i_links.id}>
                          <NavLink exact to={'/portfolio/' + i_links.id} onClick={this.resfreshPage.bind(this)} activeClassName="active-link">
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                            <div className="investment-list">
                              <h4>{i_links.name}</h4>
                              <h5>Invested Amount: <span>{i_links.investedAmount.toLocaleString()} USD</span></h5>
                            </div>
                          </NavLink>
                        </li>)

      totalInvestedAmount = this.props.portfolio_widget.totalInvestedAmount.toLocaleString();
    }

    var data_root = document.getElementById('root');
    var username = data_root.getAttribute('data-name');

	  return (
	    <div className="profile">
        <div className="profile-detail">
          <Link className="icon settings" to="/settings"></Link>
          <span className="icon alert"></span>
          <div className="profile-photo"></div>
          <h4>Welcome back <span>{username}</span>!</h4>
          <div className="separator"></div>
          <div className="ci">{totalInvestedAmount} USD</div>
          <h6>Total Current Investments</h6>
        </div>
        <div className="my-portfolio">
          <h3>My portfolio</h3>
          <div className="line"></div>
          <ul>
            {investmentLinks}
          </ul>
        </div>
      </div>
	  );
  }
}

export default Profile;