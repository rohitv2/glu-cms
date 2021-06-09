import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import PdBox from '../../Containers/Cards/PdBox';
import { Typography, makeStyles, Grid } from '@material-ui/core';
import { colors } from '../../Styles/colors';
import TextAreaWithLabel from '../../components/Inputs/TextAreaWithLabel';
import LineDivider from '../../components/Dashobard/LineDivider';
import OutlineButton from '../../components/Button/OutlineButton';

const useStyles = makeStyles({
    heading: {
        fontSize: '2.625rem',
        lineHeight: '3.125rem',
        color: colors.black,
        marginBottom: '3rem',
    },
    title: {
        fontSize: '1.875rem',
        lineHeight: '1.937rem',
        color: colors.black,
    },
    subTitle: {
        fontSize: '1.5rem',
        lineHeight: '1.937rem',
        color: colors.black,
    },
    from: {
        fontSize: '1rem',
        lineHeight: '2rem',
        color: colors.black,
        '& span': {
            color: colors.darkGray,
        },
    },
});
const Communication = () => {
    const classes = useStyles();
    return (
        <CardContainer>
            <PdBox>
                <Typography className={classes.heading}>Communications</Typography>
                <Grid container spacing={0}>
                    <Grid xs={12} md={5}>
                        <Typography className={classes.title}>06/02/2020</Typography>
                        <Typography className={classes.subTitle}> Term 1 Report</Typography>
                    </Grid>
                    <Grid xs={12} md={7}>
                        <Typography className={classes.from}>
                            From <span>Jenny Smith</span>
                        </Typography>
                        <TextAreaWithLabel label="Details" rows={5} />
                    </Grid>
                    <LineDivider mt="2rem" mb="2rem" />
                    <Grid xs={12} md={5}>
                        <Typography className={classes.title}>06/02/2020</Typography>
                        <Typography className={classes.subTitle}> Term 1 Report</Typography>
                    </Grid>
                    <Grid xs={12} md={7}>
                        <TextAreaWithLabel label="Details" rows={5} />
                        <div className="py-3"></div>
                        <OutlineButton text="PDF" />
                    </Grid>
                </Grid>
            </PdBox>
        </CardContainer>
    );
};

export default Communication;
