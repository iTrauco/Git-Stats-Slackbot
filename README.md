# gh-activity-slackbot

1. Create GH repository
2. Clone project to local machine
* Run `npm init` to set up package.json file
* Install `botkit` and `dotenv` dependencies
* Run `touch .env .gitignore `
* Add .env (app data security) and other defaults to `.gitignore`
* Set up environment variables found in this repository, leave values empty
* Run `touch index.js` 
3. Create a Slack App (https://api.slack.com/apps/new)
4. Navigate to 'Basic Information'
* Add app credentials to their respective .env variables 
3a. Navigate to 'Oauth & Permissions'
3b. Set permission scopes: Add a bot user and add slash commands/actions to messages
3c. Create a bot user in app settings, set to always be on
3d. Request to 'Install App to Workspace' (Usually denied for policy)
3e. If denied, create test workspace then install app to workspace
3. On your .env file set `BOT_TOKEN = [Bot User OAuth Access Token]`
5. Enable the Events API in app settings
5a. Configure the Request URL
5b. 
