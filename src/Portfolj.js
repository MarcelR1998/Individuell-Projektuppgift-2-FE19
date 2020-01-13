import React, { Component } from 'react';

class Portfolj extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch("https://api.github.com/users/MarcelR1998/repos")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }

    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <h3><i className="fas fa-sync fa-spin"></i> Hämtar informations från Githubs API...</h3>;
        } else {
            return (
                <div>
                    <h1>Vad jag gjort</h1>
                    <p className="frameStyle" ><i className="fas fa-info-circle"></i> Denna sida uppdateras automatiskt via Githubs API</p>
                    <p><i className="fa fa-github"></i> Repos: {items.length}</p>
                    <ul>
                        {items.map(item => (
                            <li className="githubItem" key={item.id}> {item.name}, {item.description} - <a href={item.html_url}>Länk</a></li>
                        ))}
                    </ul>
                    <img
                        alt="Github bild" style={{ width: "200px", borderRadius: "10em", }}
                        src="https://avatars3.githubusercontent.com/u/54536778?v=4">

                    </img>
                    <h2><a href="https://github.com/MarcelR1998"><i className="fa fa-github"></i> https://github.com/MarcelR1998</a></h2>
                </div>
            );
        }


    }
}

export default Portfolj;