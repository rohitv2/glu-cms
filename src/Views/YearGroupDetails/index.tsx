import React, { useState, useEffect } from 'react';
import YearGroupDetails from './YearGroupDetails';
import { useDispatch, useSelector } from 'react-redux';
import { getallclassByIdAPIcall } from '../../Redux/Actions/classAction';
import { useLocation } from 'react-router';

const index: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const classes = useSelector((state: any) => state.classReducer.classList);
    const [id, setId] = useState(-1);
    const [classList, setclassList] = useState([]);
    const [hods, setHods] = useState([]);
    const [state, setState] = useState({ head: '', yearGroup: '' });
    const findState: any = useLocation();
    useEffect(() => {
        if (findState?.state?.id) {
            dispatch(getallclassByIdAPIcall((findState as any).state.id));
            setId((findState as any).state.id);
        }
    }, []);
    useEffect(() => {
        if (classes?.result) {
            const data = classes?.result?.ClassSections?.map((item: any) => {
                const teacherName = item?.SectionTeachers.map((subItem: any) => {
                    return subItem?.Teacher?.firstName + ' ' + subItem?.Teacher?.lastName;
                });
                return {
                    children: item?.SectionStudents.length,
                    students: item?.SectionStudents,
                    formGroup: item?.Section?.sectionName,
                    teacher: teacherName.join(', '),
                    teacherDetails: item?.SectionTeachers,
                    title: item?.Section?.sectionName,
                    sectionId: item?.sectionId,
                };
            });
            setclassList(data);
            setState({ head: classes?.head, yearGroup: classes?.result?.title });
            const teachers = classes?.teachers.map((item: any) => {
                return item.firstName + ' ' + item.lastName;
            });
            setHods(teachers);
        }
    }, [classes]);
    return (
        <div>
            <YearGroupDetails classList={classList} hods={hods} classInfo={state} groupId={id} />
        </div>
    );
};

export default index;
