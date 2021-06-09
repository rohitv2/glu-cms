import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import NavigationMenu from '../../components/NavigationMenu';
import LeftDrawerMenuContent from '../Menus/LeftDrawerMenuContent';
import FilterContainer from '../FilterContainer';
import CardsGrid from '../CardsGrid';
import ImageCard from '../../components/Cards/ImageCard';
import PageFooter from '../../components/PageFooter';
import ShowMoreCard from '../../components/Cards/ShowMoreCard';
import ClassPurchaseDrawer from '../Menus/ClassPurchaseDrawer';
import useMenuList from '../../Hooks/useMenuList';
import useToggle from '../../Hooks/useToggle';
import { Async, FilterPage, LiveClassesPage, PaginationPage, UserType } from './types';
import FullScreenLoader from '../../components/Loaders/FullScreenLoader';
import FullHeightContainer from '../FullHeightContainer';
import CardsGridContainer from '../CardsGridContainer';
import useSubjects from '../../Hooks/students/useSubjects';
import { purchaseClass } from '../../data/homepage';

interface ILiveClassesPageContainer extends UserType, LiveClassesPage, Async, PaginationPage, FilterPage {}

const LiveClassesPageContainer: FC<ILiveClassesPageContainer> = ({
    userType,
    data,
    isLoading,
    total,
    current,
    onFilter,
    selectedFilter,
}) => {
    const menuList = useMenuList(userType);
    const [classPurchaseDrawer, toggleClassPurchaseDrawer] = useToggle(false);
    const { filtersData } = useSubjects();

    return (
        <NavigationMenu
            absolute
            menuList={menuList}
            userType={userType}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            <FullHeightContainer container direction="column" justify="space-between">
                {isLoading && <FullScreenLoader />}
                <ClassPurchaseDrawer
                    open={classPurchaseDrawer}
                    onClose={toggleClassPurchaseDrawer}
                    userType={userType}
                    data={purchaseClass}
                    onLeave={() => {}}
                    isLoading={false}
                />
                <Grid container direction="column">
                    <CardsGridContainer paddingBottom={false}>
                        <FilterContainer
                            sort={false}
                            title="Live Classes"
                            initialFilterLabel="Filter"
                            filtersData={filtersData}
                            onFilterChange={onFilter}
                            value={selectedFilter}
                        >
                            <CardsGrid>
                                {data.map((card, index) => (
                                    <ImageCard key={index} {...card} onTitleClick={toggleClassPurchaseDrawer} />
                                ))}
                            </CardsGrid>
                        </FilterContainer>
                    </CardsGridContainer>
                    <ShowMoreCard current={total} total={current} onShowMore={() => {}} />
                </Grid>
                <PageFooter />
            </FullHeightContainer>
        </NavigationMenu>
    );
};

LiveClassesPageContainer.defaultProps = {
    data: [],
};

export default LiveClassesPageContainer;
