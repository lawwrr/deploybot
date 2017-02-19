# deploybot
![Sequences shortened. Deploy speeds may vary.](https://raw.github.com/thenextweb/deploybot/master/deploybot.gif)

If you are running a critical operation (or want to make your operation look like a critical operation) you'll probably want to give advance warnings to your team before deploying and potentially locking up the codebase for a few seconds.

Deploybot runs as a shell script, counts down for whatever seconds you want him/her/bun to run, giving messages in the meantime and then closes itself, letting the next script of your actual deployment process go on.

_Or, you know, you can also run it without actually deploying, just to mess with your team._


#Usage
## Instalation
	sudo npm install
	
Next you have to create a bot on your slack account, you can do so [https://tnw.slack.com/services/new/bot](here). After you are done picking an ingenious name and avatar, invite your freshly created bot from slack to whichever channel you want it to talk to. You'll need to get the ID for that channel, which you can get from the API by browsing through the subscribed channels ([https://gist.github.com/walaura/7a72f3cde025301301a8](example code)).

Once that's set just change your time to launch and add/remove messages, these are sent using the standard Slack API so you can use stuff like <!channel> to notify the entire channel.

## Integration
Unless you are really commited to running it manually, deploybot only really makes sense as part of your larger deploy process, this varies from system to system but here's how ours is set up on Capistrano:

		task :slack do
			system('node .capistrano/lib/deploybot/app.js')
		end
	
		$ cap slack deploy
