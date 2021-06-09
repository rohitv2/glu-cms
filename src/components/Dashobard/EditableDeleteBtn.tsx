import React from 'react';
import { IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

interface props{
    editable?:boolean
    click: ()=> void
}
const EditableDeleteBtn: React.FunctionComponent<props> = ({editable, click}) => {
    return (
        <>
            {editable ? null : (
                <IconButton onClick={click} className="button-container delete-btn">
                    <Delete className="icon-btn" />
                </IconButton>
            )}
        </>
    );
};

export default EditableDeleteBtn;
