// Passando as requisições para que o Bot funcione!
const Discord = require('discord.js'); // Passando que variavel é Discord
const bot = new Discord.Client(); // Passando que o nome que se refere ao Matrix é "bot"
const dotenv = require("dotenv"); // Biblioteca para facilitar o desenvolvimento
const fs = require("fs"); // Outra biblioteca para facilitar o desenvolvimento
const path = require("path"); // Puxando variáveis do path.
const moment = require('moment');

// Função Express para o app achar a porta
const express = require('express');
const app = express();
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`O App está rodando na porta ${PORT} !`);
});



// Puxar informações do arquivo env.
dotenv.config(); // Trazendo a Central de configurações do dotenv 


// Trazer informações das pasta commands
bot.commands = new Discord.Collection();
const commandFiles = fs
    .readdirSync(path.join(__dirname,"./commands"))
    .filter((filename) => filename.endsWith(".js"));

for (var filename of commandFiles) {
    const command = require(`./commands/${filename}`);
    bot.commands.set(command.name, command);
};


// Aba para as requisições de música
bot.queues = new Map();


// Quando no terminal for digitado "node ." essas mensagens serão exibidas.
bot.once('ready', () => {
    console.log('==================================@@@@@==================================');
    console.log('=============== Estou Pronto Para Ser Usado! Bot : Matrix ===============');
    console.log('==================================@@@@@==================================');
    let atividade_do_bot = [
        `🔑 ${process.env.PREFIX}ajuda  🔑`,
        `🔑 ${process.env.PREFIX}Matrix 🔑`,
        `Estou contribuindo para ${bot.guilds.cache.size} servidores!`,
        `Youtube -- AlbyPro / 𝐊𝐞𝐲𝐛𝐨𝐚𝐫𝐝 𝐀𝐧𝐝 𝐌𝐨𝐮𝐬𝐞 𝐬𝐨𝐮𝐧𝐝𝐬 𝐆𝐎𝐃𝐁𝐑𝐈𝐃𝐆𝐄𝐑 - 𝐇𝐲𝐩𝐢𝐱𝐞𝐥 𝐁𝐞𝐝𝐰𝐚𝐫𝐬`,
    ],
    i = 0;
    setInterval(() => bot.user.setActivity(`${atividade_do_bot[i++ % atividade_do_bot.length]}`, {
        type: "WATCHING"
    }), 7500);
        bot.user
            .setStatus("online")
            .catch(console.log);
});


// Criando evento mensagem, onde o bot se nn reconhecer o comando responderá de uma outra forma.
bot.on("message", (msg) => {
    if (!msg.content.startsWith(process.env.PREFIX) || msg.author.bot) return;

    const args = msg.content.slice(process.env.PREFIX.length).split(" ");
    const command = args.shift().toLowerCase();

    try {
        bot.commands.get(command).execute(bot,msg,args);
    } catch(e) {
        return msg.channel.send(`${msg.author.username}, analisei o que foi dito após o meu prefixo de resposta e não encontrei nenhum comando associado a isso. Verifique se o comando está escrito de forma correta ou com letras maiúsculas caso contrário indico verificar meus comandos em: "/ajuda".`);
    }
});


// Colocando a Matrix para rodar!
bot.login(process.env.TOKEN);