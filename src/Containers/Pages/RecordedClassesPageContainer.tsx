import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import NavigationMenu from '../../components/NavigationMenu';
import LeftDrawerMenuContent from '../Menus/LeftDrawerMenuContent';
import CardsGrid from '../CardsGrid';
import ImageCard from '../../components/Cards/ImageCard';
import FilterContainer from '../FilterContainer';
import CardsGridContainer from '../CardsGridContainer';
import PageFooter from '../../components/PageFooter';
import ShowMoreCard from '../../components/Cards/ShowMoreCard';
import useMenuList from '../../Hooks/useMenuList';
import FullHeightContainer from '../FullHeightContainer';
import { Async, FilterPage, PaginationPage, RecordedClassesPage, UserType } from './types';
import FullScreenLoader from '../../components/Loaders/FullScreenLoader';
import ClassPurchaseDrawer from '../Menus/ClassPurchaseDrawer';
import useSubjects from '../../Hooks/students/useSubjects';

interface IRecordedClassesPageContainer extends UserType, RecordedClassesPage, Async, PaginationPage, FilterPage {
    purchased?: boolean;
}

const RecordedClassesPageContainer: FC<IRecordedClassesPageContainer> = ({
    data,
    total,
    current,
    userType,
    isLoading,
    purchased,
    onFilter,
    selectedFilter,
    onShowMore,
    purchaseDrawer,
}) => {
    const menuList = useMenuList(userType);
    const { filtersData } = useSubjects();

    return (
        <NavigationMenu
            absolute
            menuList={menuList}
            userType={userType}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            {isLoading && <FullScreenLoader />}
            <ClassPurchaseDrawer
                userType={userType}
                purchased={purchased}
                open={purchaseDrawer.isOpen}
                onClose={purchaseDrawer.onClose}
                data={purchaseDrawer.purchaseCard}
                isLoading={purchaseDrawer.isLoading}
                onLeave={purchaseDrawer.onLeave}
            />
            <FullHeightContainer container direction="column" justify="space-between">
                <Grid container direction="column">
                    <CardsGridContainer paddingBottom={false}>
                        <FilterContainer
                            sort={false}
                            title="Recorded Classes"
                            initialFilterLabel="Filter"
                            filtersData={filtersData}
                            value={selectedFilter}
                            onFilterChange={onFilter}
                        >
                            <CardsGrid>
                                {data.map((card, index) => (
                                    <ImageCard
                                        classType="recorded"
                                        onTitleClick={purchaseDrawer.onOpen}
                                        key={index}
                                        {...card}
                                    />
                                ))}
                            </CardsGrid>
                        </FilterContainer>
                    </CardsGridContainer>
                    <ShowMoreCard current={current} total={total} onShowMore={onShowMore} />
                </Grid>
                <PageFooter />
            </FullHeightContainer>
        </NavigationMenu>
    );
};

RecordedClassesPageContainer.defaultProps = {
    data: [],
};

export default RecordedClassesPageContainer;
