import React, { useEffect, useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { getSchoolAPIcall, updateSchoolAPIcall } from '../../Redux/Actions/schoolAction';
import SchoolBasicInfo from './SchoolBasicInfo';
import SchoolContactInfo from './SchoolContactInfo';
import SocialLinks from './SocialLinks';
import SaveController from '../../components/Dashobard/SaveController';

export const adminContext = React.createContext({});
const AdminProvider = adminContext.Provider;

const Admin: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const schoolInfo = useSelector((state: any) => state.schoolReducer.schoolData);
    const [activeCom, setActiveComp] = useState<number>(0);
    const [state, setState] = useState({
        schoolName: '',
        email: '',
        phoneNumber: '',
        location: '',
        bio: '',
        website: '',
        facebookUrl: '',
        instagramUrl: '',
        twitterUrl: '',
    });
    const schoolNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, schoolName: e.target.value });
    };
    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, email: e.target.value });
    };
    const phoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, phoneNumber: e.target.value });
    };
    const addressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, location: e.target.value });
    };
    const websiteHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, website: e.target.value });
    };
    const fbhandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, facebookUrl: e.target.value });
    };

    const twitterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, twitterUrl: e.target.value });
    };
    const instaHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, instagramUrl: e.target.value });
    };
    const bioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, bio: e.target.value });
    };

    const step1Submit = () => {
        const data = {
            schoolName: state.schoolName,
            location: state.location,
            bio: state.bio,
        };
        dispatch(updateSchoolAPIcall(data));
    };
    const step2Submit = () => {
        const data = {
            phoneNumber: state.phoneNumber,
            email: state.email,
            website: state.website,
        };
        dispatch(updateSchoolAPIcall(data));
    };
    const step3Submit = () => {
        const data = {
            facebookUrl: state.facebookUrl,
            instagramUrl: state.instagramUrl,
            twitterUrl: state.twitterUrl,
        };
        dispatch(updateSchoolAPIcall(data));
    };

    useEffect(() => {
        dispatch(getSchoolAPIcall());
    }, []);
    useEffect(() => {
        let data = { ...state };
        if (schoolInfo) {
            data = {
                schoolName: schoolInfo.schoolName,
                email: schoolInfo.User.email,
                bio: schoolInfo.bio,
                phoneNumber: schoolInfo.phoneNumber,
                location: schoolInfo.location,
                website: schoolInfo.website,
                facebookUrl: schoolInfo.facebookUrl,
                instagramUrl: schoolInfo.instagramUrl,
                twitterUrl: schoolInfo.twitterUrl,
            };
        }

        setState(data);
    }, [schoolInfo]);

    const renderComponent = [<SchoolBasicInfo />, <SchoolContactInfo />, <SocialLinks />];
    const handleComp = (active: number) => {
        setActiveComp(active);
    };
    const handleNext = () => {
        setActiveComp(activeCom + 1);
        if (activeCom === 0) {
            step1Submit();
        } else if (activeCom === 1) {
            step2Submit();
        } else if (activeCom === 2) {
            step3Submit();
        }
    };

    return (
        <div className="admin-page-container">
            <CardContainer>
                <AdminProvider
                    value={{
                        schoolName: schoolNameHandler,
                        address: addressHandler,
                        bio: bioHandler,
                        phone: phoneHandler,
                        email: emailHandler,
                        website: websiteHandler,
                        facebook: fbhandler,
                        instagram: instaHandler,
                        twitter: twitterHandler,
                        basicInfo: {
                            schoolName: state.schoolName,
                            address: state.location,
                            bio: state.bio,
                        },
                        contactInfo: {
                            phone: state.phoneNumber,
                            email: state.email,
                            website: state.website,
                        },
                        socialLinks: {
                            facebook: state.facebookUrl,
                            twitter: state.twitterUrl,
                            instagram: state.instagramUrl,
                        },
                    }}
                >
                    <div className="admin-page">
                        <div className="row w-100">
                            <div className="col-lg-4 mb-4">
                                <div className="information__name__container">
                                    <Typography
                                        className={`title ${activeCom === 0 ? 'active' : ''}`}
                                        onClick={() => handleComp(0)}
                                    >
                                        Basic Information
                                    </Typography>
                                    <Typography
                                        className={`title ${activeCom === 1 ? 'active' : ''}`}
                                        onClick={() => handleComp(1)}
                                    >
                                        Contact Details
                                    </Typography>
                                    <Typography
                                        className={`title ${activeCom === 2 ? 'active' : ''}`}
                                        onClick={() => handleComp(2)}
                                    >
                                        Social Media
                                    </Typography>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                {activeCom < 3 ? renderComponent[activeCom] : renderComponent[activeCom - 1]}
                            </div>
                        </div>
                        <SaveController handleNext={handleNext} visibleAt={2} activeCom={activeCom} />
                    </div>
                </AdminProvider>
            </CardContainer>
        </div>
    );
};

export default Admin;
