import React, { Component } from 'react';

import './styles/404.css'

class Contact extends Component {
    render(){
        return (
            <section className="page-container">
                <div>
                    <p id="error-status">404</p>
                    <p>This link doesn't seem to be valid ☠️</p>
                    <p><a href="/">← back to home</a></p>
                </div>
            </section>
        );
    }
}


export default Contact;