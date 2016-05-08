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

var bugData = [
  {id: 1, priority: 'P1', status:'Open', owner:'Ravan', title:'App crashes on open'},
  {id: 2, priority: 'P2', status:'New', owner:'Eddie', title:'Misaligned border on panel'},
];

var BugList = React.createClass({
  getInitialState(){
      return {bugs: bugData}
  },
  testMethod(){
    var nextId = this.state.bugs.length + 1;
    this.addBug({id: nextId, priority: 'P2', status:'New', owner:'Pieta', title:'Warning on console'})
  },
  addBug(bug){
    let bugData = this.state.bugs.slice();
    bug.id = this.state.bugs.length + 1;
    bugData.push(bug);
    this.setState({bugs: bugData});
    console.log("adding new bug:", bug);
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