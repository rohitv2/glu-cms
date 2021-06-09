import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkValue } from '../../../Helper/checkValue';
import { getallSchoolAPIcall } from '../../../Redux/Actions/superAdminActions';
import SchoolList from './SchoolList'

const Index = () => {
    const dispatch = useDispatch();
    const school = useSelector((state: any) => state.superAdminReducer.schoolList);
    const [schoolList, setSchoolList] = useState([]);

    useEffect(() => {
        dispatch(getallSchoolAPIcall());
    }, []);
    useEffect(() => {
        if (school) {
            const data = school.map((element: any, i:number) => {
                return {
                    index: i,
                    schoolName: checkValue(element.schoolName),
                    website: checkValue(element.website),
                    phoneNumber: checkValue(element.phoneNumber),
                    id: checkValue(element.id),
                    createdAt: checkValue(element.createdAt),
                    isActive: element.User.isActive == null ? true :element.User.isActive,
                    userId: checkValue(element.User.id),
                    isEmailVerified: checkValue(element.User.isEmailVerified),

                };
            });

            setSchoolList(data);
        }
    }, [school]);
    return <SchoolList schoolList={schoolList}/>
};

export default Index;
