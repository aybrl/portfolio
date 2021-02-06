import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Header} from '../components'

class Home extends Component {
    pageBody = {
        logoUrl : "",
        heroUrl : "",
        title : "<Aybrl />",
        descriptionTitle : "Computer Science and Software engineering Student",
        descriptionBody : "I'm interested in designing and developing safe and scalable systems."
    }
    render(){
        return (
            <section>
                <section className="hero">
                    <Header/>
                    <div className="hero-content">
                        <h2>{this.pageBody.title}</h2>
                        <button className="btn-hero"><Link to = "/contact">CONTACT</Link></button>
                    </div>
                </section>
            </section>
        );
    }
}

export default Home;