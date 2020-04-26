import React, { Component } from 'react';
import styles from './App.module.css'


import {} from '@material-ui/core';

// eslint-disable-next-line
import {ProjectCard, SkillCard, SocialLinkCard, Header} from './components'


class App extends Component {
    render(){
        return (
            <div>
                <Header></Header>
                <div className={styles.container}>
                    <div className="row">
                        <ProjectCard></ProjectCard>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;