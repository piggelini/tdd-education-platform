import { React, useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from '../../Context/data-context'
import AddButton from '../../UI/addButton/AddButton'
import classes from './Teacher.module.css'

export default function Teachers() {
    const context = useContext(DataContext);



    return (
        <>
            <div className="text-center">
                <h2>Teachers</h2>
                <section
                    className='row  text-center'
                    data-testid='teacher-list-component'
                >

                    {context.teacherlist.map((teacher) => {
                        { console.log(teacher) }
                        return (
                            <Link className='col-md-6 col-xs-12' to={`/teachers/${teacher.id}`}>
                                < article className=''>
                                    <ul className='list-unstyled'>
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
                <AddButton modal="add-teacher" >Add teacher</AddButton>
            </div>
        </>

    )
}
