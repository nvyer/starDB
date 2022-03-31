import React, { Component } from 'react';
import Spinner from '../spinner';

const withDetails = (Bla, getData, getImageURL) => {
    return class extends Component {
        state = {
            item: null,
            image: null
        };

        componentDidMount () {
            this.updateItem();
        }

        componentDidUpdate (prevProps) {
            if (this.props.itemId !== prevProps.itemId) {
                this.updateItem();
                this.setState({ loader: true });
            }
        }

        updateItem = () => {
            const { itemId } = this.props;

            if (!itemId) return;

            getData(itemId).then(item => {
                this.setState({ item, loader: false, image: getImageURL(item) });
            });
        };

        render () {
            const { item, image } = this.state;

            if (!item || this.state.loader) {
                return <Spinner />;
            }

            return <Bla {...this.props} data={{ item, image }} />;
        }

    };
};

export default withDetails;