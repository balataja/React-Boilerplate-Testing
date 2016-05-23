var $ = require('jquery');
var react = require('react');
var reactDOM = require('react-dom');
var history = require('history');

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
  componentDidMount(nextProps){
    this.loadData();
  },
  componentWillReceiveProps(nextProps){
    var newQuery = nextProps.location.query;
    var oldQuery = this.props.location.query;
    if(oldQuery.priority === newQuery.priority && oldQuery.status === newQuery.status)
    {
      // No change in URL query
      return;
    } else {
      this.loadData();
    }
  },
  componentWillUnmount(){
      
  },
  loadData(){
    var query = this.props.location.query || {};
    var filter = {priority: query.priority, status: query.status};
    $.ajax({
      url: '/api/bugs',
      data: filter,
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
  changeFilter(newFilter){
    this.props.history.push({search: '?' + $.param(newFilter)});
  },
  render: function() {
    return (
      <div>
        <h1>Bug Tracker</h1>
        <BugFilter submitHandler={this.changeFilter} initFilter={this.props.location.query} />
        <hr />
        <BugTable bugs={this.state.bugs}/>
        <hr />
        <BugAdd add={this.addBug} />
      </div>
    )
  }
});