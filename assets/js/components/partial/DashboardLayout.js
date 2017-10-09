import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from './Navigation.js';


const DashboardLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className="dashboard">
      	<Navigation />
      	<div className="container">
      		<Component {...matchProps} />
      	</div>
      </div>
    )} />
  )
};

export default DashboardLayout;