import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios';
class FullPost extends Component {
    state={
        post : null
    }
    loadData = ()=> {
        axios.get(`/posts/${this.props.match.params.id}`).then(data => {
            this.setState({
                title : data.data.title,
                body  :data.data.body,
                post : data.data
            })
        })
    
    }
    componentDidMount(prevProps) {
        console.log(this.props)
        this.loadData() 
    }
    componentDidUpdate(prevProps){
        if(prevProps.match.params.id !== this.props.match.params.id){
            this.loadData();
        }
    }


    deletePostHandler=()=> {
        axios.delete(`/posts/${this.props.id}`)
    }
    render() {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if(this.props.id){
            post = <p style={{ textAlign: 'center' }}>Loading...</p>;
        }
        if (this.state.post) {
            post = (
                <div className="FullPost">
        <h1>{this.state.post.title}</h1>
            <p>{this.state.post.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>

            );
        }

        return post;
    }
}

export default FullPost;