import React, { Component } from 'react';
import moment from 'moment';

class StatusCard extends Component {
	constructor() {
		super();

		this.styleWidth = {
			width: '100px'
		};
	}

	render() {
		return (
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="card card-stats">
					<div className="card-header" data-background-color={(this.props.socket.status) ? 'green' : 'red' }>
						<i className={`glyphicon ${(this.props.socket.status) ? 'glyphicon-ok' : 'glyphicon-remove-sign'}`}></i>
					</div>
					<div className="card-content">
						<p className="category"><img src={this.props.logo} style={this.styleWidth} /></p>
						<h3 className="title">{(this.props.socket.status) ? 'Operacional' : 'Erro!' }</h3>
					</div>
					<div className="card-footer">
						<div className="stats">
							<i className="glyphicon glyphicon-time"></i> <strong>{(this.props.socket.lastRun) ? `Última verificação ${moment(this.props.socket.lastRun).format('DD/MM/YY, HH:mm:ss')}` : 'Aguardando' }</strong>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default StatusCard;