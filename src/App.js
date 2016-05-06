ReactDOM.render(
    <BugList />,
    document.getElementById('main')
);

/*import React from "react"

export default class BugList extends React.Component
{
    render()
    {
        return(<div>Place Holder Text!</div>);
    }
}*/

var BugList = React.createClass({
  render: function() {
    return (
      <div>The bug list would come here.</div>
    )
  }
});