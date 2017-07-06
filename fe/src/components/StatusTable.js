import React, { Component } from 'react';
import TableInfos from './StatusTable/TableInfos';

class StatusTable extends Component {

	render() {
		return (
			<div className="col-md-12">
				<div className="card">
					<div className="card-header" data-background-color="green">
						<h4 className="title">Checkup detalhado</h4>
						<p className="category">Todas as lojas estão operando normalmente</p>
					</div>
					<div className="card-content table-responsive">
						<table className="table">
							<thead className="text-primary">
								<tr><th>Loja</th>
									<th>Home</th>
									<th>Categoria</th>
									<th>Produto</th>
								</tr></thead>
								<tbody>
									{
										this.props.stores.map((value, index) => {
											return (
												<TableInfos key={value} store={value} socket={this.props.socket} />
											);
										})
									}
								</tbody>
							</table>
					</div>
				</div>
			</div>
		);
	}
}

export default StatusTable;