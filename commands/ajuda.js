// Início ao comando ajuda onde serão apresentadas as informações do discord
const Discord = require('discord.js');


// Início ao desenvolvimento do comando ajuda!
const execute = (bot,msg,args) => {
        let embed = new Discord.MessageEmbed()
    
        .setTimestamp()
        .setTitle(`Salve ${msg.author.username}! Meu nome é Matrix! \nNeste campo te apresento minhas funções!`)
        .setColor("#e2fd16")
        .setDescription(`⚙️ Lembre-se que meu prefixo é :"/" ⚙️`)
        .addField(`💡 /r <número de mensagens>`, "Nesse comando faço a remoção das mensagens de um chat. \n| Número mínimo 2 | - | Número máximo 100 |", true)
        .addField(`💡 /sinfo`, "Nesse comando apresento informações sobre este servidor!", true)
        .addField(`💡 /ping`, "Mostra a minha latência enquanto estou ativo!", true)
        .addField(`💡 /uinfo`, "Nesse comando apresento informações sobre você!", true)
        .addField(`💡 /minfo`, "Aqui apresento informações sobre os comandos de música!", true)
        .addField(`💡 /skin <nome da skin>`, "Farei a busca da skin solicitada e você conseguirá baixa-la!", true)
        .addField(`💡 /avatar <@Usuário>`, "Aqui mostrarei o AVATAR do usuário selecionado!", true)
        .addField(`💡 /ipstatus <ip server>`, "Aqui mostrarei o status de um servidor de MINECRAFT!", true)
        .addField(`💡 /Matrix`, "Aqui apresento algumas informações sobre mim!", true);
    
        msg.channel.send(embed);
}


// Aba para o module exports. Informações.
module.exports ={
    name: "ajuda",
    help: "Mostra a ajuda para o usuário!",
    execute,
}