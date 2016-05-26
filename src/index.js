import react from 'react';
import reactDOM from 'react-dom';
import Home from './Home';
import Random from './Random';
import About from './About';
import Guides from './Guides';
import Error from './Error';
import Router from 'react-router';
import Route from 'react-router';
import Redirect from 'react-router';

/*export default React.createClass({
  render(){
    return(
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
    )
  }
});*/

ReactDOM.render(
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

//This Works, check for issue with react-router
/*ReactDOM.render(
  <Home />,
  document.getElementById('main')
);*/