import React, { useEffect, useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import Grid from '@material-ui/core/Grid';
import { Add, MailOutline } from '@material-ui/icons';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AddButton from '../../components/Dashobard/AddButton';
import { useHistory } from 'react-router';
import CardTable from '../../components/Table/CardTable';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import BorderTableContainer from '../../Containers/Dashboard/BorderTableContainer';
import FormControlSelect from '../../components/Form/FormControlSelect';
import FormControlInput from '../../components/Form/FormControlInput';
import { gotoRoute } from '../../Helper/gotoRoute';
import { useDispatch, useSelector } from 'react-redux';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import {
    getallclassAPIcall,
    getallclassByFilterAPIcall,
    getAllFormGroupById,
    getAllYearGroup,
} from '../../Redux/Actions/classAction';

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
    classList?: any;
}

const initialState = { yearGroupId: '', formGroupId: '' };
const ClassList: React.FunctionComponent<props> = ({ classList }) => {
    const yearGroupDropdown = useSelector((state: rootReducerType) => state.classReducer.yearGroups);
    const formGroupDropdown = useSelector((state: rootReducerType) => state.classReducer.formGroups);
    const [yearDropdown, setYearDropdown] = useState([]);
    const [formDropdown, setFormDropdown] = useState([]);
    const [state, setState] = useState(initialState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllYearGroup());
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
        if (state.yearGroupId !== '') {
            dispatch(getAllFormGroupById(state.yearGroupId));
        }
    }, [state.yearGroupId]);

    useEffect(() => {
        if (formGroupDropdown?.result) {
            const data = formGroupDropdown?.result.ClassSections.map((item: any) => {
                return { value: item?.Section?.id, label: item?.Section?.sectionName };
            });
            data.unshift({ value: '', label: 'Clear Filter' });
            setFormDropdown(data);
        }
    }, [formGroupDropdown]);

    useEffect(() => {
        dispatch(getallclassByFilterAPIcall(state.yearGroupId, state.formGroupId));
    }, [state]);

    const classes = useStyles();
    const routes = useHistory();
    const [searchValue, setSearchValue] = useState('');
    const [yearGroupData, setYearGroupData] = useState<any>([]);

    const handleChangeInput = (e: any) => {
        setSearchValue(e);
    };

    const handleToggler = () => {
        routes.push('/dashboard/year-group/add-year-group');
    };

    const handleEdit = (data: any) => {
        routes.push({
            pathname: '/dashboard/year-group/edit-year-group',
            state: {
                editData: data,
                editMode: true,
            },
        });
    };

    const redirectDetails = (id: number) => {
        routes.push({
            pathname: '/dashboard/year-group/details',
            state: {
                id: id,
            },
        });
    };

    React.useEffect(() => {
        setYearGroupData(classList);
    }, [classList]);

    React.useEffect(() => {
        if (searchValue === '' || searchValue == null) {
            setYearGroupData(classList);
        } else {
            const searchData = classList.filter((data: any) =>
                data.group.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
            );
            setYearGroupData(searchData);
        }
    }, [searchValue]);

    const handleNotification = () => {
        routes.push(gotoRoute.message);
    };

    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>, labelName: string) => {
        const data: any = { ...state };
        data[labelName] = e.target.value;
        setState(data);
        if (e.target.value === '') {
            setState(initialState);
            dispatch(getallclassAPIcall());
        }
    };

    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton
                    title="Year Groups"
                    btnIcon={<Add />}
                    btnTitle="Add Year Group"
                    component="notification"
                    showNotification={true}
                    notificationText="Send notification"
                    notificationIcon={<MailOutline />}
                    notififcationClick={handleNotification}
                    trigger={handleToggler}
                />
            </CardContainer>
            <CardContainer>
                <BorderTableContainer>
                    <Grid container justify="space-between" className={classes.inputsContainer}>
                        <Grid container item xs={6}>
                            <FormControlSelect
                                placeholder="Year Group"
                                name=""
                                value={state.yearGroupId}
                                options={yearDropdown}
                                onChange={(e) => {
                                    handleFilter(e, 'yearGroupId');
                                }}
                                variant="outlined"
                                rounded
                                rootClassName={classes.inputRoot}
                            />
                            <FormControlSelect
                                placeholder="Form Group"
                                name=""
                                value={state.formGroupId}
                                options={formDropdown}
                                onChange={(e) => {
                                    handleFilter(e, 'formGroupId');
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
                                width: '23%',
                                title: 'Group',
                                field: 'group',
                            },
                            {
                                width: '23%',
                                title: 'No.of Children',
                                field: 'children',
                            },

                            {
                                width: '23%',
                                title: 'Form Groups',
                                field: 'formGroup',
                            },
                            {
                                width: '23%',
                                title: 'Head of Year ',
                                field: 'hoy',
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
                                        // deleteClick={() => handleDelete(rowData.id)}
                                        editClick={() => handleEdit(rowData)}
                                    />
                                ),
                            },
                        ]}
                        rowData={yearGroupData}
                    />
                </BorderTableContainer>
            </CardContainer>
        </div>
    );
};

export default ClassList;
