import React, { Component } from 'react';
import Header from './components/Header';
import StatusCard from './components/StatusCard';
import StatusTable from './components/StatusTable';
import brastemp from './images/btp-logo.png';
import io from 'socket.io-client';

class App extends Component {
	constructor() {
		super();

		this.state = {socket: false};
		this.stores = ['brastemp', 'consul', 'compracerta'];
	}

	componentDidMount() {
		const socket = io('http://localhost:3002');

		socket.on('connect', () => {
			console.log('conect');
		});

		socket.on('watcher.watch', data => {
			console.log('run', data);
			this.setState({socket: data});
		});
	}

	render() {
		return (
			<div>
				<Header />

				<hr />

				<StatusCard socket={this.state.socket} logo={brastemp} />

				<StatusTable socket={this.state.socket} stores={this.stores} />

			</div>
		);
	}
}

export default App;
