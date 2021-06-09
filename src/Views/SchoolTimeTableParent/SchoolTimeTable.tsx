import React from 'react';
import ProgressBar from '../PersonalSchool2/ProgressBar';
import NavigationMenu from '../../components/NavigationMenu';
import PageFooter from '../../components/PageFooter';
import { Typography } from '@material-ui/core';
import MadeBy from '../Footer/MadeBy';
const PersonalSchoolToggle: React.FunctionComponent = () => {
    // const menu = [
    //     { link: '/tutor/', name: 'Dashboard' },
    //     { link: '/tutor/set-class', name: 'Set Class' },
    //     { link: '', name: 'Messages' },
    //     { link: '', name: 'Shop' },
    // ];

    const menu = [
        { link: '/parent/home', name: 'Home' },
        { link: '/parent/dashboard', name: 'Dashboard' },
        { link: '', name: 'Subject' },
        { link: '', name: 'Messages' },
    ];
    return (
        <NavigationMenu menuList={menu}>
            <div className="personal_school_timetable">
                <div className="personal_school_timetable_subcontainer">
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 p-0">
                            <div className="school_table_calendar_container">
                                <div className="personal_school_calendarDate row">
                                    <div className="col-6 p-0">
                                        <Typography className="calendarsubText1">11th August 2020</Typography>
                                        <div className="school_calendar_component">
                                            <ul className="weekdays">
                                                <li>Mo</li>
                                                <li>Tu</li>
                                                <li>We</li>
                                                <li>Th</li>
                                                <li>Fr</li>
                                                <li>Sa</li>
                                                <li>Su</li>
                                            </ul>

                                            <ul className="days">
                                                <li>1</li>
                                                <li>2</li>
                                                <li>3</li>
                                                <li>4</li>
                                                <li>5</li>
                                                <li>6</li>
                                                <li>7</li>
                                                <li>8</li>
                                                <li>9</li>
                                                <li>
                                                    <span className="active">10</span>
                                                </li>
                                                <li>11</li>
                                                <li>12</li>
                                                <li>13</li>
                                                <li>14</li>
                                                <li>15</li>
                                                <li>16</li>
                                                <li>17</li>
                                                <li>18</li>
                                                <li>19</li>
                                                <li>20</li>
                                                <li>21</li>
                                                <li>22</li>
                                                <li>23</li>
                                                <li>24</li>
                                                <li>25</li>
                                                <li>26</li>
                                                <li>27</li>
                                                <li>28</li>
                                                <li>29</li>
                                                <li>30</li>
                                                <li>31</li>
                                                <li>
                                                    <span className="inActive">1</span>
                                                </li>

                                                <li>
                                                    <span className="inActive">2</span>
                                                </li>
                                                <li>
                                                    <span className="inActive">3</span>
                                                </li>
                                                <li>
                                                    <span className="inActive">4</span>
                                                </li>
                                                <li>
                                                    <span className="inActive">5</span>
                                                </li>
                                                <li>
                                                    <span className="inActive">6</span>
                                                </li>
                                                <li>
                                                    <span className="inActive">7</span>
                                                </li>
                                                <li>
                                                    <span className="inActive">8</span>
                                                </li>
                                                <li>
                                                    <span className="inActive">9</span>
                                                </li>
                                                <li>
                                                    <span className="inActive">10</span>
                                                </li>
                                                <li>
                                                    <span className="inActive">11</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <Typography className="calendarsubText2">9.45am</Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 school_borderline p-0">
                            <div className="school_table_progress_container">
                                <div className="row">
                                    <div className="big_timetable_date">
                                        <Typography className="calendarText">11th August 2020</Typography>
                                    </div>
                                </div>

                                <ProgressBar
                                    time={'8:30-9:25am'}
                                    subject={'Maths'}
                                    typeClassroom={'Classroom'}
                                    type={'Attendance'}
                                    typeNumber={'34/40'}
                                    classType={'8A'}
                                    progress={25}
                                />
                                <div className="row school_horizontalline"></div>
                                <ProgressBar
                                    time={'8:30-9:25am'}
                                    subject={'Maths'}
                                    typeClassroom={'Classroom'}
                                    type={'Attendance'}
                                    typeNumber={'34/40'}
                                    classType={'8A'}
                                    progress={25}
                                />
                                <div className="row school_horizontalline"></div>
                                <ProgressBar
                                    time={'8:30-9:25am'}
                                    subject={'Maths'}
                                    typeClassroom={'Classroom'}
                                    type={'Attendance'}
                                    typeNumber={'34/40'}
                                    classType={'8A'}
                                    progress={25}
                                />
                                <div className="row school_horizontalline"></div>
                                <ProgressBar
                                    time={'8:30-9:25am'}
                                    subject={'Maths'}
                                    typeClassroom={'Classroom'}
                                    type={'Attendance'}
                                    typeNumber={'34/40'}
                                    classType={'8A'}
                                    progress={25}
                                />
                                <div className="row school_horizontalline"></div>
                                <ProgressBar
                                    time={'8:30-9:25am'}
                                    subject={'Maths'}
                                    typeClassroom={'Classroom'}
                                    type={'Attendance'}
                                    typeNumber={'34/40'}
                                    classType={'8A'}
                                    progress={25}
                                />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="commonWhiteFooter">
                <PageFooter/>
            </div>
            </div>
        </NavigationMenu>
    );
};
export default PersonalSchoolToggle;
