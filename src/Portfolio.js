import React, { Component } from 'react';

class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            starred: 0,
            search: "",
        }
    }

    componentDidMount() {
        let starred = 0;
        fetch("https://api.github.com/users/MarcelR1998/repos")
            .then(res => res.json())
            .then(json => {
                //Add github stars
                json.forEach(item => {
                    starred += Number(item.stargazers_count)
                });
                this.setState({
                    isLoaded: true,
                    items: json,
                    starred
                })
            });
    }

    onchange = e => {
        this.setState({ search: e.target.value });
    }

    renderItem = item => {
        const { search } = this.state;

        if (search !== "" && item.name.toLowerCase().indexOf(search.toLowerCase()) === -1) {
            return null;
        }
        return <li className="githubItem" key={item.id}> {item.name}, {item.description} <a className="button" href={item.html_url}>[Länk]</a></li>
    }

    render() {

        var { isLoaded, items, starred } = this.state;

        if (!isLoaded) {
            return <h2><i className="fas fa-sync fa-spin"></i> Hämtar information från Githubs API...</h2>;
        } else {
            return (
                <div>
                    <h1>Vad jag gjort</h1>
                    <p className="frameStyle" ><i className="fas fa-info-circle"></i> Denna sida uppdateras automatiskt via Githubs API</p>
                    <p><i className="fa fa-github"></i> Repos: {items.length} - <i className="far fa-star"></i> Stargazers: {starred} </p>
                    <input type="text" placeholder="Sök " id="search" value={this.search} onChange={this.onchange} ></input>
                    <ul>
                        {items.map(item => (
                            this.renderItem(item)
                        ))}
                    </ul>
                    <img
                        alt="Github bild" style={{ width: "200px", borderRadius: "10em", }}
                        src="https://avatars3.githubusercontent.com/u/54536778?v=4">

                    </img>
                    <h3><a href="https://github.com/MarcelR1998"><i className="fa fa-github"></i> https://github.com/MarcelR1998</a></h3>
                </div>
            );
        }


    }
}

export default Portfolio;