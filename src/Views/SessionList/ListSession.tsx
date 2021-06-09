import React from 'react';
import { Box, makeStyles, Grid } from '@material-ui/core';
import SmallImageText from './SmallImageText';
import { useHistory } from 'react-router';
import {v4 as uuidv4} from "uuid";

const useStyles = makeStyles({
    parent: {
        borderTop: '1px solid  #e7e7e7',
        paddingTop: '3rem',
        paddingBottom: '3rem',
    },
});

interface props {
    sessionData: any;
}

const ListSession: React.FC<props> = ({ sessionData }) => {
    const history = useHistory();
    const classes = useStyles();
    return (
        <React.Fragment>
            {sessionData &&
                sessionData.map((data: any) => (
                    <Box
                        key={uuidv4()}
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                            history.push({
                                pathname: '/watch-session',
                                state: { specData: data, fullData: sessionData },
                            });
                        }}
                        component="div"
                        className={classes.parent}
                    >
                        <Grid container spacing={0}>
                            <Grid item xs={8}>
                                <SmallImageText
                                    imgwidth="9.75rem"
                                    imgHeight="9.25rem"
                                    fontSize="1.375rem"
                                    titleFontSize="1.125rem"
                                    marginTop="0.5rem"
                                    data={data}
                                />
                            </Grid>
                            <Grid container item xs={4} direction="row" alignItems="flex-start" justify="flex-end">
                                {/* <ViewerOverlay mt="0.8rem" studentList={[1,1,1,1,1,1]} /> */}
                            </Grid>
                        </Grid>
                    </Box>
                ))}
        </React.Fragment>
    );
};

export default ListSession;
