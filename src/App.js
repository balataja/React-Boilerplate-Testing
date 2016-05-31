import React from 'react'
import NavLink from './NavLink'
import Nav from './Nav'

export default React.createClass({
  render() {
    return (
      <div>
        <Nav />
        <div id="content">
          {this.props.children}
        </div>

      </div>
    )
  }
})