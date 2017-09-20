var express = require( 'express' );
var router = express.Router();
var bands = [];

router.get( '/', function( req, res ){
    console.log( '/bands get hit' );
    res.send( bands );
}); // end base url for /bands

router.post( '/', function( req, res ){
    console.log( 'in /bands post:', req.body );
    bands.push( req.body.bandName );
    res.sendStatus( 200 );
}); //end post router for /bands

module.exports = router;