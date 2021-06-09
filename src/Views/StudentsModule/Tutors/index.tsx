import React, { FC, useCallback } from 'react';
import TutorsPageContainer from '../../../Containers/Pages/TutorsPageContainer';
import useFeatureTeachers from '../../../Hooks/students/useFeatureTeachers';
import { SelectedFilterValue } from '../../../Containers/FilterContainer/types';
import { useDispatch } from 'react-redux';
import { setTeachersFilter } from '../../../Redux/Actions/studentModuleActions';

const Tutors: FC = () => {
    const dispatch = useDispatch();
    const { teachersImageCards, isPending, count, filters } = useFeatureTeachers();

    const handleFilterChange = useCallback((filter: SelectedFilterValue) => {
        dispatch(setTeachersFilter(filter))
    }, [dispatch])

    return (
        <TutorsPageContainer
            userType="students"
            total={count}
            current={count}
            isLoading={isPending}
            data={teachersImageCards}
            selectedFilter={filters.value}
            onFilter={handleFilterChange}
        />
    );
};

export default Tutors;
