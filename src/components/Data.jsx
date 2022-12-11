import React from 'react';
import { useSelector } from 'react-redux';

const Data = () => {
    const data = useSelector(state => state.count.value /* this is from store.js */)
    return (
        <div>
            <h1>{data}</h1>
        </div>
    );
};

export default Data;