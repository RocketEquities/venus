import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AccountLayout from './partial/AccountLayout.js';
import DashboardLayout from './partial/DashboardLayout.js';

import Login from './account/Login.js';
import New from './account/New.js';
import Portfolio from './dashboard/Portfolio.js';
import Investment from './dashboard/Investment.js';
import InvestmentDetail from './dashboard/InvestmentDetail.js';
import NotFound from './partial/NotFound.js';



const App = () => (
	  <main>
	    <Switch>
	    	<AccountLayout exact path="/login" component={Login} />
	    	<AccountLayout exact path="/register" component={New} />
	      <DashboardLayout exact path="/" component={Investment} />
	      <DashboardLayout exact path="/portfolio" component={Portfolio} />
	      <DashboardLayout exact path="/investments" component={Investment} />
	      <DashboardLayout exact path="/investments/:id" component={InvestmentDetail} />
	      <Route path="*" component={NotFound}/>
	    </Switch>
	  </main>
)

export default App;