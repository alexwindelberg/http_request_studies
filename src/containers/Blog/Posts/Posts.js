import React, { Component } from 'react';
import axios from '../../../axios';
import { Link } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {

    state = {
        posts:  []
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id})
    }

    componentDidMount () {
        console.log(this.props);
        // placing this data into a const or let variable won't work because this request
        // happens asynchronously so it won't finish immidately
        // const post - instead axios uses promises allowing us to use
        // ES6 then method
        axios.get('/posts')
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
                console.log(error);
                //this.setState({error: true});
             });
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
                    return (
                            <Link to={'/' + post.id} key={post.id} >
                                <Post 
                                    title={post.title} 
                                    author={post.author} 
                                    clicked={() => this.postSelectedHandler(post.id)} />
                            </Link>
                    )
            });
        }

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }

}

export default Posts;
