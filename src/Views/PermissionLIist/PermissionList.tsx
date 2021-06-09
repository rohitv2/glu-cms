import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import AddButton from '../../components/Dashobard/AddButton';
import { Box, makeStyles, Typography, Grid } from '@material-ui/core';
import { colors } from '../../Styles/colors';
import CheckboxList from './CheckboxList';
import FormControlInput from '../../components/Form/FormControlInput';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';
import { Search } from '@material-ui/icons';
import SaveController from '../../components/Dashobard/SaveController';

const useStyles = makeStyles({
    setHeight: {
        backgroundColor: colors.white,
        height: 'calc(100vh - 156px)',
        position: 'relative'
    },
    rootParent: {
        padding: '0.625rem 2.5rem ',
        backgroundColor: colors.lighterPrimary,
    },
    setWidth: {
        width: '14.375rem',
    },
    parent: {
        padding: '2.5rem',
        paddingTop: 0,
    },
    title: {
        fontSize: '1.125rem',
        lineHeight: '2rem',
        color: colors.black,
        paddingLeft: '0.5rem',
        borderBottom: `1px solid ${colors.borderGray}`,
        marginBottom: '1.5rem',
    },
    shiftBottom: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: '2.5rem',
    }
});

const PermissionList: React.FunctionComponent = () => {
    const classes = useStyles();
    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton title="Permissions" />
            </CardContainer>
            <Box className={classes.setHeight}>
                <Grid container alignItems="center" justify="space-between" className={classes.rootParent}>
                    <div className={classes.setWidth}>
                        <SelectFieldUnderline
                            value=""
                            className="custom-sm-txt-dashbord"
                            label="Designation"
                            options={[]}
                            getValue={() => {}}
                        />
                    </div>
                    <div className={classes.setWidth}>
                        <FormControlInput
                            id=""
                            name=""
                            value=""
                            icon={<i className="icon-Search_Nav" />}
                            fullWidth={true}
                            placeholder="Search"
                            onChange={() => {}}
                        />
                    </div>
                </Grid>
                <Box component="div" className={classes.parent}>
                    <Typography className={classes.title}>Action</Typography>
                    <CheckboxList />
                    <CheckboxList />
                </Box>
                <Box className={classes.shiftBottom}>
                    <SaveController activeCom={1} handleNext={() => {}} />
                </Box>
            </Box>
        </div>
    );
};

export default PermissionList;
