import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styles from './Header.module.css'

class Header extends Component {
    state = {  }
    render() { 
        return (
            <Navbar expand="lg" >
                <Navbar.Brand id={styles.navBrand} href="/">{"</Aybrl>"}</Navbar.Brand>
                <Navbar.Toggle id={styles.toggle}/>
                <Navbar.Collapse className="justify-content-end">
                    <Nav className={styles.navigation}>
                        <Nav.Item >
                            <Nav.Link href="#">About</Nav.Link>
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
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
 
export default Header;