import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styles from './Header.module.css'

class Header extends Component {
    state = {  }
    render() { 
        return (
            <div className={styles.container}>
                <Navbar>
                    <Navbar.Brand href="#home">{"</Aybrl>"}</Navbar.Brand>
                    <Nav>
                        <Nav.Item >
                            <Nav.Link href="/home">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="skills">Skills</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="certf">Certifications</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="resume">Resume</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="portfolio">Portfolio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="contact">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
                
            </div>
        );
    }
}
 
export default Header;