import React, { FC, memo } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ImageCard from '../components/Cards/ImageCard';
import SeeAll from '../components/Typographies/SeeAll';
import CardsGrid from './CardsGrid';
import { ImageCardElement } from '../components/Cards/types';
import {Link} from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        marginBottom: '8.125rem',
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

interface IBottomRecommendedContainer {
    title: string;
    titleBold?: boolean;
    data: ImageCardElement[];
    padding?: boolean;
    link: string;
    rootClassName?: string;
}

const RecommendedContainer: FC<IBottomRecommendedContainer> = ({
    title,
    titleBold,
    data,
    padding,
    link,
    rootClassName,
}) => {
    const classes = useStyles({ padding, titleBold });
    return (
        <Grid container direction="column" className={classNames(classes.root, rootClassName)}>
            <Grid container justify="space-between" className={classes.titleContainer}>
                <Typography className={classes.title}>{title}</Typography>
                <SeeAll to={link} />
            </Grid>
            <CardsGrid>
                {data.map((card, index) => (
                    <Link to="/parent/tutors/tutor" style={{textDecoration: "none", color:"black"}}> 
                         <ImageCard {...card} key={index} rootClassName={classes.imageContainerRoot} />
                    </Link>
                ))}
            </CardsGrid>
        </Grid>
    );
};

RecommendedContainer.defaultProps = {
    data: [],
};

export default memo(RecommendedContainer);
