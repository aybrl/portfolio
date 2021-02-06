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
                        <Nav.Item>
                            <Nav.Link href="/about" eventKey="about" className={styles.navitem}>About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/skills" eventKey="skills" className={styles.navitem}>Skills</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/certifications" eventKey="certf" className={styles.navitem}>Certifications</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/resume" eventKey="resume" className={styles.navitem}>Resume</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/portfolio" eventKey="portfolio" className={styles.navitem}>Portfolio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/contact" eventKey="contact" className={styles.navitem}>Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
 
export default Header;