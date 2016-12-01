/**
 * http://usejsdoc.org/
 */


//workspace id : adc6aa55-80f5-469f-8df5-2ed7b8fca357

//Create the service wrapper

var watson = require( 'watson-developer-cloud')
var vcapServices = require('./vcapServices')


var conversationSvcCreds = vcapServices.conversation[0].credentials
var username  = conversationSvcCreds.username
var password = conversationSvcCreds.password


var conversation = watson.conversation( {
  url: 'https://gateway.watsonplatform.net/conversation/api',
  username: username ,
  password: password ,
  version_date: '2016-07-11',
  version: 'v1'
} );



function getResponse( payload, callback){



		  // Send the input to the conversation service

		  console.log( "conversation payload:" + JSON.stringify( payload , null, "\t"));
		  conversation.message( payload, function(err, data) {
		    if ( err ) {
		    	callback(err);

		    }else{
		    	console.log("output data" + JSON.stringify( data, null, "\t") ) ;
		    	callback(null, data );

		    }

		  } );

}





module.exports = {
		getResponse: getResponse
}
