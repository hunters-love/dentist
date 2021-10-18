import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from "../../../image/banner/images (1).jpg"
import banner2 from "../../../image/banner/images (2).jpg"
import banner3 from "../../../image/banner/fillings-banner.jpg"

const Banner = () => {
    return (
        <div>
            {/* import {Carousel} from "react-bootstrap"; */}

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>happy smilling</h3>
                        <p> natural smiling with fresh air </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>root is main</h3>
                        <p> happy smilling</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Amazing treatment</h3>
                        <p>Freshness air with sweet smilling</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;