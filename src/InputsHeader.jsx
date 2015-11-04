var React = require('react');

module.exports = React.createClass({
	getInitialState: function(){
		return {
			step: this.props.step,
			transaction_code: '',
			tcode_status: '',
			id_number: '',
			id_num_status: '',
			handlecash_btn_status: '1'
		}
	},
	tCodeChange: function(){
		var code = React.findDOMNode(this.refs.t_code).value.trim();

		if( code.length == 0 )
			return;
		
		if( code.replace(/ /g, '').length % 2 == 0 )
			code += ' ';
			
		if( code.length > 14 )
			code = code.substring( 0, 14 );
		
		if( code == this.props.valid_transaction_code )
		{
			this.setState({ transaction_code: code, tcode_status: 'valid'});
		}
		else
		{
			this.setState({ transaction_code: code, tcode_status: 'invalid'});
		}
	},
	processCode: function(){
		this.setState({tcode_status: 'processing'});
		this.props.changeStep('1.5');
	},
	idNumChange: function(){
		var id_num = React.findDOMNode(this.refs.id_number).value.trim();
		
		if( id_num.length == 0 )
			return;
		
		if( id_num.length > 6 )
			id_num = id_num.substring(0,6);
		
		if( id_num == this.props.valid_id_number )
		{
			this.setState({ id_number: id_num, id_status: 'valid'});
		}
		else
		{
			this.setState({ id_number: id_num, id_status: 'invalid'});		
		}
	},
	resetIdNumber: function(e){
		e.preventDefault();
		this.setState({ id_number: '', id_status: ''});
	},
	processIdNumber: function(){
		this.setState({id_status: 'processing'});
		
		var component = this;
		setTimeout( function(){
			component.props.changeStep('3');
		}, 700 );
	},
	handleCashClick: function(){
		this.setState({handlecash_btn_status: '2'});
	},
	changeToStep4: function(){
		this.props.changeStep('4');
	},
	changeToStep5: function(){
		this.props.changeStep('5');
	},
	changeToStep1: function(){
		this.props.changeStep('1');
		this.setState({
			transaction_code: '',
			tcode_status: '',
			id_number: '',
			id_num_status: '',
			handlecash_btn_status: '1'
		});	
	},
	render: function(){
		var tCodeStatusDiv;
		switch( this.state.tcode_status )
		{
			case 'invalid':
				tCodeStatusDiv = <div className="alert alert-warning"><i className="glyphicon glyphicon-info-sign"></i> Code is invalid.</div>
				break;
			case 'valid':
				tCodeStatusDiv = <div className="alert alert-success" onClick={this.processCode}><i className="glyphicon glyphicon-ok"></i> Process code</div>
				break;
			case 'processing':
				tCodeStatusDiv = <div className="alert alert-info"><i className="glyphicon glyphicon-info-sign"></i> Processing code...</div>
				break;
			default:
				tCodeStatusDiv = '';			
		}//switch
		
		var idStatusDiv;
		switch( this.state.id_status )
		{
			case 'invalid':
				idStatusDiv =	<div className="error-msg">
										<div className="alert alert-warning"><i className="glyphicon glyphicon-info-sign"></i> Incorrect Number</div>
										<div className="alert-error hidden-xs"><a href="#" onClick={this.resetIdNumber}><i className="glyphicon glyphicon-remove"></i> Cancel</a></div>
										<div className="alert-error hidden-lg hidden-sm hidden-md"><a href="#" onClick={this.resetIdNumber}><i className="glyphicon glyphicon-remove"></i> Cancel Transaction</a></div>
									</div>
				break;
			case 'valid':
				idStatusDiv =	<div className="error-msg">
										<div className="alert-success" onClick={this.processIdNumber}><i className="glyphicon glyphicon-ok"></i> Verify ID</div>
										<div className="alert-error hidden-xs"><a href="#" onClick={this.resetIdNumber}><i className="glyphicon glyphicon-remove"></i> Cancel</a></div>
										<div className="alert-error hidden-lg hidden-sm hidden-md"><a href="#" onClick={this.resetIdNumber}><i className="glyphicon glyphicon-remove"></i> Cancel Transaction</a></div>
									</div>
				break;
			case 'processing':
				idStatusDiv =	<div className="error-msg">
										<div className="alert alert-warning"><i className="glyphicon glyphicon-info-sign"></i> Verifying</div>
									</div>
				break;
			
			default:
				idStatusDiv = '';
		}//switch
		
		var handleCashButton;
		switch( this.state.handlecash_btn_status )
		{
			case '1':
				handleCashButton =	<div className="button-group">
												  <div className="alert alert-success" onClick={this.handleCashClick}><i className="glyphicon glyphicon-usd"></i> Handle Cash</div>
												  <div className="alert alert-danger hidden-xs" onClick={this.changeToStep1}><i className="glyphicon glyphicon-remove"></i> Cancel</div>
												  <div className="alert alert-danger hidden-lg hidden-sm hidden-md" onClick={this.changeToStep1}><i className="glyphicon glyphicon-remove"></i> Cancel Transaction</div>
												</div>
				break;
				
			case '2':
				handleCashButton = <div className="button-group">
												  <div className="handtocash">
												  <div className="cash-button"><i className="glyphicon glyphicon-usd"></i> Handle Cash</div>
												  <div className="submit-button" onClick={this.changeToStep4}><i className="glyphicon glyphicon-ok"></i></div>
												  </div>
												  <div className="text-s">I have handled <b>2.860XOF</b> to <b>Malick Guye.</b></div>
												  <div className="alert alert-danger hidden-xs" onClick={this.changeToStep1}><i className="glyphicon glyphicon-remove"></i> Cancel</div>
												  <div className="alert alert-danger hidden-lg hidden-sm hidden-md" onClick={this.changeToStep1}><i className="glyphicon glyphicon-remove"></i> Cancel Transaction</div>
												</div>
				break;
				
			default:
				handleCashButton = '';
		}//switch
		
		switch( this.props.step )
		{
			case '1':
			case '1.5':
				return (
					<div className="container step3" id="inputs-header">
						<div className="row">
						  <div className="col-md-4 col-sm-4 col-lg-3">
							<div className="tran_code">
							  <p>Transaction Code</p>
							  <div className="code">
								<input type="text" value={this.state.transaction_code} placeholder="10 20 30 40 50" onChange={this.tCodeChange} ref="t_code" />
							  </div>
							</div>
						  </div>
						  <div className="col-md-4 col-lg-3 col-sm-5">
							{tCodeStatusDiv}
						  </div>
						</div>
					  </div>
				)
				break;
				
			case '2':
				return (
					<div className="container step3" id="inputs-header">
						<div className="row">
						  <div className="col-md-4 col-sm-4 col-lg-3">
							<div className="tran_code tran_code_step1">
							  <p>Transaction Code</p>
							  <div className="code">
								<div className="code-proceseed-number">{this.state.transaction_code}</div>
							  </div>
							  <div className="alert-processed"><i className="glyphicon glyphicon-ok"></i> Code Processed</div>
							</div>
						  </div>
						  
						  <div className="col-md-8 col-sm-8 col-lg-9">
						  <div className="idnumber">
							<div className="tran_code">
							<p>ID Number</p>
							  <div className="code">
								<input type="text" placeholder="SEN123" value={this.state.id_number} onChange={this.idNumChange} ref="id_number" />
							  </div>
							</div>
							</div>
							
							{idStatusDiv}				
						  </div>						  
						</div>
					  </div>
				)
				break;
				
			case '3':
				return (					
					<div className="container step3" id="inputs-header">
							<div className="row">
							  <div className="col-md-3 col-sm-3 col-lg-3">
								<div className="tran_code tran_code_step1">
								  <p>Transaction Code</p>
								  <div className="code">
									<div className="code-proceseed-number">{this.state.transaction_code}</div>
								  </div>
								  <div className="alert-processed"><i className="glyphicon glyphicon-ok"></i> Code Processed</div>
								</div>
							  </div>
							  <div className="col-md-3 col-lg-3 col-sm-3">
								<div className="tran_code tran_code_step1">
								  <p>ID Number</p>
								  <div className="code">
									<div className="code-proceseed-number">***123</div>
								  </div>
								  <div className="alert-processed"><i className="glyphicon glyphicon-ok"></i> ID Verified</div>
								</div>
							  </div>
							  <div className="col-md-3 col-lg-3 col-sm-3">
								<div className="tran_code tran_code_step1 amounthandle">
								  <p>Amount To Handle</p>
								  <div className="code">
									2.860 <span className="shorttext">FCFA</span>
								  </div>
								</div>
							  </div>
							  <div className="col-md-3 col-lg-3 col-sm-3">
							  {handleCashButton}
							  </div>
							  
							</div>
						  </div>
						  
						  )
					break;
					
				case '4':
				return (				
					<div className="container step3" id="inputs-header">
							<div className="row">
							  <div className="col-md-3 col-sm-3 col-lg-3">
								<div className="tran_code tran_code_step1">
								  <p>Transaction Code</p>
								  <div className="code">
									<div className="code-proceseed-number">{this.state.transaction_code}</div>
								  </div>
								  <div className="alert-processed"><i className="glyphicon glyphicon-ok"></i> Code Processed</div>
								</div>
							  </div>
							  <div className="col-md-3 col-lg-3 col-sm-3">
								<div className="tran_code tran_code_step1">
								  <p>ID Number</p>
								  <div className="code">
									<div className="code-proceseed-number">***123</div>
								  </div>
								  <div className="alert-processed"><i className="glyphicon glyphicon-ok"></i> ID Verified</div>
								</div>
							  </div>
							  <div className="col-md-3 col-lg-3 col-sm-3">
								<div className="tran_code tran_code_step1 amounthandle step-complete">
								  <p>Amount To Handle</p>
								  <div className="code">
									2.860 <span className="shorttext">FCFA</span>
								  </div>
								  <div className="alert-processed"><i className="glyphicon glyphicon-ok"></i> Cash Handled</div>
								</div>
							  </div>
							  <div className="col-md-3 col-lg-3 col-sm-3">
								<div className="button-group">
								  <div className="alert alert-success" onClick={this.changeToStep5}><i className="glyphicon glyphicon-print"></i> Print Receipt</div>
								  <div className="alert alert-default"><i className="glyphicon glyphicon-remove"></i> Close</div>
								</div>
							  </div>
							  
							</div>
						  </div>						  
						  )
					break;
					
				case '5':
				return (				
					<div className="container step3" id="inputs-header">
					<div className="row">
					<div className="mobile-user-view hidden-lg hidden-sm hidden-md">
						<div className="col-xs-7">
						<div className="user-img">
						<p className="username">Malick Guye</p>
						</div>
						</div>
						<div className="col-xs-5">
						<div className="user-alert"><i className="glyphicon glyphicon-bullhorn"></i> 12</div>
						</div>
						</div>
					</div>
							<div className="row">
							  <div className="col-md-4 col-sm-4 col-lg-3">
								<div className="tran_code">
								  <p>Transaction Code</p>
								  <div className="code">{this.state.transaction_code}</div>
								</div>
							  </div>
							  <div className="col-md-4 col-lg-4 col-sm-4 pull-right hidden-xs">
								<div className="user-info">
									<div className="user-row">
										<div className="user-name">Malick Guye</div>
										<div className="user-alert"><i className="glyphicon glyphicon-bullhorn"></i> 12</div>
									</div>
									<div className="user-img"></div>
								</div>
							  </div>
							</div>
						  </div>						  
						  )
					break;
		}//switch		
	}
});