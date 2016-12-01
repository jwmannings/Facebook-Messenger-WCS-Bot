var memjs = require('memjs');
var vcapServices = require('./vcapServices')

var memSvcCreds  = vcapServices.memcachedcloud[0].credentials

var username  = memSvcCreds.username 
var password = memSvcCreds.password 
var server = 	memSvcCreds.servers

var mc = memjs.Client.create(server, {
  username: username,
  password: password
});    

function get ( key, callback){
	mc.get(key, function ( err, data){
		if ( err){
			callback ( err)
		}else {
			var returnValue = JSON.parse( data) ;
			console.log ( "got value for key" + key + " value " + data );
			callback( null , returnValue );
		}
	})
}


function set ( key, value){
	
	if ( value ){
		mc.set( key, JSON.stringify( value) ) ;
		console.log ( "set for " + key + " successfully")
	}
}

module.exports = {
		
		get: get,
		set: set
}
