import React, { useState } from 'react';
import FormControlInput from '../../components/Form/FormControlInput';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    setWidth: {
        width: '30rem',
    },
    childWidth: {
        width: '100%',
    },
});

interface props {
    searchOnchange?: (e: any) => void;
    searchValue: string;
    getFilterValue?: (data: any) => void;
}

const Filters: React.FC<props> = ( { year, dep ,searchOnchange, searchValue,getFilterValue }) =>{
    const classes = useStyles();
    const [dropdownValue,setDropDownValue] = useState({
        yearGroup:"",
        department:""
    })


    const getDropdownValue = (value: any,labelName: string) =>{
        const data: any = { ...dropdownValue };
        if(value === -1){
            data[labelName] = ""
        }
        else{
            data[labelName] = value
        }
        setDropDownValue(data)
    }

    React.useEffect(() => {
        if (getFilterValue) {
            getFilterValue(dropdownValue);
        }
    }, [dropdownValue]);

    return (
        <div className="filter__column__box">
            <Grid container alignItems="center" justify="space-between" spacing={2} className={classes.setWidth}>
                {/* <Grid item xs={12} md={6}>
                    <SelectFieldUnderlineIdValue
                        className="custom-sm-txt-dashbord"
                        label="Year-Group"
                        options={year ? year : []}
                        clearFilter = {true}
                        getValue={(value) => {getDropdownValue(value,'yearGroup')}}
                    />
                </Grid> */}
                {/* <Grid item xs={12} md={6}>
                    <SelectFieldUnderlineIdValue
                        className="custom-sm-txt-dashbord"
                        label="Department"
                        clearFilter = {true}
                        options={dep ? dep : []}
                        getValue={(value) => {getDropdownValue(value,'department')}}
                    />
                </Grid> */}
            </Grid>
            <div className="column__box">
                <FormControlInput
                    name="" 
                    id=""
                    fullWidth={true}
                    placeholder="Search"
                    value={searchValue}
                    icon={<i className="icon-Search_Nav" />}
                    onChange={searchOnchange}
                />
            </div>
        </div>
    );
};

export default Filters;
