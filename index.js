const SlackBot = require('slackbots');
const axios = require('axios');

// Bot setup, needs Bot User OAuth Access Token from Slack Permissions
const bot = new SlackBot({
  token: 'xoxb-630563835409-639092118726-Xls9RkCStk7SPfiTc8Y1uiDG',
  name: 'Git Stats'
})