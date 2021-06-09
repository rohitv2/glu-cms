import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Grid, Typography, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom'


const useStyles = makeStyles({
    body: {
        paddingTop: '3rem',
    },
    heading: {
        fontSize: '2.625rem',
    },
    dateTutorContainer: {
        display: 'flex',
        width: '21rem',
        justifyContent: 'space-between',
        marginTop: '2rem',
    },
    description: {
        marginTop: '2rem',
        color: '#5F5F5F',
        fontSize: '1.562rem',
    }
})
export default function HomeworkCard() {
    const classes = useStyles();
    return (
        <>
            <Grid className={classes.body}>
                <Link style={{ color: "black", textDecoration: 'none' }} to="all-homework/homework">

                    <Typography className={classes.heading}>Advanced linear alegbra. </Typography>
                    <Typography className={classes.heading}>Maths</Typography>
                </Link>
                <Grid className={classes.dateTutorContainer}>
                    <Typography style={{ fontSize: '1.562rem' }}>Due <br /> 11/08/20</Typography>
                    <Typography style={{ fontSize: '1.562rem' }}>Teacher <br /> Mr J Cole</Typography>
                </Grid>
                <Typography className={classes.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren…</Typography>
                <Divider style={{ marginTop: "4rem" }} />
            </Grid>

            <Grid className={classes.body}>
                <Link style={{ color: "black", textDecoration: 'none' }} to="all-homework/homework">
                    <Typography className={classes.heading}>How chlorophyll absorbs light.  </Typography>
                    <Typography className={classes.heading}>Biology</Typography>
                </Link>
                <Grid className={classes.dateTutorContainer}>
                    <Typography style={{ fontSize: '1.562rem' }}>Due <br /> 03/08/20</Typography>
                    <Typography style={{ fontSize: '1.562rem' }}>Teacher <br />Miss E Bunclark</Typography>
                </Grid>
                <Typography className={classes.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren…</Typography>
                <Divider style={{ marginTop: "4rem" }} />
            </Grid>

            <Grid className={classes.body}>
                <Link style={{ color: "black", textDecoration: 'none' }} to="all-homework/homework">

                    <Typography className={classes.heading}>How to structure narrative in fiction. English </Typography>
                    <Typography className={classes.heading}>English</Typography>
                </Link>
                <Grid className={classes.dateTutorContainer}>
                    <Typography style={{ fontSize: '1.562rem' }}>Due <br /> 03/08/20</Typography>
                    <Typography style={{ fontSize: '1.562rem' }}>Teacher <br /> Miss R Ruskin</Typography>
                </Grid>
                <Typography className={classes.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren…</Typography>
                <Divider style={{ marginTop: "4rem" }} />
            </Grid>


            <Grid className={classes.body}>
                <Link style={{ color: "black", textDecoration: 'none' }} to="all-homework/homework">

                    <Typography className={classes.heading}>Understanding feminine nouns.  </Typography>
                    <Typography className={classes.heading}>French</Typography>
                </Link>
                <Grid className={classes.dateTutorContainer}>
                    <Typography style={{ fontSize: '1.562rem' }}>Overdue <br /> 11/08/20</Typography>
                    <Typography style={{ fontSize: '1.562rem' }}>Teacher <br />  Mr L Parker</Typography>
                </Grid>
                <Typography className={classes.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren…</Typography>
                {/* <Divider style={{ marginTop: "4rem" }} /> */}
            </Grid>

        </>
    )
}
