import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, Container } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

type Props = {
    key: number,
    image: string,
    userName: string,
    onlineStatus: string,
    newMessage?: boolean,
}

const useStyles = makeStyles({
    userContainer: {
        marginTop: "30px"
    },
    imageContainer: {
        height: '42px',
        width: '42px',
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
    onlineDotWithNoOfMsgContainer: {
        position: 'absolute',
        right: 0,
    },
    onlineDotContainer: {
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

    offlineDotContainer: {
        position: 'absolute',
        height: '11px',
        width: '11px',
        marginRight: 0,
        backgroundColor: 'transparent',
        marginTop: 'auto',
        marginBottom: 'auto',
        borderRadius: '50%',
        border: '2px solid darkgrey',
        right: 0,
    },
    noOfMsg: {
        marginTop: '20px',
    }
});



const UserCardSidePanel: FC<Props> = ({ key, image, userName, onlineStatus, newMessage }) => {
    const classes = useStyles();
    return (
        <>
            <Grid className={classes.imageContainer}>
                <img className={classes.image} src={image} />
            </Grid>
            <Grid>
                <Typography className={classes.userName}> {userName}</Typography>
                <Typography className={classes.onlineStatus}>{onlineStatus}</Typography>
            </Grid>
            {
                onlineStatus == 'Offline'
                    ?
                    <Grid className={classes.onlineDotWithNoOfMsgContainer}>
                        <Grid container className={classes.offlineDotContainer} alignItems="center" />
                        {/* <Typography className={classes.noOfMsg}>1 new message</Typography> */}
                    </Grid>
                    :
                    <Grid className={classes.onlineDotWithNoOfMsgContainer}>
                        <Grid container className={classes.onlineDotContainer} alignItems="center" />
                        <Typography className={classes.noOfMsg}>1 new message</Typography>
                    </Grid>
            }
        </>
    )
}

export default UserCardSidePanel;
