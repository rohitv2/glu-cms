import React, { useState, useRef } from 'react';
import { Typography, TextField } from '@material-ui/core';
interface props {
    skillArray?: any;
    setSkill: (data: any) => void;
}
const NewSkillContainer: React.FunctionComponent<props> = ({ skillArray, setSkill }) => {
    const [query, setQuery] = useState('');
    const inputRef:any = useRef(null);
    const handleSubmit = (e:any) => {
        e.preventDefault();
        if (query == '') return;
        setSkill([...skillArray, query]);
        inputRef.current.value = '';
    };

    return (
        <>
            <div className="addSkill">
                <div className="col-md-12">
                    <form action="" onSubmit={(e) => handleSubmit(e)}>
                        <div className="row">
                            {/* <div className="col-md-12 p-0">
                        <Typography className="sub_heading">Add New</Typography>
                    </div> */}
                            <div className="col-md-12 p-0">
                                <TextField
                                    inputRef={inputRef}
                                    className="line-input-large"
                                    label="Add New"
                                    style={{ width: '90%' }}
                                    fullWidth
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                            </div>

                            <div className="col-md-12">
                                <div className="skill_container">
                                    <div className="row choose_weeks">
                                        {skillArray.map((val: string, index: number) => (
                                            <Typography key={index} className="boxes">
                                                {val}
                                            </Typography>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default NewSkillContainer;
