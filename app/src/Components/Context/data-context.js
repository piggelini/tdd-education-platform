import React, { useState, useEffect } from 'react';

const DataContext = React.createContext({
    courselist: [],
    teacherlist: [],
    addData: () => { },
    getData: () => { }

})

export const DataContextProvider = (props) => {
    const [courselist, setCourselist] = useState([]);
    const [teacherlist, setTeacherlist] = useState([]);

    useEffect(() => {
        updateState('courselist');
        updateState('teacherlist');
    }, [])

    const getData = (datatype, id) => {
        return fetch(`http://localhost:3011/${datatype}/${id}`)
            .then((response) => response.json())
    }

    const updateState = (datatype) => {
        getData(datatype, "")
            .then((data) => {
                if (datatype === "teacherlist") {
                    setTeacherlist(data);
                } else if (datatype === "courselist")
                    setCourselist(data)
            })
    }

    const addData = (datatype, data) => {
        fetch(`http://localhost:3011/${datatype}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(() =>
            updateState(datatype)
        )

    }

    return (
        <DataContext.Provider
            value={{
                courselist: courselist,
                teacherlist: teacherlist,
                addData: addData,
                getData: getData,
            }}
        >
            {props.children}
        </DataContext.Provider>
    );
};

export default DataContext;

