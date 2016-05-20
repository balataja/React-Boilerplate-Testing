var react = require('react');
var reactDOM = require('react-dom');
var BugList = require('./BugList');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Redirect = require('react-router').Redirect;

ReactDOM.render(
  <BugList />,
  (
    <Router>
      <Route path="/bugs" component={BugList} />
      <Redirect from="/" to="/bugs" />
      <Route path="*" component={NoMatch} />
    </Router>
  ),
  document.getElementById('main')
);

var NoMatch = React.createClass({
  render: function() {
    return (
      <p>No match for the route</p>
    );
  }
});
