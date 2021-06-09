import React from 'react';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';
import FormControlInput from '../../components/Form/FormControlInput';
import { Search } from '@material-ui/icons';
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
}



const Filters : React.FC<props> = ({ searchOnchange, searchValue}) => {
    const classes = useStyles();
    return (
        <div className="filter__column__box">
            <Grid container alignItems="center" justify="space-between" spacing={2} className={classes.setWidth}>
                <Grid item xs={12} md={6}>
                    <SelectFieldUnderline
                        className="custom-sm-txt-dashbord"
                        label="Department"
                        options={[]}
                        getValue={() => {}}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <SelectFieldUnderline
                        className="custom-sm-txt-dashbord"
                        label="Designation"
                        options={[]}
                        getValue={() => {}}
                    />
                </Grid>
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
