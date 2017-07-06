/* global io: true */
import React, { Component } from 'react';
import Header from './components/Header';
import brastemp from './images/btp-logo.png';

class App extends Component {
	constructor() {
		super();

		this.styleWidth = {
			width: '100px'
		};

		this.state = {socket: false};
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

				<div className="col-lg-3 col-md-6 col-sm-6">
					<div className="card card-stats">
						<div className="card-header" data-background-color={(this.state.socket.status) ? 'green' : 'red' }>
							<i className={`glyphicon ${(this.state.socket.status) ? 'glyphicon-ok' : 'glyphicon-remove-sign'}`}></i>
						</div>
						<div className="card-content">
							<p className="category"><img src={brastemp} style={this.styleWidth} /></p>
							<h3 className="title">{(this.state.socket.status) ? 'Operacional' : 'Erro!' }</h3>
						</div>
						<div className="card-footer">
							<div className="stats">
								<i className="glyphicon glyphicon-time"></i> Última verificação {this.state.socket.lastRun}
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-12">
					<div className="card">
						<div className="card-header" data-background-color="green">
							<h4 className="title">Simple Table</h4>
							<p className="category">Here is a subtitle for this table</p>
						</div>
						<div className="card-content table-responsive">
							<table className="table">
								<thead className="text-primary">
									<tr><th>Name</th>
										<th>Country</th>
										<th>City</th>
										<th>Salary</th>
									</tr></thead>
									<tbody>
										<tr>
											<td>Dakota Rice</td>
											<td>Niger</td>
											<td>Oud-Turnhout</td>
											<td className="text-primary">$36,738</td>
										</tr>
										<tr>
											<td>Minerva Hooper</td>
											<td>Curaçao</td>
											<td>Sinaai-Waas</td>
											<td className="text-primary">$23,789</td>
										</tr>
										<tr>
											<td>Sage Rodriguez</td>
											<td>Netherlands</td>
											<td>Baileux</td>
											<td className="text-primary">$56,142</td>
										</tr>
										<tr>
											<td>Philip Chaney</td>
											<td>Korea, South</td>
											<td>Overland Park</td>
											<td className="text-primary">$38,735</td>
										</tr>
										<tr>
											<td>Doris Greene</td>
											<td>Malawi</td>
											<td>Feldkirchen in Kärnten</td>
											<td className="text-primary">$63,542</td>
										</tr>
										<tr>
											<td>Mason Porter</td>
											<td>Chile</td>
											<td>Gloucester</td>
											<td className="text-primary">$78,615</td>
										</tr>
									</tbody>
								</table>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default App;
