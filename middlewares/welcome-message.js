const welcomeChannelIdPutilines = "1014719550836723866"
function asukaWelcome(member){
    member.guild.channels.cache.get(welcomeChannelIdPutilines).send(`<@${member.id}> Bienvenide putiline https://media.discordapp.net/attachments/856915121988960308/1032375398291472494/mental-illness.gif`)
}
module.exports=asukaWelcome;