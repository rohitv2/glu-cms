import React from 'react';
import ProfileTitle from '../../../components/Dashobard/ProfileTitle';
import TwoColTable from '../../../components/Dashobard/TwoColTable';
import PercentageProgress from '../../../components/Dashobard/PercentageProgress';
import CompNcomp from '../../../components/Dashobard/CompNcomp';

const Index = () => {
    const data = [
        { col1: 'Mathematics', col2: <PercentageProgress percent="69%" /> },
        { col1: 'Biology', col2: <PercentageProgress percent="34%" /> },
        { col1: 'Physics', col2: <PercentageProgress percent="34%" /> },
        { col1: 'Business Studies', col2: <PercentageProgress percent="55%" /> },
        { col1: 'Mathematics', col2: <PercentageProgress percent="69%" /> },
        { col1: 'Biology', col2: <PercentageProgress percent="34%" /> },
        { col1: 'Physics', col2: <PercentageProgress percent="34%" /> },
        { col1: 'Business Studies', col2: <PercentageProgress percent="55%" /> },
        { col1: 'Mathematics', col2: <PercentageProgress percent="69%" /> },
        { col1: 'Biology', col2: <PercentageProgress percent="34%" /> },
        { col1: 'Physics', col2: <PercentageProgress percent="34%" /> },
        { col1: 'Business Studies', col2: <PercentageProgress percent="55%" /> },
    ];
    return (
        <div className="details-wrapper change_card_pd">
            <ProfileTitle hideBtns={true} detailName="Homework" />
            <div className="row row__margin">
                <div className="col-md-12 colum__spacing">
                    <TwoColTable
                        color="#5FB475"
                        data={data}
                        colWidth1="80%"
                        colWidth2="20%"
                        tableName=""
                        colHead1="Subjects"
                        colHead2="Completed"
                        height="unset"
                        linkTo=""
                    >
                        <CompNcomp completed="completed" notCompleted="Not completed" />
                    </TwoColTable>
                </div>
            </div>
        </div>
    );
};

export default Index;
