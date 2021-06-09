import React from 'react';
import { Grid, makeStyles, Box, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { colors } from '../../../Styles/colors';

const useStyles = makeStyles({
    parent: {
        padding: '2.437rem 3.125rem',
        marginBottom: '0.65rem',
        backgroundColor: colors.white,
    },
    title: {
        fontSize: '1.562rem',
        lineHeight: '1.875rem',
        color: colors.black,
        fontWeight: 500,
    },
    subtitle: {
        fontSize: '1.125rem',
        lineHeight: '1.562rem',
        color: '#5F5F5F',
        fontWeight: 500,
    },
    imgParent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderLeft: `1px solid ${colors.lightGray}`,
        paddingLeft: '6rem',
    },
    imgHeading: {
        fontSize: '1.562rem',
        lineHeight: '1.875rem',
        color: colors.black,
    },
    imgtitle: {
        fontSize: '1.125rem',
        lineHeight: '1.125rem',
        color: colors.darkGray,
    },
    imgThumb: {
        width: '5rem',
        height: '5rem',
        objectFit: 'cover',
        marginRight: '1rem',
    },
    link: {
        textDecoration: 'none!important',
        fontSize: '1.25rem',
        lineHeight: '1.562rem',
    },
});

interface props {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    linkTo: string;
    personName?: string;
    personTitle?: string;
    image?: string;
    showPerticular?: boolean;
}
const HeadingSubHeadingOneBtn: React.FunctionComponent<props> = ({
    title,
    subtitle,
    buttonText,
    linkTo,
    personName,
    personTitle,
    image,
    showPerticular,
}) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.parent} alignItems="center" justify="space-between">
            <Grid container spacing={0}>
                <Grid item md={3} xs={12} container alignItems="center">
                    <Box component="div">
                        <Typography className={classes.title}>{title}</Typography>
                        <Typography className={classes.subtitle}>{subtitle}</Typography>
                    </Box>
                </Grid>
                <Grid item md={7} xs={12}>
                    {showPerticular && (
                        <Box component="div" className={classes.imgParent}>
                            <img src={image} className={classes.imgThumb} alt="" />
                            <Box>
                                <Typography className={classes.imgHeading}>{personName}</Typography>
                                <Typography className={classes.imgtitle}>{personTitle}</Typography>
                            </Box>
                        </Box>
                    )}
                </Grid>
                <Grid item md={2} xs={12} container alignItems="center" justify="flex-end">
                    <Typography className={classes.link} component={Link} to={linkTo}>
                        {buttonText}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default HeadingSubHeadingOneBtn;
