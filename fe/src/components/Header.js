import React, { Component } from 'react';
import logo from '../images/whp-logo.png';

class Header extends Component {
	constructor() {
		super();

		this.fontStyle = {
			fontSize: '22px'
		};
	};

	render() {
		return (
			<nav className="navbar navbar-transparent">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle" data-toggle="collapse">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="#"><img src={logo} /></a>
					</div>
					<div className="collapse navbar-collapse">
						<ul className="nav navbar-nav navbar-right">
							<li>
								<a href="#" className="dropdown-toggle" data-toggle="dropdown" style={this.fontStyle}>
									<i className="glyphicon glyphicon-dashboard"></i>
								</a>
							</li>
							<li className="dropdown">
								<a href="#" className="dropdown-toggle" data-toggle="dropdown" style={this.fontStyle}>
									<i className="glyphicon glyphicon-bell"></i>
									<span className="notification">1</span>
								</a>
								<ul className="dropdown-menu">
									<li><a href="#">Mike John responded to your email</a></li>
								</ul>
							</li>
							<li>
								<a href="#pablo" className="dropdown-toggle" data-toggle="dropdown" style={this.fontStyle}>
									<i className="glyphicon glyphicon-user"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;
