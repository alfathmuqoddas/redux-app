import React, { Component } from 'react'

class PostForm extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<>
			<h1>Post Form</h1>
			<form>
				<div>
					<label>Title:</label>
					<br/>
					<input type="text" name="title" />
				</div>
				<br/>
				<div>
					<label>Body:</label>
					<br/>
					<textarea name="body" />
				</div>
				<br/>
				<button type="submit">Submit</button>
			</form>
			</>
		)
	}
}

export default PostForm;