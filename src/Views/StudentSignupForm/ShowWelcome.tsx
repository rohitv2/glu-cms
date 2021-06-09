import { makeStyles, Typography } from '@material-ui/core';

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import NavigationMenu from '../../components/NavigationMenu';
import WelcomeText from '../../components/WelcomeText';
import { resetChildToken, sendVerififcationEmailAPIcall } from '../../Redux/Actions/registerAction';
import { colors } from '../../Styles/colors';

const useStyles = makeStyles({
    title: {
        fontSize: '1rem',
        color: colors.white,
        marginLeft: '1.9rem',
    },
    link: {
        color: '#B4CBFF',
        marginLeft: '2px',
    },
});

const ShowWelcome = () => {
    const classes = useStyles();
    const routes = useLocation();
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const [identity, setIdentity] = useState('');
    useEffect(() => {
        if (routes.hasOwnProperty('state')) {
            if ((routes as any)?.state?.hasOwnProperty('userName')) {
                const getState = (routes as any).state;
                setName(getState?.userName);
                setIdentity(getState?.emailData?.whoIam);
                if (getState?.emailData?.whoIam === 'parent') {
                    const getToken = getState?.emailData?.token.split('Bearer ')[1];
                    const data = {
                        email: getState?.emailData?.email,
                        token: getToken,
                    };
                    dispatch(sendVerififcationEmailAPIcall(data));
                    getState?.emailData?.childToken.map((token: any, i: number) => {
                        if (token) {
                            const data = {
                                email: getState.emailData.child[i].email,
                                token: token.split('Bearer ')[1],
                                parent: {
                                    name: getState?.userName,
                                },
                            };
                            dispatch(sendVerififcationEmailAPIcall(data));
                            if (i === getState?.emailData?.childToken.length - 1) {
                                setTimeout(() => {
                                    dispatch(resetChildToken());
                                }, 100);
                            }
                        }
                    });
                } else {
                    const getToken = getState?.emailData?.token.split('Bearer ')[1];
                    const data = {
                        email: getState?.emailData?.email,
                        token: getToken,
                    };
                    dispatch(sendVerififcationEmailAPIcall(data));
                }
            }
        }
    }, []);
    return (
        <NavigationMenu background="transparent" colorWhite absolute>
            <div className="signup__setup welcome__page">
                <WelcomeText title={`Thank You ${name}!`} />
            </div>
            {identity === 'teacher' ? (
                <Typography className={classes.title}>
                    Please verify your email and we will let you know as soon as we have verified your documents
                </Typography>
            ) : (
                <Typography className={classes.title}>
                    Please verify your email address to
                    <Link to="/login" className={classes.link}>
                        Sign In
                    </Link>
                </Typography>
            )}
        </NavigationMenu>
    );
};

export default ShowWelcome;
