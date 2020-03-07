import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <nav>
                <div id="gradientBar"></div>
                <div id="navBarContents">
                    <ul className="nav-links">
                        <li>
                            <Link className="navLinkStyle" to="/">
                                <h2>Marcel Rossi</h2>
                            </Link>
                        </li>
                        <li>
                            <Link className="navLinkStyle" to="/">Hem</Link>
                        </li>
                        <li>
                            <Link className="navLinkStyle" to="/portfolio"><i className="navFontAwesomeIcons fa fa-github"></i> Portfölj</Link>
                        </li>
                        <li>
                            <Link className="navLinkStyle" to="/contact"><i className="navFontAwesomeIcons fa fa-paper-plane"></i> Kontakt</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;