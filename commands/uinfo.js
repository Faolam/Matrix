// Puxando informações sobre o discord
const Discord = require('discord.js');


// Inicio ao desenvolvimento do comando uinfo
const execute = (bot,msg,args) => {
    let embed = new Discord.MessageEmbed()

    .setTimestamp()
    .setThumbnail(msg.author.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
    .setTitle(`${msg.author.username}, segue ai informações sobre você!`)
    .setColor("#fd2f5f")
    .setDescription(`⚙️ Algumas informações de ${msg.author.username}!! ⚙️`)
    .addField(`Seu nome é `, msg.author.username, true)
    .addField(`O seu ID é `, msg.author.id, true)

    msg.channel.send(embed);
}


// Informações do comando!
module.exports ={
    name: "uinfo",
    help: "Mostra as informações do usuário que solicitou o comando!",
    execute,
}