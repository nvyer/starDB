import React from 'react';
import PropTypes from 'prop-types';
import './row.css';

const Row = ({ left, right }) => {
    return (
        <div className='d-flex' style={{ margin: '11px 10%' }}>
            <div style={{ width: "50%", paddingRight: '5px' }}>
                {left}
            </div>
            <div style={{ width: "50%", paddingLeft: '5px' }}>
                {right}
            </div>
        </div>);
};

Row.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
};

export default Row;