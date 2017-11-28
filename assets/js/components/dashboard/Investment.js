import React from 'react';
import { Link, history } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from '../partial/Profile.js';
import InvestmentItem  from '../partial/InvestmentItem.js';

import { businesses } from '../../actions/BusinessActions.js';

@connect((store) => {
  return {
    business_response: store.business.business_response
  };
})

class Investment extends React.Component {
  componentWillMount() {
    this.props.dispatch(businesses());
  }

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="investment">
        <Profile />
        <div className="invest-container">
          <div className="invest-header">
            <h2>Invest with Confidence</h2>
            <div className="separator"></div>
            <div className="text">
              When you put your trust in Rocket Equities LLC, you can be confident knowing that you are investing your money in businesses that had gone through extensive due diligence.
            </div>
          </div>
          <div className="invest-list">
            {this.props.business_response.map(business_response => 
              <InvestmentItem key={business_response.id} {...business_response} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Investment;