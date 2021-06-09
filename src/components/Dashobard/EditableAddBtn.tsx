import React from 'react';
import { IconButton } from '@material-ui/core';
import { Add } from '@material-ui/icons';

interface props{
    editable?:boolean
    click: ()=> void
}
const EditableAddBtn: React.FunctionComponent<props> = ({editable, click}) => {
    return (
        <>
            {editable ? null : (
                <IconButton onClick={click} className="button-container">
                    <Add className="icon-btn" />
                </IconButton>
            )}
        </>
    );
};

export default EditableAddBtn;
