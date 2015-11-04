var React = require('react');

module.exports = React.createClass({
	render: function(){
		return (
			<div className="transaction-sec">
				  <div className="transaction-bar">
					<div className="container">
					  <div className="row">
						<div className="col-md-3 col-sm-3 col-xs-6">
						  <div className="title"><i className="glyphicon glyphicon-circle-arrow-down"></i> Transactions</div>
						</div>
						<div className="search"><i className="glyphicon glyphicon-search"></i>
						  <input type="text" value="" placeholder="Search Transaction" />
						</div>
					  </div>
					  <div className="transation-thead">
						<div className="table-responsive">
						  <table width="100%" border="0" cellSpacing="0" cellPadding="0">
							<tbody>
							  <tr>
								<td className="first" width="15%">Status</td>
								<td width="10%">Date</td>
								<td width="12%">Operation</td>
								<td width="13%">Amount</td>
								<td width="15%">From</td>
								<td width="15%">To</td>
								<td width="20%">Note</td>
							  </tr>
							</tbody>
						  </table>
						</div>
					  </div>
					</div>
				  </div>
				  <div className="no-record">
					<div className="container">
					  <div className="title">You have not yet made a transaction.</div>
					  <div className="make button-big"><a href="#"><i className="glyphicon glyphicon-circle-arrow-up"></i> Make a Transaction</a></div>
					</div>
				  </div>
				</div>
		)
	}
});