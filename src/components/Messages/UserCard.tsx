import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
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
});

const UserCard: FC<Props> = ({ key, image, userName, onlineStatus }) => {
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
        </>
    )
}

export default UserCard;
