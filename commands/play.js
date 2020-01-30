const ytdl = require('ytdl-core');

module.exports.run = async (bot, message, args) => {

  if (!message.member.voiceChannel) return message.channel.send('Plase connect to a voice channel.');
  if (message.guild.me.voiceChannel) return message.channel.send('sorry, the bot is already connected to the vocie channel.')
  if (!args[0]) return message.channel.send('Sorry, please input a URL following the command.');
  let validate = await ytdl.validateURL(args[0]);
  if (!validate) return message.channel.send('Sorry, please input a **valid URL** following the command.')
  let info = await ytdl.getInfo(args[0]);
  let connection = await message.member.voiceChannel.join();
  let dispatcher = await connection.playStream(ytdl(args[0], { filter: 'audioonly'}));

  message.channel.send(`Now Playing: ${info.title}`);

}


module.exports.config = {
  command: "play"
}
