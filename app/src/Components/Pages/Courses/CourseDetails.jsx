import { useEffect } from 'react';
import { React, useContext } from 'react'
import { useParams } from 'react-router-dom';
import DataContext from '../../Context/data-context';

export default function CourseDetails() {
    const context = useContext(DataContext)
    const { id } = useParams();

    useEffect(() => {
        context.getData("courselist", id);
    }, [])





    return (


        <div>{context.course.title}</div>
    )
}
