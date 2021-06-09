import React, { FC } from 'react';
import HomeworkPageContainer from '../../../Containers/Pages/HomeworkPageContainer';
import useHomework from '../../../Hooks/students/useHomework';

const Homework: FC = () => {
    const {
        isPending,
        overdueCount,
        incompleteCount,
        count,
        homeworks,
        overdueHomeworks,
        filters,
        setHomeworkFilter,
    } = useHomework();

    return (
        <HomeworkPageContainer
            userType="students"
            isLoading={isPending || filters.isPending}
            incompleteCount={incompleteCount}
            overdueCount={overdueCount}
            totalCount={count}
            homeworks={homeworks}
            overdueHomework={overdueHomeworks}
            selectedFilter={filters.value}
            onFilter={setHomeworkFilter}
            filterCount={filters.count}
            filterData={filters.homeworks}
        />
    );
};

export default Homework;
