import React, { Component } from 'react';
import image1 from "../media/img1.png";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Technologies from '../components/Technologies'

const Wrapper = styled.div`
    margin: auto;
    width: 100%;
    min-height: 100vh;
    margin-top: 12vh;

    #profilePicture {
        width: 256px;
        border-radius: 100%;
        margin-top: 16px;
    }

    @media only screen and (max-width:840px) {
        /* grid-template-columns: auto; */
    }

    h1 {
        max-width: 600px
    }

    .button{
        display: inline-block;
        color: black;
        background-color: transparent;
        border: 1px solid black;
        width: fit-content;
        margin: 16px auto 2em;
        padding: 12px;
        -webkit-transition: .1s;
    }

    .button:hover{
        text-decoration: none;
        background-color: black;
        color: white;
    }

    section {
        min-height: 88vh;
    }
`

class Home extends Component {
    render() {
        return (
            <Wrapper>
                <section>
                    <img id="profilePicture" alt="me" src={image1} />
                    <h1>Front-end developer based in Stockholm</h1>
                    <p className="textContainer">Hello! My name is Marcel, and I'm an aspiring front-end developer
                    constantly learning new things. Currently pursuing a Higher Vocational degree in front-end development, searching for an internship, and tinkering away.</p>
                    <Link className="button frontPageButton" to="/portfolio">Portfolio</Link>
                </section>
                <Technologies></Technologies>
            </Wrapper>
        );
    }
}

export default Home;