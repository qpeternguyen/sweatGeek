/**
* Race.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	raceId : {
  	  	type: 'string',
  		require: 'true'	
  	},
  	eventId : {
  	  	type: 'string',
  		require: 'true'	
  	},
  	sport : { //Rowing,Running
  	  	type: 'string',
  		require: 'true'	
  	},
  	category : {  //Sweeping,Sculling,Walk, Run
  		type: 'string',
  		require: 'true'
  	},
  	  	eventType : {    //8+,4+,2+,4X,2X,1X/ 5k Marathon
  		type: 'string',
  		require: 'true'
  	},
  	classificationLevel : {  //Intermediate,Senior,Elite
  		type: 'string',
  		require: 'true'
  	}, 
  	classificationAge : { //Masters, Juniors, Collegiate, Senior
  		type: 'string',
  		require: 'true'
  	},
  	classificationWeight : { //Open, Lightweight,Middleweight,HeavyWeight
  		type: 'string',
  		require: 'true'
  	},
  	maxEntry :{
  		type: 'number',
  		require: 'true'
  	}

  }
};

