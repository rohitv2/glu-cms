import React from 'react';
import commonImg from '../../Assets/images';
import SmallLargeImage from '../../components/SmallLargeImage';

const UpcomingClassesPartSec = () => {
    return (
        <div className="teacher__container">
            <SmallLargeImage
                orderOne={2}
                orderTwo={1}
                imageOne={commonImg.payingpadgirl}
                imageTwo={commonImg.bookreadingboy}
                titleOne={<>Biology. <br/> Natural selection and <br/> evolution</>}
                titleTwo={<>Biology. <br/> Natural selection and <br/> evolution</>}
                subtitleOne="AED200 / 75mins"
                subtitleTwo="AED200 / 75mins"  
            />
        </div>
    );
};

export default React.memo(UpcomingClassesPartSec);
