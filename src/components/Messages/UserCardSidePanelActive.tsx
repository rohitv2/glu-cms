import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, Container } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

type Props = {
    key: number,
    image: string,
    userName: string,
    onlineStatus: string,
}

const useStyles = makeStyles({
    userContainer: {
        marginTop: "30px"
    },
    imageContainer: {
        height: '162px',
        width: '162px',
        marginTop: '6px',
        marginRight: '25px',
    },
    image: {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
    },
    userName: {
        fontSize: '25px',
        lineHeight: '30px',
    },
    onlineStatus: {
        fontSize: '18px',
        lineHeight: '25px',
        color: '#5F5F5F',
    },
    timeContainer:{
        marginTop: '91px',
        paddingLeft: 0,
    },
    localTime:{
        fontSize: '18px',
        lineHeight: '25px',
        color: 'black',  
    },
    onlineDotContainer:{
        position: 'absolute',
        height: '11px',
        width: '11px',
        marginRight: 0,
        backgroundColor: '#00A800',
        marginTop: 'auto',
        marginBottom: 'auto',
        borderRadius: '50%',
        right: 0,
    },
});



const UserCardSidePanel: FC<Props> = ({ key, image, userName, onlineStatus }) => {
    const classes = useStyles();
    return (
        <>
            <Grid className={classes.imageContainer}>
                <img className={classes.image} src={image} />
            </Grid>
            <Grid >
                <Typography className={classes.userName}> {userName}</Typography>
                <Container className={classes.timeContainer}>
                    <Typography className={classes.localTime}>Local Time</Typography>
                    <Typography className={classes.onlineStatus}>11:24 AM</Typography>
                </Container>

            </Grid>
            <Grid container className={classes.onlineDotContainer} alignItems="center"/>
        </>
    )
}

export default UserCardSidePanel;
