import React, { ReactNode } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Typography, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';

interface props {
    children?: ReactNode;
    modalHandler: () => void;
    title?: string;
}
const ModalBox: React.FunctionComponent<props> = ({ children, modalHandler, title }) => {
    const handler = () => {
        modalHandler();
    };
    return (
        <div className="modal-wrapper">
            <div className="modal-right">
                <CardContainer>
                    <div className="modal-header-container">
                        <div className="header">
                            <Typography className="title">{title}</Typography>
                            <IconButton onClick={handler}>
                                <Close className="icon" />
                            </IconButton>
                        </div>
                    </div>
                    <div className="modal-form-container">{children}</div>
                </CardContainer>
            </div>
        </div>
    );
};

export default ModalBox;
