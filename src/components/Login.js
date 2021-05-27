import React, { Component } from 'react'

class Form extends Component {
	constructor(props) {
		super(props)

		this.state = {
			username: '',
			password: '',
			topic: 'react'
		}
	}

	handleUsernameChange = event => {
		this.setState({
			username: event.target.value
		})
	}

	handleCommentsChange = event => {
		this.setState({
			password: event.target.value
		})
	}

	handleTopicChange = event => {
		this.setState({
			topic: event.target.value
		})
	}

	handleSubmit = event => {
		alert(`${this.state.username} ${this.state.password} ${this.state.topic}`)
		event.preventDefault()
	}

	render() {
		const { username, password, topic } = this.state
		return (
			<form onSubmit={this.handleSubmit}>
				<div className = 'name'>
					<label>Username:  </label>
					<input
						type="text"
						value={username}
						onChange={this.handleUsernameChange}
					/>
				</div>
				<div className = 'password'>
					<label>Password: </label>
					<input
						value={password}
						onChange={this.handleCommentsChange}
					/>
				</div>
				<div className = 'topic'>
					<label>Topic: </label>
					<select value={topic} onChange={this.handleTopicChange}>
						<option value="react">React</option>
						<option value="angular">Angular</option>
						<option value="vue">Vue</option>
					</select>
				</div>
				<button className = 'submitbutton' type="submit">Submit</button>
			</form>
		)
	}
}

export default Form