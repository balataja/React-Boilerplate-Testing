import react from 'react';
import reactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import Random from './Random';
import About from './About';
import Guides from './Guides';
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
      <IndexRoute component={Home} />
      <Route path="Home" component={Home} />
      <Redirect from="/" to="/Home" />
      <Route path="Random" component={Random} />
      <Route path="About" component={About} />
      <Route path="Guides" component={Guides} />
    </Route>
  </Router>), document.getElementById("main")
);