const Discord = require('discord.js');


const execute = (bot,msg,args) => {
    let espaco_de_argumentos = args.join(" ").split(" / ");
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
        return msg.channel.send(`${msg.author.username}, você não tem permissão para isso!`);
    }
    if (args.length === 0) {
        return msg.channel.send(`${msg.author.username}, ultilize "/anunciar <id do canal> / <título> / <anúncio>"`);
    }
    let canal = espaco_de_argumentos[0];
    let Titulo = espaco_de_argumentos[1];
    let anuncio = espaco_de_argumentos[2];
    if(!anuncio){
        return msg.reply('Faltou o anuncio!')
    }
    const canal_do_anuncio = msg.guild.channels.cache.find(cda => cda.id === canal)

    let anuncio_embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setAuthor(`Sistema de Anúncios ${bot.user.username}`, "https://upload.wikimedia.org/wikipedia/commons/c/cc/Digital_rain_animation_medium_letters_shine.gif")
    .setThumbnail("https://media3.giphy.com/media/l0Iy2xE6qvWxClVHq/giphy.gif")
    .setTitle(Titulo)
    .setColor("#008000")
    .setDescription(anuncio)
    .setFooter('Os anúncios servem para avisa-lo sobre as novidades deste servidor!')

    canal_do_anuncio.send(anuncio_embed);
}


// Informações do comando!
module.exports ={
    name: "anunciar",
    help: "Anuncia algo pelo dono do server!",
    execute,
}
