import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css'

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch("./doctor.json")
            .then(Responsive => Responsive.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className="row">
            {
                doctors.map(doctor => <Doctor
                    key={doctor.id}
                    all={doctor}

                ></Doctor>)
            }
        </div>
    );
};

export default Doctors;