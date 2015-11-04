var React = require('react');
var Topbar = require('./Topbar.jsx');
var BlueTopbar = require('./BlueTopbar.jsx');
var InputsHeader = require('./InputsHeader.jsx');
var TransactionSteps = require('./TransactionSteps.jsx');
var TransactionsSection = require('./TransactionsSection.jsx');
var TransactionsTable = require('./TransactionsTable.jsx');

module.exports = React.createClass({
	getInitialState: function(){
		return {
			step: '1',
			valid_transaction_code: '10 20 30 40 50',
			valid_id_number: 'SEN123'
		};
	},
	changeStep: function( stepNumber )
	{
		this.setState({step: stepNumber});//setState
		var component = this;
		
		if( stepNumber == '1.5' )
		{
			setTimeout( function(){
				component.setState({step: '2'});
			}, 700 );				
		}
	},
    render: function() {	
		switch( this.state.step )
		{
			case '1':
			case '1.5':
			case '2':
			case '3':
			case '4':
				return (
					<div className="bodywrapper">
						<header id="topbar">
						  <Topbar step={this.state.step} />
						</header>
						<section className="header">
						  <InputsHeader valid_transaction_code={this.state.valid_transaction_code} valid_id_number={this.state.valid_id_number} step={this.state.step} changeStep={this.changeStep} />
						</section>
						<TransactionSteps step={this.state.step} />
						<TransactionsSection />
					</div>
				)
				break;
			case '5':
				return (
					<div className="bodywrapper">
						<header id="topbar">
						  <Topbar step={this.state.step} />
						</header>	
						<section className="blueheader">
						  <InputsHeader valid_transaction_code={this.state.valid_transaction_code} valid_id_number={this.state.valid_id_number} step={this.state.step} changeStep={this.changeStep} />
						</section>
						<TransactionsTable />
					</div>
				)
				break;
		}//switch
    }
});