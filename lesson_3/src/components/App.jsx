import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import AsyncLoad from './AsyncLoad';

let HomeAsync = (props) => (
    <AsyncLoad load={(cb) => {
        require.ensure([], require => {
            cb(require('./Home'));
        });
    }}>
        {(Home) => <Home {...props} />}
    </AsyncLoad>
);

let ArticlesAsync = (props) => (
    <AsyncLoad load={(cb) => {
        require.ensure([], require => {
            cb(require('./Articles'));
        });
    }}>
        {(Articles) => <Articles {...props} />}
    </AsyncLoad>
);

let AboutAsync = (props) => (
    <AsyncLoad load={(cb) => {
        require.ensure([], require => {
            cb(require('./About'));
        });
    }}>
        {(About) => <About {...props} />}
    </AsyncLoad>
);

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <header>
                        <ul>
                            <li><NavLink to="/" exact activeClassName="hover">Home</NavLink></li>
                            <li><NavLink to="/articles" activeClassName="hover">Articles</NavLink></li>
                            <li><NavLink to="/about" activeClassName="hover">About Us</NavLink></li>
                            <div className="clearfix"></div>
                        </ul>
                    </header>
                    <div className="body">
                        <Switch>
                            <Route path="/" exact component={HomeAsync} />
                            <Route path="/about" component={AboutAsync} />
                            <Route path="/articles" component={ArticlesAsync} />
                            <Route>
                                <Redirect to="/" />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}