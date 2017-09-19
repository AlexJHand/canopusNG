console.log( 'js' );

// angular module
var myApp = angular.module( 'myApp', [] );

// controller for this app
myApp.controller( 'ReviewController', function( $http ){
    console.log( 'NG' );
    // hold the controller in a var
    var vm = this;
    // array for all bands
    vm.bands =[];
    // add band
    vm.addBand = function(){
        console.log( 'in addBand:', vm.bandIn );
        vm.bands.push( vm.bandIn );
        console.log( vm.bands );
        // $http
        $http({
            type: 'GET',
            url: '/bands'
        }).then( function( response ){
            console.log( 'back from server with:', response );
            // ng-repeat the reponse
            vm.bands = response.data;
        }); // end $http
    }; //end addBand
}); //end review controller