var Slack   = require('slack-client');
var config  = require('./config.js');

var speed   = 1000;

var slack   = new Slack(config.token, true, true);




slack.on('open', function() {
	
	var channel = slack.getChannelGroupOrDMByID(config.channel);
	
	setTimeout(function(){
		process.exit(1);			
	},(config.launchAt*speed)+50);
	
	for(var _time in config.warnings) {
		(function(time){
			setTimeout(function(){
				var text = config.warnings[time].text;
				channel.send(text);
				console.log(text);
			},time*speed);
		})(_time);
	}

});

slack.on('error', function(error) {
	return console.error("Error: " + error);
});

slack.login();