import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <header>
                    <ul>
                        <li><IndexLink to="/" activeClassName="hover">Home</IndexLink></li>
                        <li><Link to="articles" activeClassName="hover">Articles</Link></li>
                        <li><Link to="about" activeClassName="hover">About Us</Link></li>
                    </ul>
                </header>
                <div className="body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}