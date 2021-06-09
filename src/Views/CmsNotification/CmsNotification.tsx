import { Box, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import React from 'react';
import UploadMaxSize from '../../components/Button/UploadMaxSize';
import TwoColGrid from '../../components/Dashobard/TwoColGrid';
import SelectWithLabel from '../../components/Inputs/SelectWithLabel';
import TextAreaWithLabel from '../../components/Inputs/TextAreaWithLabel';
import { colors } from '../../Styles/colors';

const useStyles = makeStyles({
    title: {
        fontSize: '1.562rem',
        lineHeight: '1.875rem',
        fontWeight: 500,
        color: colors.black,
    },
    mt: {
        marginTop: '2rem',
    },
    textField:{
        width:'100%',
        marginTop: '1rem',
        '& .MuiInput-input':{
            fontSize: '1.5rem'
        }
    }
});

const CmsNotification = () => {
    const classes = useStyles();
    const handleFile = (file: File) => {};
    return (
        <TwoColGrid titleOne="New message">
            <Typography className={classes.title}>Upload Document (Optional)</Typography>
            <UploadMaxSize onClick={handleFile} />
            <TextAreaWithLabel label="Message" rows={8} />
            <Box className={classes.mt}>
                <Typography className={classes.title}>Schedule message (Optional)</Typography>
                <Grid container spacing={2}>
                    <Grid item sm={12} md={4}>
                        <TextField
                            id="date"
                            type="date"
                            defaultValue="2017-05-24"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <TextField
                            id="date"
                            type="date"
                            defaultValue="2017-05-24"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item sm={12} md={4}></Grid>
                </Grid>
            </Box>
        </TwoColGrid>
    );
};

export default CmsNotification;
