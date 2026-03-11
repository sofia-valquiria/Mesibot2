async function respond(msg){
let randomFrase = require('./randomFrase')
let listFrases = require('./listFrases')       
switch(msg.content){

    case 'ping': await message.channel.send({content: 'pong'});
    break;

    case 'el regreso...': await message.channel.send({content: '...del rey B)'});
    break;

    case 'dios': await message.channel.send({content: 'MÍO'});
    break;

    case 'randomFrase': 
    case 'randomfrase':
    case 'random':
    case 'frase':
    case 'randomfrase':
    case 'randomFrase':
    case 'RandomFrase':
    await message.channel.send({content: randomFrase()})
    break;
    case 'listfrases':
    await message.channel.send({content: listFrases(message)})
        default: break;
}
}

module.exports = respond