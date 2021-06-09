import React, { FC, memo } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ImageCard from '../components/Cards/ImageCard';
import SeeAll from '../components/Typographies/SeeAll';
import CardsGrid from './CardsGrid';
import { ImageCardElement } from '../components/Cards/types';
import { OpenPurchaseDrawer } from '../Hooks/students/usePurchaseDrawer';
import { ClassType } from '../Types';
import NoDataFallback from '../components/Cards/NoDataFallback';

const useStyles = makeStyles({
    root: {
        marginBottom: ({ marginBottom }: any) => (marginBottom ? '8.125rem' : 0),
        padding: ({ padding }: any) => (padding ? '0 3.125rem' : 0),
    },
    titleContainer: {
        marginBottom: '1.875rem',
    },
    title: {
        fontSize: '2.625rem',
        lineHeight: '1.875rem',
        fontWeight: ({ titleBold }: any) => (titleBold ? 500 : 400),
    },
    imageContainerRoot: {
        marginRight: '3.125rem',
        '&:last-child': {
            marginRight: 0,
        },
    },
});

interface IRecommendedContainer {
    title: string;
    titleBold?: boolean;
    data: ImageCardElement[];
    padding?: boolean;
    link?: string;
    cardTitleLink?: string;
    cardTitleClick?: OpenPurchaseDrawer;
    rootClassName?: string;
    marginBottom?: boolean;
    classType?: ClassType;
}

const RecommendedContainer: FC<IRecommendedContainer> = ({
    title,
    titleBold,
    data,
    padding,
    link,
    cardTitleLink,
    cardTitleClick,
    rootClassName,
    marginBottom,
    classType,
}) => {
    const classes = useStyles({ padding, titleBold, marginBottom });
    return (
        <Grid container direction="column" className={classNames(classes.root, rootClassName)}>
            <Grid container justify="space-between" className={classes.titleContainer}>
                <Typography className={classes.title}>{title}</Typography>
                {link && !!data.length && <SeeAll to={link} />}
            </Grid>
            <CardsGrid>
                <NoDataFallback condition={!!data.length}>
                    {data.map((card, index) => (
                        <ImageCard
                            {...card}
                            key={index}
                            titleLinkTo={cardTitleLink}
                            onTitleClick={cardTitleClick}
                            rootClassName={classes.imageContainerRoot}
                            classType={classType}
                        />
                    ))}
                </NoDataFallback>
            </CardsGrid>
        </Grid>
    );
};

RecommendedContainer.defaultProps = {
    data: [],
    marginBottom: true,
};

export default memo(RecommendedContainer);
