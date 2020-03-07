import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div id="contactWrapper">
                <div>
                    <div>
                        <h1>Kontakta mig</h1>
                        <ul className="frameStyle contactList" >
                            <li><a href="https://www.linkedin.com/in/marcel-rossi-84429819b/"><i className="fab fa-linkedin-in"></i> linkedin.com/in/marcel-rossi-84429819b/</a></li>
                            <li><a href="https://github.com/MarcelR1998"><i className="fa fa-github"></i> github.com/MarcelR1998</a></li>
                            <li><a href="https://m.me/marcel.rossi37"><i className="fab fa-facebook-messenger"></i> marcel.rossi37</a></li>
                            <li><a href="mailto:marcelrossi@hotmail.com"><i className="fa fa-at"></i> marcelrossi@hotmail.com</a></li>
                            <li> <a href="tel:+46704868376"><i className="fas fa-phone"></i> +46704868376</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;