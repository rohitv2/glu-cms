import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import { getallStudentAPIcall } from '../../Redux/Actions/studentAction';
import { getallTeacherAPIcall } from '../../Redux/Actions/teacherAction';


function useGetTutorNStudents() {
    const dispatch = useDispatch();
    const students = useSelector((state: rootReducerType) => state.studentReducer.studentData);
    const teachers = useSelector((state: rootReducerType) => state.teacherReducer.teacherList);

    useEffect(() => {
        dispatch(getallStudentAPIcall());
        dispatch(getallTeacherAPIcall());
    }, []);

    return useMemo(
        () => ({
            students,
            teachers,
        }),
        [
            teachers,
            students
        ]
    );
}

export default useGetTutorNStudents
