import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

// we will be using jsonplaceholder to request and get dummy data

// There are a few ways in which we can send AJAX requests
// the first and traditional way of sending these requests is through javascripts
// XMLHTTpRequest - object, but writing and configuring with this object can be
// quite time consuming and troublesome, the second option and simplier is 
// using Axios - Axios is a third party Javascript library that handles requests




class Blog extends Component {

    state = {
        posts:  [],
        selectedPostId: null,
        error: false
    }

    componentDidMount () {
        // placing this data into a const or let variable won't work because this request
        // happens asynchronously so it won't finish immidately
        // const post - instead axios uses promises allowing us to use
        // ES6 then method
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then(response => {
                 const posts = response.data.slice(0, 4);
                 const updatedPosts = posts.map(post => {
                     return {
                         ...post,
                         author: 'Max'
                     }
                 })
                 this.setState({posts: updatedPosts});
                 //console.log(response);
             })
             .catch(error => {
                 this.setState({error: true});
             });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id})
    }

    render () {

        let posts = <p style={{textAlign:'center'}}>Something went wrong!</p>
        if(!this.state.error) {
            // Now that we want to display the data we have retrived from our http request
            // we want to display this data, we can do that by getting the data from our
            // state and maping it, giving us a new array with our data and returning a Post
            // for each peice of data we go through. Then later display them by calling posts
            // {posts}
            posts = this.state.posts.map(
                post => {
                    return <Post 
                                key={post.id} 
                                title={post.title} 
                                author={post.author} 
                                clicked={() => this.postSelectedHandler(post.id)} />
            });
        }


        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;