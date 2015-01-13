var http = require('http')
var express = require('express');
var fs = require('fs');
var React = require('react');
var JSX = require('node-jsx').install();
var BaseApp = require('./components/BaseApp.react');


// Create Express App
var app = express();
app.use("/", express.static(__dirname + "/public/"));



/*
* Load Initial State for UI
* In the real world, this would be ... data.
*/
var initialState = {
	user: 'Kevin'
};




/* 
* Load basic page template
*
* Warning this is a synchronous operation, deliberately
* meant to only run on server startup.  
*  
* Often, more advanced templating is used here, but I'm trying
* to keep my dependencies to a bare minimum, so I'm just going
* to manually splice the React fragment into the raw loaded HTML
* file.  This is a bit of an interesting approach because
* that HTML file can still be open and run when served as a 
* static asset, so it can be packaged with Cordova.
*/

var templateString = fs.readFileSync('./public/Base.html', "utf8");
var baseMarkup = React.renderToString(
	BaseApp(initialState)
);
var pageString = insertString(templateString, 'id="react-app">', baseMarkup);
pageString = insertString(pageString, 'id="initial-state">', JSON.stringify(initialState));




/*
* Handle Requests
*/
app.get("/", function(req, res) {
	res.send(pageString);
});

app.get("/api/base", function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(initialState));
});



// Fire it up (start our server)
var server = http.createServer(app).listen(8080, function() {
  console.log('Express server listening on port ' + 8080);
});




/*
* Utilities
*/

function insertString(sourceStr, search, insertStr) {
	var insertIndex = sourceStr.search(search) + search.length;
	var sourceStart = sourceStr.substr(0, insertIndex);
	var sourceEnd = sourceStr.substr(insertIndex);
	return sourceStart + insertStr + sourceEnd;
}