import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Doctor = ({ all }) => {
    const { id, name, email, specillist, img } = all;
    return (
        <div className="col-lg-4 col-md-6">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title> <h3>{name}</h3></Card.Title>
                    <Card.Text>
                        <p>contact me at:{email}</p>

                    </Card.Text>
                    <Card.Text>
                        <p>I'M Specillist at:{specillist}</p>

                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Doctor;