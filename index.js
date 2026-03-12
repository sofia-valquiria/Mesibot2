require('dotenv').config(); // Loads variables from .env file
const { Client, GatewayIntentBits } = require('discord.js');
const TOKEN = process.env.BOT_TOKEN;
const PREFIX = process.env.PREFIX;
const welcome = require('./middlewares/welcome-message');
const Database = require('@replit/database');
const commands = require('./middlewares/commands');
const db = new Database();

const bot = new Client({ //just the way Discord.js 14.X works, we create a client and specify the intents we want to use
	intents: [
		GatewayIntentBits.Guilds, //Neccesary for the bot to work, allowing it to interact with servers
		GatewayIntentBits.GuildMessages, // Both of these intents are required and
		GatewayIntentBits.MessageContent, // allow the bot to read and write messages in servers
		GatewayIntentBits.GuildMembers, //Allows to detect when a new memeber joins the server
	],
});


bot.on('ready', () => {
	console.log('El bot está listo'); // Signals the bot is online
});

// Main command handler
bot.on('messageCreate', async (message) => {
	if (message.author.bot) return; //Ignore messages from bots
	if (!message.content.startsWith(PREFIX)) return; //Check if it's being invoked with the use of prefix

	const args = message.content.slice(PREFIX.length).trim().split(/\s+/);
	const command = args.shift().toLowerCase(); //trims and parses to lowercase the command, to send it to the commands handler

	if (command === '') return; //if the messasge is just the prefix, halt
	message.channel.sendTyping({content: "Estoy en mantenimiento, Sofi me está cambiando todos los órganos internos por unos nuevos y mejores :')"})
	//await commands(command, message); //otherwise, send the command to the command handler function
	}
);
// Welcome message
//bot.on('guildMemberAdd', welcome);

bot.login(TOKEN);
