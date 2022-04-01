import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorButton from '../error-button';

import './item-details.css';

class ItemDetails extends Component {

    state = { item: null, image: null, };

    componentDidMount () {
        this.updateItem();
    }

    componentDidUpdate (prevProps) {
        if (this.props.itemId !== prevProps.itemId ||
            this.props.getImageURL !== prevProps.getImageURL ||
            this.props.getData !== prevProps.getData) {
            this.updateItem();
        }
    }

    updateItem () {
        const { itemId, getData, getImageURL } = this.props;

        if (!itemId) return;

        getData(itemId).then((item) => { this.setState({ item, image: getImageURL(item) }); });
    }

    render () {
        const { item, image } = this.state;

        if (!item) return <span>Please select an item!</span>;
        const { name } = item;

        return (
            <div className="item-details card">
                <img className="item-image" src={image} />
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group-item list-group-flush">
                        {React.Children.map(this.props.children, child => React.cloneElement(child, { item }))}
                    </ul>
                    <ErrorButton className={"error-button btn btn-danger btn-lg"} />
                </div>
            </div>
        );
    }
}

export const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export default ItemDetails;
