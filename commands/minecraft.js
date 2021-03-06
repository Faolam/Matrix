// Puxando informações sobre o discord
const Discord = require('discord.js');


// Inicio ao desenvolvimento do comando minfo
const execute = (bot,msg,args) => {
    let mushmc = 'https://forum.mushmc.com.br/assets/uploads/files/1597083942062-30b420c4-b784-4706-9603-c7a5a8dddba8-image.png'
    let embed = new Discord.MessageEmbed()

    .setTimestamp()
    .setTitle(`Oi ${msg.author.username}! Estou no mushmc.com! Entra ai!`)
    .setDescription(`Pega a visão da minha tela aqui!!`)
    .setColor("RANDOM")
    .setImage(mushmc)

    msg.channel.send(embed);
}

// As informações abaixo compreendem name, help e a parte de execução
// Informações do comando!
module.exports ={
    name: "onde_estou",
    help: "Faz o Bot repetir a msg anterior!",
    execute,
}