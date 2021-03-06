// Puxando informações sobre o discord
const Discord = require('discord.js');


// Inicio ao desenvolvimento do comando Matrix
const execute = (bot,msg,args) => {
    let embed = new Discord.MessageEmbed()

    .setTimestamp()
    .setAuthor(`v5.0 2021 © ${bot.user.username}`, 'https://cdn.discordapp.com/attachments/798545242634453012/798669658663551066/giphy.gif.993308012c223dea5c94183fcce5ea64.gif')
    .setTitle(`MINHAS INFORMAÇÕES!`)
    .setDescription(`${msg.author.username}, me chamo Matrix! Fui criado e desenvolvido por um grupo de estudantes de programação, se não me engano você já deve conhece-los... @GabrielSafe e @Pedrão. Minha intenção neste servidor é proporcionar a você a melhor experiência possível com as funcionalidades dispostas a mim. Caso tenha alguma dúvida, não hesite em procurar o comando "/ajuda".`)
    .setColor("RANDOM")

    msg.channel.send(embed);
}


// Informações do comando!
module.exports ={
    name: "Matrix",
    help: "Apresenta informações sobre Matrix_Bot.",
    execute,
}