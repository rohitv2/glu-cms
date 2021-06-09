import React from 'react';
import { Grid, Box, Typography, makeStyles, Button } from '@material-ui/core';
import classNames from 'classnames';
import { Check, Close } from '@material-ui/icons';
import TabRow from './TabRow';

const useStyle = makeStyles(() => ({
    parentBox: {
        width: '100%',
        padding: '1.875rem',
        background: '#fff',
    },
    textBox:{
        maxWidth: '50%',
        overflow: 'hidden',
        textOverflow: 'ellipse'
    },
    viewName: {
        fontSize: '2.625rem',
        color: '#000',
    },
    box: {
        borderBottom: '1px solid rgba(0,0,0,0.25)',
        paddingTop: '1rem',
        paddingBottom: '1rem',
    },
    title: {
        fontSize: '1.25rem',
        lineHeight: '1.26rem',
        maxHeight: '5rem',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: '#000',
        whiteSpace: 'nowrap'
    },
    subTitle: {
        color: '#5F5F5F',
    },
    icon: {
        fontSize: '1.5rem!important',
        float: 'left',
    },
    buttonContainer: {
        width: '10rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
}));
type dataType = { name: string; date: string; status: string; color?: string };
interface props {
    data?: Array<dataType>;
    showTerm?: boolean;
    showButton?: boolean;
}
const AssignmentDetails: React.FC<props> = ({ data, showTerm, showButton }) => {
    const classes = useStyle();
    return (
        <Box component="div" className={classes.parentBox}>
            <Typography className={classes.viewName}>Business Studies</Typography>
            { showTerm && <TabRow />}
            {data?.map((item: dataType, i: number) => (
                <Grid
                    container
                    key={i}
                    className={classes.box}
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Box component="div" className={classes.textBox}>
                        <Typography className={classes.title}>{item.name}</Typography>
                        <Typography className={classNames(classes.title, classes.subTitle)}>{item.date}</Typography>
                    </Box>
                    <Box className={classes.buttonContainer}>
                        {showButton ? (
                            item.color === '#7fcb4b' ? (
                                <Check style={{ color: item.color }} className={classNames(classes.icon)} />
                            ) : (
                                <Close style={{ color: item.color }} className={classNames(classes.icon)} />
                            )
                        ) : null}
                        {}
                        <Typography className={classes.title}>{item.status}</Typography>
                    </Box>
                </Grid>
            ))}
        </Box>
    );
};

export default AssignmentDetails;
