import React, { useEffect, useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import commonImg from '../../Assets/images';
import { Typography } from '@material-ui/core';
import PaymentDetailsTable from './PaymentDetailsTable';
import StudentFeeTable from './StudentFeeTable';
import ChildDetailsContainer from './ChildDetailsContainer';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getParentDetailsAPIcall } from '../../Redux/Actions/parentAction';
import { parentDetailsTypes } from '../../Interfaces/parentModule';

const ParentDetails: React.FunctionComponent = () => {
    const parentInfo = useSelector((state: any) => state.parentReducer.parentDetails);
    const [details, setDetails] = useState<parentDetailsTypes>({
        name: '',
        email: '',
        phoneNumber: '',
        profile: '',
    });
    const routes = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        if (routes.hasOwnProperty('state')) {
            if ((routes as any).state.hasOwnProperty('id')) {
                dispatch(getParentDetailsAPIcall((routes as any).state.id));
            }
        }
    }, []);
    useEffect(() => {
        if (parentInfo) {
            const parentDetls = parentInfo.guardians[0];
            const data = {
                name: parentDetls.first_name + ' ' + parentDetls.last_name,
                email: parentDetls.User.email,
                phoneNumber: parentDetls.User.phoneNumber,
                profile: commonImg.photo,
            };
            setDetails(data);
        }
    }, [parentInfo]);
    return (
        <div className="details-wrapper">
            <CardContainer>
                <div className="details-container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="profile-pic">
                                <img src={details.profile} />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="information-container">
                                <Typography className="heading">{details.name}</Typography>
                                <Typography className="title">{details.phoneNumber}</Typography>
                                <Typography className="title">{details.email}</Typography>
                                <Typography className="title">2666 Junior Avenue, Atlanta, GA, 30303</Typography>
                            </div>
                            <div className="divider"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-10">
                            <ChildDetailsContainer />
                            <div className="divider"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-5">
                            <div className="data-container">
                                <StudentFeeTable />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <PaymentDetailsTable />
                        </div>
                    </div>
                </div>
            </CardContainer>
        </div>
    );
};

export default ParentDetails;
