import React from 'react';
import { Link, history } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { update_profile } from '../../actions/BusinessActions.js';


const CloseButton = ({ closeToast }) => (
  <i
    className="toastify__close fa fa-times"
    onClick={closeToast}
  />
);

@connect((store) => {
  return {
    business_response: store.business.business_response
  };
})

class Settings extends React.Component {
  constructor(props) {
    var data_root = document.getElementById('root');
    var user = data_root.getAttribute('data-name');

    var firstName = '';
    var lastName = '';
    var email = '';
    var dataObj = '';


    if(user != '') {
      dataObj = JSON.parse(user);
    }

    if(dataObj != '') {
      firstName = dataObj.firstName;
      lastName = dataObj.lastName;
      email = dataObj.email;
    }

    super(props);
    this.state = {
      input: {firstName: firstName, lastName: lastName, email: email},
      toastStyle: ''
    }

    this.updateSettings = this.updateSettings.bind(this);

  }

  updateSettings() {
    if(this.state.input.email == '' || this.state.input.firstName == '' || this.state.input.lastName == '') {
      this.setState({toastStyle: 'error'});
      toast('All fields must not be empty.');
    } else {
      this.props.dispatch(update_profile(this.state.input.email, this.state.input.firstName, this.state.input.lastName));
      this.setState({toastStyle: 'success'});
      toast('Profile successfully updated!')
    }
  }

  handleChange(property, event) {
    const input = {...this.state.input};

    input[property] = event.target.value;


    this.setState({input: input});
  }

  render() {
    return (
      <div className="settings">
        <div className="account">
          <h2>ACCOUNT SETTINGS</h2>
          <div className="separator"></div>



          <div>
            
            <ToastContainer 
              position="top-center"
              closeButton={<CloseButton />}
              type="default"
              autoClose={4000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              pauseOnHover
              toastClassName={this.state.toastStyle}
              newestOnTop={true}

            />
          </div>





          <h4>Profile Information</h4>
          <div className="account-form">
            <div className="profile-photo">
              <div className="photo"></div>
              <Link to="/changephoto" className="sub-link">Change Photo</Link>
              Max file size 5MB.
            </div>
            <div className="profile-form">
              <label>First Name</label>
              <input type="text" name="firstName" value={this.state.input.firstName} onChange={this.handleChange.bind(this, 'firstName')} className="input-text" placeholder="First Name" />
              <label>Last Name</label>
              <input type="text" name="lastName" value={this.state.input.lastName} onChange={this.handleChange.bind(this, 'lastName')} className="input-text" placeholder="Last Name" />
              <label>Email</label>
              <input type="email" name="email" value={this.state.input.email} onChange={this.handleChange.bind(this, 'email')} className="input-text" placeholder="Email" />
            </div>
            <div className="profile-form">
              <form>
                <label>Password</label>
                <input type="password" className="input-text password" placeholder="Password" autoComplete="off" />
                <Link to="/changepassword" className="sub-link">Change Password</Link>
              </form>
            </div>
          </div>
          <input type="button" name="save" value="SAVE CHANGES"  onClick={this.updateSettings} className="button"/>
          <input type="button" name="cancel" value="CANCEL" className="button secondary"/>
        </div>
      </div>
    );
  }
}

export default Settings;