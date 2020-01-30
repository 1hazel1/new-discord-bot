module.exports.run = async (bot, message, args, ops) => {

  if (!message.member.voiceChannel) return message.channel.send('Please connect to voice channel.');
  if (!message.guild.me.voiceChannel) return message.channel.send('Sorry, the bot isn\'t connected to the voice channel.');
  if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('Sorry, you aren\'t connected to the same channel.');
  message.guild.me.voiceChannel.leave();
  message.channel.sent('Leaving Channel...');
}

module.exports.config = {
  command: "leave"
}
