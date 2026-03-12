require('dotenv').config(); // Loads variables from .env file
const { Client, GatewayIntentBits } = require('discord.js');
const TOKEN = process.env.BOT_TOKEN;
const PREFIX = process.env.PREFIX;
const addFrase = require('./middlewares/addFrase');
const randomFrase = require('./middlewares/randomFrase');
const listFrases = require('./middlewares/listFrases');
const welcome = require('./middlewares/welcome-message');
const Database = require('@replit/database');
const db = new Database();

const bot = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

bot.on('ready', () => {
	console.log('El bot está listo');
});

// Main command handler
bot.on('messageCreate', async (message) => {
	if (message.author.bot) return;
	if (!message.content.startsWith(PREFIX)) return;

	const args = message.content.slice(PREFIX.length).trim().split(/\s+/);
	const command = args.shift().toLowerCase();

	if (command === '') return;

	try {
		switch (command) {
			case 'ping':
				await message.reply({ content: 'pong' });
				break;

			case 'addfrase':
				if (args.length === 0) {
					await message.reply({ content: 'Debes proporcionar una frase' });
				} else {
					const frase = args.join(' ');
					addFrase(frase);
					await message.reply({ content: '✅ Frase nueva añadida!' });
				}
				break;

			case 'random':
			case 'frase':
			case 'randomfrase':
				const randomPhrase = randomFrase();
				await message.reply({ content: randomPhrase });
				break;

			case 'listfrases':
			case 'frases':
				const frasesList = listFrases();
				await message.reply({ content: frasesList });
				break;

			case 'el regreso...':
				await message.reply({ content: '...del rey B)' });
				break;

			case 'dios':
				await message.reply({ content: 'MÍO' });
				break;

			default:
				await message.reply({ content: `Comando ${command} no reconocido` });
		}
	} catch (error) {
		console.error(error);
		await message.reply({ content: 'Hubo un error al procesar el comando' });
	}
});

// Welcome message
bot.on('guildMemberAdd', welcome);

bot.login(TOKEN);
