import React from 'react';
import { Typography } from '@material-ui/core';
interface props {
    firstButton?: string;
    secondButton?: string;
    clickHandler?:any;
}
const AddCancelButton: React.FunctionComponent<props> = ({ firstButton, secondButton,clickHandler }) => {
    return (
        <>
            <div className="reusable_addCancel_subcontainer">
                <div className="add_button" onClick={()=>clickHandler()}>
                    <Typography className="addCanceltext">{firstButton}</Typography>
                </div>
                <div className="cancel_button">
                    <Typography className="addCanceltext">{secondButton}</Typography>
                </div>
            </div>
        </>
    );
};
export default AddCancelButton;
