import React, { Component } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    width: 100%;
    background-color: black;
    color: white;
    margin: 0;
    min-height: 12vh;
    display: flex;
    justify-content: center;
    ul {
        display: flex;
        justify-content: center;
        height: fit-content;
        margin: auto;
    }
    li {
        height: fit-content;
        margin: auto 1em auto 1em;
    }
    a {
        color: white;
        font-size: 150%;
    }
    @media only screen and (max-width:840px) {
        li {
            height: fit-content;
            margin: auto 0.5em auto 0.5em;
        }
        
        a {
            font-size: 130%;
        }
    }
`

class Footer extends Component {
    render() {
        return (
            <StyledFooter>
                <ul>
                    <li><a href="https://www.linkedin.com/in/marcel-rossi-84429819b/"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="https://github.com/MarcelR1998"><i className="fa fa-github"></i></a></li>
                    <li><a href="https://m.me/marcel.rossi37"><i className="fab fa-facebook-messenger"></i></a></li>
                    <li><a href="mailto:marcelrossi@hotmail.com"><i class="fas fa-envelope"></i></a></li>
                </ul>
            </StyledFooter>
        );
    }
}

export default Footer;