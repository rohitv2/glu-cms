import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

interface props{
    setData: (value:any)=> void
}
const SyllabusTitleDetails: React.FunctionComponent<props> = ({setData}) => {
    const [state, setState] = useState({topicName:'', syllabus:''});
    const handleTopicName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, topicName: e.target.value});
    }
    const handleSyllabus = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, syllabus: e.target.value});
    }
    const handledispatch = ()=> {
        setData(state);
    }
    return (
        <div className="row">
            <div className="col-lg-12">
                <TextField
                    className="custom-input"
                    label="Topic name"
                    value={state.topicName}
                    onChange={handleTopicName}
                    onBlur={handledispatch}
                    variant="outlined"
                    fullWidth
                />
            </div>
            <div className="col-lg-12">
                <TextField
                    className="custom-input mb-0"
                    label="Topic Syllabus"
                    value={state.syllabus}
                    onChange={handleSyllabus}
                    onBlur={handledispatch}
                    variant="outlined"
                    fullWidth
                />
            </div>
        </div>
    );
};

export default SyllabusTitleDetails;
