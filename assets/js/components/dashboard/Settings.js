import React from 'react';
import { Link, history } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import Modal from 'react-modal';
import _ from 'lodash';

import { update_profile, update_pw } from '../../actions/BusinessActions.js';


const CloseButton = ({ closeToast }) => (
  <i
    className="toastify__close fa fa-times"
    onClick={closeToast}
  />
);

@connect((store) => {
  return {
    business_response: store.business.business_response,
    changePw: store.business.changePw
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
      input: {firstName: firstName, lastName: lastName, email: email, currpw: '', newpw: '', confirmpw: ''},
      toastStyle: '',
      modalIsOpen: false,

    }

    this.updateSettings = this.updateSettings.bind(this);

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this)

  }

  componentWillReceiveProps(nextProps){
    if(_.isEmpty(nextProps.changePw)){
      toast.success("Password successfully changed!", {position: toast.POSITION.TOP_CENTER});
    } else {
      toast.error(nextProps.changePw.error.type + ': ' + nextProps.changePw.error.message, {position: toast.POSITION.TOP_CENTER});
    }
  }

  openModal(e) {
    e.preventDefault();

    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  changePw(e) {
     e.preventDefault();

     if(this.state.input.currpw == '' || this.state.input.newpw == '' || this.state.input.confirmpw == '') {
        toast.error("Fields cannot be empty!", {position: toast.POSITION.TOP_CENTER});
     } else if(this.state.input.newpw.length < 8 || this.state.input.newpw.length > 32) {
        toast.error("New password is not valid.", {position: toast.POSITION.TOP_CENTER});
     } else if(this.state.input.newpw != this.state.input.confirmpw) {
        toast.error("Password did not match", {position: toast.POSITION.TOP_CENTER});
     } else {
        this.props.dispatch(update_pw(this.state.input.currpw, this.state.input.newpw));
     }
  }

  updateSettings() {
    if(this.state.input.email == '' || this.state.input.firstName == '' || this.state.input.lastName == '') {
      toast.error("Fields cannot be empty!", {position: toast.POSITION.TOP_CENTER});
    } else {
      this.props.dispatch(update_profile(this.state.input.email, this.state.input.firstName, this.state.input.lastName));
      toast.success("Profile successfully updated!", {position: toast.POSITION.TOP_CENTER});
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
              newestOnTop={true}

            />
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
            <h2>Change Password</h2>
            <br/>
            <h4 className="mt">Current Password</h4>
            <input type="password" name="currpw" value={this.state.input.currpw} onChange={this.handleChange.bind(this, 'currpw')} className="input-text" placeholder="" />
            <h4 className="mt">New Password</h4>
            <input type="password" name="newpw" value={this.state.input.newpw} onChange={this.handleChange.bind(this, 'newpw')} className="input-text" placeholder="" />
            <h4 className="mt">Confirm Password</h4>
            <input type="password" name="confirmpw" value={this.state.input.confirmpw} onChange={this.handleChange.bind(this, 'confirmpw')} className="input-text" placeholder="" />
            <br/>
            <input type="button" name="changepw" value="CHANGE PASSWORD" onClick={this.changePw.bind(this)} className="button"/>
          </Modal>





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
              <br/><br/><br/>
              <Link to="" className="sub-link" onClick={this.openModal}>Change Password</Link>
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