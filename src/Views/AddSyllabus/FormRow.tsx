import React, { useEffect, useState } from 'react';
import { TextField } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import SyllabusTitleDetails from './SyllabusTitleDetails';
import EditableAddBtn from '../../components/Dashobard/EditableAddBtn';
import EditableDeleteBtn from '../../components/Dashobard/EditableDeleteBtn';
import { number } from 'yup';

interface props {
    onChange: (value: any) => void;
    editable: () => void;
    setId: Function;
    disable?: boolean;
}
const FormRow: React.FunctionComponent<props> = ({ onChange, editable, setId, disable }) => {
    const [heading, setHeading] = useState('');
    const [rows, setRows] = useState<any>([{ topicName: '', syllabus: '' }]);

    // const routes = useLocation();
    const handleHeaing = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHeading(e.target.value);
    };
    const handleData = (data: any, i: number) => {
        const totalRows = rows;
        totalRows[i] = data;
        setRows([...totalRows]);
    };
    const addRows = () => {
        const data = rows;
        data.push({ topicName: '', syllabus: '' });
        setRows([...data])
    };
    const deleteRows = (i: number) => {
        const totalRows = rows;
        totalRows.splice(i, 1);
        setRows([...totalRows]);
    };
    // useEffect(() => {
    //     if (routes.hasOwnProperty('state')) {
    //         if ((routes as any).state.hasOwnProperty('teacherInfo')) {
    //             const data = (routes as any).state.teacherInfo;
    //             const newState = {
    //                 first_name: checkValue(data.first_name),
    //                 last_name: checkValue(data.last_name),
    //                 email: checkValue(data.email),
    //                 gender: checkValue(data.gender),
    //                 department: checkValue(data.department),
    //                 designation: checkValue(data.designation),
    //                 phoneNumber: checkValue(data.phoneNumber),
    //             };
    //             setState(newState);
    //             editable();
    //             setId(data.id);
    //             setEdit(true);
    //         }
    //     }
    // }, []);

    // useEffect(() => {
    //     onChange(state);
    // }, [state]);

    return (
        <div className={`row `}>
            <div className="col-lg-12">
                <TextField
                    className="custom-input mb-2"
                    label="Topic Heading"
                    value={heading}
                    onChange={handleHeaing}
                    variant="outlined"
                    fullWidth
                />
            </div>
            {rows.map((value: any, index: number) => (
                <div className="student-form-row syllabus-topic-container  w-100">
                    <SyllabusTitleDetails setData={(value: any) => handleData(value, index)} />
                    {index === 0 ? (
                        <EditableAddBtn editable={false} click={addRows} />
                    ) : (
                        <EditableDeleteBtn editable={false} click={() => deleteRows(index)} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default FormRow;
