import React, { Component } from 'react';
import image1 from "./img1.jpg";
import image2 from "./img2.jpg";
import vectorImage from "./vectorImage.svg";

class Home extends Component {
    render() {
        return (
            <div id="wrapper">
                <section  >
                    <h1>Frontend student baserad i Stockholm</h1>
                    <p id="textContainer">Hej! Jag heter Marcel, och är en Frontend utvecklare med stort intresse av att lära mig mer.
                        Jag studerar nuvarande på yrkeshögskola, och söker aktivt efter en praktikplats på en webbbyrå eller liknande i höst.
                        <br /><br /> Kontakta mig gärna om det låter intressant :)</p>
                    <img id="vectorImage" src={vectorImage} alt="Vektorgrafik föreställande buggfixare"></img>
                </section>
                <aside id="aside">
                    <img id="profilePicture" onMouseOver={e => (e.currentTarget.src = image2)}
                        onMouseOut={e => (e.currentTarget.src = image1)}
                        src={image1} alt="Profilbild" >
                    </img>
                    <h3>Kunskaper inom:</h3>
                    <ul>
                        <li><i className="fa fa-html5"></i> HTML</li>
                        <li><i className="fab fa-css3-alt"></i> CSS</li>
                        <li><i className="fab fa-js"></i> JavaScript</li>
                        <li><i className="fab fa-react"></i> React.js</li>
                        <li><i className="fab fa-node-js"></i> Node.js</li>
                        <li><i className="fab fa-npm"></i> NPM</li>
                        <li><i className="fab fa-bootstrap"></i> Bootstrap</li>
                        <li><i className="fab fa-git-alt"></i> Git</li>
                        <li><i className="fab fa-linux"></i> Linux</li>
                    </ul>
                </aside>
            </div >
        );
    }
}

export default Home;