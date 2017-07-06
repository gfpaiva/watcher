import React, { Component } from 'react';

class TableInfos extends Component {
	constructor(props) {
		super(props);

		console.log(props);
	}

	_checkAccount() {
		return this.props.store === this.props.socket.store;
	}

	render() {
		return (
			<tr>
				{(this._checkAccount()) ? 'q' : 'oi'}
				<td>Dakota Rice</td>
				<td>Niger</td>
				<td>Oud-Turnhout</td>
				<td>Oud-Turnhout</td>
			</tr>
		);
	}
}

export default TableInfos;