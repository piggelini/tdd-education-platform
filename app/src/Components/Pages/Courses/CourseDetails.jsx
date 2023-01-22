import { React, useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import DataContext from '../../Context/data-context';

export default function CourseDetails() {
    const [course, setCourse] = useState({});

    const context = useContext(DataContext)
    const { id } = useParams();

    useEffect(() => {
        context.getData("courselist", id)
            .then((data) => setCourse(data));
    }, [])

    return (
        <section>
            <h2>{course?.title}</h2>
            <p>Course number: {course.id}</p>
            <p>Course description: {course.description}</p>
            <p>Weeks: {course.weeks}</p>
            <p>Start: {course.start}</p>
        </section>
    );
}
