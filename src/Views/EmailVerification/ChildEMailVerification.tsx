import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import MadeBy from '../Footer/MadeBy';
import { useLocation, useHistory } from 'react-router';
import Loader from '../../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { childRejectEmailAPIcall } from '../../Redux/Actions/registerAction';

const ChildEMailVerification = () => {
    const [loader, setLoader] = useState(true);
    const [show, setShow] = useState(false);
    const [status, setStatus] = useState('');
    const childStatus = useSelector((state: any) => state.authReducer.childReject);
    const route = useLocation();
    const dispatch = useDispatch();
    const rotuePath = useHistory();
    const redirectToHome = (childStatus: any) => {
        setTimeout(() => {
            setLoader(false);
        }, 1000);
        setTimeout(() => {
            if (childStatus.isStudentAlreadyRegistered) {
                rotuePath.push('/login');
            } else {
                if (childStatus.hasOwnProperty('isStudentAlreadyRegistered')) {
                    rotuePath.push(`/signup?ref=${childStatus.token}`);
                }
            }
        }, 5000);
    };
    useEffect(() => {
        const url = route.search;
        const query = new URLSearchParams(url);
        const token = query.get('ref');
        const status = query.get('status');
        if (token) {
            setShow(true);
            const data = {
                token,
                status,
            };
            dispatch(childRejectEmailAPIcall(data));
        }
    }, []);
    useEffect(() => {
        if (childStatus) {
            setStatus(childStatus.status);
            redirectToHome(childStatus);
        }
    }, [childStatus]);
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
                            {status === 'Approved'
                                ? 'You have accepted the invitation successfully.'
                                : 'You have rejected the invitation successfully.'}
                        </Typography>
                        <Typography variant="h1" className="sub-heading">
                            Your status has been confirmed.
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

export default ChildEMailVerification;
