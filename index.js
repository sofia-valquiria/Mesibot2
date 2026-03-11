require('dotenv').config(); // Loads variables from .env file
const { Client, Intents } = require('discord.js');
const TOKEN = process.env.BOT_TOKEN;
const PREFIX = process.env.BOT_PREFIX || '!';
const chatCommands = require('./middlewares/chat-commands');
const welcome = require('./middlewares/welcome-message');
const commands = require('./middlewares/commands');
const Database = require('@replit/database');
const db = new Database();
require("dotenv").config();

const bot = new Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.MESSAGE_CONTENT,
		Intents.FLAGS.GUILD_MEMBERS,
	],
});

bot.on('ready', ()=>{
    console.log('El bot está listo')
})

//Message responses

bot.on('messageCreate', chatCommands)

//welcome message
bot.on('guildMemberAdd', welcome)

//Comandos con prefijo



bot.on('messageCreate', function(message) {
    if(message.content[0] === PREFIX) {
         commands(message);
    }
    });

bot.login(TOKEN)
