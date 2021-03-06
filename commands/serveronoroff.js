// Puxando informações sobre o discord
const Discord = require('discord.js');
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;







const execute = (bot,msg,args) => {
    // Checa qualquer descrição de ip
    if(!args.length) {
        msg.reply(', por favor digite após o comando o ip do servidor que você quer verificar!');
        return;
    }
    // Criando um novo XMLHttpRequest
    const xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = () => {
        if(xmlHttp.readyState === 4) {
            const resp = JSON.parse(xmlHttp.responseText);
            if(!resp.hostname) {
                msg.channel.send('Não consegui indentificar o status do servidor de IP: ' + args[0]);
                return;
            }
            let response = resp.hostname;
            if(resp.online) {
                response += ' está *ONLINE* . E possui agora um total de players ativos iguais a : ';
                if(resp.players.online) {
                    response += resp.players.online;
                }
                else {
                    response += 'none';
                }
            }
            else {
                response += ' está *OFFLINE*'
            }
            msg.channel.send(response);
        }
    }
    xmlHttp.open('GET', 'https://api.mcsrvstat.us/2/' + args[0]);
    xmlHttp.send();
}







module.exports = {
    name: 'ipstatus',
    description: 'Checa se um server está ativo e quantas pessoas então a jogar nele.',
    args: '<ip address>',
    execute,
}