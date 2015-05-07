# deploybot
![](http://i.imgur.com/qxr830H.gif)

If you are running a critical operation (or just want to make your operation look like a critical operation) you want to give advance warnings to your team before deploying and potentially locking up the codebase for a few seconds.

Deploybot runs as a shell script, counts down for whatever seconds you want him/her/bun to run, giving messages in the meantime and then closes itself, letting the next script of your actual deployment process take over.

_Or, you know, you can also run it without actually deploying just to mess with your team._


#Usage
## Instalation
	sudo npm install
	
Next you have to create a bot on your slack account, you can do so [https://tnw.slack.com/services/new/bot](here). After you are done picking an ingenious name and avatar invite your freshly created bot from slack to whichever group you want it to operate. You'll now need to get the channel ID, which you can get browsing through the subscribed channels ([https://gist.github.com/lawwrr/7a72f3cde025301301a8](example code)).

Once that's set just change your time to to launch and messages, these are sent using the standart Slack API so you can use stuff like <!channel> to warn the entire channel

## Integration
Unless you are really commited to doing it manually, deploybot only really makes sense as part of your larger deploy process, this varies from system to system but here's how ours is set up using Capistrano:

		task :slack do
			system('node .capistrano/lib/deploybot/app.js')
		end
	
		$ cap slack deploy
