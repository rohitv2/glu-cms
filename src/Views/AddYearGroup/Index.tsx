import React, { useEffect, useState } from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { colors } from '../../Styles/colors';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import classNames from 'classnames';
import LineDivider from '../../components/Dashobard/LineDivider';
import ThreeColTable from '../../components/Dashobard/ThreeColTable';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { EditClassAPIcall, getallclassByIdAPIcall } from '../../Redux/Actions/classAction';
import { checkValue } from '../../Helper/checkValue';
import OutlineButton from '../../components/Button/OutlineButton';

const useStyles = makeStyles({
    parent: {
        padding: '4.062rem 3.437rem',
        backgroundColor: colors.white,
    },
    title: {
        fontSize: '1.562rem',
        lineHeight: '1.875rem',
        fontWeight: 500,
        color: colors.black,
    },
    headYear: {
        marginTop: '4.375rem',
    },
    addedName: {
        borderBottom: `1px solid ${colors.lightGray}`,
        marginTop: '1rem',
    },
    addAnother: {
        color: colors.lightGray,
        cursor: 'pointer',
    },
    boldText: {
        fontWeight: 600,
        paddingRight: '4rem',
        width: '6.7rem',
    },
});
const Index = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [state, setState] = useState({ title: '', hod: '', yearGroup: '', id:0 });
    const totalClass = useSelector((state: any) => state.classReducer.classList);
    const [classList, setclassList] = useState([]);
    const [totalStudent, setTotalStudent] = useState(0);
    const findState = useLocation();
    useEffect(() => {
        if (findState?.state) {
            dispatch(getallclassByIdAPIcall((findState as any).state.id));
            setState({...state, id: (findState as any).state.id})
        }
    }, []);

    useEffect(() => {
        if (totalClass) {
            const data = totalClass.ClassSections.map((item: any) => {
                setTotalStudent((prevState) => prevState + item?.SectionStudents.length);
                return {
                    col1: item?.Section?.sectionName,
                    col2:
                        checkValue(item?.SectionTeachers[0]?.Teacher?.firstName) +
                        ' ' +
                        checkValue(item?.SectionTeachers[0]?.Teacher?.lastName),
                    col3: item?.SectionStudents.length,
                };
            });
            setState({ ...state, title: totalClass.title, hod: totalClass.head });
            setclassList(data);
        }
    }, [totalClass]);

    const handleSubmit = () => {
        if (state.id!==0) {
            const data = { head: state.hod };
            dispatch(EditClassAPIcall(data, state.id));
        }
    };
    const handleHod = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setState({...state, hod:e.target.value})
    }

    return (
        <Grid container className={classes.parent}>
            <Grid item xs={12} md={4}>
                <Typography className={classes.title}>Year Group</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
                <InputWithLabel fieldName="Title" mt="mt-0" value={state.title} />
                <InputWithLabel fieldName="Head of year" value={state.hod} onChange={handleHod} />
                <InputWithLabel placeholder="Add another member" mt="mt-1" />
                <InputWithLabel fieldName="Year Group" value={state.id} disalbed={true} />
            </Grid>
            <LineDivider mt="3.75rem" mb="3.75rem" />
            <Grid item xs={12} md={4}></Grid>
            <Grid item xs={12} md={8}>
                <div className="details-wrapper px-0">
                    <ThreeColTable
                        colWidth1="50%"
                        colWidth2="40%"
                        colWidth3="10%"
                        colHead1="Form Groups"
                        colHead2="Tutor"
                        colHead3="Students"
                        data={classList}
                        padding="0"
                    />
                    <Grid container alignItems="center" justify="space-between">
                        <Typography className={classNames(classes.title, classes.boldText)}>Total</Typography>
                        <Typography className={classNames(classes.title, classes.boldText)}>{totalStudent}</Typography>
                    </Grid>
                </div>
                <div className="mt-5">
                    <OutlineButton text="Submit" btnClick={handleSubmit} />
                </div>
            </Grid>
        </Grid>
    );
};

export default Index;
