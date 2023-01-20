import { React, useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import DataContext from '../../Context/data-context'
import AddButton from '../../UI/addButton/AddButton'
import classes from './CourseList.module.css'

export default function CourseList() {
    const context = useContext(DataContext);
    const [courses, setCourses] = useState([])

    useEffect(() => {

        setCourses(context.courselist);

    }, [context.courselist])



    return (
        <div
            data-testid='courses-component'
        >
            <h1>Courses</h1>


            {courses.map((course) => {
                { console.log(course) }
                return (
                    <Link to={`/courses/${course.id}`}>
                        < article key={course.id} className={classes.article}>
                            <ul>
                                <li>Course: {course.title}</li>
                                <li>Course number: {course.id}</li>
                                <li>Length: {course.weeks} weeks</li>
                                <li>Start: {course.start}</li>
                            </ul>
                        </article>
                    </Link>
                )
            })}
            <AddButton modal='add-course'>Add course</AddButton>
        </div >
    )
}
