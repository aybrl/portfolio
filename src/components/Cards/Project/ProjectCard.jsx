import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import styles from './Card.module.css'


class ProjectCard extends Component {
    state = {
        title : "Android App",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy teum is simply dummy teum is simply dummy teum is simply dummy teum is simply dummy teum is simply dummy teum is simply dummy teum is simply dummy teum is simply dummy teum is simply dummy teum is simply dummy teum is simply dummy teum is simply dummy text of the printing and typesetting industry.",
        imageUrl : "'../../../codes.jpg'",
        technologies : [{variant : "warning", value :"Android"},{variant : "danger", value :"Java"},{variant : "success", value :"Nodejs"},{variant : "primary", value :"MySQL"}],
    }
    
    render() { 
        return (
            <div className={styles.container}>
                <div className={["row", styles.image].join(' ')}>
                    <img src='https://images.unsplash.com/photo-1558981420-c532902e58b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt=""/>
                </div>
                <div className={["row", styles.title].join(' ')}>
                     <h2>{this.state.title}</h2>
                </div>
                <div className={["row", styles.badges].join(' ')}>
                    {/* Project technologies goes here */}
                    {
                        this.state.technologies.map(badge => 
                            <div className={styles.col}>
                                <Badge variant={badge.variant}>{badge.value}</Badge>
                            </div>
                        )
                    }
                </div>
                <div className={["row", styles.description].join(' ')}>
                    {/* Description goes here */}
                    <p>{this.state.description}</p>
                </div>
                <div className={["row", styles.clickButt].join(' ')}>
                    <Button variant="outline-dark">Full Details</Button>
                    {/* Button goes here */}
                </div>
            </div>
        );
    }
}
 
export default ProjectCard;