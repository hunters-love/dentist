import React from 'react';

const BestWork = ({ allWork }) => {
    const { img, name } = allWork;
    return (
        <div className="col-lg-4 col-md-6 ">
            <img src={img} alt="" />
            <h5>name:{name}</h5>
        </div>
    );
};

export default BestWork;