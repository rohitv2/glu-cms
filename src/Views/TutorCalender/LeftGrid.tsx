import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import ReactCalendar from 'react-calendar';
import moment from 'moment'

interface props {
    getDate: (date: any) => void;
    dayStartAt: any;
}
const LeftGrid: React.FC<props> = ({ getDate, dayStartAt }) => {

    const changeStat = ({activeStartDate}: any) =>{
        let check1 = moment(new Date(activeStartDate)).isSame(new Date(), 'months');
        if(check1){
            getDate(moment(new Date()))
        }
        else{
            getDate(moment(activeStartDate))
        }
    }

    return (
        <Grid item md={6}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderRight: '1px solid lightgrey',
                    paddingRight: '3rem',
                    height: '79.6rem',
                }}
            >
                <div>
                    <ReactCalendar
                        onChange={getDate}
                        onActiveStartDateChange	={changeStat}
                    />
                </div>
                <div>
                    <h1>{dayStartAt}</h1>
                </div>
            </div>
        </Grid>
    );
};

export default LeftGrid;
