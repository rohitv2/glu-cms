import React, { FC, Fragment } from 'react';
import CardsGridContainer from '../../CardsGridContainer';
import CardsGrid from '../../CardsGrid';
import Grid from '@material-ui/core/Grid';
import TitlePrimary from '../../../components/Typographies/TitlePrimary';
import AverageReviewCard from './AverageReviewCard';
import ColumnsContainer from '../../ColumnsContainer';
import ReviewCard, { OnSubmitChallenge } from './ReviewCard';
import SeeAll from '../../../components/Typographies/SeeAll';
import PageFooter from '../../../components/PageFooter';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { LatestReviewCardElement, ReviewCardElement } from './types';
import LastReview from './LastReview';
import Filters, { OnFilter } from './Filters';
import { ReviewsFilter } from '../types';
import { dataToRender } from '../../../Helper/tutor/reviews';
import { getMonthName } from '../../../Helper/date';

const useStyles = makeStyles({
    averageContainer: {
        flexGrow: 1,
    },
    monthContainer: {
        paddingTop: '3.125rem',
    },
});

interface IActivity {
    data: ReviewCardElement[];
    latestReview: LatestReviewCardElement;
    onSubmitChallenge: OnSubmitChallenge;
    classAverage: string;
    tutorAverage: string;
    onFilter: OnFilter;
    isFilterActive: boolean;
    filters: ReviewsFilter;
}

const Activity: FC<IActivity> = ({
    data,
    latestReview,
    onSubmitChallenge,
    tutorAverage,
    classAverage,
    onFilter,
    isFilterActive,
    filters,
}) => {
    const classes = useStyles();

    const filteredData = isFilterActive ? filters.data : data;
    const renderData = dataToRender(filteredData);
    const isEmpty = !filteredData.length;

    return (
        <Fragment>
            <CardsGridContainer background="secondary">
                <CardsGrid rows={2}>
                    <Grid container direction="column">
                        <Grid container direction="column">
                            <TitlePrimary>Latest Reviews</TitlePrimary>
                        </Grid>
                        <Grid container direction="column" justify="center" className={classes.averageContainer}>
                            <AverageReviewCard rating={classAverage} text="Class rating" />
                            <AverageReviewCard rating={tutorAverage} text="Tutoring rating" />
                        </Grid>
                    </Grid>
                    <LastReview {...latestReview} onSubmitChallenge={onSubmitChallenge} />
                </CardsGrid>
            </CardsGridContainer>
            <CardsGridContainer paddingTopVariant={2}>
                <ColumnsContainer
                    leftContent={
                        <Grid container direction="column">
                            <TitlePrimary>Reviews</TitlePrimary>
                        </Grid>
                    }
                    rightContent={
                        <Grid container direction="column">
                            <Filters onFilter={onFilter} from={filters.from} to={filters.to} />
                        </Grid>
                    }
                />
                {Object.keys(renderData).map((month, index) => (
                    <ColumnsContainer
                        key={index}
                        topBorder={false}
                        leftContent={
                            <Grid container direction="column" alignItems="flex-end" className={classes.monthContainer}>
                                <TitlePrimary>{getMonthName(+month)}</TitlePrimary>
                            </Grid>
                        }
                        rightContent={
                            <Grid container direction="column">
                                {renderData[+month].map((card) => (
                                    <ReviewCard key={card.id} onSubmitChallenge={onSubmitChallenge} {...card} />
                                ))}
                            </Grid>
                        }
                    />
                ))}
                {isEmpty && (
                    <ColumnsContainer
                        topBorder={false}
                        rightContent={<TitlePrimary>No data found</TitlePrimary>}
                        leftContent={<div />}
                    />
                )}
                <ColumnsContainer
                    topBorder={false}
                    rightContent={!isEmpty ? <SeeAll onClick={() => {}} disabled /> : <div />}
                    leftContent={<div />}
                />
            </CardsGridContainer>
            <PageFooter />
        </Fragment>
    );
};

export default Activity;
