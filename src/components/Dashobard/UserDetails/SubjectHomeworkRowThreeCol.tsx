import React from 'react';
import CircleGraph from '../CircleGraph';
import { useHistory } from 'react-router';
import ThreeColTable from '../ThreeColTable';

interface props {
    color?: string;
    data?: Array<{ col1: string; col2: string | React.ReactNode }>;
    colHead1?: string;
    colHead2?: string;
    colHead3?: string;
    tableName?: string;
    colWidth1?: string;
    colWidth2?: string;
    colWidth3?: string;
    height?: string;
    children?: React.ReactNode;
    homeworkData: {complete:   number, incomplete:   number};
    handleRowClick?: (i: number | string) => void;
}

const SubjectHomeworkRowThreeCol: React.FunctionComponent<props> = ({
    color,
    data,
    colHead1,
    colHead2,
    colHead3,
    tableName,
    colWidth1,
    colWidth2,
    colWidth3,
    height,
    children,
    homeworkData,
    handleRowClick,
}) => {
    const route = useHistory();
    const gotoPage = () => {
        route.push('/dashboard/student-details/homework');
    };
    return (
        <div className="row row__margin">
            <div className="col-lg-6 d-flex col-md-12 colum__spacing">
                <ThreeColTable
                    color={color}
                    colWidth1={colWidth1}
                    colWidth2={colWidth2}
                    colWidth3={colWidth3}
                    height={height}
                    children={children}
                    data={data}
                    tableName={tableName}
                    colHead1={colHead1}
                    colHead2={colHead2}
                    colHead3={colHead3}
                    rowClick={handleRowClick}
                />
            </div>
            <div className="col-lg-6 d-flex col-md-12 colum__spacing">
                <CircleGraph
                    goto={gotoPage}
                    marker1="Completed"
                    marker2="Not completed"
                    chartName="Homework"
                    available={homeworkData.complete}
                    notavailalbe={homeworkData.incomplete}
                />
            </div>
        </div>
    );
};

export default SubjectHomeworkRowThreeCol;
