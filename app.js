/** @jsx React.DOM */

var React = require('react');
var Base = require('./components/BaseApp.react');
require('./public/styles/app.less');

// Snag the initial state that was passed from the server side
var initialStateHTML = document.getElementById('initial-state').innerHTML;
var initialState = initialStateHTML ? JSON.parse(initialStateHTML) : {}

React.renderComponent(
	<Base 
		user={initialState.user}
	/>, 
	document.getElementById('react-app')
);