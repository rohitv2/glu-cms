import React from 'react';
import { Typography } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import Loader from '../../components/Loader';

interface props {
    handleNext: () => void;
    activeCom: number;
    visibleAt: number;
}
const SaveController: React.FunctionComponent<props> = ({ handleNext, activeCom, visibleAt }) => {
    const loader = useSelector((state: rootReducerType) => state.uiReducer.loader);
    return (
        <div className="controller__bottom">
            <div className="row">
                <div className="col-6">
                    <Typography className="help-support">
                        Read our <Link to="/support"> Help Guide </Link> for support
                    </Typography>
                </div>
                <div className="col-6">
                    {activeCom <= visibleAt &&
                        (loader ? (
                            <div style={{marginRight:"3rem"}} className="arrow__container">
                            <Loader />
                            </div>
                        ) : (
                            <div className="arrow__container" onClick={handleNext}>
                                <Typography className="text">Save</Typography>
                                <ArrowForward className="icon" />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default SaveController;
