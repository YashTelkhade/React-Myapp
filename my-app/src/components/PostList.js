import axios from 'axios'
import React, { Component } from 'react'


const h3={
    color: "orange",
    fontSize: "16px"
}

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[]
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/customers")
        .then((response) => {
            console.log(response);
            this.setState({
                posts: response.data
            })
        }).catch((err) => {
            console.log(err);
            
            
        });
    }
    
    render() {
        return (
            <div>
                <p>List Of Posts</p>
                <div style={h3}>{this.state.posts.map((post)=> <div key={post.first_name}>{post.first_name} {post.last_name}</div>)}</div>
            </div>
        )
    }
}

export default PostList
