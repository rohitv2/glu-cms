import React, { useEffect, useState } from 'react';
import TeacherList from './TeacherList';
import { useDispatch, useSelector } from 'react-redux';
import { getallTeacherAPIcall } from '../../Redux/Actions/teacherAction';
import { checkValue } from '../../Helper/checkValue';
import commonImg from '../../Assets/images';

const Index = () => {
    const dispatch = useDispatch();
    const teachers = useSelector((state: any) => state.teacherReducer.teacherList);
    const [teacherList, setTeacherList] = useState([]);

    useEffect(() => {
        dispatch(getallTeacherAPIcall());
    }, []);

    useEffect(() => {
        if (teachers) {
            const data = teachers.map((element: any) => {
                return {
                    id: element.id,
                    staffId: element.id,
                    firstName: element.firstName,
                    lastName: element.lastName,
                    name: element.firstName + ' ' + element.lastName,
                    designation: checkValue(element?.designation),
                    department: checkValue(element?.Department?.departmentName),
                    departmentId: element?.departmentId,
                    profile: commonImg.photo,
                    subjects: element.TeacherSubjects,
                    gender: element.gender,
                    mobilePre: element.phoneNumber ? element.phoneNumber.substring(0, 3) : '',
                    mobileNumber: element.phoneNumber ? element.phoneNumber : '',
                    email: element.User.email,
                    classSection: element.SectionTeachers,
                };
            });
            setTeacherList(data);
        }
    }, [teachers]);

    return <TeacherList teacherList={teacherList} />;
};

export default Index;
