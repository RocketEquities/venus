import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import BarChart from '../partial/BarChart.js';
import Modal from 'react-modal';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';

import { business_detail, businesses, send_inquiry } from '../../actions/BusinessActions.js';

const CloseButton = ({ closeToast }) => (
  <i
    className="toastify__close fa fa-times"
    onClick={closeToast}
  />
);

@connect((store) => {
  return {
    business_response: store.business.business_response,
    business_detail_response: store.business.business_detail_response,
    chart_ready: store.business.chart_ready,
    inquiry_success: store.business.inquiry_success,
    inquiry_fulfilled: store.business.inquiry_fulfilled
  };
})

class InvestmentDetail extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {
      chartData: {},
      modalIsOpen: false,
      chartAmount_: [],
      chartReady: false,
      input: {amt: 0, message: ''},
      toastClass: 'error',
      inquiry_success: false,
      toastMessage: ''

    }

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this)
  }

  componentWillMount() {
    this.props.dispatch(business_detail(this.props.match.params.id));
    
    if(this.props.business_response.length == 0) {
      this.props.dispatch(businesses());
    }
  }

  handleChange(property, event) {
      const input = {...this.state.input};
      const re = /^[0-9\b]+$/;

      if (property == "amt") {
        if (event.target.value == '' || re.test(event.target.value)) {
          input[property] = event.target.value;
        }
      } else {
        input[property] = event.target.value;
      }

      this.setState({input: input});
    }

  componentWillReceiveProps(nextProps){

    if(nextProps.inquiry_fulfilled) {
      if(nextProps.inquiry_success) {
        this.setState({toastClass: 'success'});
        toast('Your inquiry was sent. Thank you!');
      } else {
        this.setState({toastClass: 'error'});
        toast('Something went wrong. Please try again.');
      }
    } 

    if(nextProps.chart_ready) {
      var chartAmount = nextProps.business_detail_response.projections.map(a => Math.floor(a.expectedProfit));
      var chartLabel = nextProps.business_detail_response.projections.map(a => [moment(a.expectedAt).format('MMM').toUpperCase(), moment(a.expectedAt).format('YYYY').toUpperCase()]);

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

  sendInquiry() {
    this.props.dispatch(send_inquiry(this.props.match.params.id, this.state.input.amt, this.state.input.message));

    this.setState({input: {amt: 0, message: ''}});
    this.setState({modalIsOpen: false});
  }

  render() {
    const mygraph = this.props.chart_ready ? <BarChart chartData={this.state.chartData} height='300' redraw /> : "";

    var businessdetails = '';
    var currentbusiness = this.props.match.params.id;

    var businessname = '';
    var businessoverview = '';
    var businessirr = '';
    var businessip = '';
    var businesspp = '';
    var businesscapital = '';

    if(this.props.business_response != undefined) {
      businessdetails = this.props.business_response.filter(function( obj ) {
        return obj.id == currentbusiness;
      });
    }

    if(businessdetails[0] != undefined) {
      businessname = businessdetails[0].name;
      businessoverview = businessdetails[0].overview;
      businessirr = businessdetails[0].irr;
      businessip = businessdetails[0].investmentPeriod;
      businesspp = businessdetails[0].paybackPeriod;
    }

	  return (
	    <div className="investment-detail">
        <div className="i-title">
          
              <div className="item-details">
                <h3>{businessname}</h3>
                <div className="separator"></div>
                <div className="comp">
                  <div className="irr">
                    IRR <span>{businessirr}%</span>
                  </div>
                  <div className="ip">
                    Investment Period <span>{businessip}yrs.</span>
                  </div>
                  <div className="pr">
                    Payback Period <span>{businesspp}yrs.</span>
                  </div>
                </div>
                <button name="invest-now" className="button" value={currentbusiness} onClick={this.openModal}>INVEST NOW</button>
              </div>
        </div>
        <div className="i-c">
          <div className="i-overview">
            <h2>Business Overview</h2>
            <div className="separator"></div>
            <div className="text">
              {businessoverview}
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
            <h2>{businessname}</h2>
            <div className="separator"></div>
            
          </div>

          <h4 className="mt">Amount to be invested</h4>
          <input type="text" name="amt" value={this.state.input.amt} onChange={this.handleChange.bind(this, 'amt')} className="input-text" placeholder="" />
          <h4 className="mt">Message</h4>
          <textarea rows="4" cols="50" name="message" value={this.state.input.message} onChange={this.handleChange.bind(this, 'message')} className="input-text text-area" placeholder="e.g. I’m interested in investing."></textarea>
          <input type="button" name="send" value="SEND INQUIRY" onClick={this.sendInquiry.bind(this)} className="button"/>
        </Modal>

        <ToastContainer 
              position="top-center"
              closeButton={<CloseButton />}
              type="default"
              autoClose={4000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              pauseOnHover
              toastClassName={this.state.toastClass}
              newestOnTop={true}

            />

      </div>
	  );
  }
}

export default InvestmentDetail;