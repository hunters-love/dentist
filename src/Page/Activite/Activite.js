import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import "./Activite.css "

const Activite = ({ allActivity }) => {
    const { id, name, price, details, img } = allActivity;
    return (
        <div className=" col-lg-4 col-md-6">


            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title><h3>{name}</h3></Card.Title>
                    <Card.Text>
                        <p>{details}</p>
                    </Card.Text>
                    <Card.Text>
                        <h4>${price}</h4>
                    </Card.Text>
                    <Link to={`/booking/${id}`}>
                        <Button variant="primary">Book {name}</Button>
                    </Link>
                </Card.Body>
            </Card>


        </div>


    );
};

export default Activite;