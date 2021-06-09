import React from 'react';
import CardContainer from '../../../Containers/Cards/CardContainer';
import { Add } from '@material-ui/icons';
import AddButton from '../../../components/Dashobard/AddButton';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CardTable from '../../../components/Table/CardTable';
import Switch from '@material-ui/core/Switch';
import { activateDeactivateVideo, getallVideoAPIcall } from '../../../Redux/Actions/superAdminActions';
import OutlineButton from '../../../components/Button/OutlineButton';

interface props {
    videoList: Array<string | number>;
}
const VideoList: React.FunctionComponent<props> = ({ videoList }) => {
    const dispatch = useDispatch();
    const handleDetails = (data: any) => {
    };
    const handleActiveInactive = (id: number) => {
        dispatch(activateDeactivateVideo(id));
        dispatch(getallVideoAPIcall());
    };
    return (
        <div className="student-wrapper">
            <CardContainer>
                <div className="student-table">
                    <div className="table__container">
                        <CardTable
                            width="23rem"
                            showToolbar={true}
                            disableExport={true}
                            showPagination={true}
                            selectable={false}
                            tableHeight="100vh"
                            columns={[
                                {
                                    width: '23%',
                                    title: 'Title',
                                    field: 'title',
                                },
                                {
                                    width: '23%',
                                    title: 'Description',
                                    field: 'description',
                                },
                                {
                                    width: '23%',
                                    title: 'Review',
                                    field: 'phoneNumber',
                                },
                                {
                                    width: '23%',
                                    title: 'Video',
                                    field: 'videoLink',
                                },

                                {
                                    width: '23%',
                                    title: 'Approve/Reject',
                                    render: (rowData: any) => (
                                        <Switch
                                            checked={rowData.isActive}
                                            onChange={() => handleActiveInactive(rowData.id)}
                                            color="primary"
                                            name="checkedB"
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    ),
                                },
                                {
                                    width: '23%',
                                    title: 'View Details',
                                    field: '',
                                    render: (rowData: any) => (
                                        <OutlineButton text="View Details" btnClick={() => handleDetails(rowData)} />
                                    ),
                                },
                            ]} 
                            rowData={videoList}
                        />
                    </div>
                </div>
            </CardContainer>
        </div>
    );
};

export default VideoList;
