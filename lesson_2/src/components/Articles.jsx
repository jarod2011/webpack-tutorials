import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

export default class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }
    componentWillMount() {
        let list = [{
            title: 'articles 1',
            content: 'This is articles 1'
        }, {
            title: 'articles 2',
            content: 'This is articles 2'
        }, {
            title: 'articles 3',
            content: 'This is articles 3'
        }];
        this.setState({
            articles: list
        });
    }
    render() {
        return (
            <div className="articles">
                <h3>This is article page.</h3>
                <ul className="articlelist">
                {this.state.articles.map((article, index) => <Article art={article} key={index} />)}
                </ul>
            </div>
        );
    }
}