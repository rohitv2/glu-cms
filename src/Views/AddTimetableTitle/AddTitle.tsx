import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import TwoColGrid from '../../components/Dashobard/TwoColGrid';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import OutlineButton from '../../components/Button/OutlineButton';
import {addTimeTableName} from '../../Redux/Actions/schoolAction'
import { dispatch } from '../../Redux/Store/Store';

function AddTitle() {
    const history = useHistory();
    const [state,setState] = useState({
        blockName:"",
    })

    const handleSubmit = () =>{
        dispatch(addTimeTableName(state,history))
    }
    return (
        <TwoColGrid titleOne="New Timetable">
            <InputWithLabel 
                fieldName="Title" 
                mt="mt-1" 
                value={state.blockName} 
                onChange={(e: any)=>{setState({
                    ...state,
                    blockName : e.target.value,
                })}} 
            />
            <div className="mt-4">
                <OutlineButton text="Submit" btnClick={handleSubmit} />
            </div>
        </TwoColGrid>
    )
}

export default AddTitle
