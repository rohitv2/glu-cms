import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CardContainer from '../../Containers/Cards/CardContainer';
import AddButton from '../../components/Dashobard/AddButton';
import { useDispatch } from 'react-redux';
import {
    getAllSessionsAPIcall,
    getAllSessionsByFilterAPIcall,
} from '../../Redux/Actions/schoolAction';
import { dispatchActionType } from '../../components/Dashobard/Table/TableFilter';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { addDays } from 'date-fns';
import SessionRightPart from './SessionRightPart';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import moment from 'moment';
import commonImg from '../../Assets/images';
import TableFilter from './TableFilter';


const SessionList: React.FunctionComponent = () => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection',
        },
    ]);
    const [stateIds, setStateIds] = useState({ teacherId: '', subjectId: '' });
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();
    const [totalRecordSession, setTotalRecordSession] = useState([]);
    const [sessionList, setSessionList] = useState([]);
    const recordSession = useSelector((state: rootReducerType) => state.schoolReducer.sessionList);
    React.useEffect(() => {
        if (recordSession) {
            const data = recordSession?.AllSchoolSessions.map((item: any, i: number) => {
                return {
                    row: i,
                    sessionName: item.title,
                    link: item.videoLink,
                    tags: item.tags,
                    resource: item.resource,
                    price: item.price,
                    students: item.maxStudent,
                    description: item.description,
                    coverImage: item.coverImage ? item.coverImage : commonImg.photo,
                    subjectName: item?.TeacherSubject?.Subject?.subjectName,
                    teacherName:
                        item?.TeacherSubject?.Teacher?.firstName + ' ' + item?.TeacherSubject?.Teacher?.lastName,
                    date: moment(new Date(item.createdAt)).format('DD MMMM YYYY'),
                };
            });
            setTotalRecordSession(data);
            setSessionList(data);
        }
    }, [recordSession]);
    useEffect(() => {
        const startDate = moment(new Date(state[0].startDate)).format('YYYY-MM-DD');
        const endDate = moment(new Date(state[0].endDate)).format('YYYY-MM-DD');
        if (startDate && endDate && stateIds.teacherId === '' && stateIds.subjectId === '') {
            dispatch(getAllSessionsAPIcall(startDate, endDate));
        }
    }, [state, stateIds]);

    const handleDispatchFilter = (data: dispatchActionType) => {
        setStateIds({ ...stateIds, teacherId: data.teacherId, subjectId: data.subjectId });
        const startDate = moment(new Date(state[0].startDate)).format('YYYY-MM-DD');
        const endDate = moment(new Date(state[0].endDate)).format('YYYY-MM-DD');
        if (startDate && endDate && (data.teacherId || data.subjectId)) {
            dispatch(getAllSessionsByFilterAPIcall(data.teacherId, data.subjectId, startDate, endDate));
        }
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e?.target?.value === '') {
            setSearchValue('');
        } else {
            if(e?.target?.value){
                setSearchValue(e.target.value);
            }
        }
    };

    useEffect(() => {
        if (searchValue === '') {
            setSessionList(totalRecordSession);
        } else {
            setTimeout(() => {
                const data = totalRecordSession.filter((item: any) => {
                    if (
                        String(item.sessionName).toLocaleLowerCase().search(searchValue.toLocaleLowerCase()) > -1 ||
                        String(item.subjectName).toLocaleLowerCase().search(searchValue.toLocaleLowerCase()) > -1 ||
                        String(item.teacherName).toLocaleLowerCase().search(searchValue.toLocaleLowerCase()) > -1
                    ) {
                        return item;
                    }
                });
                setSessionList(data);
            }, 100);
        }
    }, [searchValue]);

    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton title="Session" />
            </CardContainer>
            <CardContainer>
                <div className="bg-white">
                    <TableFilter
                        dispatchAction={handleDispatchFilter}
                        searchOnchange={handleSearchChange}
                        searchValue={searchValue}
                    />
                    <div className="row">
                        <div className="col-md-6">
                            <div className="pl-2">
                                <DateRangePicker
                                    onChange={(item: any) => setState([item.selection])}
                                    showSelectionPreview={true}
                                    moveRangeOnFirstSelection={false}
                                    months={2}
                                    ranges={state}
                                    direction="horizontal"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <SessionRightPart sessionData={sessionList} />
                        </div>
                    </div>
                </div>
            </CardContainer>
        </div>
    );
};

export default SessionList;
