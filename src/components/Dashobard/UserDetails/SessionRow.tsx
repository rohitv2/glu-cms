import React from 'react';
import TwoColTable from '../TwoColTable';

type feedback = { col1: string; col2: string };
interface props {
    feedback: Array<feedback>;
    merit: Array<feedback>;
    data: any;
    keyname: string;
}

const SessionRow: React.FunctionComponent<props> = ({feedback,merit, data, keyname }) => {
    const eca = [
        { col1: 'Basketball', col2: '21/05/2020' },
        { col1: 'Football', col2: '16/02/2020' },
        { col1: 'Drama Club', col2: '20/04/2020' },
        { col1: 'Robotics', col2: '16/02/2020' },
    ];

    return (
        <div className="row row__margin">
            <div className="col-lg-5 col-md-12 colum__spacing">
                <TwoColTable data={eca} tableName="Sessions" colHead1="Title" colHead2="" showLink={true} linkTo="" />
            </div>
            <div className="col-lg-7 col-md-12 colum__spacing">
                <div className="row row__margin">
                    <div className="col-lg-6 col-md-12 pt-0 colum__spacing">

                        <TwoColTable
                            data={merit && merit}
                            tableName="Merits/Sanctions"
                            height="16.5rem"
                            colHead1="Date"
                            colHead2=""
                            showLink={true}
                            linkTo="/dashboard/merits-sanctions"
                            keyName={keyname}
                            pushState={data && data}
                        />
                    </div>
                    <div className="col-lg-6 col-md-12 pt-0 colum__spacing">
                        <TwoColTable
                            data={feedback}
                            height="16.5rem"
                            tableName="Feedback"
                            colHead1="Date"
                            colHead2="Subject"
                            showLink={true}
                            linkTo="/dashboard/feedback"
                            keyName={keyname}
                            pushState={data}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SessionRow;
