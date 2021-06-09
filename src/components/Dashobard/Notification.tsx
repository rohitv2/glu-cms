import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import PdBox from '../../Containers/Cards/PdBox';
import { Grid, makeStyles, Typography, Box } from '@material-ui/core';
import { colors } from '../../Styles/colors';
import UploadMaxSize from '../Button/UploadMaxSize';
import TextAreaWithLabel from '../Inputs/TextAreaWithLabel';
import LineDivider from './LineDivider';
import SelectWithLabel from '../Inputs/SelectWithLabel';

const useStyles = makeStyles({
    parent: {
        height: '88vh',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: '1.562rem',
        lineHeight: '1.875rem',
        color: colors.black,
        fontWeight: 500,
    },
    mt: {
        marginTop: '5.67rem',
    },
});

const Notification = () => {
    const classes = useStyles();
    return (
        <Box className={classes.parent}>
            <CardContainer>
                <PdBox>
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={4}>
                            <Typography className={classes.title}>New message</Typography>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography className={classes.title}>Upload Document (Optional)</Typography>
                            <UploadMaxSize onClick={()=>{}} />
                            <TextAreaWithLabel label="Message" rows={5} />
                        </Grid>
                    </Grid>
                    <LineDivider mt="2rem" mb="2rem" />
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={4}></Grid>
                        <Grid item xs={12} md={8}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={5}>
                                    <SelectWithLabel options={[]} fieldName="Schedule message (Optional)" />
                                </Grid>
                                <Grid item xs={12} md={5}>
                                    <div className={classes.mt}>
                                        <SelectWithLabel options={[]} />
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={2}></Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </PdBox>
            </CardContainer>
        </Box>
    );
};

export default Notification;
