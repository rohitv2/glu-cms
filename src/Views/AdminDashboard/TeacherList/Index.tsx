import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getallTeacherAPIcall } from '../../../Redux/Actions/superAdminActions';
import { checkValue } from '../../../Helper/checkValue';
import TeacherList from './TeacherList';

const Index = () => {
    const dispatch = useDispatch();
    const teacher = useSelector((state: any) => state.superAdminReducer.teacherList);
    const [teacherList, setTeacherList] = useState([]);

    useEffect(() => {
        dispatch(getallTeacherAPIcall());
    }, []);
    useEffect(() => {
        if (teacher) {
            const data = teacher.map((element: any, i: number) => {
                return {
                    index: i,
                    userId: checkValue(element.userId),
                    teacherId: checkValue(element.teacherId),
                    firstName: checkValue(element.firstName),
                    lastName: checkValue(element.lastName),
                    gender: checkValue(element.gender),
                    phoneNumber: checkValue(element.phoneNumber),
                    location: checkValue(element.location),
                    registeredOn: checkValue(element.registeredOn),
                    documentType: checkValue(element.documentType),
                    docStatus: checkValue(element.status),
                    isActive: checkValue(element.isActive),
                    isVerifiedByAdmin: checkValue(element.isVerifiedByAdmin),
                    status: checkValue(element.status),
                    isEmailVerified: checkValue(element.isEmailVerified),
                };
            });
            setTeacherList(data);
        }
    }, [teacher]);

    return <TeacherList teacherList={teacherList} />;
};

export default Index;
