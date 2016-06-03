import react from 'react';
import reactDOM from 'react-dom';
import App from './App';
import Products from './Products/Products';
import Account from './Account';
import About from './About';
import Error from './Error';
/*import { Router } from 'react-router';
import { Route } from 'react-router';
import { Redirect } from 'react-router';*/
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Redirect = ReactRouter.Redirect;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;
var hashHistory = ReactRouter.hashHistory;

reactDOM.render((
  <Router history={hashHistory} >
    <Route path="/" component={App} >
      <IndexRoute component={Products} />
      <Route path="Products" component={Products} />
      <Redirect from="/" to="/Products" />
      <Route path="Account" component={Account} />
      <Route path="About" component={About} />
    </Route>
  </Router>), document.getElementById("main")
);