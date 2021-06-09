import React from 'react';
import commonImg from '../../Assets/images';
import SmallLargeImage from '../../components/SmallLargeImage';
import { linkTo } from '../../Helper/linkTo';

const UpcomingClasses = () => {
    return (
        <div className="teacher__container">
               <SmallLargeImage  orderOne={1} orderTwo={2} imageOne={commonImg.orangetopgirl} imageTwo={commonImg.blueshirtman} titleOne="Maths - Chantelle Stannard" titleTwo="Languages - Johny Duke" />
        </div>
    );
}

export default UpcomingClasses;
