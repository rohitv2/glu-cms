import React, { useEffect } from 'react';
import {  useSelector } from 'react-redux';
import { rootReducerType } from '../Interfaces/reducerInterfaces';
import { getClassAndSections } from './getClassSections';

interface props{
    getClassName: string;
    handleClasses: (value:Array<string>) => void;
    handleSections: (value:Array<string>) => void;
}
const ClassAndSections:React.FunctionComponent<props> = ({getClassName, handleClasses, handleSections}) => {
    const classList = useSelector((state: rootReducerType) => state.classReducer.classList);
    // useEffect(() => {
    //     if (classList) {
    //         const totalClasses: string[] = [];
    //         const classSection = getClassAndSections(classList);
    //         classSection.map((item: any) => {
    //             const classes = Object.keys(item);
    //             totalClasses.push(classes[0])
    //         });
    //         handleClasses(totalClasses);
    //     }
    // }, [classList]);
    useEffect(() => {
        if (getClassName !== '') {
            const classSection = getClassAndSections(classList);
            classSection.map((item: any) => {
                if (item.hasOwnProperty(getClassName)) {
                    handleSections(item[getClassName]);
                }
            });
        }
    }, [getClassName]);
    return null;
};

export default ClassAndSections;
