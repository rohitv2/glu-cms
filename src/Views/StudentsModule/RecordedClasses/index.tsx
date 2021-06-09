import React, { FC } from 'react';
import RecordedClassesPageContainer from '../../../Containers/Pages/RecordedClassesPageContainer';
import usePreviousClasses from '../../../Hooks/students/usePreviousClasses';
import usePurchaseDrawer from '../../../Hooks/students/usePurchaseDrawer';

const RecordedClasses: FC = () => {
    const { prevClassImageCards, isPending, count, total, filters, getMore, handleFilterChange } = usePreviousClasses();

    const purchaseDrawer = usePurchaseDrawer();

    return (
        <RecordedClassesPageContainer
            userType="students"
            total={total}
            current={count}
            isLoading={isPending}
            data={prevClassImageCards}
            selectedFilter={filters.value}
            onFilter={handleFilterChange}
            onShowMore={getMore}
            purchaseDrawer={purchaseDrawer}
        />
    );
};

export default RecordedClasses;
