import React, { FC, memo, useState } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ImageCard from '../components/Cards/ImageCard';
import SeeAll from '../components/Typographies/SeeAll';
import CardsGrid from './CardsGrid';
import SlidingDrawerContent from '../components/ClassesDrawer/SlidingDrawerContent';
import Drawer from  '../components/ClassesDrawer/Drawer';
import { ImageCardElement } from '../components/Cards/types';

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
        cursor:"pointer",
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

const RecommendedContainerClasses: FC<IBottomRecommendedContainer> = ({
    title,
    titleBold,
    data,
    padding,
    link,
    rootClassName,
}) => {
    const classes = useStyles({ padding, titleBold });
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };
    return (
        <Grid container direction="column" className={classNames(classes.root, rootClassName)}>
            <Grid container justify="space-between" className={classes.titleContainer}>
                <Typography className={classes.title}>{title}</Typography>
                <SeeAll to={link} />
            </Grid>
            <CardsGrid>
                {data.map((card, index) => (
                    <div  onClick={handleDrawer} key={index}>
                         <ImageCard {...card} key={index} rootClassName={classes.imageContainerRoot}style={{ cursor: "pointer" }}/>
                    </div>
                ))}
            </CardsGrid>
            <Drawer
                open={openDrawer}
                onClose={handleDrawer}
                width="68.875rem"
                heading={true}>
                <SlidingDrawerContent />
            </Drawer>
        </Grid>
    );
};

RecommendedContainerClasses.defaultProps = {
    data: [],
};

export default memo(RecommendedContainerClasses);

