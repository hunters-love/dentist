import React from 'react';
import "./Experts.css"
import image1 from "../../../image/doctors/12048-dentist.jpg"
import image2 from "../../../image/doctors/Doctors-1-640x514.jpg"

import image3 from "../../../image/doctors/images (1).jpg"
import image4 from "../../../image/doctors/images (2).jpg"
import image5 from "../../../image/doctors/istockphoto-1267013720-170667a.jpg"
import image6 from "../../../image/doctors/istockphoto-1277540215-612x612.jpg"
import Expert from '../Expert/Expert';

const Experts = () => {
    const experts = [
        {
            id: 1,
            name: "Mohammad",
            experts: "root-cleaning",
            img: image1
        },
        {
            id: 2,
            name: "Nahid",
            experts: "root-bonding",
            img: image2
        },
        {
            id: 3,
            name: "Soikot",
            experts: "root-felling",
            img: image3
        },
        {
            id: 4,
            name: "Humaion",
            experts: "root-cavidity",
            img: image4
        },
        {
            id: 5,
            name: "Alamin",
            experts: "teeth-aungpacher",
            img: image5
        },
        {
            id: 6,
            name: "Rabby",
            experts: "root-favign",
            img: image6
        }
    ]
    return (
        <div className="experts-container">
            <h2 className="text-primary">Experts-doctores</h2>


            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        all={expert}

                    ></Expert>)
                }

            </div>
        </div>
    );
};

export default Experts;