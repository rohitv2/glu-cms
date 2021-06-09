import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import ViewerOverlay from './ViewerOverlay';
import SmallImageText from './SmallImageText';
import ListSession from './ListSession';
import { useHistory } from 'react-router';
import moment from 'moment';

const useStyle = makeStyles(() => ({
    rootParent: {
        borderLeft: '1px solid #e7e7e7',
        paddingLeft: '1rem',
        paddingRight: '1rem',
    },
    heading: {
        fontSize: '3.125rem',
        lineHeight: '3.125rem',
        color: '#000',
        width: '30rem',
        marginTop: '2rem',
        marginBottom: '4rem',
    },
    icon: {
        fontSize: '1rem',
        marginBottom: '0.5rem',
        marginRight: '1rem',
    },
    mediumImg: {
        width: '15.937rem',
        maxHeight: '12.187rem',
        marginRight: '2rem',
    },
    mediumTitle: {
        fontSize: '1.875rem',
        lineHeight: '1.875rem',
        color: '#000',
    },
    mediumSmallTitle: {
        fontSize: '1.25rem',
        color: '#5F5F5F',
    },
    mediumSubTitle: {
        fontSize: '1.562rem',
        lineHeight: '1.562rem',
    },
    mediumBottomText: {
        fontSize: '1.562rem',
        lineHeight: '1.562rem',
        color: '#000',
        marginTop: '4rem',
    },
}));

interface props {
    sessionData: any;
}

const SessionRightPart: React.FC<props> = ({ sessionData }) => {
    const classes = useStyle();
    const routes = useHistory();
    const handleRoute = (data:any) => {
        routes.push({ pathname: '/watch-session', state:{specData: data, fullData: sessionData }});
    };
    // const featuredCardContent = () => {
    //     if (filterSessionData[0] !== undefined) {
    //         let content = filterSessionData[0];
    //         return content;
    //     } else {
    //         return false;
    //     }
    // };
    // const featuredCardStudent = () => {
    //     if (filterSessionData[0] !== undefined) {
    //         let student = filterSessionData[0].SectionStudents;
    //         return student;
    //     } else {
    //         return false;
    //     }
    // };
    return (
        <Box component="div" className={classes.rootParent}>
            <Typography className={classes.heading}>{sessionData.length ? sessionData[0].date : ''}</Typography>
            {sessionData.length>0 ? (
                <React.Fragment>
                    <SmallImageText
                        imgwidth="15.937rem"
                        imgHeight="12.187rem"
                        fontSize="1.875rem"
                        titleFontSize="1.25rem"
                        marginTop="4rem"
                        click={()=>handleRoute(sessionData[0])}
                        data={sessionData.length ? sessionData[0]: {}}
                    />
                    {/* <ViewerOverlay mt="2rem" studentList={[1, 1, 1, 1, 1, 1]} /> */}
                </React.Fragment>
            )
        :
        <Typography>No Session Running</Typography>
        }

            <ListSession sessionData={sessionData.slice(1, sessionData.length)} />
        </Box>
    );
};

export default SessionRightPart;
