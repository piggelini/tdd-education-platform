import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Anmälan</Link>
                    </li>
                    <li>
                        <Link to='/kurser'>Kurser</Link>
                    </li>
                    <li>
                        <Link to='/larare'>Lärare</Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}
