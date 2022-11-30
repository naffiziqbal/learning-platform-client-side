import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Banner from './Sections/Banner/Banner';
import Step from './Sections/Step/Step';
import Toprated from './TopRated/Toprated';

const Home = () => {
    useTitle('Home')
    return (
        <div>
        <Banner/>
        <Toprated/>
        <Step/>
        </div>
    );
};

export default Home;
