import React from 'react'
import styled from 'styled-components';

const Div = styled.div`
    width: 100%;
    background-color: #2660A4;
    display: inline-block;
    color: white;

    #defineWidth {
        margin: auto;
        max-width: 600px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    h2 {
        margin-top: 1em;

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
`

const Technologies = () => {
    return (
        <Div>
            <h2>Technology</h2>
            <p className="textContainer">This is a rough list of technologies I've studied and been working with,
            and is one I try to constantly expand on.</p>
            <div id="defineWidth">
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>Vue.js</li>
                    <li>Node.js</li>
                    <li>NPM</li>
                    <li>Bootstrap</li>
                    <li>Git</li>
                    <li>Firebase</li>
                    <li>linux</li>
                </ul>
            </div>

        </Div>
    )
};

export default Technologies;

