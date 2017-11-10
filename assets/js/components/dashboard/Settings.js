import React from 'react';
import { Link, history } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


const CloseButton = ({ closeToast }) => (
  <i
    className="toastify__close fa fa-times"
    onClick={closeToast}
  />
);

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.notify = this.notify.bind(this);
  }

  notify() {
    toast("Hellooo");
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
              toastClassName="error"
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
              <input type="text" name="email" ref={node => {this.email = node;}} className="input-text" placeholder="First Name" />
              <label>Last Name</label>
              <input type="text" name="email" ref={node => {this.email = node;}} className="input-text" placeholder="Last Name" />
              <label>Email</label>
              <input type="email" name="email" ref={node => {this.email = node;}} className="input-text" placeholder="Email" />
            </div>
            <div className="profile-form">
              <label>Password</label>
              <input type="password" ref={node => {this.password = node;}} className="input-text password" placeholder="Password" />
              <Link to="/changepassword" className="sub-link">Change Password</Link>
            </div>
          </div>
          <input type="button" name="save" value="SAVE CHANGES"  onClick={this.notify} className="button"/>
          <input type="button" name="cancel" value="CANCEL" className="button secondary"/>
        </div>
      </div>
    );
  }
}

export default Settings;