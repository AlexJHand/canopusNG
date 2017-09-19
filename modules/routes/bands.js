var express = require( 'express' );
var router = express.Router();
var bands = [ 'Modest Mouse', 'The Killers', 'Husker Do', 'The Kills', 'The Deaths', 'The Toasters' ];

router.get( '/', function( req, res ){
    console.log( '/bands get hit' );
    res.send( bands );
}); // end base url for /bands

module.exports = router;