import { React, useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from '../../Context/data-context'
import AddButton from '../../UI/addButton/AddButton'
import classes from './Teacher.module.css'

export default function Teachers() {
    const context = useContext(DataContext);



    return (
        <>
            <section
                data-testid='teacher-list-component'
            >Teachers

                {context.teacherlist.map((teacher) => {
                    { console.log(teacher) }
                    return (
                        <Link to={`/teachers/${teacher.id}`}>
                            < article className={classes.article}>
                                <ul>
                                    <li> {teacher.firstname} {teacher.lastname}</li>
                                    <li>Personal id: {teacher.personalid}</li>
                                    <li>Email: {teacher.email}</li>
                                    <li>Phone: {teacher.phone}</li>
                                </ul>
                            </article>
                        </Link>
                    )
                })}
            </section>
            <AddButton modal="add-teacher">Add teacher</AddButton>
        </>

    )
}
