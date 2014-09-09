/**
* Event.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
	eventId : {
  	  	type: 'string',
  		require: 'true'	
  	},
  	races : {Collection : 'Race'},
  	admins : {Collection : 'User'}
  	title	: {
  	  	type: 'string',
  		require: 'true'	
  	},
  	organization :  {
  	  	type: 'string',
  		require: 'true'	
  	},
  	
  }
};

