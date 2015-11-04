var React = require('react');
var Topbar = require('./Topbar.jsx');
var InputsHeader = require('./InputsHeader.jsx');
var TransactionSteps = require('./TransactionSteps.jsx');
var TransactionsSection = require('./TransactionsSection.jsx');

module.exports = React.createClass({
    render: function() {
        return (
			<div className="bodywrapper">
				<header id="topbar">
				  <Topbar />
				</header>
				<section className="header">
				  <InputsHeader />
				</section>
				<TransactionSteps />
				<TransactionsSection />
			</div>
        )
    }
});