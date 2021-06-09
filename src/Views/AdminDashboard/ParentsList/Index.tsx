import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getallParentsAPIcall } from '../../../Redux/Actions/superAdminActions';
import { checkValue } from '../../../Helper/checkValue';
import commonImg from '../../../Assets/images';
import ParentsList from './ParentsList';

const Index = () => {
    const dispatch = useDispatch();
    const parent = useSelector((state: any) => state.superAdminReducer.parentsList);
    const [parentsList, setParentsList] = useState([]);

    useEffect(() => {
        dispatch(getallParentsAPIcall());
    }, []);
    useEffect(() => {
        if (parent) {
            const data = parent.map((element: any, i:number) => {
                return {
                    index: i,
                    userId: checkValue(element.userId),
                    guardianId: checkValue(element.guardianId),
                    firstName: checkValue(element.firstName),
                    lastName: checkValue(element.lastName),
                    gender: checkValue(element.gender),
                    phoneNumber: checkValue(element.phoneNumber),
                    location: checkValue(element.location),
                    registeredOn: checkValue(element.registeredOn),
                    isActive: checkValue(element.isActive),
                    children: checkValue(element.children),
                    isEmailVerified: checkValue(element.isEmailVerified),

                };
            });
            setParentsList(data);
        }
    }, [parent]);

    // return <TeacherList teacherList={teacherList} />;
    return <ParentsList parentsList={parentsList} />;
};

export default Index;
