import React, { Component } from 'react';
import image1 from "./img1.jpg"
import image2 from "./img2.jpg"
import image3 from "./img3.jpg"

class Hem extends Component {
    render() {
        return (
            <div id="wrapper">
                <section  >
                    <h1>Frontend student baserad i Stockholm</h1>
                    <p className="frameStyle">Hej! Jag heter Marcel, och jag studerar till att bli Frontend utvecklare.</p>
                </section>
                <aside id="aside">
                    <img id="profilBild" onMouseOver={e => (e.currentTarget.src = image3)}
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
                        <li><i className="fab fa-bootstrap"></i> Bootstrap</li>
                        <li><i className="fab fa-git-alt"></i> Git</li>
                        <li><i className="fab fa-linux"></i> Linux</li>
                    </ul>
                </aside>
            </div >
        );
    }
}

export default Hem;