import React from 'react';

class InvestmentDetail extends React.Component {
  constructor(props) {
  	super(props);
  }

  render() {
	  return (
	    <div className="investment-detail">
        <div className="i-title">
          <div className="item-img"></div>
              <div className="item-details">
                <h3>Palaya Dragonfruit Eco-Natural Farm {this.props.match.params.id}</h3>
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
                <button name="invest-now" className="button" value="2" onClick={this.getInvestmentDetails}>INVEST NOW</button>
              </div>
        </div>
        <div className="i-c">
          <div className="i-overview">
            <h2>Business Overview</h2>
            <div className="separator"></div>
            <div className="text">
              Palaya Dragonfruit Eco-Natural Farm aims to be the leading dragonfruit producer and distributor in the Philippines by 2020, putting the country on the global map.
            </div>
            <button name="view-pitch" className="button">VIEW PITCH DECK</button>
          </div>
          <div className="i-projection">sdadklsoiposdlj</div>
        </div>
      </div>
	  );
  }
}

export default InvestmentDetail;