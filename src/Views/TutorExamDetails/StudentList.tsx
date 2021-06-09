import React from 'react';

function StudentList(data: any) {
    const [studentList, setStudentList] = React.useState<any>();
    React.useEffect(() => {
        setStudentList(data.data);
    }, [data]);

    return (
        <div className="student_list_conatiner">
            {studentList && studentList.length > 2 ? (
                <>
                    <div>
                        {studentList &&
                            studentList.map((item: any, index: any) => (
                                <>
                                    {index <= studentList.length / 2 && (
                                        <div className="student_name_text">{item.name}</div>
                                    )}
                                </>
                            ))}
                    </div>

                    <div className="student_list_right">
                        {studentList &&
                            studentList.map((item: any, index: number) => (
                                <>
                                    {index > studentList.length / 2 && (
                                        <div className="student_name_text">{item.name}</div>
                                    )}
                                </>
                            ))}
                    </div>
                </>
            ) : (
                <div>
                    {studentList &&
                        studentList.map((item: any) => <div className="student_name_text">{item.name}</div>)}
                </div>
            )}
        </div>
    );
}

export default StudentList;
