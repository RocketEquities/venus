import React from 'react';
import { Link } from 'react-router-dom';
import BarChart from '../partial/BarChart.js';
import Modal from 'react-modal';

class InvestmentDetail extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {
      chartData: {},
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this)
  }

  componentWillMount() {
    this.getChartData();
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }


  getChartData() {
    this.setState({
      chartData: {
        labels: [['March', '2017'], ['March', '2018'], ['March', '2019'], ['March', '2020'], ['March', '2021'], ['March', '2022'], ['March', '2023']],
        datasets: [
        {
          data: [
            400,
            9700,
            600,
            1800,
            8770,
            100,
            90
          ],
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
                <button name="invest-now" className="button" value="2" onClick={this.openModal}>INVEST NOW</button>
              </div>
        </div>
        <div className="i-c">
          <div className="i-overview">
            <h2>Business Overview</h2>
            <div className="separator"></div>
            <div className="text">
              Palaya Dragonfruit Eco-Natural Farm aims to be the leading dragonfruit producer and distributor in the Philippines by 2020, putting the country on the global map.
            </div>
            
          </div>
          <div className="i-projection">
            <h3>Projected Profits Per Year</h3>
            <BarChart chartData={this.state.chartData} height="300"/>
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
            <h2>Sierra Madre Cocao Company</h2>
            <div className="separator"></div>
            <h4>Capital Requirement:</h4>
            <h3>750,000 USD</h3>
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