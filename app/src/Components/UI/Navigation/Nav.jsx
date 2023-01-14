import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Application</Link>
                    </li>
                    <li>
                        <Link to='/courses'>Courses</Link>
                    </li>
                    <li>
                        <Link to='/teachers'>Teachers</Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}
