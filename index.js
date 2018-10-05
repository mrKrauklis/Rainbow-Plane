const Discord = require("discord.js");
const tokenfile = require("./config/config.json");
const fs = require("fs");
const configrainbow = ("./configs/configrainbow.json");
const bot = new Discord.Client()




var greeting = require("./utils/rainbowrole.js");

var greeting = require("./utils/Airlines");



bot.on('ready', () => {
    bot.user.setActivity('Flight Simulator')
  })


bot.login(tokenfile.token);
