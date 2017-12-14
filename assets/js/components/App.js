import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AccountLayout from './partial/AccountLayout.js';
import DashboardLayout from './partial/DashboardLayout.js';

import Login from './account/Login.js';
import New from './account/New.js';
import Reset from './account/Reset.js';
import Portfolio from './dashboard/Portfolio.js';
import Settings from './dashboard/Settings.js';
import Investment from './dashboard/Investment.js';
import InvestmentDetail from './dashboard/InvestmentDetail.js';
import NotFound from './partial/NotFound.js';


const App = () => {

	var data_root = document.getElementById('root');
  var user = data_root.getAttribute('data-name');

  var dataObj = '';


  

  if(user != '') {
    dataObj = JSON.parse(user);
  }

  if(Object.keys(dataObj).length === 0 && location.pathname != '/login') {
  	return (
  		<main>
		    <Switch>
				  <Redirect to='/login'/>
		    </Switch>
		  </main>
		)
  } else {
  	return (
			<main>
		    <Switch>
		    	<AccountLayout exact path="/login" component={Login} />
		      <DashboardLayout exact path="/portfolio" component={Portfolio} />
		      <DashboardLayout exact path="/portfolio/:id" component={Portfolio} />
		      <Redirect exact from='/' to='/portfolio'/>
		      <DashboardLayout exact path="/businesses" component={Investment} />
		      <DashboardLayout exact path="/businesses/:id" component={InvestmentDetail} />
		      <DashboardLayout exact path="/settings" component={Settings} />
		   
		      <Route path="*" component={NotFound}/>
		    </Switch>
		  </main>
		)
  }
};

export default App;