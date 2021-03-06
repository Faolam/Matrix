// Início ao desenvolvimento do comando!
const execute = (bot, msg, args) => {
    const queue = bot.queues.get(msg.guild.id);
    if (!queue) {
      return msg.channel.send(`⚠️ ${msg.author.username}, não ah música alguma sendo reproduzida!!`);
    }
    queue.dispatcher.resume();
    msg.channel.send(`⏸ ${msg.author.username}, estou voltando a reproduzir as músicas!`)
  };


// Informações do comando!! 
  module.exports = {
    name: "resume",
    help: "Volta a reprodução da música!!",
    execute,
  };