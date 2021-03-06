// Puxando informações sobre o discord
const Discord = require('discord.js');


// Inicio ao desenvolvimento do comando minfo
const execute = async (bot,msg,args) => {
  const emoji1 = bot.emojis.cache.get("799651145836134442")
  let embed = new Discord.MessageEmbed()

    .setTimestamp()
    .setAuthor('Matrix', 'https://cdn.discordapp.com/attachments/798545242634453012/798669658663551066/giphy.gif.993308012c223dea5c94183fcce5ea64.gif')
    .setThumbnail('https://media3.giphy.com/media/fvA1ieS8rEV8Y/200.gif')
    .setTitle(`${emoji1} ${msg.author.username}! Minhas informações de ping! ${emoji1}`)
    .setColor("#FFFF00")
    .setDescription(`Meu ping no momento é ${Date.now() - msg.createdTimestamp}ms e a latência da minha API é ${Math.round(bot.ws.ping)}ms.`)

    msg.channel.send(embed);
}

// As informações abaixo compreendem name, help e a parte de execução
// Informações do comando!
module.exports ={
    name: "ping",
    help: "Mostra a latência do bot",
    execute,
}