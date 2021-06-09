import React, { useState, useEffect } from 'react';
import ParentList from './ParentList';
import { useDispatch, useSelector } from 'react-redux';
import commonImg from '../../Assets/images';
import { getallparentAPIcall } from '../../Redux/Actions/parentAction';
import { checkValue } from '../../Helper/checkValue';

const Index = () => {
    const dispatch = useDispatch();
    const parents = useSelector((state: any) => state.parentReducer.parentData);
    const [parentList, setParentList] = useState([]);

    useEffect(() => {
        dispatch(getallparentAPIcall());
    }, []);

    useEffect(() => {
        if (parents) {
            const data = parents.map((element: any) => {
                return {
                    profile: element.profile ? element.profile : commonImg.photo,
                    id: element.id,
                    childrens:element?.GuardianStudents?.length,
                    firstName: checkValue(element.firstName),
                    lastName: checkValue(element.lastName),
                    name: checkValue(element.firstName) + ' ' + checkValue(element.lastName),
                    email: checkValue(element.User.email),
                    gender: checkValue(element.User.gender),
                    phoneNumber: checkValue(element.phoneNumber),
                    action: '',
                };
            });
            setParentList(data);
        }
    }, [parents]);
    return <ParentList parentList={parentList}/>;
};

export default Index;
