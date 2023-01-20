import React, { useState, useEffect } from 'react';

const DataContext = React.createContext({
    courselist: [],
    teacherlist: [],
    course: {},
    teacher: {},
    addData: () => { },
    getData: () => { }

})

export const DataContextProvider = (props) => {
    const [courselist, setCourselist] = useState([]);
    const [teacherlist, setTeacherlist] = useState([]);
    const [course, setCourse] = useState();
    const [teacher, setTeacher] = useState();

    useEffect(() => {
        getData('courselist', "");
        getData('teacherlist', "");

    }, [])

    const getData = (datatype, id) => {
        fetch(`http://localhost:3011/${datatype}/${id}`)
            .then((response) => response.json())
            .then((data) => updateState(datatype, id, data));
    }


    const updateState = (datatype, id, data) => {
        if (id !== "" && datatype === "teacherlist") {
            setTeacher(data)
        } else if (id !== "" && datatype === "courselist") {
            setCourse(data)
        } else if (datatype === "teacherlist") {
            setTeacherlist(data);
        } else if (datatype === "courselist")
            setCourselist(data)
    }

    const addData = (datatype, data) => {

        fetch(`http://localhost:3011/${datatype}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(() => getData(datatype, ""))

    }

    return (
        <DataContext.Provider
            value={{
                courselist: courselist,
                teacherlist: teacherlist,
                addData: addData,
                getData: getData,
                course: course,
                teacher: teacher,
            }}
        >
            {props.children}
        </DataContext.Provider>
    );
};

export default DataContext;

