import React, { Component } from 'react';

import styles from './About.module.css'

class About extends Component {
    state = {
        text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy teum is simply dummy teum is simply dummy teum is simply dummy teum is simply dummy teum is simply dummy teum is simply dummy teum is simply dummy teum is simply dummy teum is simply dummy teum is simply dummy teum is simply dummy teum is simply dummy text of the printing and typesetting industry."
    }
    render() { 
        return (
            <div className={styles.container}>
                <div className="row">
                    <h3>Who am I?</h3>
                </div>
                <div className="row">
                    <p id={styles.itemdesc}>{this.state.text}</p>
                </div>
            </div>
        );
    }
}
 
export default About;