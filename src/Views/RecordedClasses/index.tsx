import React, { FC } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import StudentsPageContainer from '../StudentsPageContainer';
import FilterContainer from '../../Containers/FilterContainer';
import PageFooter from '../../components/PageFooter';
import ImageCard from '../../components/Cards/ImageCard';
import CardsGrid from '../../Containers/CardsGrid';
import { cards, filters, filtersData } from './data';

const useStyles = makeStyles({
    cardsGridContainerRoot: {
        marginBottom: '7.5rem',
    },
});

const MyPreviousClasses: FC = () => {
    const classes = useStyles();
    return (
        <ParentsPageContainer navMenuBackground="primary" background="primary">
            <FilterContainer
                title="My Previous Classes"
                filters={filters}
                filtersData={filtersData}
                rootClassName={classes.cardsGridContainerRoot}
            >
                <CardsGrid>
                    {cards.map((card, index) => (
                        <ImageCard key={index} {...card} />
                    ))}
                </CardsGrid>
            </FilterContainer>
            <PageFooter padding={false} />
        </ParentsPageContainer>
    );
};

export default MyPreviousClasses;
