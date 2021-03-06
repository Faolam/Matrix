// Início ao desenvolvimento do comando pause!
const execute = (bot, msg, args) => {
    const queue = bot.queues.get(msg.guild.id);
    if (!queue) {
      return msg.channel.send(`⚠️ ${msg.author.username}, não ah música alguma sendo reproduzida!!`);
    }
    queue.dispatcher.pause();
    msg.channel.send(`▶️ ${msg.author.username}, a musica foi pausada!`)
};


// Informações do comando!!
  module.exports = {
    name: "pause",
    help: "Pausa a reprodução das músicas!",
    execute,
};