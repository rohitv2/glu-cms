import React, { useState } from 'react';
import { MoreHoriz } from '@material-ui/icons';
import { Button } from '@material-ui/core';

interface props {
    detailClick?: () => void;
    editClick?: () => void;
    deleteClick?: () => void;
    showEdit?: boolean;
    showDelete?:boolean;
    showDetail?: boolean;
    renderComponent?: React.ReactNode;
}
const ActionToolbar: React.FunctionComponent<props> = ({
    detailClick,
    deleteClick,
    showDelete,
    showEdit,
    showDetail,
    editClick,
    renderComponent,
}) => {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    };
    const handleHide = () => {
        setShow(false);
    };
    return (
        <div onMouseLeave={handleHide} onClick={handleShow} className="action-container">
            <MoreHoriz />
            <div style={{ display: show ? 'block' : 'none' }} className="action-list">
                <div className="arrow-up"></div>
                <ul>
                    {showDetail && (
                        <li>
                            <Button onClick={detailClick} className="edit-btn" fullWidth>
                                Details
                            </Button>
                        </li>
                    )}
                    {renderComponent}
                    {showEdit && (
                        <li>
                            <Button onClick={editClick} fullWidth>
                                Edit
                            </Button>
                        </li>
                    )}
                    {showDelete && (
                        <li>
                            <Button className="delete-btn" onClick={deleteClick} fullWidth>
                                Delete
                            </Button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ActionToolbar;
