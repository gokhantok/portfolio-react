import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
//import createBrowserHistory from 'history/createBrowserHistory'
import { createBrowserHistory } from 'history'
import App from './components/App';
import Jokes from './components/Jokes';
import MusicMaster from './projects/music-master';
import Header from './components/Header';

import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(
    <Router history = {createBrowserHistory()}>
        <Switch>
            <Route exact path='/' render = {() => <Header> <App/> </Header> } />
            <Route path='/jokes' render = {() => <Header> <Jokes/> </Header> } />
            <Route path='/music-master' render = {() => <Header> <MusicMaster/> </Header> } />
        </Switch>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
