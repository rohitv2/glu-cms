import React, { useState, useEffect } from 'react';
import ClassList from './ClassList';
import { useDispatch, useSelector } from 'react-redux';
import { getallclassAPIcall } from '../../Redux/Actions/classAction';
import { isArray } from 'lodash';

const index: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const classes = useSelector((state: any) => state.classReducer.classList);
    const [classList, setclassList] = useState([]);

    useEffect(() => {
        dispatch(getallclassAPIcall());
    }, []);
    useEffect(() => {
        if (isArray(classes)) {
            const data: any = [];
            classes?.forEach((item: any) => {
                const teachers = item.teachers.map((subItem: any) => {
                    return subItem.firstName + subItem.lastName;
                });
                if (item?.data?.ClassSections.length > 0) {
                    let totalChildren = 0;
                    let totalFormGroup: any = [];

                    item?.data?.ClassSections.forEach((subItem: any) => {
                        totalChildren += subItem?.SectionStudents.length;
                        totalFormGroup.push(subItem?.Section?.sectionName);
                    });
                    const result = {
                        id: item?.data?.id,
                        group: item?.data?.title,
                        children: totalChildren,
                        formGroup: totalFormGroup.length,
                        hoy: teachers.join(', '),
                        teacherDetails: item.teachers,
                    };
                    data.push(result);
                } else {
                    data.push({
                        id: item?.data?.id,
                        group: item?.data?.title,
                        children: 'N/A',
                        formGroup: 'N/A',
                        hoy: teachers.join(', '),
                        teacherDetails: item.teachers,
                    });
                }
            });
            setclassList(data);
        }
    }, [classes]);
    return (
        <div>
            <ClassList classList={classList} />
        </div>
    );
    
};

export default index;
