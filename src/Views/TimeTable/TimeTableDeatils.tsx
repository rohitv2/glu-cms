import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add } from '@material-ui/icons';
import AddButton from '../../components/Dashobard/AddButton';
import Filters from './Filters';
import CardTable from '../../components/Table/CardTable';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import { useHistory } from 'react-router';
import useGetAllGroup from '../../Hooks/schools/useGetAllGroup';
import { deleteSchoolTimeTable } from '../../Redux/Actions/schoolAction';
import { useDispatch } from 'react-redux';

function TimeTableDeatils({ timeTable }: any) {
    const routes = useHistory();
    const dispatch = useDispatch();
    const { yearGroupDropdownList, departmentListArray } = useGetAllGroup('');
    const [timeTableData, setTimeTableData] = React.useState<any[]>();
    const [filteredTimeTableData, setFilteredTimeTableData] = React.useState<any[]>();
    const [searchValue, setSearchValue] = React.useState('');
    const handleRoutes = () => {
        routes.push({
            pathname: '/dashboard/time-tables/add-timetable-title',
        });
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    React.useEffect(() => {
        if (timeTable) {
            const data = timeTable.map((element: any) => {
                return {
                    title: element.blockName,
                    id: element.id,
                };
            });
            setTimeTableData(data);
        }
    }, [timeTable]);

    React.useEffect(() => {
        if (searchValue === '' || searchValue == null) {
            setFilteredTimeTableData(timeTableData);
        } else {
            const data = timeTableData?.filter((item: any) => {
                if (String(item.title).toLocaleLowerCase().search(searchValue.toLocaleLowerCase()) > -1) {
                    return item;
                }
            });
            setFilteredTimeTableData(data);
        }
    }, [searchValue]);

    const redirectDetails = (rowData: any) => {
        routes.push({
            pathname: '/dashboard/time-tables/time-table-calendar',
            state: {
                timeTableRowData: rowData,
            },
        });
    };

    const deleteTimeTableById = (id: number) => {
        dispatch(deleteSchoolTimeTable(id));
    };

    const handleFilter = (dropdownValue: any) => {
        if (dropdownValue.yearGroup == '' && dropdownValue.department == '') {
            setFilteredTimeTableData(timeTableData);
        } else {
            let data = timeTableData?.filter(
                (element: any) =>
                    element.yearGroupId === dropdownValue.yearGroup || element.department === dropdownValue.department
            );
            if (dropdownValue.department && dropdownValue.yearGroup) {
                data = timeTableData?.filter(
                    (element: any) =>
                        element.yearGroupId === dropdownValue.yearGroup &&
                        element.department === dropdownValue.department
                );
            }
            setFilteredTimeTableData(data);
        }
    };

    return (
        <div>
            <CardContainer>
                <AddButton title="Time Tables" btnIcon={<Add />} btnTitle="New TimeTable" trigger={handleRoutes} />
            </CardContainer>
            <CardContainer>
                <Filters
                    year={yearGroupDropdownList}
                    dep={departmentListArray}
                    searchValue={searchValue}
                    searchOnchange={handleSearchChange}
                    getFilterValue={handleFilter}
                />
                <div className="table__container">
                    <CardTable
                        showToolbar={false}
                        showPagination={true}
                        selectable={true}
                        tableHeight="100vh"
                        columns={[
                            {
                                width: '90%',
                                title: 'Title',
                                field: 'title',
                            },
                           
                            {
                                title: 'Action',
                                render: (rowData: any) => (
                                    <ActionToolbar
                                        showDetail={true}
                                        showDelete={false}
                                        showEdit={true}
                                        detailClick={() => redirectDetails(rowData)}
                                        deleteClick={() => deleteTimeTableById(rowData?.id)}
                                    />
                                ),
                            },
                        ]}
                        rowData={filteredTimeTableData ? filteredTimeTableData : timeTableData}
                    />
                </div>
            </CardContainer>
        </div>
    );
}

export default TimeTableDeatils;
