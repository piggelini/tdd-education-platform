import { React, useContext } from 'react'
import DataContext from '../../Context/data-context'
import classes from './Home.module.css'

export default function Home() {
    const context = useContext(DataContext);
    return (
        <section
            data-testid='home-component'
        >
            <h1>Course application</h1>
            {context.courselist.map((course) => {
                { console.log(course) }
                return (
                    < article key={course.id} className={classes.article}>
                        <ul>
                            <li>Course: {course.title}</li>
                            <li>Course description: {course.description}</li>
                            <li>Length: {course.weeks} weeks</li>
                            <li>Start: {course.start}</li>
                        </ul>
                    </article>
                )
            })}
        </section>
    )
}
