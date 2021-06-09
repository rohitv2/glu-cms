import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import classNames from 'classnames';
import useDetails from '../../Hooks/tutor/useDetails';
import { resetTokenAndLocalStorage } from '../../Utility/API';

interface ITutorOptions {
    colorWhite?: boolean;
    customClass?: string;
    tutorProfileText?: boolean;
    classes: any;
}

const TutorOptions: FC<ITutorOptions> = ({ colorWhite, customClass, tutorProfileText, classes }) => {
    const { firstName } = useDetails();
    const routes = useHistory();
    const logout = () => {
        resetTokenAndLocalStorage();
        routes.push('/')
    }
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Typography
                    style={{
                        fontFamily: 'CircularXXWeb-Book',
                        color: colorWhite ? 'white' : 'black',
                        fontSize: '1rem',
                        lineHeight: '1.875rem',
                        marginRight: '2.8rem',
                        paddingTop: '1rem',
                    }}
                >
                    {firstName}
                </Typography>
                <Typography
                    onClick={logout}
                    className={customClass}
                    style={{
                        fontFamily: 'CircularXXWeb-Book',
                        color: !tutorProfileText ? '#5F5F5F' : '#CFCFCF',
                        fontSize: '1rem',
                        lineHeight: '1.875rem',
                        marginRight: '4.25rem',
                        paddingTop: '1rem',
                        textDecoration: 'none',
                        cursor: 'pointer'
                    }}
                >
                    Sign Out
                </Typography>
                <Typography className={classNames(classes.logo, customClass)}>Glu</Typography>
            </div>
        </>
    )
}

export default TutorOptions
