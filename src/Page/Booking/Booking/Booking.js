import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import "./Booking.css"

const Booking = () => {
    const { serviceId } = useParams();
    const [booking, setBooking] = useState([]);
    useEffect(() => {

        // const url = `./service.json/${serviceId}`;
        fetch(`/service.json`)
            .then(Responsive => Responsive.json())
            .then(data => setBooking(data[`${serviceId}` - 1]))
    }, [])
    const { name, details, price, img } = booking;
    return (
        <div className="main">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title> <h2>{name}</h2></Card.Title>
                    <Card.Text>

                        {details}
                    </Card.Text>
                    <Card.Title> <h2> visiting: ${price}</h2></Card.Title>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Booking;