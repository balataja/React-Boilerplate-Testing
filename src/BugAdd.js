var react = require('react');
var reactDOM = require('react-dom');

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