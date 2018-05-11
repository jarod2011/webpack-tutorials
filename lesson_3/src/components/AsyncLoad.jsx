import { Component } from 'react';

export default class AsyncLoad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            component: null
        };
    }

    componentWillMount() {
        this.load(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps);
        }
    }

    load(props) {
        this.setState({
            component: null
        });
        props.load(component => {
            this.setState({
                component: component.default ? component.default : component
            });
        })
    }
    render() {
        return this.state.component ? this.props.children(this.state.component) : null;
    }
}
