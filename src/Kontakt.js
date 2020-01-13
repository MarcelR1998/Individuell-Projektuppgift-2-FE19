import React, { Component } from 'react';

class Kontakt extends Component {
    render() {
        return (
            <div>
                <h1>Kontakta mig</h1>
                <ul className="frameStyle" >
                    <li><a href="mailto:marcelrossi@hotmail.com"><i className="fa fa-at"></i> marcelrossi@hotmail.com</a></li>
                    <li> <a href="tel:+46704868376"><i className="fa fa-mobile"></i> +46704868376</a></li>
                    <li><a href="https://github.com/MarcelR1998"><i className="fa fa-github"></i> https://github.com/MarcelR1998</a></li>
                    <li><a href="https://m.me/marcel.rossi37"><i className="fab fa-facebook-messenger"></i> marcel.rossi37</a></li>
                </ul>

            </div>
        );
    }
}

export default Kontakt;