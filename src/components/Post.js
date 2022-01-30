import React, { Component } from 'react'

class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: []
		}
	}

	componentWillMount() {
		fetch('https://jsonplaceholder.typicode.com/posts')
		.then(res => res.json())
		.then(data => this.setState({posts: data}));
	}

	render() {
		const postItems = this.sate.posts.map(post => (
			<div key={post.id}>
			<h3>{post.title}</h3>
			<p>{post.body}</p>
			</div>
		));

		return (
			<>
			<h1>Post</h1>
			{postItems}
			</>
		)
	}
}

export default Post;