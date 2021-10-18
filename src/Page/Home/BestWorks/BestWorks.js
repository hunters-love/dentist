import React from 'react';
import best1 from "../../../image/services/download (1).jpg"
import best2 from "../../../image/services/download.jpg"
import best3 from "../../../image/services/images.jpg"
import best4 from "../../../image/services/Funny-cartoon-tooth-vector-illustration-02-300x300.jpg"
import BestWork from '../BestWork/BestWork';
import "./BestWorks.css"

const BestWorks = () => {
    const bestWorks = [
        {
            id: 1,
            img: best1,
            name: "scalling"
        },
        {
            id: 2,
            img: best2,
            name: "cleaning"
        },
        {
            id: 3,
            img: best3,
            name: "root felling"
        },
        {
            id: 4,
            img: best4,
            name: "Mouth-washing"
        }
    ]
    return (
        <div className="best-works-container">
            <h3 className="heading text-primary">our best activites</h3>
            <div className="row">
                {
                    bestWorks.map(bestWork => <BestWork
                        key={bestWork.id}
                        allWork={bestWork}

                    ></BestWork>)
                }
            </div>


        </div>
    );
};

export default BestWorks;