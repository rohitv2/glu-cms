import React, { useState } from 'react';
import SelectField from './SelectField';
import { v4 as uuidv4 } from 'uuid';
import { Close } from '@material-ui/icons';

interface props {
    labelName?: string;
    option: any
}
const SelectionInput: React.FunctionComponent<props> = ({labelName, option}) => {
    const [selected, setSelected] = useState<Array<string>>([]);
    const handleSelection = (value: string) => {
        if(!selected.includes(value)){
            setSelected([...selected, value]);
        }
    };
    const removePerson = (index:number) => {
        const persons = [...selected];
        persons.splice(index, 1);
        setSelected(persons);
    }
    return (
        <div className="selection-wrapper">
            <div className="selection-container">
                {selected.map((item: string, i:number) => (
                    <div key={uuidv4()} className="selection">
                        {item}
                        <Close className="icon" onClick={()=>removePerson(i)}/>
                    </div>
                ))}
            </div>
            <SelectField
                className="custom-input mt-3"
                label={labelName}
                options={option}
                getValue={(value) => handleSelection(value)}
                name="section"
            />
        </div>
    );
};

export default SelectionInput;
