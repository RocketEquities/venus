import React from 'react';
import Profile from '../partial/Profile.js';
import LineChart from '../partial/LineChart.js';
import { connect } from 'react-redux';
import moment from 'moment';

import { portfolio } from '../../actions/BusinessActions.js';

@connect((store) => {
  return {
    portfolio_widget: store.business.portfolio_widget,
    portfolio_chart_ready: store.business.portfolio_chart_ready
  };
})
class Portfolio extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {
      chartData: {}
    }
  }

  componentWillMount() {
   
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.portfolio_chart_ready) {
      var investmentLinks = '';
      var currentinvestement = this.props.match.params.id;
      // var chartAmount = nextProps.business_detail_response_investment.map(a => Math.floor(a.amount));

      if(nextProps.portfolio_widget.investments != undefined) {
        investmentLinks = nextProps.portfolio_widget.investments.filter(function( obj ) {
          return obj.id == currentinvestement;
        });
      }

      var actualProfit = investmentLinks[0].profits.map(a => a.actualAmount);
      var expectedProfit = investmentLinks[0].profits.map(a => a.expectedAmount);
      var chartLabel = investmentLinks[0].profits.map(a => [moment(a.expectedAt).format('MMM').toUpperCase(), moment(a.expectedAt).format('YYYY').toUpperCase()]);

      this.setState({
      chartData: {
        labels: chartLabel,
        datasets: [
        {
          data: expectedProfit,
          borderColor: '#4990E2',
          pointBackgroundColor: '#92E2F8',
          pointBorderColor: '#4990E2',
          lineTension: 0,
          fill: false,
          borderWidth: 2
        },

        {
          data: actualProfit, //actual
          borderColor: '#F6A623',
          pointBorderColor: '#F6A623',
          pointBackgroundColor: '#FFC99A',
          lineTension: 0,
          fill: false,
          borderWidth: 2

          
        }
        ]
      }
    });
    }
  }

  render() {
    var investmentLinks = '';
    var currentinvestement = this.props.match.params.id;
    var inv_name = '';
    var inv_history = '';
    var inv_ip = '';
    var inv_pr = '';
    var inv_irr = '';

    if(this.props.portfolio_widget.investments != undefined) {
      investmentLinks = this.props.portfolio_widget.investments.filter(function( obj ) {
        return obj.id == currentinvestement;
      });
    }

    if(investmentLinks[0] != undefined) {
      inv_name = investmentLinks[0].name;
      inv_history = investmentLinks[0].transactions.map(transaction_history => <tr key={transaction_history.id}><td>{transaction_history.amount}</td><td>{moment(transaction_history.updatedAt).format('MM-DD-YYYY')}</td></tr>);
      inv_ip = investmentLinks[0].investmentPeriod;
      inv_pr = investmentLinks[0].paybackPeriod;
      inv_irr = investmentLinks[0].irr;
    }

    const portfoliograph = this.props.portfolio_chart_ready ? <LineChart chartData={this.state.chartData} height="300"/> : "";

	  return (
	    <div className="portfolio">
        <Profile />
        <div className="portfolio-detail">
          <div className="profit-graph">
            <div className="graph-draw">
              <h2>{inv_name}</h2>
              <div className="graph-text">
                <h4>Time (Years) and Expected Profit</h4>
                <div className="graph-label">
                  <div className="ep"></div>
                  <h5>Expected Profit</h5>
                  <div className="ap"></div>
                  <h5>Actual Profit</h5>
                </div>
              </div>
              {portfoliograph}
            </div>
            <div className="graph-info">
              <div className="irr">
                <h5>{inv_irr}%</h5>
                IRR
              </div>
              <div className="investment-g">
                <h5>{inv_ip} yrs.</h5>
                INVESTMENT PERIOD
              </div>
              <div className="payback">
              <h5>{inv_pr} yrs.</h5>
                PAYBACK PERIOD
              </div>
            </div>
          </div>
          <div className="transaction-history">
            <h3>Transaction history</h3>
            <table>
              <tbody>
                <tr>
                  <th>AMOUNT INVESTED</th>
                  <th>DATE INVESTED</th>
                </tr>
                {inv_history}
              </tbody>
            </table>
          </div>
        </div>
      </div>
	  );
  }
}

export default Portfolio;