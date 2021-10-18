import React, { useEffect, useState } from 'react';
import Activite from '../Activite/Activite';
import "./Activites.css"

const Activites = () => {
    const [activites, setActivites] = useState([]);
    useEffect(() => {
        fetch("./service.json")
            .then(Response => Response.json())
            .then(data => setActivites(data))
    }, [])
    return (
        <div className="row">
            <h3>our-activites</h3>
            {
                activites.map(activited => <Activite
                    key={activited.id}
                    allActivity={activited}

                ></Activite>)
            }
        </div>
    );
};

export default Activites;