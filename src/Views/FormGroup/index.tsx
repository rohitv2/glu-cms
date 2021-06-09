import React, { useState, useEffect } from 'react';
import FormGroup from './FormGroup';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSectionByFromAndClassIdAPIcall } from '../../Redux/Actions/classAction';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import { checkValue } from '../../Helper/checkValue';
import commonImg from '../../Assets/images';

const index: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const classes = useSelector((state: rootReducerType) => state.classReducer.sectionList);
    const [filters, setFilters] = useState({ class: '', section: '' });
    const [sectionList, setSectionList] = useState([]);

    const handleFilter = (data: any) => {
        setFilters({ class: data.yearGroupId, section: data.formGroupId });
    };

    useEffect(() => {
        if (filters.class !== '' && filters.section!=='') {
            dispatch(getAllSectionByFromAndClassIdAPIcall(filters.section, filters.class));
        }
    }, [filters]);
    useEffect(() => {
        if (classes) {
            const data = classes?.SectionStudents.map((item: any) => {
                return {
                    name: checkValue(item?.Student?.firstName) + ' ' + checkValue(item?.Student?.lastName),
                    studentId: checkValue(item.id),
                    profile: commonImg.photo,
                    formGroup: checkValue(classes?.Section?.sectionName),
                };
            });
            setSectionList(data);
        }
    }, [classes]);
    return (
        <div>
            <FormGroup groupList={sectionList} filters={filters} handleFilter={handleFilter} />
        </div>
    );
};

export default index;
