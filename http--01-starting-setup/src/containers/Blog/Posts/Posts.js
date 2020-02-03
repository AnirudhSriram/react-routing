import React, { Component } from 'react'
import axios from '../../../axios';
import '../Posts/Posts.css'
import Post from '../../../components/Post/Post';
import { Route } from 'react-router';
import FullPost from '../FullPost/FullPost';
class Posts extends Component {
    state = {
        posts: [],
    }

    componentDidMount() {
        axios.get('/posts').then(data => {
            let updatedPosts = data.data.map((item) => {
                return {
                    ...item,
                    author: 'Anirudh'
                }
            })
            updatedPosts = updatedPosts.slice(0, 4);
            this.setState({ posts: updatedPosts })
        }).catch(err => this.setState({ error: true }));
    }


    postClickHandler = (id) => {
        this.props.history.push('/' + id)
    }
    render() {
        let renderPosts = <p>Something went wrong</p>;
        if (!this.state.error) {
            renderPosts = this.state.posts.map((item) => <Post key={item.id} title={item.title} author={item.author} clicked={() => this.postClickHandler(item.id)} />)
        }

        return (
            <div>
                <section className="Posts">
                    {renderPosts}
                    </section>
            <Route path="/:id" component={FullPost} />
            </div>
           
        )

    }
}

export default Posts;