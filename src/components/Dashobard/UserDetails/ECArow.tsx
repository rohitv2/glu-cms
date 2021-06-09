import React from 'react';
import TwoColTable from '../TwoColTable';


type feedback = { col1: string; col2: string };
type merit = { col1: string; col2: string };
interface props {
    feedback: Array<feedback>;
    merit: Array<merit>;
    data : any;
}

const ECArow: React.FunctionComponent<props> = ({feedback,merit,data }) => {
    const eca = [
        { col1: 'Basketball', col2: 'James Arthur' },
        { col1: 'Football', col2: 'Morgan Freeman' },
        { col1: 'Drama Club', col2: 'Jhonny Depp' },
        { col1: 'Robotics', col2: 'Chris Hemsworth' },
    ];

    return (
        <div className="row row__margin">
            <div className="col-lg-5 col-md-12 colum__spacing">
                <TwoColTable
                    color="#5FB475"
                    data={eca}
                    tableName="Extra Curricular Activities"
                    colHead1="Activity"
                    colHead2="Teacher"
                />
            </div>
            <div className="col-lg-7 col-md-12 colum__spacing">
                <div className="row row__margin">
                    <div className="col-lg-6 col-md-12 pt-0 colum__spacing">
                        <TwoColTable
                            data={merit}
                            tableName="Merits/Sanctions"
                            colHead1="Date"
                            colHead2=""
                            showLink={true}
                            linkTo="/dashboard/merits-sanctions"
                            keyName = {"teacher"}
                            pushState = {data && data}
                        />
                    </div>
                    <div className="col-lg-6 col-md-12 pt-0 colum__spacing">
                        <TwoColTable
                            data={feedback}
                            tableName="Feedback"
                            colHead1="Date"
                            colHead2="Name"
                            showLink={true}
                            linkTo="/dashboard/feedback"
                            keyName = {"teacher"}
                            pushState={data && data}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ECArow;
