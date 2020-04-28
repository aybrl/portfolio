import React, { Component } from 'react';

import './App.css'

 // eslint-disable-next-line
import {ProjectCard, SkillCard, SocialLinkCard, Header, About} from './components'


class App extends Component {
    state = {
        logoUrl : "",
        heroUrl : "",
        title : "<Aybrl/>",
        description : "Android and Back-end Developer."
    }
    render(){
        return (
            <section>
            
                <section className="hero">
                    <Header/>
                    <div className="hero-content">
                        <h2>{this.state.title}</h2>
                        <div>{this.state.description}</div>
                        <button className="btn-hero">Get Me!</button>
                    </div>
                </section>
                <main>
                    <ProjectCard></ProjectCard>
                    {/*<div className="hero-image" style={style.heroStyle}>
                        <header className="hero-text">
                            <ProjectCard></ProjectCard>
                        </header>
                    </div>*/}
                </main>
            </section>
        );
    }
}


export default App;