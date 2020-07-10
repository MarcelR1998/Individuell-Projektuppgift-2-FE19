import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components'

const Nav = styled.nav`
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;

    #navBarContents {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 10vh;
        min-height: 50px;
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(4px);
    }
    .nav-links {
        width: 95%;
        max-width: 600px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
    }
    .navLinkStyle{
        color: black;
        text-decoration: none;
    }
    .navLinkStyle:hover {
        text-decoration: none;
    }
    .navLinkStyle::after {
        content: "";
        display: block;
        width: 0;
        height: 2px;
        background-color: black;
        transition: width .3s;
        /* margin: auto; */
    }
    .navLinkStyle:hover::after {
        width: 100%;
        transition: width .3s;
    }
`

class NavBar extends Component {
    render() {
        return (
            <Nav>
                <div id="navBarContents">
                    <ul className="nav-links">
                        <li>
                            <Link className="navLinkStyle" to="/">
                                <h2>Marcel Rossi</h2>
                            </Link>
                        </li>
                        <li>
                            <Link className="navLinkStyle" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="navLinkStyle" to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link className="navLinkStyle" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </Nav>
        );
    }
}

export default NavBar;