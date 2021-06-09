import React from 'react';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Loader from '../Loader';

interface props {
    click?: () => void;
}
const AddInviteBtn: React.FunctionComponent<props> = ({ click }) => {
    const loader = useSelector((state: any) => state.uiReducer.loader);
    return (
        <Button form="student-form" disabled={loader} onClick={click} type="submit" className="gray-btn">
            {loader ? <Loader /> : 'Add & Invite'}
        </Button>
    );
};

export default AddInviteBtn;
