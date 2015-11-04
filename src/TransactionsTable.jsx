var React = require('react');

module.exports = React.createClass({
	componentDidMount: function() {
		$(".transactionstable td.first").on('click', function(e){
			var curTd = $(this);
			curTd.parent().parent().find('tr').not('.tdetailsrow').show(400);
			curTd.parent().parent().find('tr.tdetailsrow').hide(400);
			
			setTimeout(function(){
				curTd.parent().hide(400);
				curTd.parent().find('+ .tdetailsrow').eq(0).show();
			}, 600 );
			
		});
	},
	render: function(){
		var open_row = <div className="trans_sucess open">
						  <div className="sucess-strip">
						  	<div className="status"><i className="glyphicon glyphicon-ok"></i> 46 27 38 12 93</div>
							<div className="operation">Transaction Sucessful!</div>
							<div className="datetime">21.10.2015 - 13:47:40</div>
						  </div>
						  	<div className="opened trans_detail completedsteps">
								<div className="col-md-3 col-sm-6">
									<div className="alert-processed"><i className="glyphicon glyphicon-ok"></i><span> Code Processed</span></div>
									<div className="alert-processed"><i className="glyphicon glyphicon-ok"></i><span> ID Verified</span></div>
									<div className="alert-processed"><i className="glyphicon glyphicon-ok"></i><span> Cash Handled</span></div>
									
									<div className="button-group">
										<div className="alert alert-success"><i className="glyphicon glyphicon-print"></i><span> Print Receipt</span></div>
										<div className="alert alert-default" data-toggle="modal" data-target="#myModal"><i className="glyphicon glyphicon-remove"></i><span> Close</span></div>
									</div>
								</div>
								 <div className="col-md-3 col-sm-6 samebox">
							<div className="step step-2">
							  <div className="icon"><img src="http://placehold.it/50X50" /></div>
							  <div className="operation-text">Operation</div>
							  <div className="row">
							  <div className="col-xs-6 col-sm-12 col-md-12">
							  <div className="column-type">
								<div className="smalltext">type</div>
								<div className="withdraw">Withdraw</div>
							  </div>
							  </div>
							  <div className="col-xs-6 col-sm-12 col-md-12">
							  <div className="column-type last-child">
								<div className="smalltext">Amount</div>
								<div className="withdraw">2.860 <span className="small">XOF</span></div>
								<p>Converted from $5.</p>
							  </div>
							  </div>
							  </div>
							  
							</div>
						  </div>
						  <div className="col-md-3 col-sm-6 samebox">
							<div className="step step-3">
							  <div className="icon"><img src="http://placehold.it/50X50" /></div>
							  <div className="operation-text">Receiver Information</div>
							  <div className="row">
							  <div className="col-xs-6 col-sm-12 col-md-12">
							  <div className="receiver_info name">
								<div className="text">Name</div>
								<div className="name">Malick Guye</div>
							  </div>
							  </div>
							  <div className="col-xs-6 col-sm-12 col-md-12">
							  <div className="receiver_info phone">
								<div className="text">Amount</div>
								<div className="phone-num">+33 8472 122 345</div>
							  </div>
							  </div>
							  <div className="col-xs-6 col-sm-12 col-md-12">
							  <div className="receiver_info email last-child">
								<div className="text">Email</div>
								<div className="email">malick.guye@gmail.com</div>
							  </div>
							  </div>
							  </div>
							</div>
						  </div>
						  <div className="col-md-3 col-sm-6 notebox">
							<div className="step step-4">
							  <div className="icon"><img src="http://placehold.it/50X50" /></div>
							  <div className="operation-text">Note</div>
							  <div className="note-text">
							  <p>Private</p>
							  <div className="make button-big"><a href="#"><i className="glyphicon glyphicon-circle-arrow-up"></i> Sender Information</a></div>
							  </div>
							</div>
						  </div>
							</div>
						  </div>
						  
				var red_open_row = <div className="trans_sucess open red">
						  <div className="sucess-strip">
						  	<div className="status"><i className="glyphicon glyphicon-remove"></i> 46 27 38 12 93</div>
							<div className="operation">F2 - Canceled - Unsuficient Funds</div>
							<div className="datetime">21.10.2015 - 13:47:40</div>
						  </div>
						  	<div className="opened trans_detail completedsteps">
								<div className="col-md-3 col-sm-6">
									<div className="alert-processed"><i className="glyphicon glyphicon-ok"></i><span> Code Processed</span></div>
									<div className="alert-warning"><i className="glyphicon glyphicon-info-sign"></i><span> ID Unverified</span></div>
									<div className="alert-warning"><i className="glyphicon glyphicon-info-sign"></i><span> Cash not Handled</span></div>
									
									<div className="button-group">
										<div className="alert alert-success"><i className="glyphicon glyphicon-print"></i><span> Print Receipt</span></div>
										<div className="alert alert-default" data-toggle="modal" data-target="#myModal"><i className="glyphicon glyphicon-remove"></i><span> Close</span></div>
									</div>
								</div>
								 <div className="col-md-3 col-sm-6 samebox">
							<div className="step step-2">
							  <div className="icon"><img src="http://placehold.it/50X50" /></div>
							  <div className="operation-text">Operation</div>
							  <div className="row">
							  <div className="col-xs-6 col-sm-12 col-md-12">
							  <div className="column-type">
								<div className="smalltext">type</div>
								<div className="withdraw">Withdraw</div>
							  </div>
							  </div>
							  <div className="col-xs-6 col-sm-12 col-md-12">
							  <div className="column-type last-child">
								<div className="smalltext">Amount</div>
								<div className="withdraw">100.000 <span className="small">XOF</span></div>
								<p>Converted from $140.312</p>
							  </div>
							  </div>
							  </div>
							  
							</div>
						  </div>
						  <div className="col-md-3 col-sm-6 samebox">
							<div className="step step-3">
							  <div className="icon"><img src="http://placehold.it/50X50" /></div>
							  <div className="operation-text">Receiver Information</div>
							  <div className="row">
							  <div className="col-xs-6 col-sm-12 col-md-12">
							  <div className="receiver_info name">
								<div className="text">Name</div>
								<div className="name">Malana Mumbana</div>
							  </div>
							  </div>
							  <div className="col-xs-6 col-sm-12 col-md-12">
							  <div className="receiver_info phone">
								<div className="text">Phone</div>
								<div className="phone-num">+33 8472 122 345</div>
							  </div>
							  </div>
							  <div className="col-xs-6 col-sm-12 col-md-12">
							  <div className="receiver_info email last-child">
								<div className="text">Email</div>
								<div className="email">malana.@mumbanadesign.com</div>
							  </div>
							  </div>
							  </div>
							</div>
						  </div>
						  <div className="col-md-3 col-sm-6 notebox">
							<div className="step step-4">
							  <div className="icon"><img src="http://placehold.it/50X50" /></div>
							  <div className="operation-text">Note</div>
							  <div className="note-text">
							  <p>Private</p>
							  <div className="make button-big"><a href="#"><i className="glyphicon glyphicon-circle-arrow-up"></i> Sender Information</a></div>
							  </div>
							</div>
						  </div>
							</div>
						  </div>
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
					  
					</div>
				  </div>
				  <div className="no-record record-found">
					<div className="container">
					<div className="table-responsive transactionstable transation-thead">
						<table width="100%" border="0" cellSpacing="0" cellPadding="0">
							<thead>
							  <tr>
								<td className="first" width="15%">Status</td>
								<td width="8%">Date</td>
								<td width="10%">Operation</td>
								<td width="13%">Amount</td>
								<td width="15%">From</td>
								<td width="15%">To</td>
								<td width="24%">Note</td>
							  </tr>
							</thead>
							<tbody>
							  <tr className="greenbg">
								<td className="first" width="15%"><i className="glyphicon glyphicon-ok"></i> 46 27 38 12 93</td>
								<td width="8%">21.10.2015</td>
								<td width="10%">Withdraw</td>
								<td width="13%">2.860 XOF</td>
								<td width="15%">Atlas</td>
								<td width="15%">Malick Guye</td>
								<td className="last" width="24%">Hello, Malick. this is special transaction...</td>
							  </tr>
							  <tr className="tdetailsrow">
								<td colSpan="7">
									{open_row}
								</td>
							  </tr>
							  <tr className="greenbg">
								<td className="first"><i className="glyphicon glyphicon-ok"></i> 46 27 38 12 93</td>
								<td>21.10.2015</td>
								<td>Withdraw</td>
								<td>2.860 XOF</td>
								<td>Atlas</td>
								<td>Malick Guye</td>
								<td className="last">Hello, Malick. this is special transaction...</td>
							  </tr>
							  <tr className="tdetailsrow">
								<td colSpan="7">
									{open_row}
								</td>
							  </tr>
							  <tr className="yellowbg">
								<td className="first"><i className="glyphicon glyphicon-info-sign"></i> 46 27 38 12 93</td>
								<td>21.10.2015</td>
								<td>Withdraw</td>
								<td>2.860 XOF</td>
								<td>Atlas</td>
								<td>Malick Guye</td>
								<td className="last">For your comfort.</td>
							  </tr>
							  <tr className="tdetailsrow">
								<td colSpan="7">
									{open_row}
								</td>
							  </tr>
							  <tr className="redbg">
								<td className="first"><i className="glyphicon glyphicon-remove"></i> 46 27 38 12 93</td>
								<td>21.10.2015</td>
								<td>Withdraw</td>
								<td>2.860 XOF</td>
								<td>Atlas</td>
								<td>Malick Guye</td>
								<td className="last">Private</td>
							  </tr>
							  <tr className="tdetailsrow">
								<td colSpan="7">
									{red_open_row}
								</td>
							  </tr>
							  <tr className="greenbg">
								<td className="first"><i className="glyphicon glyphicon-ok"></i> 46 27 38 12 93</td>
								<td>21.10.2015</td>
								<td>Withdraw</td>
								<td>2.860 XOF</td>
								<td>Atlas</td>
								<td>Malick Guye</td>
								<td className="last">Hello, Malick. this is special transaction...</td>
							  </tr>
							  <tr className="tdetailsrow">
								<td colSpan="7">
									{open_row}
								</td>
							  </tr>
							</tbody>
						  </table>
						  
<div className="modal fade" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <div className="cancel-tran">Cancel Transaction</div>
		<div className="simpletext">You are about to cancel a transaction. We'd love to know why.</div>
      </div>
      <div className="modal-body">
        <div className="btngroup">
		<button type="button" className="btn btn-default"><i className="glyphicon glyphicon-remove"></i> I don't have enough funds.</button>
        <button type="button" className="btn btn-primary"><i className="glyphicon glyphicon-remove"></i> ID does not verify.</button> 
      	</div>
		<div className="reason-box">
 		 <p>Here's Why</p>
  		<input type="text" placeholder="Please, specify reason..." />
		</div>
		</div>
      <div className="modal-footer">
	  <div className="btngroup">
        <button type="button" className="btn btn-default">I don't want to cancel.</button>
        <button type="button" className="btn btn-primary" data-dismiss="modal">Cancel Transaction</button>
		</div>
      </div>
    </div>
  </div>
</div>
						  
						  
					</div>
					  <div className="make button-big load-btn"><a href="#"><i className="glyphicon glyphicon-circle-arrow-up"></i> Load Past Transaction</a></div>
					</div>
				  </div>
				</div>
		)
	}
});