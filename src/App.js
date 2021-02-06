import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Home, About, Soon} from './pages'

import Error from './pages/404'

import './App.css'

class App extends Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path= "/" component = {Home} />
                    <Route exact path= "/home" component = {Home} />
                    <Route exact path= "/about" component={About}/>
                    <Route exact path= "/contact" component={Soon}/>
                    <Route exact path= "/skills" component={Soon}/>
                    <Route exact path= "/portfolio" component={Soon}/>
                    <Route exact path= "/resume" component={Soon}/>
                    <Route component={Error}/>
                </Switch>
            </Router>
        );
    }
}


export default App;