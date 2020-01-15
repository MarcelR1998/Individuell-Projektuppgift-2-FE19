import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Nav extends Component {
    render() {
        return (
            <nav>
                <h2 id="logoStyle" >
                    <Link className="navStyle" to="/">
                        <li>Marcel Rossi</li>
                    </Link>
                </h2>
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
                    <script src="http://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
                </ul>
            </nav>
        );
    }
}

export default Nav;