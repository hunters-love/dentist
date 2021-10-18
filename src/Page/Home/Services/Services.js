import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [homeservices, setHomeservices] = useState([]);
    useEffect(() => {
        fetch("./home.json")
            .then(Response => Response.json())
            .then(data => setHomeservices(data))
    }, [])
    return (
        <div className="services-container">


            {
                homeservices.map(homeservice => <Service
                    key={homeservice.id}
                    allData={homeservice}


                ></Service>)
            }



        </div>
    );
};

export default Services;