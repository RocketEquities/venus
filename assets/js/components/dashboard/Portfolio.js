import React from 'react';
import Profile from '../partial/Profile.js';
import TableHistory from '../partial/TableHistory.js';
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
      chartData: {},
      updateChart: false
    }
  }

  componentWillMount() {

  }

  reloadChart() {
    return (
      this.state.chartData
    )

    this.forceUpdate();
  }


  componentWillReceiveProps(nextProps){

    if(nextProps.portfolio_chart_ready) {
      var investmentLinks = '';
      var currentinvestement = this.props.match.params.id;

      if(nextProps.portfolio_widget.investments != undefined) {
        investmentLinks = nextProps.portfolio_widget.investments.filter(function( obj ) {
          return obj.id == currentinvestement;
        });
      }

      var actualProfit = '';
      var expectedProfit = '';
      var chartLabel = '';

      if(investmentLinks[0] != undefined) {
        actualProfit = investmentLinks[0].profits.map(a => a.actualAmount);
        expectedProfit = investmentLinks[0].profits.map(a => a.expectedAmount);
        chartLabel = investmentLinks[0].profits.map(a => [moment(a.expectedAt).format('MMM').toUpperCase(), moment(a.expectedAt).format('YYYY').toUpperCase()]);
      }

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
    }, this.forceUpdate());
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
    var showDetail = 'portfolio-detail';
    var showEmpty = 'hide';


    if(currentinvestement == undefined && this.props.portfolio_widget.investments != undefined) {
      if(this.props.portfolio_widget.investments.length == 0){
        showDetail = 'hide';
        showEmpty = 'transaction-history portfolio-empty';
      } else {
        var portfolioid = "/portfolio/" + this.props.portfolio_widget.investments[0].id;
        // this.props.history.push(portfolioid);
        // history.go(0);
         window.location.href = portfolioid;
      }
    }

    if(this.props.portfolio_widget.investments != undefined) {
      investmentLinks = this.props.portfolio_widget.investments.filter(function( obj ) {
        return obj.id == currentinvestement;
      });
    }

    if(investmentLinks[0] != undefined) {
      inv_name = investmentLinks[0].name;
      inv_history = investmentLinks[0].transactions.map(transaction_history => <TableHistory key={transaction_history.id} {...transaction_history} />);
      inv_ip = investmentLinks[0].investmentPeriod;
      inv_pr = investmentLinks[0].paybackPeriod;
      inv_irr = investmentLinks[0].irr;
    }


    const portfoliograph = (this.props.portfolio_chart_ready) ? <LineChart chartData={this.reloadChart.bind(this)} height="300"/> : "";

	  return (
	    <div className="portfolio">
        <Profile />
        <div className={showDetail}>
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
              <div className="tbl-history">
                <div className="tr">
                  <div className="th">AMOUNT INVESTED</div>
                  <div className="th">DATE INVESTED</div>
                </div>
                {inv_history}
              </div>
          </div>
        </div>
        <div className={showEmpty}>
          <h3>You currently have no investments!</h3>
        </div>
      </div>
	  );
  }
}

export default Portfolio;