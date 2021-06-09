import { useSelector } from 'react-redux';
import { watchRecordedClassSelector } from '../../Redux/Selectors/studentModule';
import { useMemo } from 'react';

function useWatchRecordedClass() {
    const { data } = useSelector(watchRecordedClassSelector);

    return useMemo(
        () => ({
            data,
        }),
        [data]
    );
}

export default useWatchRecordedClass;
