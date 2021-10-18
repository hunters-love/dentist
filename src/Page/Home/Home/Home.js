import React from 'react';
import Banner from '../Banner/Banner';
import BestWorks from '../BestWorks/BestWorks';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
            <BestWorks></BestWorks>
        </div>
    );
};

export default Home;