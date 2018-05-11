import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Article extends Component {
    render() {
        return (
            <li>
                <h5>{this.props.art.title}</h5>
                <p>{this.props.art.content}</p>
            </li>
        );
    }
}

Article.propTypes = {
    art: PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
    }).isRequired
}