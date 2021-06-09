import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import FormControlInput from '../../../components/Form/FormControlInput';
import { colors } from '../../../Styles/colors';

const useStyles = makeStyles(({
    parent:{
        backgroundColor: colors.lighterPrimary,
        paddingTop: '1rem',
        paddingBottom: '1rem'
    }
}))

interface props {
    searchValue: string;
    searchOnchange: (e: any) => void;
}

const Filter: React.FC<props> = ({ searchValue, searchOnchange }) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.parent}>
            <Grid item md={9}></Grid>
            <Grid item md={3}>
                <FormControlInput
                    name=""
                    id=""
                    rootClassName="pr-5"
                    fullWidth={true}
                    placeholder="Search"
                    value={searchValue}
                    icon={<i className="icon-Search_Nav" />}
                    onChange={searchOnchange}
                />
            </Grid>
        </Grid>
    );
};

export default Filter;
