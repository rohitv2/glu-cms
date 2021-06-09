import { Box, Grid, makeStyles } from '@material-ui/core';
import React,{useState , useEffect} from 'react';
import FormControlInput from '../../components/Form/FormControlInput';
import SelectFieldUnderlineIdValue from '../../components/Inputs/SelectFieldUnderlineIdValue';
import { useDepartment } from '../../Hooks/schoolCMS/common/useDepartment';
import { colors } from '../../Styles/colors';

const useStyles = makeStyles({
    parent: {
        backgroundColor: colors.lighterPrimary,
        padding: '1.875rem',
        paddingTop: '0.3rem',
    },
    mt:{
        marginTop: '1.4rem'
    }
});

interface props {
    searchOnchange?: (e: any) => void;
    searchValue: string;
    getFilterValue?: (data: any) => void;
}


const TeacherListFilter: React.FC<props> = ({ searchOnchange, searchValue,getFilterValue }) => {
    const departmentDropdown = useDepartment();
    const classes = useStyles();
    const[state,setState] = useState("")

    useEffect(() => {
        if (getFilterValue) {
            getFilterValue(state);
        }
    }, [state]);

    return (
        <Box className={classes.parent}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>

                    <SelectFieldUnderlineIdValue
                        className="custom-sm-txt-dashbord"
                        label="Department"
                        options={departmentDropdown}
                        clearFilter={true}
                       
                        getValue={(value: any) => {setState(value)}}
                    />
                </Grid>
                <Grid item xs={12} md={6}></Grid>
                <Grid item xs={12} md={3}>
                    <FormControlInput
                        name=""
                        id=""
                        fullWidth={true}
                        rootClassName={classes.mt}
                        placeholder="Search"
                        value={searchValue}
                        icon={<i className="icon-Search_Nav" />}
                        onChange={searchOnchange}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default TeacherListFilter;
