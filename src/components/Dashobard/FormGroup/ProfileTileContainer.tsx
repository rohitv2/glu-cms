import React from 'react';
import { Grid, Box, Typography, makeStyles } from '@material-ui/core';
import { colors } from '../../../Styles/colors';

const useStyles = makeStyles({
    root: {
        marginTop: '2rem',
    },
    parent: {
        border: `1px solid ${colors.lightGray}`,
        padding: '0.2rem',
        width: 'auto',
        marginRight: '0.5rem',
        marginBottom: '0.5rem',
        cursor: 'pointer',
    },
    title: {
        fontSize: '1.25rem',
        lineHeight: '1.25rem',
        color: colors.black,
        textAlign: 'center',
        padding: '0 1rem',
    },
    image: {
        width: '3.75rem',
        height: '3.75rem',
    },
});

interface props {
    data: any;
    handleDelete: (i: number) => void;
}

const ProfileTileContainer: React.FunctionComponent<props> = ({ data, handleDelete }) => {
    const classes = useStyles();
    return (
        <Grid container alignItems="center" justify="flex-start" className={classes.root}>
            {data.map((item: any, i: number) => (
                <Grid
                    key={i}
                    container
                    alignItems="center"
                    justify="flex-start"
                    className={classes.parent}
                    onClick={() => {
                        handleDelete && handleDelete(i);
                    }}
                >
                    <img className={classes.image} src={item.profile} alt="" />
                    <Typography className={classes.title}>{item.name}</Typography>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProfileTileContainer;
