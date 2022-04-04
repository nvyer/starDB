import React from 'react';
import PropTypes from 'prop-types';
import './item-list.css';

const ItemList = ({ data, onItemSelected, children: render }) => {
    return (
        <ul className="item-list list-group">
            {data.map((item) => {
                const { id } = item;
                const label = render(item);
                return (
                    <li
                        className="list-group-item"
                        key={id}
                        onClick={() => onItemSelected(id)}>
                        {label}
                    </li>
                );
            })}
        </ul>
    );
};

ItemList.defaultProps = {
    onItemSelected: () => { }
};

ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired
};

export default ItemList;
