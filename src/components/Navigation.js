import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Score from "./Score";

export default class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            score: 0
        };
    }

    render() {
        return (<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/home">Clicky-Game</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Nav.Item className="text-white"><Score score={this.state.score}/></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>);
    }
}
