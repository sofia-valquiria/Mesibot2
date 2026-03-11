require('dotenv').config(); // Loads variables from .env file
const { Client, Intents } = require('discord.js');
const TOKEN = process.env.BOT_TOKEN;
const PREFIX = process.env.BOT_PREFIX || '!';
const chatCommands = require('./middlewares/chat-commands');
const welcome = require('./middlewares/welcome-message');
const commands = require('./middlewares/commands');
const addFrase = require('./middlewares/addFrase');
const Database = require('@replit/database');
const { add } = require('mathjs');
const listFrases = require('./middlewares/listFrases');
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

bot.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(PREFIX)) return;

  const args = message.content.slice(PREFIX.length).trim().split(/\s+/);
  const command = args.shift().toLowerCase();

  if (command !== '') {
	commands(message);
	chatCommands(message);
	addFrase(message);
	listFrases(message);
  }
});


//welcome message
bot.on('guildMemberAdd', welcome);


bot.login(TOKEN);
