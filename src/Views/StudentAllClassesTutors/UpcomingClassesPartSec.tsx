import React from 'react';
import ReusableUpcommingClasses from '../../components/ReusableUpcommingClasses';
import commonImg from '../../Assets/images';

const UpcomingClassesPartSec = () => {
    return (
        <ReusableUpcommingClasses
            image={commonImg.readinggirl}
            titleClass="Upcomming Class"
            titleLeft={
                <>
                    24/07/20 <br /> 3pm- 4.30pm
                </>
            }
            titleRight={
                <>
                    24/07/20 <br /> 3pm- 4.30pm
                </>
            }
            subtitleLeft="AED200"
            subtitlteRight="AED200"
        />
    );
}

export default React.memo(UpcomingClassesPartSec);
