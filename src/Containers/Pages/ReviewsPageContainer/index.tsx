import React, { FC } from 'react';
import { Async, ReviewsPage, UserType } from '../types';
import useMenuList, { useMenuOptions } from '../../../Hooks/useMenuList';
import NavigationMenu from '../../../components/NavigationMenu';
import FullScreenLoader from '../../../components/Loaders/FullScreenLoader';
import EmptyPageContainer from '../EmptyPageContainer';
import Activity from './Activity';

interface IReviewsPageContainer extends UserType, Async, ReviewsPage {}

const ReviewsPageContainer: FC<IReviewsPageContainer> = ({
    userType,
    isLoading,
    data,
    latestReview,
    onSubmitChallenge,
    classAverage,
    tutorAverage,
    count,
    onFilter,
    isFilterActive,
    filters,
}) => {
    const menuList = useMenuList(userType);
    const menuOptions = useMenuOptions(userType);

    return (
        <NavigationMenu
            absolute
            userType={userType}
            background={count ? 'secondary' : 'primary'}
            menuList={menuList}
            {...menuOptions}
        >
            {isLoading && <FullScreenLoader />}
            {count ? (
                <Activity
                    data={data}
                    latestReview={latestReview}
                    onSubmitChallenge={onSubmitChallenge}
                    classAverage={classAverage}
                    tutorAverage={tutorAverage}
                    onFilter={onFilter}
                    isFilterActive={isFilterActive}
                    filters={filters}
                />
            ) : (
                <EmptyPageContainer title="Reviews" description="You have no reviews" />
            )}
        </NavigationMenu>
    );
};

ReviewsPageContainer.defaultProps = {
    data: [],
};

export default ReviewsPageContainer;
