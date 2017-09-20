// requires
var express = require( 'express' );
var bodyParser = require( 'body-parser' );
var app = express();
var index  = require( './modules/routes/index' );
var bands = require( './modules/routes/bands' );

//uses
app.use( express.static( 'public' ) );
app.use( bodyParser.json() );
app.use( '/', index );
app.use( '/bands', bands );

// globals
var port = 5318;

// spin up server
app.listen( port, function(){
    console.log( 'server up on:', port );
}); // end spin up