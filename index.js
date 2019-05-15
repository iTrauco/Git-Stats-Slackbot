require('dotenv').config();

const botkit = require('botkit');

if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET || !process.env.PORT || !process.env.VERIFICATION_TOKEN) {
  console.log('Error: Specify CLIENT_ID, CLIENT_SECRET, VERIFICATION_TOKEN and PORT in environment');
  process.exit(1);
} else {
  console.log('All required variables found!')
}

// Configuring the bot
var controller = botkit.slackbot({
  json_file_store: './db_slackbutton_slash_command/', // Saves Slack conversations
  debug: true, // Detailed console debugging
  clientSigningSecret: process.env.CLIENT_SIGNING_SECRET,
 })

// Connecting Node app to Slack app
controller.configureSlackApp({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  clientSigningSecret: process.env.CLIENT_SIGNING_SECRET,
  scopes: ['commands', 'bot'],
})

// Creating the BOT! 
let bot = controller.spawn({
  token: process.env.BOT_TOKEN,
  incoming_webhook: {
    url: 'WE_WILL_GET_TO_THIS'
  }
}).startRTM();

// Controller includes a built-in web server function (TL;DR no Express)
controller.setupWebserver(process.env.PORT, function(err, webserver){
  controller.createWebhookEndpoints(controller.webserver);
  controller.createOauthEndpoints(controller.webserver, 
    function(err, req, res) {
      if (err) {
        res.status(500).send(`ERROR: $(err)`);
      } else {
        res.send('Success!');
      }
    });
 });

