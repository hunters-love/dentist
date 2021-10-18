import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Service.css'

const Service = ({ allData }) => {
    const { id, name, price, details, img } = allData;
    return (
        <div className="container">
            <div className="card-container">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title><h3>{name}</h3></Card.Title>
                        <Card.Text>
                            <p>{details}</p>
                        </Card.Text>
                        <Card.Text>
                            <p>Visit hr$:{price}</p>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Service;