import React, { useEffect, useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import AddButton from '../../components/Dashobard/AddButton';
import { Add, MailOutline } from '@material-ui/icons';
import BorderTableContainer from '../../Containers/Dashboard/BorderTableContainer';
import CardTable from '../../components/Table/CardTable';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import { useHistory } from 'react-router';
import FormControlInput from '../../components/Form/FormControlInput';
import { Grid, makeStyles } from '@material-ui/core';
import FormControlSelect from '../../components/Form/FormControlSelect';
import { useDispatch, useSelector } from 'react-redux';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import { getAllYearGroup } from '../../Redux/Actions/classAction';
import { getAllDepartmentAPIcall } from '../../Redux/Actions/schoolAction';
import { getAllClassGropsAPIcall, getSubjectListByFilterAPIcall } from '../../Redux/Actions/subjectAction';

const useStyles = makeStyles({
    inputsContainer: {
        marginBottom: '2.1875rem',
        padding: '1.25rem',
    },
    inputRoot: {
        marginRight: '0.625rem',
    },
});
interface props {
    subjects: any;
}
const initialState = { yearGroupId: '', departmentId: '' };
const SubjectList: React.FunctionComponent<props> = ({ subjects }) => {
    const classes = useStyles();
    const route = useHistory();
    const [searchValue, setSearchValue] = useState('');
    const [subjectList, setSubjectList] = useState<any>([]);

    const handleChangeInput = (e: any) => {
        setSearchValue(e);
    };

    React.useEffect(() => {
        setSubjectList(subjects);
    }, [subjects]);

    React.useEffect(() => {
        if (searchValue === '' || searchValue == null) {
            setSubjectList(subjects);
        } else {
            const searchData = subjects.filter(
                (data: { department: string; class: string; yearGroup: string }) =>
                    data.department.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
                    data.class.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
                    data.yearGroup.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
            );
            setSubjectList(searchData);
        }
    }, [searchValue]);

    const yearGroupOption = [];
    const yearGroup =
        subjects &&
        subjects
            .filter(
                (thing: any, index: any, self: any) =>
                    index === self.findIndex((t: { yearGroup: any }) => t.yearGroup === thing.yearGroup)
            )
            .map((element: { yearGroup: string }) =>
                yearGroupOption.push({ label: element.yearGroup, value: element.yearGroup })
            );

    const departmentOption = [];
    const department =
        subjects &&
        subjects
            .filter(
                (thing: any, index: any, self: any) =>
                    index === self.findIndex((t: { department: any }) => t.department === thing.department)
            )
            .map((element: { department: string }) =>
                departmentOption.push({ label: element.department, value: element.department })
            );

    const yearGroupDropdown = useSelector((state: rootReducerType) => state.classReducer.yearGroups);
    const departmentDropdown = useSelector((state: rootReducerType) => state.schoolReducer.departmentList);

    const [yearDropdown, setYearDropdown] = useState([]);
    const [depDropdown, setDepDropdown] = useState([]);
    const [state, setState] = useState(initialState);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllYearGroup());
        dispatch(getAllDepartmentAPIcall());
    }, []);
    useEffect(() => {
        if (yearGroupDropdown) {
            const data = yearGroupDropdown.map((item: any) => {
                return { value: item.data.id, label: item.data.title };
            });
            data.unshift({ value: '', label: 'Clear Filter' });
            setYearDropdown(data);
        }
    }, [yearGroupDropdown]);

    useEffect(() => {
        if (departmentDropdown) {
            const data = departmentDropdown.map((item: any) => {
                return {
                    value: item.data.id,
                    label: item.data.departmentName,
                };
            });
            data.unshift({ value: '', label: 'Clear Filter' });
            setDepDropdown(data);
        }
    }, [departmentDropdown]);

    useEffect(() => {
        dispatch(getSubjectListByFilterAPIcall(state.yearGroupId, state.departmentId));
    }, [state]);

    const handleRoute = () => {
        route.push('/dashboard/class-group/add-class-group');
    };

    const handleEdit = (data: any) => {
        route.push({
            pathname: '/dashboard/class-group/add-class-group',
            state: {
                details: data,
            },
        });
    };

    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>, labelName: string) => {
        const data: any = { ...state };
        data[labelName] = e.target.value;
        setState(data);
        if (e.target.value === '') {
            setState(initialState);
            dispatch(getAllClassGropsAPIcall());
        }
    };

    const redirectDetails = (data: any) => {
        route.push({ pathname: '/dashboard/class-groups/class-group-details', state: { details: data } });
    };

    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton
                    title="Class Groups"
                    btnTitle="New Class Group"
                    component="notification"
                    showNotification={true}
                    notificationText="Send notification"
                    notificationIcon={<MailOutline />}
                    btnIcon={<Add />}
                    trigger={handleRoute}
                />
            </CardContainer>

            <CardContainer>
                <BorderTableContainer>
                    <Grid container justify="space-between" className={classes.inputsContainer}>
                        <Grid container item xs={6}>
                            <FormControlSelect
                                placeholder="Year Group"
                                value={state.yearGroupId}
                                name=""
                                options={yearDropdown}
                                onChange={(e) => {
                                    handleFilter(e, 'yearGroupId');
                                }}
                                variant="outlined"
                                rounded
                                rootClassName={classes.inputRoot}
                            />

                            <FormControlSelect
                                placeholder="Department"
                                value={state.departmentId}
                                name=""
                                options={depDropdown}
                                onChange={(e) => {
                                    handleFilter(e, 'departmentId');
                                }}
                                variant="outlined"
                                rounded
                            />
                        </Grid>
                        <Grid container justify="flex-end" item xs={6}>
                            <FormControlInput
                                id=""
                                name=""
                                value={searchValue}
                                placeholder="Search"
                                onChange={(e) => {
                                    handleChangeInput(e.target.value);
                                }}
                                variant="outlined"
                                rounded
                                fullWidth={false}
                                icon={<i className="icon-Search_Nav" />}
                            />
                        </Grid>
                    </Grid>
                    <CardTable
                        showToolbar={false}
                        showPagination={true}
                        selectable={true}
                        tableHeight="100vh"
                        columns={[
                            {
                                width: '40%',
                                title: 'Class',
                                field: 'class',
                            },
                            {
                                width: '15%',
                                title: 'No.of Children',
                                field: 'children',
                            },

                            {
                                width: '15%',
                                title: 'Year Group',
                                field: 'yearGroup',
                            },
                            {
                                width: '23%',
                                title: 'Teacher',
                                field: 'teacher',
                            },
                            {
                                width: '23%',
                                title: 'Department',
                                field: 'department',
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
                                        detailClick={() => redirectDetails(rowData)}
                                        // deleteClick={() => handleDelete(rowData.id)}
                                        editClick={() => handleEdit(rowData)}
                                    />
                                ),
                            },
                        ]}
                        rowData={subjectList}
                    />
                </BorderTableContainer>
            </CardContainer>
        </div>
    );
};

export default SubjectList;
