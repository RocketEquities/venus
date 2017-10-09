import React from 'react';
import Profile from '../partial/Profile.js';

class Portfolio extends React.Component {
  constructor(props) {
  	super(props);
  }

  render() {
	  return (
	    <div className="portfolio">
        Portfolio
        <Profile />
      </div>
	  );
  }
}

export default Portfolio;