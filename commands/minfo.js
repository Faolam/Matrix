// Puxando informações sobre o discord
const Discord = require('discord.js');


// Inicio ao desenvolvimento do comando minfo
const execute = (bot,msg,args) => {
    let embed = new Discord.MessageEmbed()

    .setTimestamp()
    .setThumbnail('https://conteudo.imguol.com.br/c/noticias/cf/2019/08/10/fone-de-ouvido---tilt-1565457983857_v2_450x337.png')
    .setTitle(`${msg.author.username}, segue ai informações sobre o comando de música!!`)
    .setColor("#0223d6")
    .setDescription(`🔊 Algumas informações do comando de música do Matrix!! 🔊`)
    .addField(`🔔 /p <nome da música> ou <link da música>`, `Começa a reproduzir a música solicitada!`, true)
    .addField(`🔔 /skip`, `Pula a reprodução da música atual!`, true)
    .addField(`🔔 /pause`, `Pausa a música atual!`, true)
    .addField(`🔔 /resume`, `Volta a reprodução das músicas!`, true)
    .addField(`🔔 /stop`, `Para a reprodução de todas as músicas!`, true)
    .setImage('https://i.pinimg.com/originals/31/f5/2e/31f52e33fa910f823f157e0ea84df413.gif')

    msg.channel.send(embed);
}

// As informações abaixo compreendem name, help e a parte de execução
// Informações do comando!
module.exports ={
    name: "minfo",
    help: "Mostra as informações do comando MÚSICA!",
    execute,
}