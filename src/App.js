var $ = require('jquery');
var react = require('react');
var reactDOM = require('react-dom');

var BugFilter = React.createClass({
  render: function() {
    return (
      <div>A way to filter the list of bugs would come here.</div>
    )
  }
});

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

var BugAdd = React.createClass({
  getInitialState(){
    return {priority: '', status: '', owner: '', title: ''};  
  },
  submitForm(e){
    e.preventDefault();
    var form = document.forms.bugAdd;
    this.props.add({priority: form.priority.value, status: form.status.value, owner: form.owner.value, title: form.title.value})
    form.priority.value = "";
    form.status.value = "";
    form.owner.value = "";
    form.title.value = "";
  },
  render: function() {
    return (
      <div>
        <form name="bugAdd" onSubmit={this.submitForm}>
            <input type="text" name="priority" placeholder="Priority" />
            <input type="text" name="status" placeholder="Status" />
            <input type="text" name="owner" placeholder="Owner" />
            <input type="text" name="title" placeholder="Title" />
            <input type="submit" value="Post" />
        </form>
      </div>
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

ReactDOM.render(
  <BugList />,
  document.getElementById('main')
);