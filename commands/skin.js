// Puxando informações sobre o discord
const Discord = require('discord.js');


// Inicio ao desenvolvimento do comando isabelly
const execute = async (bot,msg,args) => {
    let reason = args.slice(0).join(' ');
    if (reason.length < 1) return msg.reply('coloque um nick de minecraft.')

    let embed = new Discord.MessageEmbed()

        .setTimestamp()
        .setAuthor(`Resultados para ${msg.author.username}`, msg.author.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
        .setTitle(`Skin de ${args[0]}`)
        .setImage(`https://mc-heads.net/head/${args[0]}`)
        .setFooter(`Mensagem solicitada por ${msg.author.username}`)
        .setTimestamp(new Date())
        .setColor('RANDOM')

    msg.channel.send(embed)
}


// Informações do comando!
module.exports ={
    name: "skin",
    help: "Mostra a skin conforme digitado",
    execute,
}