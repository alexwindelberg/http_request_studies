import React, { Component } from 'react';

import './Blog.css';
import Posts from './Posts/Posts';

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
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/new-post">New</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Posts></Posts>
            </div>
        );
    }
}

export default Blog;