var $ = require('jquery');
var react = require('react');
var reactDOM = require('react-dom');

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