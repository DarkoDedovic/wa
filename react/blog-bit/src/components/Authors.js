import React, { Component } from 'react';
import { authorService } from '../services/authorsService'
import { Author } from './Author'
import { Link } from 'react-router-dom';


class Authors extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authors: []
        }


    }
    componentDidMount = () => {
        authorService.fetchAuthors()
            .then(authorsCollection => this.setState({ authors: authorsCollection }))
    }
    render = () => {


        return (
            <div>

                <div className="center">
                    <h2>{`Authors ${this.state.authors.length}`}</h2>

                    <div className="collection">
                        {this.state.authors.map(author => <Link to={`/authors/${author.id}`}><Author className="collection-item" body={author.body} title={author.title} name={author.name} /></Link>)}

                    </div>
                </div>
            </div>
        )
    }

}

export { Authors }