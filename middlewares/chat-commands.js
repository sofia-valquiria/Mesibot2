function respond(msg){
let randomFrase = require('./randomFrase')
let listFrases = require('./listFrases')       
switch(msg.content){

    case 'ping': msg.reply({content: 'pong'});
    break;

    case 'el regreso...': msg.reply({content: '...del rey B)'});
    break;

    case 'dios': msg.reply({content: 'MÍO'});
    break;

    case 'randomFrase': 
    case 'randomfrase':
    case 'random':
    case 'frase':
    case 'randomfrase':
    case 'randomFrase':
    case 'RandomFrase':
    msg.reply({content: randomFrase()})
    break;
    case 'listfrases':
    msg.reply({content: listFrases(msg)})
        default: break;
}
}

module.exports = respond