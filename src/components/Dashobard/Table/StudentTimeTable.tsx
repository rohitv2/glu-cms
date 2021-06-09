import React from 'react';
import CardTable from '../../Table/CardTable';
import { Typography } from '@material-ui/core';
import TitleCardContainer from '../UserDetails/TitleCardContainer';


interface props{
    data: any,
    tableName: string
}
const StudentTimeTable: React.FunctionComponent<props> = ({data, tableName}) => {
    return (
        <div className="time__table">
            <Typography className="sub_heading">{tableName}</Typography>
             <CardTable
                        showToolbar={false}
                        showPagination={false}
                        columns={[
                            {
                                width: '15%',
                                title: 'Sunday',
                                field: 'sunday',
                                render: (rowData:any) => <TitleCardContainer data={rowData.routine}/>,
                            },
                            {
                                width: '15%',
                                title: 'Monday',
                                field: 'monday',
                                render: (rowData:any) => <TitleCardContainer data={rowData.routine}/>,
                            },
                            {
                                width: '15%',
                                title: 'Tuesday',
                                field: 'tuesday',
                                render: (rowData:any) => <TitleCardContainer data={rowData.routine}/>,
                            },
                            {
                                width: '15%',
                                title: 'Wednesday',
                                field: 'wednesday',
                                render: (rowData:any) => <TitleCardContainer data={rowData.routine}/>,
                            },
                            {
                                width: '15%',
                                title: 'Thursaday',
                                field: 'thursaday',
                                render: (rowData:any) => <TitleCardContainer data={rowData.routine}/>,
                            },
                            {
                                width: '15%',
                                title: 'Friday',
                                field: 'friday',
                                render: (rowData:any) => <TitleCardContainer data={rowData.routine}/>,
                            },
                            {
                                width: '75%',
                                title: 'Saturday',
                                field: 'saturday',
                                render: (rowData:any) => <TitleCardContainer data={rowData.routine}/>,
                            },

                        ]}
                        rowData={data}
                    />
        </div>
    );
}

export default StudentTimeTable;
