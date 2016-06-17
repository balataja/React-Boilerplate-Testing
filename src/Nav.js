import React from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink';
import ReactBootstrap from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

export default React.createClass({
    render() {
        return (
            <section className="header">
                <Navbar >
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">Bull Ship</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <LinkContainer to={{pathname:'/Products'}}><NavItem eventKey={1}>Products</NavItem></LinkContainer>
                            <LinkContainer to={{pathname:'/Account'}}><NavItem eventKey={2}>Account</NavItem></LinkContainer>
                            <LinkContainer to={{pathname:'/About'}}><NavItem eventKey={3}>About</NavItem></LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Form pullRight>
                        <FormGroup>
                            <FormControl type="text" placeholder="Search" />
                            <Button type="submit">Submit</Button>
                        </FormGroup>
                    </Navbar.Form>
                </Navbar>
            </section>
        )
    }
})