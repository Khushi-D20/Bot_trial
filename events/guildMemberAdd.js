module.exports = (client, member) => {
  const defaultChannel = member.guild.channels.cache.find(channel => channel.name == 'general');
  defaultChannel.send(`Welcome ${member.user} to this server, kindly prepare yourself for Khushi freaking out over small things, and the rest sitting back and watching! And if you don't like pizza and ice cream, you may as well leave now.`).catch(console.error);
}
