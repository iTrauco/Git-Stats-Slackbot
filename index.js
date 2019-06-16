const SlackBot = require("slackbots");
const axios = require("axios");

// Bot setup, needs Bot User OAuth Access Token from Slack Permissions
const bot = new SlackBot({
  token: "xoxb-630563835409-639092118726-Xls9RkCStk7SPfiTc8Y1uiDG",
  name: "Git Stats"
});

// What happens when we start the bot?
// bot.on("start", () => {
//   const params = {
//     icon_emoji: ":smile:"
//   };

//   bot.postMessageToChannel("git_stats_slackbot", "Hello creators!", params);
// });

// Error Handler
bot.on('error', (err) => console.log(err));

// Message Handler
bot.on('message', (data) => {
  if (data.type !== 'message') {
    return;
  }
  console.log(data);
});