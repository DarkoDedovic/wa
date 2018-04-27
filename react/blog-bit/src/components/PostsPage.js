import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SinglePostPage } from './SinglePostPage'
import { userService } from '../services/postsService'


class PostsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount = () => {
        userService.fetchPosts()
            .then(postsCollection => this.setState({ posts: postsCollection }))

    }

    render = () => {
        return (
            <div className="">
                <div className="center">
                    {this.state.posts.map((post) => (
                        <div key={post.id}>
                            <Link to={`/post/${post.id}`}>
                                <h3>{post.title}</h3>
                            </Link>
                            <p>{post.body} </p>
                        </div>
                    ))}
                </div>
            </div>
        )

    }

}

export { PostsPage }