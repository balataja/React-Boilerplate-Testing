import react from 'react';
import reactDOM from 'react-dom';
import routes from 'routes';
import Home from './Home';
import Random from './Random';
import About from './About';
import Guides from './Guides';
import Error from './Error';
import Router from ('react-router').Router;
import Route from ('react-router').Route;
import Redirect from ('react-router').Redirect;

render(
  <Home />,
  (
    <Router>
      <Route path="/Home" component={Home} />
      <Redirect from="/" to="/Home" />
      <Route path="/Random" component={Random} />
      <Route path="/About" component={About} />
      <Route path="/Guides" component={Guides} />
      <Route path="*" component={Error} />
    </Router>
  ),
  document.getElementById('main')
);
