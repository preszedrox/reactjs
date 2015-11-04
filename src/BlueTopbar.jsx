var React = require('react');

module.exports = React.createClass({
	render: function(){
		return (
			<div className="container">
				<div className="row">
				  <div className="col-md-3 col-sm-3 col-xs-4">
					<div className="logo"><a href="#"><img src="http://placehold.it/150X45" /></a></div>
				  </div>
				  <div className="col-sm-9 col-md-9 col-xs-8">
					<aside id="aside-right">
					  <div className="info"><a href="#"><i className="glyphicon glyphicon-info-sign"></i></a></div>
					  <div className="cog"><a href="#"><i className="glyphicon glyphicon-cog"></i></a></div>
					  <div className="logout_button"> <a href="#"><i className="glyphicon glyphicon-log-out"></i> Logout</a> </div>
					</aside>
				  </div>
				</div>
			  </div>
		)
	}
});