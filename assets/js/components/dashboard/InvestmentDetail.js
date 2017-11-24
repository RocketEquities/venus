import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import BarChart from '../partial/BarChart.js';
import Modal from 'react-modal';
import moment from 'moment';

import { business_detail } from '../../actions/BusinessActions.js';

@connect((store) => {
  return {
    business_detail_response: store.business.business_detail_response,
    business_detail_response_investment: store.business.business_detail_response_investment,
    chart_ready: store.business.chart_ready
  };
})

class InvestmentDetail extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {
      chartData: {},
      modalIsOpen: false,
      chartAmount_: [],
      chartReady: false

    }

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this)
  }

  componentWillMount() {
    this.props.dispatch(business_detail(this.props.match.params.id));
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.chart_ready) {
      var chartAmount = nextProps.business_detail_response_investment.map(a => Math.floor(a.amount));
      var chartLabel = nextProps.business_detail_response_investment.map(a => [moment(a.createdAt).format('MMMM').toUpperCase(), moment(a.createdAt).format('YYYY').toUpperCase()]);

      this.setState({
        chartData: {
          labels: chartLabel,
          datasets: [
          {
            data: chartAmount,

            backgroundColor: [
              '#4990E2',
              '#4990E2',
              '#4990E2',
              '#4990E2',
              '#4990E2',
              '#4990E2',
              '#4990E2'
            ]
          }
          ]
        }
      });
    }
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const mygraph = this.props.chart_ready ? <BarChart chartData={this.state.chartData} height='300' redraw /> : "";

	  return (
	    <div className="investment-detail">
        <div className="i-title">
          
              <div className="item-details">
                <h3>{this.props.business_detail_response.name}</h3>
                <div className="separator"></div>
                <h6>Capital Requirement:</h6>
                <div className="requirement">{this.props.business_detail_response.capitalreq}</div>
                <div className="comp">
                  <div className="irr">
                    IRR <span>{this.props.business_detail_response.irr}</span>
                  </div>
                  <div className="em">
                    Equity Multiple <span>{this.props.business_detail_response.em}</span>
                  </div>
                  <div className="ip">
                    Investment Period <span>{this.props.business_detail_response.ip}</span>
                  </div>
                  <div className="pr">
                    Payback Period <span>{this.props.business_detail_response.pr}</span>
                  </div>
                </div>
                <button name="invest-now" className="button" value={this.props.business_detail_response.id} onClick={this.openModal}>INVEST NOW</button>
              </div>
        </div>
        <div className="i-c">
          <div className="i-overview">
            <h2>Business Overview</h2>
            <div className="separator"></div>
            <div className="text">
              {this.props.business_detail_response.overview}
            </div>
            
          </div>
          <div className="i-projection">
            <h3>Projected Profits Per Year</h3>
            {mygraph}
          </div>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className={{
            base: 'modal'
          }}
          overlayClassName={{
            base: 'layout'
          }}
        >
          <i className="fa fa-times" aria-hidden="true" onClick={this.closeModal}></i>
          <h2 ref={subtitle => this.subtitle = subtitle}>Inquiry form</h2>
          <h4>Please provide us with the necessary information below. Our team of investment experts will contact you as soon as possible.</h4>
          <h4 className="mt">Business</h4>
          <div className="business-details">
            <h2>{this.props.business_detail_response.name}</h2>
            <div className="separator"></div>
            <h4>Capital Requirement:</h4>
            <h3>{this.props.business_detail_response.capitalreq}</h3>
          </div>

          <h4 className="mt">Amount to be invested</h4>
          <input type="text" name="amt" ref={node => {this.amt = node;}} className="input-text" placeholder="" />
          <h4 className="mt">Message</h4>
          <textarea rows="4" cols="50" name="amt" ref={node => {this.amt = node;}} className="input-text text-area" placeholder="e.g. I’m interested in investing."></textarea>
          <input type="button" name="send" value="SEND INQUIRY" className="button"/>
        </Modal>

      </div>
	  );
  }
}

export default InvestmentDetail;