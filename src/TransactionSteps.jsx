var React = require('react');

module.exports = React.createClass({
	getInitialState: function(){
		return {
			step: this.props.step,
		}
	},
	render: function(){
		var stepH3 = '';
		var stepH2 = '';
		
		switch(this.props.step )
		{
			case '2':
				stepH3 = <h3>Step2</h3>
				stepH2 = <h2>ID Verification</h2>
				break;
				
			case '3':
				stepH3 = <h3>Step3</h3>
				stepH2 = <h2>Cash Handling</h2>
				break;
				
			case '4':
				stepH3 = <h3>Step4</h3>
				stepH2 = <h2>Receipt</h2>				
				break;
				
			default:
				stepH3 = <h3></h3>
				stepH2 = <h2></h2>
		}//switch
		
		switch( this.props.step )
		{
			case '1':
				return (
					<section className="middle_section">
					  <div className="blue-bar">
						<div className="container">
						  <h1>How Does a Transaction Look Like?</h1>
						</div>
					  </div>
					  <div className="container steps-process">
						<div className="row">
						  <div className="col-md-3 col-sm-6 steps-box">
							<div className="step step-1 active">
							  <div className="icon"><img src="http://placehold.it/80X80" /></div>
							  <h3>Step 1</h3>
							  <h2>Processing Code</h2>
							  <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, making it look like readable English.</p>
							  <div className="arrow"><i className="glyphicon glyphicon-circle-arrow-right"></i></div>
							</div>
						  </div>
						  <div className="col-md-3 col-sm-6 steps-box">
							<div className="step step-2">
							  <div className="icon"><img src="http://placehold.it/80X80" /></div>
							  <h3>Step 2</h3>
							  <h2>ID Verification</h2>
							  <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, making it look like readable English.</p>
							  <div className="arrow"><i className="glyphicon glyphicon-circle-arrow-right"></i></div>
							</div>
						  </div>
						  <div className="col-md-3 col-sm-6 steps-box">
							<div className="step step-3">
							  <div className="icon"><img src="http://placehold.it/80X80" /></div>
							  <h3>Step 3</h3>
							  <h2>Cash Handling</h2>
							  <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, making it look like readable English.</p>
							  <div className="arrow"><i className="glyphicon glyphicon-circle-arrow-right"></i></div>
							</div>
						  </div>
						  <div className="col-md-3 col-sm-6 steps-box">
							<div className="step step-4">
							  <div className="icon"><img src="http://placehold.it/80X80" /></div>
							  <h3>Step 4</h3>
							  <h2>Receipt</h2>
							  <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, making it look like readable English.</p>
							  <div className="arrow hidden-sm hidden-lg hidden-md"><i className="glyphicon glyphicon-circle-arrow-right"></i></div>
							</div>
						  </div>
						</div>
					  </div>
					</section>
				)
				break;
				
			case '1.5':
				return (
					<section className="middle_section">
					  <div className="blue-bar">
						<div className="container">
						  <div className="steps-progress">
							<div className="col-md-3 col-sm-6 col-xs-6">
							<div className="current-step">
								<h1>Current Step</h1>
							</div>
							</div>
							<div className="col-md-5 col-sm-6 col-xs-6">
							<div className="trans-detail">
								<h1>Transaction Details</h1>
							</div>
							</div>
						  </div>
						</div>
					  </div>
					  <div className="container steps-process">
						<div className="row">
						  <div className="col-md-3 col-sm-6 steps-box">
							<div className="step step-1 active">
							  <div className="icon"><img src="http://placehold.it/80X80" /></div>
							  <h3>Step 1</h3>
							  <h2>Processing Code</h2>
							  <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, making it look like readable English.</p>
							</div>
						  </div>
						  <div className="col-md-9 col-sm-6 steps-box">
							<div className="step step-2">
							  <div className="icon"><img src="http://placehold.it/80X80" /></div>
							  <h3>Please Wait</h3>
							  <h2>Transaction Details are Being Loaded...</h2>
							  <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, making it look like readable English.</p>
							</div>
						  </div>
						  
						</div>
					  </div>
					</section>
				)
				break;
				
			case '2':
			case '3':
			case '4':
				return (
					<section className="middle_section">
					  <div className="blue-bar">
						<div className="container">
						  <div className="steps-progress">
							<div className="col-md-3 col-sm-6 col-xs-6">
							<div className="current-step">
								<h1>Current Step</h1>
							</div>
							</div>
							<div className="col-md-5 col-sm-6 col-xs-6">
							<div className="trans-detail">
								<h1>Transaction Details</h1>
							</div>
							</div>
						  </div>
						</div>
					  </div>
					  <div className="container trans_detail completedsteps steps-process">
						<div className="row1">
						  <div className="col-md-3 col-sm-6 steps-box">
							<div className="step step-1 active">
							  <div className="icon"><img src="http://placehold.it/80X80" /></div>
							  {stepH3}
							  {stepH2}
							  <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, making it look like readable English.</p>
							  <div className="arrow hidden-sm hidden-lg hidden-md"><i className="glyphicon glyphicon-circle-arrow-right"></i></div>
							</div>
						  </div>
						  <div className="col-md-3 col-sm-6 steps-box samebox">
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
						  <div className="col-md-3 col-sm-6 steps-box samebox">
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
						  <div className="col-md-3 col-sm-6 steps-box notebox">
							<div className="step step-4">
							  <div className="icon"><img src="http://placehold.it/50X50" /></div>
							  <div className="operation-text">Note</div>
							  <div className="note-text">
							  <p>Hello, Malick. This is a special transaction for you. Why? Because it is first of many, that will come!</p>
							  <div className="make button-big"><a href="#"><i className="glyphicon glyphicon-circle-arrow-up"></i> Sender Information</a></div>
							  </div>
							</div>
						  </div>
						  
						</div>
					  </div>
					</section>
				)
				break;			
		}//switch
	}
});