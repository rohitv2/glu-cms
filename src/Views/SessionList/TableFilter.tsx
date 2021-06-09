import React, { useEffect, useState } from 'react';
import FormControlInput from '../../components/Form/FormControlInput';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFormGroupById, getAllYearGroup } from '../../Redux/Actions/classAction';
import SelectFieldUnderlineIdValue from '../../components/Inputs/SelectFieldUnderlineIdValue';
import { getAllDepartmentAPIcall } from '../../Redux/Actions/schoolAction';
import { getallTeacherAPIcall } from '../../Redux/Actions/teacherAction';
import { getAllSubjectGroupAPIcall } from '../../Redux/Actions/subjectAction';
import { Grid } from '@material-ui/core';

const initialFilter = {
    yearGroupId: '',
    formGroupId: '',
    teacherId: '',
    departmentId: '',
    subjectId: '',
};

export type dispatchActionType = {
    yearGroupId: string;
    formGroupId: string;
    teacherId: string;
    departmentId: string;
    subjectId: string;
};
interface props {
    searchOnchange?: (e: any) => void;
    searchValue: string;
    dispatchAction?: (data: dispatchActionType) => void;
    //parentCallBack : any;
}
const TableFilter: React.FC<props> = ({ searchOnchange, searchValue, dispatchAction }) => {
    const yearGroupDropdown = useSelector((state: rootReducerType) => state.classReducer.yearGroups);
    const formGroupDropdown = useSelector((state: rootReducerType) => state.classReducer.formGroups);
    const departmentList = useSelector((state: rootReducerType) => state.schoolReducer.departmentList);
    const teachers = useSelector((state: rootReducerType) => state.teacherReducer.teacherList);
    const subjectsDropdown = useSelector((state: rootReducerType) => state.subjectReducer.subjectGroupList);

    const [teacherList, setTeacherList] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [subjectList, setSubjectList] = useState([]);
    const [yearDropdown, setYearDropdown] = useState([]);
    const [formDropdown, setFormDropdown] = useState([]);
    const [state, setState] = useState(initialFilter);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllYearGroup());
        dispatch(getAllDepartmentAPIcall());
        dispatch(getallTeacherAPIcall());
        dispatch(getAllSubjectGroupAPIcall());
    }, []);
    useEffect(() => {
        if (yearGroupDropdown) {
            const data = yearGroupDropdown.map((item: any) => {
                return { id: item.data.id, value: item.data.title };
            });
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
            const data = formGroupDropdown.result.ClassSections.map((item: any) => {
                return { id: item?.Section?.id, value: item?.Section?.sectionName };
            });
            setFormDropdown(data);
        }
    }, [formGroupDropdown]);
    useEffect(() => {
        if (departmentList) {
            const data = departmentList.map((item: any) => {
                return {
                    id: item.data.id,
                    value: item.data.departmentName,
                };
            });
            setDepartments(data);
        }
    }, [departmentList]);
    useEffect(() => {
        if (teachers) {
            const data = teachers.map((element: any) => {
                return {
                    id: element.id,
                    value: element.firstName + ' ' + element.lastName,
                };
            });
            setTeacherList(data);
        }
    }, [teachers]);
    useEffect(() => {
        if (subjectsDropdown) {
            const data: any = [];
            subjectsDropdown.forEach((item: any) => {
                item.Subjects.forEach((subItem: any) => {
                    const tempData = {
                        id: subItem.id,
                        value: subItem.subjectName,
                    };
                    data.push(tempData);
                });
            });
            setSubjectList(data);
        }
    }, [subjectsDropdown]);

    useEffect(() => {
        if (dispatchAction) {
            dispatchAction(state);
        }
    }, [state]);
    const getTableValue = (value: string, LabelName: string) => {
        const data: any = { ...state };
        data[LabelName] = value;
        setState(data);
    };
    useEffect(() => {
        if (
            state.yearGroupId == '-1' ||
            state.formGroupId == '-1' ||
            state.subjectId == '-1' ||
            state.teacherId == '-1' ||
            state.departmentId == '-1'
        ) {
            setState(initialFilter);
            searchOnchange && searchOnchange('');
        }
    }, [state]);
    return (
        <div className="filter__column__box">
            <Grid container>
                <Grid item md={3}>
                    <SelectFieldUnderlineIdValue
                        className="custom-sm-txt-dashbord"
                        label="Subject"
                        options={subjectList}
                        clearFilter={true}
                        value={state.subjectId}
                        getValue={(value) => {
                            getTableValue(value, 'subjectId');
                        }}
                    />
                </Grid>
                <Grid item md={3}>
                    <div className="ml-4">
                        <SelectFieldUnderlineIdValue
                            className="custom-sm-txt-dashbord"
                            label="Teacher"
                            options={teacherList}
                            clearFilter={true}
                            value={state.teacherId}
                            getValue={(value) => {
                                getTableValue(value, 'teacherId');
                            }}
                        />
                    </div>
                </Grid>
                <Grid item md={4}></Grid>
                <Grid item md={2}>
                    <div style={{ paddingTop: '1.3rem' }}>
                        <FormControlInput
                            name=""
                            id=""
                            fullWidth={true}
                            placeholder="Search"
                            value={searchValue}
                            icon={<i className="icon-Search_Nav" />}
                            onChange={searchOnchange}
                        />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default TableFilter;
