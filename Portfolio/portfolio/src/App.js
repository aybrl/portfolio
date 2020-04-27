import React, { Component } from 'react';

import './App.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

 // eslint-disable-next-line
import {ProjectCard, SkillCard, SocialLinkCard, Header} from './components'


class App extends Component {
    state = {
        logoUrl : "",
        heroUrl : "",
        title : "<Aybrl/>",
        description : "Android and Back-end Developer"
    }
    render(){
        return (
            <div>
                <div className="hero-image" style={style.heroStyle}>
                    <Header/>
                    <header className="hero-text">
                        <h2 id="title">{this.state.title}</h2>
                        <h4 id="descTitle">{this.state.description}</h4>
                    </header>
                </div>
                <ProjectCard></ProjectCard>
            </div>
        );
    }
}

const style = {
    heroStyle : { 
        'min-height': '520px',
        'min-width': '100%', 
    }
}

export default App;