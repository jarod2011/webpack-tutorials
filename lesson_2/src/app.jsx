import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute getComponents={(location, cb) => {
                require.ensure([], function (require) {
                    let m = require('./components/Home');
                    cb(null, m.default ? m.default : m);
                });
            }} />
            <Route path="articles" getComponents={(location, cb) => {
                require.ensure([], (require) => {
                    let m = require('./components/Articles');
                    cb(null, m.default ? m.default : m);
                });
            }} />
            <Route path="about" getComponents={(location, cb) => {
                require.ensure([], (require) => {
                    let m = require('./components/About');
                    cb(null, m.default ? m.default : m);
                });
            }} />
        </Route>
    </Router>)
    , document.body);
