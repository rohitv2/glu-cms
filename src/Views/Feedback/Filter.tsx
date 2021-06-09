import React,{useState,useEffect} from 'react';
import { Grid } from '@material-ui/core';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';
import { TextField, makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import moment from 'moment'

const useStyles = makeStyles({
    input: {
        '& .MuiInput-input': {
            fontSize: '1.96rem !important',
        },
        
    },
})

interface props {
    role: string;
    getFilterValue?: (data: any) => void;
}


const Filter : React.FC<props> =  ({role,getFilterValue}) =>  {
    const classes = useStyles()
    const [filterValue,setFilterValue] = useState({
        date:"",
    })

    React.useEffect(() => {
        if (getFilterValue) {
            getFilterValue(filterValue);
        }
    }, [filterValue]);

    const getDropdownValue = (value: string,labelName: string) =>{
        const data: any = { ...filterValue };
        data[labelName] = value
        setFilterValue(data)
    }

    return (
        <Grid container spacing={2} justify="flex-end">
            <Grid item xs={12} md={3}>
                <TextField
                    className={classNames('line-input-large', classes.input)}
                    label="Date"
                    type="date"
                    onChange={(e) =>{getDropdownValue(moment(e.target.value).format('MM/DD/YYYY') , 'date')}}
                    fullWidth
                />
            </Grid>
        </Grid>
    );
};

export default Filter;
