
import React, { Component } from 'react';
// import { Author } from './Author'
import { Link } from 'react-router-dom';
import { fetchPostById } from '../services/postsService';
import { userService } from '../services/postsService'

class SinglePostPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: {}
        }
    }

    componentDidMount = () => {
        const postId = this.props.match.params.postId;
        console.log(this.props.match.params.postId);

        userService.fetchPostById(postId)
            .then(response => this.setState({ post: response }))
    }


    render = () => {
        return (
            <div className="center" >

                <h1>{this.state.post.title}</h1>
                <p>{this.state.post.body}</p>

            </div>
        )

    }
}
export { SinglePostPage }