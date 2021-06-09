import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDepartmentAPIcall } from "../../../Redux/Actions/schoolAction";
import { getAlldepartment } from "../../../Redux/Selectors/schoolCMSmodule";

export const useDepartment = () => {
    const [departmentDropdown, setDepartmentDropdown] = useState([]);
    const departmentList = useSelector(getAlldepartment);
    const dispatch = useDispatch();
    if(!departmentList){
        dispatch(getAllDepartmentAPIcall());
    }
    useEffect(() => {
        if (departmentList) {
            const data = departmentList.map((item: any) => {
                return {
                    id: item.data.id,
                    value: item.data.departmentName,
                };
            });
            setDepartmentDropdown(data);
        }
    }, [departmentList]);

    return useMemo(()=>departmentDropdown,[departmentDropdown])
}