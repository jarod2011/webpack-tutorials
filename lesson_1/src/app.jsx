import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
    render() {
      return (
        <div>
            <h3>{this.props.article.title}</h3>
            <p>{this.props.article.content}</p>
        </div>
      );
    }
}
const welcomeArticle = {
    title: 'Welcome to React World',
    content: 'This is a simple React application that is builded using Webpack.'
}
ReactDOM.render(
    <Welcome article={welcomeArticle} />,
    document.getElementById('container')
);