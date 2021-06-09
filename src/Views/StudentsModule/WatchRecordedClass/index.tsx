import React, { FC } from 'react';
import WatchRecordedClassPageContainer from '../../../Containers/Pages/WatchRecordedClassPageContainer';
import useWatchRecordedClass from '../../../Hooks/students/useWatchRecordedClass';

const WatchRecordedClasses: FC = () => {
    const { data } = useWatchRecordedClass();
    return <WatchRecordedClassPageContainer userType="students" data={data} />;
};

export default WatchRecordedClasses;
