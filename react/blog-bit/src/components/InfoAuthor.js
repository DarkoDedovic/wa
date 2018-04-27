import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { authorService } from '../services/authorsService'


class InfoAuthor extends Component {

    constructor(props) {
        super(props)

        this.state = {

            author: {}
        }
    }

    componentDidMount = () => {
        const authorId = this.props.match.params.authorId;
        authorService.fetchAuthorById(authorId)
            .then(singleAuthor => this.setState({ author: singleAuthor }))

    }

    render() {
        return (
            <div className="row">
                <div className="col s12 m7">
                    <Link to={`/authors`}>Back</Link>
                    <h2 className="header">Name Surname</h2>
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src="http://via.placeholder.com/350x150" />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information.</p>
                            </div>
                            <div className="card-action">
                                <a href="#">This is a link</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s12 m7">
                    <h2 className="header">Address</h2>
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src="http://via.placeholder.com/350x150" />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information.</p>
                            </div>
                            <div className="card-action">
                                <a href="#">This is a link</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s12 m7">
                    <h2 className="header">Company</h2>
                    <div className="card ">


                        <div className="card-content">
                            <span>name: </span>
                            <br />
                            <span>slogan:</span>
                        </div>


                    </div>
                </div>
            </div>
        )
    }

}

export { InfoAuthor }
