//. app.js
var express = require( 'express' ),
    bodyParser = require( 'body-parser' ),
    ejs = require( 'ejs' ),
    settings = require( './settings' ),
    app = express();

app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'ejs' );

app.use( express.Router() );
app.use( express.static( __dirname + '/public' ) );

app.use( bodyParser.urlencoded( { extended: true }) );  //. body-parser deprecated undefined extended
app.use( bodyParser.json() );

app.get( '/', function( req, res ){
  res.render( 'index', { liff_id: settings.liff_id } );  
});

var port = process.env.port || 8080;
app.listen( port );
console.log( "server stating on " + port + " ..." );
