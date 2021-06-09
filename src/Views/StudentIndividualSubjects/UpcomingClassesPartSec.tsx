import React from 'react';
import commonImg from '../../Assets/images';
import SmallLargeImage from '../../components/SmallLargeImage';

const UpcomingClassesPartSec = () => {
    return (
        <div className="teacher__container">
            <SmallLargeImage imageOne={commonImg.oldlady} imageTwo={commonImg.chairman} titleOne="Maths - Harry Stannard" titleTwo="Languages - Johny Duke"/>
        </div>
    );
};

export default UpcomingClassesPartSec;
