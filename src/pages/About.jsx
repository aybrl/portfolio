import React, { Component } from 'react';

import './styles/about.css'

class About extends Component {
    socialLinks = {
        github : "https://github.com/aybrl",
        twitter : "https://twitter.com/aybbrl",
        linkedIn : "https://www.linkedin.com/in/aybrl/"
    }
    render(){
        return (
            <section className="about-container">
                <div className="about-section">
                    <p>Hello, World! It's <b>AY<sub>OUB</sub> B<sub>E</sub>R<sub>HI</sub>L<sub>I</sub></b>, I'm a software engineer and computer enthusiast, I hold a BS degree in computer science, and currently preparing a MS degree in software engineering at the University of Paris-Est Créteil in France 🇫🇷. I love mathematics and computers 🤖 and I deeply enjoy playing with them both.</p>
                    <p>My area of expertis is designing and building safe, relieable, and scalable systems that are easy to maintain over time. I tend to work on the analytical and strategical part of the projects and everything that has something to do with logical thinking. I work on the fornt-end too, however, I'm not a big fan of UI/UX design,  I believe it's because of my lack of the creative intelligence.</p>
                    <p>Here are the technologies that I work with <a href= "/skills">My Skills</a>. And here, you can find some projects I worked on <a href= "/portfolio">My Projects</a>.</p>
                    <div className="socials-div"><a className="socialLinks" id="github" href= {this.socialLinks.github} target="_blank" rel="noreferrer">Github</a> <a className="socialLinks" id="twitter" href= {this.socialLinks.twitter} target="_blank" rel="noreferrer">Twitter</a> <a className="socialLinks" id="linkedin" href= {this.socialLinks.linkedIn} target="_blank" rel="noreferrer">LinkedIn</a></div>
                </div>
            </section>
        );
    }
}


export default About;