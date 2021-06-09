import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import MadeBy from '../Footer/MadeBy';
import { useLocation, useHistory } from 'react-router';
import Loader from '../../components/Loader';
import {  useDispatch } from 'react-redux';
import { emailVerificationAPIcall } from '../../Redux/Actions/loginAction';

const EmailVerification = () => {
    const [loader, setLoader] = useState(true);
    const [show, setShow] = useState(false);
    const route = useLocation();
    const dispatch = useDispatch();
    const rotuePath = useHistory();
    const redirectToHome = () =>{
        setTimeout(() => {
            setLoader(false);
        }, 1000);
        setTimeout(()=>{
            rotuePath.push("/")
        },10000)
    }
    useEffect(() => {
        const getToken = route.search.split('ref=');
        if (getToken[1]) {
            setShow(true);
            dispatch(emailVerificationAPIcall(getToken[1], redirectToHome));
        }
    }, []);
    return (
        <div className="email_verification_container">
            <div className="logo-container">
                <Typography className="logo">Glu</Typography>
            </div>
            {loader ? (
                <Loader />
            ) : (
                show && (
                    <div className="center_content">
                        <Typography variant="h1" className="heading">
                            Subscription Verified
                        </Typography>
                        <Typography variant="h1" className="sub-heading">
                            Your email address has been confirmed.
                        </Typography>
                    </div>
                )
            )}
            <div className="footer">
                <MadeBy showTC={true} />
            </div>
        </div>
    );
};

export default EmailVerification;
