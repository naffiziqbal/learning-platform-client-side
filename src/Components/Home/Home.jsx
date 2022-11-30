import React from 'react';
import Banner from './Sections/Banner/Banner';
import Step from './Sections/Step/Step';
import Toprated from './TopRated/Toprated';

const Home = () => {
    return (
        <div>
        <Banner/>
        <Toprated/>
        <Step/>
        </div>
    );
};

export default Home;
