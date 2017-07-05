/* global io: true */
import React, { Component } from 'react';

class App extends Component {
	constructor() {
		super();

		this.state = {socket: true};
	}

	componentDidMount() {
		const socket = io('http://localhost:3001');

		socket.on('connect', () => {
			console.log('conect');
		});

		socket.on('watcher.watch', data => {
			console.log('run', data);
		});
	}

	render() {
		return (
			<div className="container">
				<div className="card">
					<p>Hello There!</p>
				</div>
			</div>
		);
	}
}

export default App;
