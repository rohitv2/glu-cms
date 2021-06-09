import React from 'react';
import CardContainer from '../../../Containers/Cards/CardContainer';
import CardTable from '../../Table/CardTable';
import TableUserProfile from '../TableUserProfile';
import ActionToolbar from '../ActionToolbar';
import commonImg from '../../../Assets/images';
import TableFilter from './TableFilter';

interface props {
    redirectDetails: (value: any) => void;
    handleDelete: (value: any) => void;
    handleEdit: (value: any) => void;
    showFilter: boolean;
}
const UserTable: React.FunctionComponent<props> = ({ redirectDetails, handleDelete, handleEdit, showFilter }) => {
    return (
        <CardContainer>
            <div className="student-table">
                {showFilter ? <TableFilter /> : null}

                <div className="table__container">
                    <CardTable
                        showToolbar={false}
                        showPagination={true}
                        selectable={true}
                        tableHeight="100vh"
                        columns={[
                            {
                                width: '23%',
                                title: 'Name',
                                field: 'name',
                                render: (rowData: any) => (
                                    <TableUserProfile name={rowData.name} profile={rowData.profile} />
                                ),
                            },
                            {
                                width: '23%',
                                title: 'Student ID',
                                field: 'studentId',
                            },
                            {
                                width: '23%',
                                title: 'Year Group',
                                field: 'yearGroup',
                            },
                            {
                                width: '23%',
                                title: 'Form Group',
                                field: 'formGroup',
                            },

                            {
                                width: '23%',
                                title: 'Action',
                                field: 'action',
                                render: (rowData: any) => (
                                    <ActionToolbar
                                        showDetail={true}
                                        showDelete={false}
                                        showEdit={true}
                                        detailClick={() => redirectDetails(rowData.id)}
                                        deleteClick={() => handleDelete(rowData.id)}
                                        editClick={() => handleEdit(rowData)}
                                    />
                                ),
                            },
                        ]}
                        rowData={[
                            {
                                name: 'Jenny Smith',
                                profile: commonImg.photo,
                                studentId: 'XC9382',
                                yearGroup: '1',
                                formGroup: 'A',
                            },
                            {
                                name: 'Jenny Smith',
                                profile: commonImg.photo,
                                studentId: 'XC9382',
                                yearGroup: '1',
                                formGroup: 'A',
                            },
                            {
                                name: 'Jenny Smith',
                                profile: commonImg.photo,
                                studentId: 'XC9382',
                                yearGroup: '1',
                                formGroup: 'A',
                            },
                            {
                                name: 'Jenny Smith',
                                profile: commonImg.photo,
                                studentId: 'XC9382',
                                yearGroup: '1',
                                formGroup: 'A',
                            },
                            {
                                name: 'Jenny Smith',
                                profile: commonImg.photo,
                                studentId: 'XC9382',
                                yearGroup: '1',
                                formGroup: 'A',
                            },
                        ]}
                    />
                </div>
            </div>
        </CardContainer>
    );
};

export default UserTable;
