import React from 'react';
import commonImg from '../../Assets/images';
import SmallLargeImage from '../../components/SmallLargeImage';

const UpcomingClassesPartSec = () => {
    return (
        <div className="teacher__container">
            <SmallLargeImage
                orderOne={2}
                orderTwo={1}
                imageOne={commonImg.oldlady}
                imageTwo={commonImg.smillingmanspects}
                titleOne="Languages - Johny Duke"
                titleTwo="Maths - Harry Stannard"
            />
        </div>
    );
};

export default UpcomingClassesPartSec;
