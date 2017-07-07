import React, { Component } from 'react';
import moment from 'moment';

moment.fn.minutesFromNow = function() {
	return Math.floor((+new Date() - (+this))/60000);
}

class StatusCard extends Component {
	constructor(props) {
		super(props);

		this.styleWidth = {
			width: '100px'
		};

		this.state = {lastRunMinutes: 0};
		this.timer;
	};

	_timeAgoHandler() {
		if(this.props.socket.lastRun) {
			console.log('timer', this.state.lastRunMinutes++);
			this.setState({lastRunMinutes: this.state.lastRunMinutes++});
		}
	};

	componentDidMount() {
		this.timer = setInterval(() => { this._timeAgoHandler(); }, 1000 * 60);
	};

	componentWillReceiveProps(nextProps) {
		this.setState({lastRunMinutes: 0});
	};

	componentWillUnmount() {
		clearInterval(this.timer);
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
							<i className="glyphicon glyphicon-time"></i> <strong>{(this.props.socket.lastRun) ? `Última verificação há ${(this.state.lastRunMinutes)} minutos` : 'Aguardando' }</strong>
						</div>
					</div>
				</div>
			</div>
		);
	};
}

export default StatusCard;