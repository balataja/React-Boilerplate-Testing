ReactDOM.render(
    <BugList />,
    document.getElementById('main')
);

import React from "react"

class BugList extends React.Component
{
    render()
    {
        return(
            <div>
                <BugFilter />
                <BugTable />
                <BugAdd />
            </div>);
    }
}

class BugFilter extends React.Component
{
    render()
    {
        return(<div>Bug Filter!</div>);
    }
}
class BugTable extends React.Component
{
    render()
    {
        return(
            <div>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Status</th>
                        <th>Priority</th>
                        <th>Owner</th>
                        <th>Title</th>
                    </tr>
                    <BugRow id={1} priority="P1" status="Open" owner="Ravan" title="App crashes on open" />
                    <BugRow id={2} priority="P2" status="New" owner="Eddie" title="Misaligned border on panel" />
                </table>
            </div>);
    }
}
class BugAdd extends React.Component
{
    render()
    {
        return(<div>Bug Add!</div>);
    }
}
class BugRow extends React.Component
{
    render()
    {
        return(
            <div>
                <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.status}</td>
                    <td>{this.props.priority}</td>
                    <td>{this.props.owner}</td>
                    <td>{this.props.title}</td>
                </tr>
            </div>);
    }
}