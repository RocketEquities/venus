import React from 'react';
import moment from 'moment';

class TableHistory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="tr" key={this.props.id}><div className="td">{this.props.amount}</div><div className="td">{moment(this.props.updatedAt).format('MM-DD-YYYY')}</div></div>
    );
  }
}

export default TableHistory;