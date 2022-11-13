import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="uk-container">
            <nav className="uk-navbar">
                <div className="uk-navbar left">
                    <Link to="/" className="uk-navbar-item uk-logo">
                        TodoApp
                    </Link>
                </div>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        <li>
                            <Link to="/NewTask">
                                <span uk-icon="icon:plus; ratio:1.2" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}