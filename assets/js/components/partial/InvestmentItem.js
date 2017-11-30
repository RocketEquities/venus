import React from 'react';
import { history, withRouter } from 'react-router-dom';

class InvestmentItem extends React.Component {

    constructor(props) {
        super(props);
    }

    getInvestmentDetails(e){
        e.preventDefault();

        this.props.history.push(location.pathname + '/' + this.props.id);
        window.history.go(0);
    }

    render() {
        return (
            <div className="invest-item">
              <div className="item-details">
                <h3>{this.props.name}</h3>
                <div className="separator"></div>
                <h6>Capital Requirement:</h6>
                <div className="requirement"></div>
                <div className="comp">
                  <div className="irr">
                    IRR <span>{this.props.irr}%</span>
                  </div>
                  <div className="ip">
                    Investment Period <span>{this.props.investmentPeriod}yrs.</span>
                  </div>
                  <div className="pr">
                    Payback Period <span>{this.props.paybackPeriod}yrs.</span>
                  </div>
                </div>
                <button name="invest-now" className="button" value={this.props.id} onClick={this.getInvestmentDetails.bind(this)}>VIEW DETAILS</button>
              </div>
            </div>
        );
    }
}

export default withRouter(InvestmentItem);