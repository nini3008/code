import React, { Component } from "react";
import axios from "axios";

import Post from "../../../components/Post/Post";
import "./Posts.css";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Nick"
          };
        });
        this.setState({
          posts: updatedPosts
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  postSelected = id => {
    this.setState({ selectedPostId: id });
  };

  render() {
    let Posts = <p style={{ textAlign: "center" }}>Something went wrong</p>;
    if (!this.state.error) {
      Posts = this.state.posts.map(post => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelected(post.id)}
          />
        );
      });
    }

    return <section className="Posts">{Posts}</section>;
  }
}

export default Posts;
