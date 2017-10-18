import React from 'react';
import { Link, history } from 'react-router-dom';
import Profile from '../partial/Profile.js';


class Investment extends React.Component {
  constructor(props) {
    super(props);
    this.getInvestmentDetails = this.getInvestmentDetails.bind(this);
  }

  getInvestmentDetails(e){
    e.preventDefault();

    this.props.history.push(location.pathname + '/' + e.target.value);
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
            <div className="invest-item">
              <div className="item-img"></div>
              <div className="item-details">
                <h3>Palaya Dragonfruit Eco-Natural Farm</h3>
                <div className="separator"></div>
                <h6>Capital Requirement:</h6>
                <div className="requirement">3,000,000 USD</div>
                <div className="comp">
                  <div className="irr">
                    IRR <span>7.1%</span>
                  </div>
                  <div className="em">
                    Equity Multiple <span>14x</span>
                  </div>
                  <div className="ip">
                    Investment Period <span>20 yrs.</span>
                  </div>
                  <div className="pr">
                    Payback Period <span>4 yrs.</span>
                  </div>
                </div>
                <button name="invest-now" className="button" value="2" onClick={this.getInvestmentDetails}>VIEW DETAILS</button>
              </div>
            </div>

            <div className="invest-item">
              <div className="item-img"></div>
              <div className="item-details">
                <h3>Sierra Madre Cocao Company Bla Bla text text long text long long longlong long longlong long longlong long longlong long longlong long longlong long longlong long longlong long longlong long longlong long longlong long long text</h3>
                <div className="separator"></div>
                <h6>Capital Requirement:</h6>
                <div className="requirement">750,000 USD</div>
                <div className="comp">
                  <div className="irr">
                    IRR <span>7.1%</span>
                  </div>
                  <div className="em">
                    Equity Multiple <span>14x</span>
                  </div>
                  <div className="ip">
                    Investment Period <span>20 yrs.</span>
                  </div>
                  <div className="pr">
                    Payback Period <span>4 yrs.</span>
                  </div>
                </div>
                <button name="invest-now" className="button" value="6" onClick={this.getInvestmentDetails}>VIEW DETAILS</button>
              </div>
            </div>

            <div className="invest-item">
              <div className="item-img"></div>
              <div className="item-details">
                <h3>Sierra Madre Cocao Company</h3>
                <div className="separator"></div>
                <h6>Capital Requirement:</h6>
                <div className="requirement">3,000,000 USD</div>
                <div className="comp">
                  <div className="irr">
                    IRR <span>7.1%</span>
                  </div>
                  <div className="em">
                    Equity Multiple <span>14x</span>
                  </div>
                  <div className="ip">
                    Investment Period <span>20 yrs.</span>
                  </div>
                  <div className="pr">
                    Payback Period <span>4 yrs.</span>
                  </div>
                </div>
                <button name="invest-now" className="button" value="83" onClick={this.getInvestmentDetails}>VIEW DETAILS</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Investment;