import React, { useEffect, useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import SelectFieldUnderlineIdValue from '../../components/Inputs/SelectFieldUnderlineIdValue';
import FormControlInput from '../../components/Form/FormControlInput';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import { useSelector } from 'react-redux';
import { dispatch } from '../../Redux/Store/Store';
import { getAllFormGroupById, getAllYearGroup } from '../../Redux/Actions/classAction';

const useStyles = makeStyles({
    parent: {
        padding: '0.5rem 1.875rem',
        backgroundColor: '#f3f7ff',
        paddingBottom: '1.5rem',
    },
    inputRoot: {
        height: 42,
        '& .MuiInputBase-input': {
            fontSize: '1.125rem',
        },
    },
});

interface props {
    filterData:(data:any) => void
    searchOnchange?: (e: any) => void;
    searchValue: string;
}



const FormFilter:React.FC<props> = ({filterData, searchOnchange, searchValue}) => {
    const classes = useStyles();
    const yearGroupDropdown = useSelector((state: rootReducerType) => state.classReducer.yearGroups);
    const formGroupDropdown = useSelector((state: rootReducerType) => state.classReducer.formGroups);
    const [yearDropdown, setYearDropdown] = useState([]);
    const [formDropdown, setFormDropdown] = useState([]);
    const [state, setState] = useState({
        yearGroupId: '',
        formGroupId: '',
    });

    useEffect(() => {
        dispatch(getAllYearGroup());
    }, []);
    useEffect(() => {
        if (yearGroupDropdown) {
            const data = yearGroupDropdown.map((item: any) => {
                return { id: item.id, value: item.title };
            });
            setYearDropdown(data);
        }
    }, [yearGroupDropdown]);
    useEffect(() => {
        if (state.yearGroupId !== '') {
            dispatch(getAllFormGroupById(state.yearGroupId));
        }
    }, [state.yearGroupId]);
    useEffect(() => {
        if (formGroupDropdown?.result) {
            const data = formGroupDropdown.result.ClassSections.map((item: any) => {
                return { id: item?.Section?.id, value: item?.Section?.sectionName };
            });
            setFormDropdown(data);
        }
    }, [formGroupDropdown]);
    const handleFilter = (value: string, labelName: string) => {
        const data: any = { ...state };
        data[labelName] = value;
        setState(data);
    };
    useEffect(() => {
        filterData(state);
    }, [state]);
    return (
        <Grid container alignItems="center" justify="space-between"  className={classes.parent}>
            <Grid item xs={12} md={2}>
                <SelectFieldUnderlineIdValue
                    className="custom-sm-txt-dashbord"
                    label="Year Groups"
                    options={yearDropdown}
                    getValue={(value: string) => {
                        handleFilter(value, 'yearGroupId');
                    }}
                />
            </Grid>
            <Grid item xs={12} md={2} >
                <SelectFieldUnderlineIdValue
                    className="custom-sm-txt-dashbord"
                    label="Form Groups"
                    options={formDropdown}
                    getValue={(value: string) => {
                        handleFilter(value, 'formGroupId');
                    }}
                />
            </Grid>
            <Grid item xs={12} md={5} ></Grid>
            <Grid item xs={12} md={2}>
                <FormControlInput
                    fullWidth
                    id="search"
                    name="search"
                    placeholder="Search"
                    value={searchValue}
                    icon={<i className="icon-Search_Nav" />}
                    onChange={searchOnchange}
                    rootClassName={classes.inputRoot}
                />
            </Grid>
        </Grid>
    );
};

export default FormFilter;
