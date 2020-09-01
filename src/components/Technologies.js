import React from 'react'
import styled from 'styled-components';
import bootstrap from '../media/vectors/bootstrap.svg'
import css3 from '../media/vectors/css3.svg'
import firebase from '../media/vectors/firebase.svg'
import git from '../media/vectors/git.svg'
import html5 from '../media/vectors/html5.svg'
import javascript from '../media/vectors/javascript.svg'
import linux from '../media/vectors/linux.svg'
import nextjs from '../media/vectors/nextjs.svg'
import nodejs from '../media/vectors/nodejs.svg'
import npm from '../media/vectors/npm.svg'
import reactjs from '../media/vectors/reactjs.svg'
import vuejs from '../media/vectors/vuejs.svg'
import wordpress from '../media/vectors/wordpress.svg'

const Div = styled.div`
    width: 100%;
    background-color: white;
    display: inline-block;

    #defineWidth {
        margin: auto;
        max-width: 600px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    h2 {
        margin-top: 2em;
    }
    ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        li{
            margin: 1em;
            font-size: 24px;
        }
    }

    img {
        height: 64px;
    }
`

const Technologies = () => {
    return (
        <Div>
            <h2>Technology</h2>
            <p className="textContainer">This is a rough list of technologies I've studied and been working with,
            and is one that I try to constantly expand.</p>
            <div id="defineWidth">
                <ul>
                    <li><img src={html5} alt="html5" /></li>
                    <li><img src={css3} alt="css3" /></li>
                    <li><img src={javascript} alt="javascript" /></li>
                    <li><img src={reactjs} alt="react.js" /></li>
                    <li><img src={nextjs} alt="next.js" /></li>
                    <li><img src={vuejs} alt="vue.js" /></li>
                    <li><img src={nodejs} alt="node.js" /></li>
                    <li><img src={npm} alt="npm" /></li>
                    <li><img src={bootstrap} alt="bootstrap" /></li>
                    <li><img src={git} alt="git" /></li>
                    <li><img src={firebase} alt="firebase" /></li>
                    <li><img src={linux} alt="linux" /></li>
                    <li><img src={wordpress} alt="wordpress" /></li>
                </ul>
            </div>

        </Div>
    )
};

export default Technologies;

