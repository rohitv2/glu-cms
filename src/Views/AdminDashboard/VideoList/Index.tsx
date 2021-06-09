import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getallVideoAPIcall } from '../../../Redux/Actions/superAdminActions';
import { checkValue } from '../../../Helper/checkValue';
import VideoList from './VideoList';

const Index = () => {
    const dispatch = useDispatch();
    const video = useSelector((state: any) => state.superAdminReducer.videoList);
    const [videoList, setVideoList] = useState([]);

    useEffect(() => {
        dispatch(getallVideoAPIcall());
    }, []);
    useEffect(() => {
        if (video) {
            const data = video.map((element: any) => {
                return {
                    title: checkValue(element.title),
                    description: checkValue(element.description),
                    resource: checkValue(element.resource),
                    coverImage: checkValue(element.coverImage),
                    videoLink: checkValue(element.videoLink),
                    maxStudent: checkValue(element.maxStudent),
                };
            });
            setVideoList(data);
        }
    }, [video]);

    // return <TeacherList teacherList={teacherList} />;
    return <VideoList videoList={videoList} />;
};

export default Index;
