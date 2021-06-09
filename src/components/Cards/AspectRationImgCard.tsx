import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const useStyles = makeStyles({
    root: {
        height: 'fit-content',
        position: 'relative',
        paddingTop: ({ ratio }: any) => ratio,
        '& span, img': {
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
        },
    },
    contentContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
    },
});

interface IAspectRatioImgCard {
    ratio: string;
    img?: string;
    alt?: string;
    rootClassName?: string;
    content?: ReactNode;
    icon?: ReactNode;
}

const AspectRatioImgCard: FC<IAspectRatioImgCard> = ({ ratio, img, alt = 'preview', rootClassName, content, icon }) => {
    const classes = useStyles({ ratio });
    return (
        <Grid container className={classNames(classes.root, rootClassName)}>
            {icon}
            {content ? (
                <Grid container className={classes.contentContainer}>
                    {content}
                </Grid>
            ) : (
                <LazyLoadImage effect="blur" src={img} alt={alt} />
            )}
        </Grid>
    );
};

export default AspectRatioImgCard;
