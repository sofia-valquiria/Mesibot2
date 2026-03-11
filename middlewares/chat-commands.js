async function respond(msg){
let randomFrase = require('./randomFrase')
let listFrases = require('./listFrases')
// Extract just the command part (without prefix)
let command = msg.content.substring(1, msg.content.indexOf(' ') > 0 ? msg.content.indexOf(' ') : msg.content.length).toLowerCase();
       
switch(command){

    case 'ping': await msg.channel.send({content: 'pong'});
    break;

    case 'el regreso...': await msg.channel.send({content: '...del rey B)'});
    break;

    case 'dios': await msg.channel.send({content: 'MÍO'});
    break;

    case 'randomfrase':
    case 'random':
    case 'frase':
    await msg.channel.send({content: randomFrase()})
    break;
    case 'listfrases':
    await msg.channel.send({content: listFrases(msg)})
        default: break;
}
}

module.exports = respond