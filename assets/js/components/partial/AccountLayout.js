import React from 'react';
import { Route } from 'react-router-dom';

const AccountLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className="account">
      	<div className="logo"></div>
      	<div className="container">
      		<Component {...matchProps} />
      	</div>
      </div>
    )} />
  )
};

export default AccountLayout;