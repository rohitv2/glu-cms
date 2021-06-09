import React, { FC } from 'react';
import { Typography} from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: "100%",
        marginTop: "2.75rem",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    redDot:{
        color: 'red',
        width: '20px',
    },
    inputLabel: {
        fontSize: "1.562rem",
        lineHeight: "1.875rem",
        color: "#000000",
    },
    selectLabel: {
        fontSize: "1.562rem",
    },
    container: {
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
        fontFamily: 'CircularXXWeb-Book',
        margin: '0rem',
        paddingLeft: '3.125rem',
        paddingRight: '3.062rem',
        paddingTop: "5.593rem",
    },
    elementsContainer: {
        // height: "90vh",
        // marginTop: "9.25rem",
        marginTop: 0,

    },
    limitedAvailabilityContainer:{
        color: "black",
    },
    limitedAvailabilityText: {
        fontSize: "1.562rem",
        lineHeight: "1.875rem",
    },

    rightText: {
        color: "black",
        fontSize: "2.625rem",
        lineHeight: "2.812rem",
    },
    form: {
        marginTop: "0rem",
    }
}));

const ParentIndividualTutorBanner: FC = () => {
    const classes = useStyles();
    const [subject, setSubject] = React.useState("");
    const [date, setDate] = React.useState("");
    const [startTime, setStartTime] = React.useState("");
    const [endTime, setEndTime] = React.useState("");

    const handleChangeSubject = (event) => {
        setSubject(event.target.value);
    };

    const handleChangeDate = (event) => {
        setDate(event.target.value);
    };


    const handleChangeStartTime = (event) => {
        setStartTime(event.target.value);
    };


    const handleChangeEndTime = (event) => {
        setEndTime(event.target.value);
    };

    return (
        <Grid container className={classes.container}>
            <Grid container className={classes.elementsContainer} spacing={4}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Grid item container lg={6} md={6} sm={6}>
                        <Grid item lg={1} md={1} sm={1} xs={1}>
                            <FiberManualRecordIcon className={classes.redDot} />
                        </Grid>
                        <Grid item lg={11} md={11} sm={11} xs={10} className={classes.limitedAvailabilityContainer}>
                            <Typography className={classes.limitedAvailabilityText}>Limited Availability</Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item container lg={6}>
                    <Typography className={classes.rightText}>
                        I am an American author, life coach, and philanthropist. Known for my infomercials, seminars, and self-help books including the books Unlimited Power and Awaken the Giant Within. In 2015 and 2016 I was listed on the Worth Magazine Power 100 list.
                    </Typography>
                    <Grid item direction="column" className={classes.form} lg={6} spacing={2}>
                        <Grid item xs={12} sm={12} md={12}>
                            <FormControl className={classes.formControl}>
                                <Typography className={classes.inputLabel}> Student </Typography>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={subject}
                                    IconComponent={ExpandMoreIcon}
                                    onChange={handleChangeSubject}
                                    fullWidth
                                >
                                    <MenuItem value={10}>Maths</MenuItem>
                                    <MenuItem value={20}>English</MenuItem>
                                    <MenuItem value={30}>Science</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <FormControl className={classes.formControl}>
                            <Typography className={classes.inputLabel}> Date </Typography>
                                <Select
                                    labelId="demo-simple-select-label"
                                    IconComponent={CalendarTodayIcon}
                                    id="demo-simple-select"
                                    value={date}
                                    onChange={handleChangeDate}
                                    fullWidth
                                >
                                    <MenuItem value={10}>10/07/20</MenuItem>
                                    <MenuItem value={20}>11/07/20</MenuItem>
                                    <MenuItem value={30}>12/07/20</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid container item lg={12} md={12} sm={12} spacing={1}>
                            <Grid item xs={12}>
                                <FormControl className={classes.formControl}>
                                <Typography className={classes.inputLabel}> Start Time </Typography>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        IconComponent={ExpandMoreIcon}
                                        id="demo-simple-select"
                                        value={startTime}
                                        onChange={handleChangeStartTime}
                                        fullWidth
                                    >
                                        <MenuItem value={10}>10:00 AM</MenuItem>
                                        <MenuItem value={20}>11:00 AM</MenuItem>
                                        <MenuItem value={30}>12:00 AM</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl className={classes.formControl}>
                                <Typography className={classes.inputLabel}> End Time </Typography>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        IconComponent={ExpandMoreIcon}
                                        id="demo-simple-select"
                                        value={endTime}
                                        onChange={handleChangeEndTime}
                                        fullWidth
                                    >
                                        <MenuItem value={10}>12:30 PM</MenuItem>
                                        <MenuItem value={20}>01:30 PM</MenuItem>
                                        <MenuItem value={30}>02:30 PM</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item lg={6} md={6} xs={12}>
                            <div className="child__purchase__item" style={{marginTop: "4.75rem"}}>
                                <div className="child__purchase">
                                    <div className="child">
                                        <Typography className="subtitle">Child 1</Typography>
                                        <Typography variant="h5">
                                            <ExpandMoreIcon
                                                style={{ fontSize: "3rem" }} />
                                        </Typography>
                                    </div>
                                    <div className="purchase"><Typography className="subtitle">Purchase</Typography></div>
                                </div>
                                <div className="item">
                                    <Typography className="subtitle">AED100</Typography>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ParentIndividualTutorBanner;
