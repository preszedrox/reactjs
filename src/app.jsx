var React = require('react');
var Home = require('./Home.jsx');

var $ = jQuery = require('../../libraries/jquery/dist/jquery');
var bootstrap = require('../../libraries/bootstrap-sass-official/assets/javascripts/bootstrap');

React.render(
	<Home />,
	document.getElementById('main-body')
);