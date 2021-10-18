import React from 'react';

const Expert = ({ all }) => {
    const { name, experts, img } = all;
    return (
        <div className="col-lg-4 col-md-6 card">
            <img src={img} alt="" />
            <h4>Name:{name}</h4>
            <h4>I am expert at:{experts} field</h4>
        </div>
    );
};

export default Expert;