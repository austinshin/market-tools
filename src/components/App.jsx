import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class AppWrapper extends React.Component {
    render() {
        return (
            <Container className="parent-container">
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <div className='app-container'>
                                    <Link className='nav-button' to={'/'}>Home</Link>
                                    <Link className='nav-button' to={'/about'}>Link</Link>
                                    <Link className='nav-button' to={'/about/subroute'}>Subcomponent</Link>
                                    <Link className='nav-button' to={'/polygon'}>Polygon</Link>
                                    {this.props.children}
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container className="main-content">

                </Container>
            </Container>
        )
    }
}