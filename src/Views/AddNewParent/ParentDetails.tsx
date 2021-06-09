import React, { useState, useEffect } from 'react';
import AddButton from '../../components/Dashobard/AddButton';
import CardContainer from '../../Containers/Cards/CardContainer';
import PdBox from '../../Containers/Cards/PdBox';
import { Grid, makeStyles, Box, Typography } from '@material-ui/core';
import commonImg from '../../Assets/images';
import ChildThumbnail from './ChildThumbnail';
import { colors } from '../../Styles/colors';
import TwoColTable from '../../components/Dashobard/TwoColTable';
import UserDetailsWrapper from '../../Containers/Dashboard/UserDetailsWrapper';
import ThreeColTable from '../../components/Dashobard/ThreeColTable';
import Communication from './Communication';
import { useDispatch, useSelector } from 'react-redux';
import { getallChildrensOfParentsAPIcall } from '../../Redux/Actions/cmsParent';
import { useLocation } from 'react-router';


const useStyle = makeStyles({
    heading: {
        fontSize: '2.625rem',
        lineHeight: '3.125rem',
        color: colors.black,
        marginBottom: '2rem',
    },
    hrLine: {
        height: '1px',
        width: '100%',
        backgroundColor: colors.lightGray,
        marginTop: '2rem',
        marginBottom: '2rem',
    },
});

interface props {
    guardianId: string;
}

const ParentDetails: React.FunctionComponent<props>  = ({ guardianId }) => {
    const [childrensData, setChildrensData] = useState([]);
    const childrensDetails = useSelector((state: any) => state.cmsReducer.childrensDetails);
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        if (location?.state?.hasOwnProperty('id')) {
         dispatch(getallChildrensOfParentsAPIcall((location as any)?.state?.id));
        }
    }, []);

    useEffect(() => {
        if (childrensDetails) {
            setChildrensData(childrensDetails);
        }
    }, [childrensDetails]);

    const classes = useStyle();
    const data = [
        { col1: 'Computer', col2: 'James Arthur' },
        { col1: 'Biology', col2: 'Morgan Freeman' },
        { col1: 'Chemistry', col2: 'Jhonny Depp' },
        { col1: 'Physics', col2: 'Chris Hemsworth' },
    ];
    const data2 = [
        { col1: '22/05/2020', col2: 'AED 60,000.00', col3: 'FG56478' },
        { col1: '31/04/2020', col2: 'AED 60,000.00', col3: 'RT12478' },
        { col1: '24/03/2020', col2: 'AED 2,236.00', col3: 'TR56528' },
        { col1: '16/02/2020', col2: 'AED 446.00', col3: 'YH56348' },
    ];
    return (
        <div className="content-wrapper-student">
            <CardContainer>
                <AddButton title="Year Group" btnTitle="" />
            </CardContainer>
            <CardContainer>
                <PdBox>
                    <Typography className={classes.heading}>Children</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3}>
                            <ChildThumbnail
                                title="Olivia Preston ID: 569866"
                                subTitle="Form group: 9R"
                                image={commonImg.thinkingboy}
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <ChildThumbnail
                                title="Olivia Preston ID: 569866"
                                subTitle="Form group: 9R"
                                image={commonImg.payingpadgirl}
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <ChildThumbnail
                                title="Olivia Preston ID: 569866"
                                subTitle="Form group: 9R"
                                image={commonImg.readinggirl}
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <ChildThumbnail
                                title="Olivia Preston ID: 569866"
                                subTitle="Form group: 9R"
                                image={commonImg.bookreadingboy}
                            />
                        </Grid>
                    </Grid>
                    <Box className={classes.hrLine} />
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3}>
                            <ChildThumbnail
                                title="Olivia Preston ID: 569866"
                                subTitle="Form group: 9R"
                                image={commonImg.thinkingboy}
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <ChildThumbnail
                                title="Olivia Preston ID: 569866"
                                subTitle="Form group: 9R"
                                image={commonImg.payingpadgirl}
                            />
                        </Grid>
                    </Grid>
                </PdBox>
            </CardContainer>
            <UserDetailsWrapper>
                <div className="row row__margin">
                    <div className="col-lg-5 pt-0 colum__spacing">
                        <TwoColTable
                            colWidth1="70%"
                            colWidth2="30%"
                            height="30rem"
                            data={data}
                            tableName="Fee Details"
                            colHead1="Term"
                            colHead2="Status"
                            linkTo=""
                        />
                    </div>
                    <div className="col-lg-7 pt-0 colum__spacing">
                        <ThreeColTable
                            height="30rem"
                            data={data2}
                            tableName="Payment Details"
                            colWidth1="45%"
                            colWidth2="45%"
                            colWidth3="10%"
                            colHead1="Date"
                            colHead2="Amount"
                            colHead3="Reference"
                        />
                    </div>
                </div>
            </UserDetailsWrapper>
            <div className="row row__margin">
                <div className="col-md-12 colum__spacing">
                    <Communication />
                </div>
            </div>
        </div>
    );
};

export default ParentDetails;
