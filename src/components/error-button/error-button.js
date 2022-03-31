import React, { Component } from 'react';
import './error-button.css';

export default class ErrorButton extends Component {

    state = {
        renderError: false
    };

    render () {
        if (this.state.renderError) {
            this.foo.bar = 0;
        }

        return (
            <button
                className={this.props.className}
                onClick={() => this.setState({ renderError: true })}>
                Throw Error
            </button>
        );
    }
}