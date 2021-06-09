import React, { useState, useRef, useEffect } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography, TextField } from '@material-ui/core';
import ReusableBanner from '../../components/ReusableBanner';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';
import PageFooter from '../../components/PageFooter';
import { useDispatch, useSelector } from 'react-redux';
import TextAreaWithLabel from '../../components/Inputs/TextAreaWithLabel';
import {
    getTeacherStudentLike,
    postTeacherRecommendation,
    editTeacherRecommendationById,
    addStudentToRecomendation,
    getTeacherRecommendationById,
    deleteStudentFromReco,
} from '../../Redux/Actions/teacherAction';
import { colors } from '../../Styles/colors';
import freeTutorSubjectList from '../../Hooks/tutor/freeTutorSubjectList';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import { useHistory } from 'react-router';

import useMenuList from '../../Hooks/useMenuList';

const TutorRecommendEdit: React.FunctionComponent = () => {
    const singleReco = useSelector((state: any) => state.teacherReducer.singleTeacherReco);
    const dispatch = useDispatch();
    const [todo, setTodo] = useState<any>([]);
    const subjectDropdown = freeTutorSubjectList();

    const menu = useMenuList('tutor');
    const [recommend, setRecommend] = useState({
        subjectName: '',
        topic: '',
        students: [],
        comment: '',
    });
    const [query, setQuery] = useState({
        name: '',
    });
    useEffect(() => {
        dispatch(getTeacherRecommendationById(history.location.state));
    }, []);

    const goBackFunction = () => {
        history.goBack();
    };
    useEffect(() => {
        setRecommend({
            subjectName: singleReco && singleReco.subject,
            topic: singleReco && singleReco.class,
            students:
                singleReco &&
                singleReco.RecommendedStudents.map((item: any) => {
                    return { studentId: item.studentId };
                }),
            comment: singleReco && singleReco.comment,
        });
        var todoData: any;
        if (singleReco) {
            todoData = singleReco.RecommendedStudents.map((item: any) => {
                return { name: `${item.Student.firstName} ${item.Student.lastName}`, id: item.studentId };
            });
        }
        singleReco && setTodo([...todoData]);
    }, [singleReco]);
    const [showList, setShowList] = useState(false);
    useEffect(() => {
        dispatch(getTeacherStudentLike(query));
    }, [query]);

    const teacherStudentLike = useSelector((state: rootReducerType) => state.teacherReducer.teacherStudentLike);
    const teacherPostRecommendation = useSelector(
        (state: rootReducerType) => state.teacherReducer.teacherPostRecommendation
    );
    const inputRef = useRef(null);
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (query.name == '') return;
        setTodo([...todo, { name: query.name, id: '' }]);
        (inputRef as any).current.value = '';
        setShowList(false);
    };
    const handleChange = (e: any) => {
        setQuery({ name: e.target.value });
        setShowList(true);
    };

    const history = useHistory();
    return (
        <NavigationMenu menuList={menu} showBurgerNav={'hide'} tutorOptions={'show'} reverseButtons={'yes'}>
            <div className="tutor_recommend_container">
                <div className="tutor_recommend_subcontainer">
                    <div className="tutor_recommend_subcontainer_banner">
                        <ReusableBanner heading={'Recommend'} description={'Suggest classes to improve results.'} />
                    </div>
                    <div className="row horizontalline"></div>
                    <div className="tutor_recommend_subcontainer_inputfeild">
                        <form>
                            <div className="row">
                                <div className="col-md-6 p-0">
                                    <Typography className="recommendText">Students</Typography>
                                </div>
                                <div className="col-md-6 p-0 recommendleftBorder ">
                                    <div className="addSkill">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <SelectFieldUnderline
                                                            label="Subject"
                                                            value={recommend.subjectName}
                                                            className="select-large"
                                                            options={subjectDropdown.map((item:any) => item.value)}
                                                            getValue={(val) => {
                                                                setRecommend({ ...recommend, subjectName: val });
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="col-6">
                                                        <TextField
                                                            className="line-input-large"
                                                            label="Class"
                                                            value={recommend.topic}
                                                            onChange={(e) =>
                                                                setRecommend({
                                                                    ...recommend,
                                                                    topic: e.target.value,
                                                                })
                                                            }
                                                            fullWidth
                                                        />
                                                    </div>
                                                </div>
                                                <div className="horizontalline col-12 mb-4"></div>

                                                {/* <div className="recommendContainer">
                                                    <div className="horizontalline col-12"></div>
                                                </div> */}
                                             <div className="col-md-12">
                                                <form action="" onSubmit={(e) => handleSubmit(e)}>
                                                     <div className="row">\
                                                    <div className="col-md-12 p-0 mb-5">
                                                        <TextAreaWithLabel
                                                            color={colors.black}
                                                            borderColor={colors.lightBlack}
                                                            weight={500}
                                                            label="Comment"
                                                            rows={5}
                                                            value={recommend.comment}
                                                            onChanged={(e: any) =>
                                                                setRecommend({
                                                                    ...recommend,
                                                                    comment: e.target.value,
                                                                })
                                                            }
                                                        />
                                                    </div>
                                                    <div className="col-md-12 p-0">
                                                        <TextField
                                                            inputRef={inputRef}
                                                            className="line-input-large"
                                                            label="Add New"
                                                            style={{ width: '90%' }}
                                                            fullWidth
                                                            onChange={(e) => handleChange(e)}
                                                        />
                                                    </div>
                                                    {showList && (
                                                        <div className="col-md-12">
                                                            <div className="show_students_like">
                                                                {teacherStudentLike &&
                                                                    teacherStudentLike.map((val: any) => (
                                                                        <ul
                                                                            style={{
                                                                                display:
                                                                                    query.name == '' ? 'none' : 'block',
                                                                            }}
                                                                        >
                                                                            <li
                                                                                className="students_like_text"
                                                                                onClick={async () => {
                                                                                    setShowList(false);
                                                                                    (inputRef as any).current.focus();
                                                                                    (inputRef as any).current.value =
                                                                                        val.firstName +
                                                                                        ' ' +
                                                                                        val.lastName;
                                                                                    setQuery({
                                                                                        name:
                                                                                            val.firstName +
                                                                                            ' ' +
                                                                                            val.lastName,
                                                                                    });
                                                                                    setRecommend((prev: any) => {
                                                                                        return {
                                                                                            ...prev,
                                                                                            students: [
                                                                                                ...prev.students,
                                                                                                {
                                                                                                    studentId: val.id,
                                                                                                    name: `${val.firstName} ${val.lastName}`,
                                                                                                },
                                                                                            ],
                                                                                        };
                                                                                    });
                                                                                    await dispatch(
                                                                                        addStudentToRecomendation(
                                                                                            val.id,
                                                                                            history
                                                                                        )
                                                                                    );
                                                                                }}
                                                                            >{`${val.firstName} ${val.lastName}`}</li>
                                                                        </ul>
                                                                    ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                    <div className="col-md-12">
                                                        <div className="skill_container">
                                                            <div className="row choose_weeks">
                                                                {todo.map((val: any, index: number) => (
                                                                    <Typography
                                                                        onClick={() => {
                                                                            setTodo((prevState:any) => {
                                                                                return prevState.filter(
                                                                                    (item: any) => item.id !== val.id
                                                                                );
                                                                            });
                                                                            dispatch(
                                                                                deleteStudentFromReco(
                                                                                    val.id,
                                                                                    history.location.state
                                                                                )
                                                                            );
                                                                        }}
                                                                        key={index}
                                                                        className="boxes"
                                                                    >
                                                                        {val.name}
                                                                    </Typography>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                 </form>
                                             </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="recommendClass_container">
                                    <Typography className="recommendText">Classes</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 recommendleftBorder ">
                                <div className="recommendSubject_container">
                                    <div className="recommendCancel_container">
                                        <>
                                            <div className="reusable_addCancel_subcontainer">
                                                <button
                                                    disabled={
                                                        teacherPostRecommendation && teacherPostRecommendation.success
                                                    }
                                                    className="add_button btn"
                                                    onClick={() => {
                                                        setTodo([]);
                                                        const toSendData: any = { ...recommend };
                                                        delete toSendData.students;
                                                        dispatch(
                                                            editTeacherRecommendationById(
                                                                toSendData,
                                                                history.location.state,
                                                                history
                                                            )
                                                        );
                                                    }}
                                                >
                                                    <Typography style={{ cursor: 'pointer' }} className="addCanceltext">
                                                        Save
                                                    </Typography>
                                                </button>
                                                <div
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={goBackFunction}
                                                    className="cancel_button"
                                                >
                                                    <Typography className="addCanceltext">Cancel</Typography>
                                                </div>
                                            </div>
                                        </>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="commonFooter">
                    <PageFooter />
                </div>
            </div>
        </NavigationMenu>
    );
};

export default TutorRecommendEdit;
