import React, { FC } from 'react';
import StatisticPageContainer from '../../Containers/Pages/StatisticPageContainer';
import useSales from '../../Hooks/tutor/useSales';

const TutorStatistic: FC = () => {
    const { overall, classes, tutor, isSalesPending, isEmpty } = useSales();

    return (
        <StatisticPageContainer
            isLoading={isSalesPending}
            userType="tutor"
            overall={overall}
            classesStat={classes}
            tutor={tutor}
            isEmpty={isEmpty}
        />
    );
};

export default TutorStatistic;
