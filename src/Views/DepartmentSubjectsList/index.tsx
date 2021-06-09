import React, { useEffect, useState } from 'react';

import Departments from './Departments';
import { useDispatch, useSelector } from 'react-redux';
import { getSubjectListAPIcall, subjectListAPIres } from '../../Redux/Actions/subjectAction';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import { checkValue } from '../../Helper/checkValue';

const index: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const [subjects, setSubjects] = useState([]);
    const subjectList = useSelector((state: rootReducerType) => state.subjectReducer.subjectList);

    useEffect(() => {
        dispatch(getSubjectListAPIcall());
        return ()=> {
            dispatch(subjectListAPIres(null));
        }
    }, []);
    useEffect(() => {
        if (subjectList) {
            const data: any = [];
            subjectList.forEach((item: any) => {
                item.Subjects.forEach((subItem: any) => {
                    const tempData = {
                        subjectId: checkValue(subItem.id),
                        departmentId: checkValue(item.id),
                        departmentName: checkValue(item.departmentName),
                        subjectName: checkValue(subItem.subjectName),
                    };
                    data.push(tempData);
                });
            });
            setSubjects(data);
        }
    }, [subjectList]);

    
    return <Departments departmentList={subjects} />;
};

export default index;
