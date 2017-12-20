import React from 'react';
import { history, withRouter } from 'react-router-dom';
import YouTube from 'react-youtube';

class InvestmentItem extends React.Component {

    constructor(props) {
        super(props);
    }

    getInvestmentDetails(e){
        e.preventDefault();

        window.location.href = location.pathname + '/' + this.props.id;
        // window.history.go(0);
    }

    render() {
      const opts = {
        playerVars: {
          autoplay: 0
        }
      };

      var displayHeader = '';

      if(this.props.video != null) {
        var VID_REGEX = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
        displayHeader = <div id="item-img" className="item-img"><YouTube videoId={this.props.video.match(VID_REGEX)[1]} opts={opts} /></div>
      }

      if(this.props.video == null && this.props.image != null) {
        displayHeader = <div id="item-img" className="item-img"><img src={this.props.image} /></div>
      }

        return (
            <div className="invest-item">
              {displayHeader}
              <div className="item-details">
                <h3>{this.props.name}</h3>
                <div className="separator"></div>
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