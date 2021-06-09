import React, { useEffect } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography } from '@material-ui/core';
import PageFooter from '../../components/PageFooter';
import TutorResultComponent from './TutorResultsComponent';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilteredExamList } from '../../Redux/Actions/teacherAction';
import moment from 'moment';
import FilterContainer from '../../Containers/FilterContainer';
import useTutorSubjects from '../../Hooks/tutor/useTutorSubjects';
import { SelectedFilterValue } from '../../Containers/FilterContainer/types';
import useMenuList from '../../Hooks/useMenuList';
import FullScreenLoader from '../../components/Loaders/FullScreenLoader';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';

const PersonalSchoolToggle: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const menu = useMenuList('tutor');
    const { filtersData } = useTutorSubjects();
    const [selectedFilter, setSelectedFilter] = React.useState<SelectedFilterValue>(null);
    const { examListArray, isPending } = useSelector((state: rootReducerType) => ({
        examListArray: state.teacherReducer.filterExamListBySubject.data,
        isPending: state.teacherReducer.filterExamListBySubject.isPending,
    }));

    useEffect(() => {
        dispatch(fetchFilteredExamList(selectedFilter));
    }, [selectedFilter, setSelectedFilter]);

    return (
        <NavigationMenu menuList={menu} showBurgerNav={'hide'} tutorOptions={'show'} reverseButtons={'yes'}>
            {isPending && <FullScreenLoader />}
            <div className="tutor_exams_container ">
                <div className="tutor_exams_subcontainer">
                    <div className="row">
                        <div className="col-md-6 p-0">
                            <div className="row">
                                <div className="col-md-12">
                                    <FilterContainer
                                        title="Exams"
                                        sort={false}
                                        filtersData={filtersData}
                                        initialFilterLabel="Filter"
                                        onFilterChange={(filter) => setSelectedFilter(filter)}
                                        value={selectedFilter}
                                    />
                                </div>
                            </div>
                            <div className="show_tutor_resNumber">
                                <div className="row">
                                    <div className="col-6">
                                        <Typography className="examsText">
                                            {examListArray && examListArray.length}
                                        </Typography>
                                        <Typography className="examsSmallText">Results</Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-0 examsleftBorder">
                            <div className="tutor_exams_result_container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="submit_result_container">
                                            <div>
                                                <Typography className="examsLargeText">Total Results</Typography>
                                            </div>
                                            <Link
                                                style={{ textDecoration: 'none', color: 'black' }}
                                                to="/tutor/tutor-submit-results"
                                            >
                                                <div className="submit_marks_button">
                                                    <Typography className="examsSmallText">Submit Marks</Typography>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="results_desc_container">
                                    {examListArray &&
                                        examListArray.map(
                                            (
                                                val: {
                                                    exam: {
                                                        id: number;
                                                        Subject: { subjectName: string | undefined };
                                                        title: string | undefined;
                                                        description: string | undefined;
                                                    };
                                                    createdAt: moment.MomentInput;
                                                    averageStudent: string | undefined;
                                                },
                                                index: number
                                            ) => (
                                                <>
                                                    <TutorResultComponent
                                                        subject={val.exam.Subject.subjectName}
                                                        subjectDesc={val.exam.title}
                                                        summary={val.exam.description}
                                                        postedDate={moment(val.createdAt).format('MM/DD/YYYY')}
                                                        averageStudent={val.averageStudent}
                                                        id={val.exam.id}
                                                    />
                                                    {index < examListArray.length - 1 && (
                                                        <div className="col-12 exams_horizontalline"></div>
                                                    )}
                                                </>
                                            )
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="commonFooter">
                    <PageFooter padding={true} />
                </div>
            </div>
        </NavigationMenu>
    );
};
export default PersonalSchoolToggle;
