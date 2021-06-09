import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import NavigationMenu from '../../components/NavigationMenu';
import LeftDrawerMenuContent from '../Menus/LeftDrawerMenuContent';
import FilterContainer from '../FilterContainer';
import ImageCard from '../../components/Cards/ImageCard';
import CardsGrid from '../CardsGrid';
import PageFooter from '../../components/PageFooter';
import ShowMoreCard from '../../components/Cards/ShowMoreCard';
import useMenuList from '../../Hooks/useMenuList';
import { Async, FilterPage, PaginationPage, TutorsPage, UserType } from './types';
import FullHeightContainer from '../FullHeightContainer';
import FullScreenLoader from '../../components/Loaders/FullScreenLoader';
import CardsGridContainer from '../CardsGridContainer';
import useSubjects from '../../Hooks/students/useSubjects';

interface ITutorsPageContainer extends UserType, TutorsPage, Async, PaginationPage, FilterPage {}

const TutorsPageContainer: FC<ITutorsPageContainer> = ({
    userType,
    data,
    isLoading,
    total,
    current,
    onFilter,
    selectedFilter,
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
            <FullHeightContainer container direction="column" justify="space-between">
                <Grid container direction="column">
                    <CardsGridContainer paddingBottom={false}>
                        <FilterContainer
                            sort={false}
                            title="Tutors"
                            initialFilterLabel="Filter"
                            filtersData={filtersData}
                            value={selectedFilter}
                            onFilterChange={onFilter}
                        >
                            <CardsGrid>
                                {data.map((card, index) => (
                                    <ImageCard key={index} titleLinkTo={`/${userType}/tutor/`} {...card} />
                                ))}
                            </CardsGrid>
                        </FilterContainer>
                    </CardsGridContainer>
                    <ShowMoreCard current={current} total={total} />
                </Grid>
                <PageFooter />
            </FullHeightContainer>
        </NavigationMenu>
    );
};

TutorsPageContainer.defaultProps = {
    data: [],
};

export default TutorsPageContainer;
