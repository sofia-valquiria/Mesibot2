const addFrase = require('./addFrase')
const randomFrase = require('./randomFrase')
const listFrases = require('./listFrases')
const Database = require("@replit/database")
const path = require('path');
const db = new Database()
async function commands(command, message){

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

			case 'frase':
				const randomPhrase = randomFrase();
				await message.reply({ content: randomPhrase });
				break;

			case 'listfrases':
				const frasesList = listFrases();
				await message.reply({ content: frasesList });
				break;


            case 'deletefrase':
                if (command.length === 0 || isNaN(command)){
                    await message.reply({ content: "No te hagá' el pillo, ura, tirame el número de la frase que querés borrar o HC"})
                } else {
                    const indice = parseInt(message.content.split(' ')[1]) - 1; // Get the index from the command, adjusting for 0-based indexing
                    delete db[indice];
                    await message.reply({ content: "frase nukeada"})
                }
			case 'volvio':
				await message.reply({ content: 'el rey B)' });
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

    switch(command){
        case 'addFrase':
        case 'addfrase':    
        addFrase(params); console.log('Frase añadida');  message.reply({content: 'frase nueva añadida!'})
        break
        case 'random':
        case 'frase':
        case 'randomfrase':
        case 'randomFrase':
        case 'RandomFrase':
          case 'randomFrase': 
          message.reply({content: randomFrase()})
        break;
        
        case 'listfrases':
        case 'frases':    
            message.reply({content: listFrases()})

        case 'ping': await msg.channel.send({content: 'pong'});
        break;

        case 'elregreso': await msg.channel.send({content: '...del rey B)'});
        break;

        case 'dios': await msg.channel.send({content: 'MÍO'});
        break;

        case 'gj': await msg.channel.send({content: 'gracias, madre'});
        break;

        case 'frase':
        await msg.channel.send({content: randomFrase()})
        break;
        case 'listfrases':
        await message.channel.send({content: listFrases(msg)})
        default: break;
}
    }


module.exports = commands