import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            <li><NavLink to="/new-post">New Post</NavLink></li>

                        </ul>
                    </nav>
                </header>
                <Switch>
                <Route path='/new-post' exact component={NewPost} />
                <Route path='/'  component={Posts} />
                <Redirect from="/" to="/posts" />
                </Switch>
                
            </div>
        );
    }
}

export default Blog;