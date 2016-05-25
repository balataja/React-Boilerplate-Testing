import React from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink';

export default React.createClass({
    render() {
        return (
            <section className="header">
                <h1><Link to="/"> James' Blog</Link></h1>
                <nav className="nav-menu">
                    <li><NavLink to="/Random">Link Name</NavLink>Random</li>
                    <li><NavLink to="/About">Link Name</NavLink>About</li>
                    <li><NavLink to="/Guides">Link Name</NavLink>Guides</li>
                </nav>
            </section>
        )
    }
})