import React from 'react'

import './styles.css';
export default function Navbar() {
    return (
        <nav className="navbar-container m-auto position-fixed">
            <ul className="row align-items-center justify-content-around my-0 py-3">
                <li className="column"><a className="text-decoration-none" href="#creator">Creator</a></li>
                <li className="column"><a className="text-decoration-none" href="#home">Home</a></li>
                <li className="column"><a className="text-decoration-none" href="#images">Images</a></li>
            </ul>
        </nav>
    )
}
