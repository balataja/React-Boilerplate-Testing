var $ = require('jquery');
var react = require('react');
var reactDOM = require('react-dom');

var BugRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.bug.id}</td>
        <td>{this.props.bug.status}</td>
        <td>{this.props.bug.priority}</td>
        <td>{this.props.bug.owner}</td>
        <td>{this.props.bug.title}</td>
      </tr>
    )
  }
});

var BugTable = React.createClass({
  render: function() {
    var bugRows = this.props.bugs.map(function(bug) {
      return <BugRow key={bug.id} bug={bug} />
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Owner</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {bugRows}
        </tbody>
      </table>
    )
  }
});

var BugList = React.createClass({
  getInitialState(){
      return {bugs: []};
  },
  componentDidMount(){
    $.ajax({
      url: '/api/bugs',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({bugs: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentWillUnmount(){
      
  },
  addBug(bug){    
    $.ajax({
      url: '/api/bugs',
      dataType: 'json',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(bug),
      success: function(data) { 
        let bugsModified = this.state.bugs.concat(data);
        this.setState({bugs: bugsModified});
        console.log("adding new bug:", bug);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div>
        <h1>Bug Tracker</h1>
        <BugFilter />
        <hr />
        <BugTable bugs={this.state.bugs}/>
        <hr />
        <BugAdd add={this.addBug} />
      </div>
    )
  }
});