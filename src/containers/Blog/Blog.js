import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

// we will be using jsonplaceholder to request and get dummy data

// There are a few ways in which we can send AJAX requests
// the first and traditional way of sending these requests is through javascripts
// XMLHTTpRequest - object, but writing and configuring with this object can be
// quite time consuming and troublesome, the second option and simplier is 
// using Axios - Axios is a third party Javascript library that handles requests




class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink 
                                    to="/" 
                                    exact
                                    activeClassName="my-active"
                                    activeStyle={{
                                        color: '#fa923f',
                                        textDecoration: 'underline'
                                    }}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}>New</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                { /* <Route path="/" exact render={() => <h1> Home </h1> } />
                <Route path="/" exact render={() => <h1> Home 2 </h1> } /> */ }
                {/* When routing this is how you render components based on the route that users wish to go */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;