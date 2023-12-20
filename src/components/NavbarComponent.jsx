import React from "react"
import { Link } from "react-router-dom"

export function NavbarComponent() {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
            </ul>
        </nav>
    )
}
