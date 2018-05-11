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
        fetch('/articles.json', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        }).then((response) => {
            return response.json();
        }).then((json) => {
            this.setState({
                articles: json
            });
        }).catch((err) => {
            console.error('载入文章失败');
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