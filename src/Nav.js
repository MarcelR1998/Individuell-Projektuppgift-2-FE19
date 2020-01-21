import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <nav>
                <Link className="navStyle" to="/">
                    <h2>Marcel Rossi</h2>
                </Link>
                <ul className="nav-links">
                    <Link className="navStyle" to="/">
                        <li>Hem</li>
                    </Link>
                    <Link className="navStyle" to="/portfolio">
                        <li><i className="navFontAwesomeIcons fa fa-github"></i> Portfölj</li>
                    </Link>
                    <Link className="navStyle" to="/contact">
                        <li><i className="navFontAwesomeIcons fa fa-paper-plane"></i> Kontakt</li>
                    </Link>
                </ul>
            </nav>
        );
    }
}

export default Nav;