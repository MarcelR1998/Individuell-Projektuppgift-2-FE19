import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <ul>
                    <li><p>(c) Marcel Rossi {new Date(Date.now()).getFullYear()}</p> </li>
                    <li><a href="https://www.linkedin.com/in/marcel-rossi-84429819b/"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="https://github.com/MarcelR1998"><i className="fa fa-github"></i></a></li>
                    <li><a href="https://m.me/marcel.rossi37"><i className="fab fa-facebook-messenger"></i></a></li>
                    <li><a href="mailto:marcelrossi@hotmail.com"><i className="fa fa-at"></i></a></li>
                    <li> <a href="tel:+46704868376"><i className="fas fa-phone"></i></a></li>
                </ul>
            </footer>
        );
    }
}

export default Footer;