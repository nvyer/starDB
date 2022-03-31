import React from 'react';
import './row.css';

const Row = ({ left, right }) => {
    return (<div className='d-flex'>
        {/* {marginTop: "18px" } */}
        <div style={{ width: "50%", padding: '17px' }}>
            {left}
        </div>
        <div style={{ width: "50%", padding: "17px" }}>
            {right}
        </div>
    </div>);
};

export default Row;