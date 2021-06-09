import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import LiveClassesPageContainer from '../../../Containers/Pages/LiveClassesPageContainer';
import useUpcomingClasses from '../../../Hooks/students/useUpcomingClasses';
import { SelectedFilterValue } from '../../../Containers/FilterContainer/types';
import { fetchUpcomingClassesFilter } from '../../../Redux/Actions/studentModuleActions';

const LiveClasses: FC = () => {
    const dispatch = useDispatch()
    const { isPending, upcomingClassImageCards, count, filters } = useUpcomingClasses();

    const handleFilterChange = useCallback((filter: SelectedFilterValue) => {
        dispatch(fetchUpcomingClassesFilter(filter))
    }, [])

    return (
        <LiveClassesPageContainer
            userType="students"
            current={count}
            total={count}
            isLoading={isPending}
            data={upcomingClassImageCards}
            onFilter={handleFilterChange}
            selectedFilter={filters.value}
            onShowMore={() => {}}
        />
    );
};

export default LiveClasses;
