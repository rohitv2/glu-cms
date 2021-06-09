import React from 'react';
import About from './About';
import Banner from './Banner';
import Section1 from './Section1';
import Section2 from './Section2';
import Upcoming from './Upcoming';
import Career from './Career';
import Review from './Review';
import MadeBy from '../Footer/MadeBy';

const index: React.FunctionComponent = () => {
    return (
        <div className="wrapper">
            <Banner />
            <Section1 />
            <Section2 />
            <Upcoming title={'Upcoming classes'} />
            <Upcoming title={'Previous Classes'} />
            <About />
            <Career />
            <Review />
            <Upcoming title={'Similar Tutors'} />
            <div className="footer">
                <MadeBy />
            </div>
        </div>
    );
};

export default index;
