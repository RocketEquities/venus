import React from 'react';
import Profile from '../partial/Profile.js';
import LineChart from '../partial/LineChart.js';
import { connect } from 'react-redux';

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
      this.setState({
      chartData: {
        labels: [['March', '2017'], ['March', '2018'], ['March', '2019'], ['March', '2020'], ['March', '2021'], ['March', '2022'], ['March', '2023']],
        datasets: [
        {
          data: [0, 200, 440, 600, 680, 702, 720],
          borderColor: '#4990E2',
          pointBackgroundColor: '#92E2F8',
          pointBorderColor: '#4990E2',
          lineTension: 0,
          fill: false,
          borderWidth: 2
        },

        {
          data: [0, 380, 510, 620, 690, 789, 730],
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

    if(this.props.portfolio_widget.investments != undefined) {
      investmentLinks = this.props.portfolio_widget.investments.filter(function( obj ) {
        return obj.id == currentinvestement;
      });
    }

    if(investmentLinks[0] != undefined) {
      inv_name = investmentLinks[0].name;
      inv_history = investmentLinks[0].transactions.map(transaction_history => <tr key={transaction_history.id}><td>{transaction_history.amount}</td><td>{transaction_history.updatedAt}</td></tr>);


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
                <h5>7.1%</h5>
                IRR
              </div>
              <div className="investment-g">
                <h5>20 yrs.</h5>
                INVESTMENT PERIOD
              </div>
              <div className="payback">
              <h5>4 yrs.</h5>
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