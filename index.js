const Discord = require ("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log ("I am ready!");
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const tag = `<@${member.id}>`


  if(command === 'ping') {
    message.channel.send('Pong!');
  } else
  if (command === 'blah') {
    message.channel.send('Meh.');
  } else


  if (command === 'kick '){

    member.hasPermission ('ADMINISTRATOR')||
    member.hasPermission ('KICK_MEMBERS')
  {
    const target = mentions.users.first()
    if (target){
      const targetMember = message.guild.members.cache.get(target.id)
      targetMember.kick()
      message.channel.send (`${tag} has been kicked.`)
    } else
    if {
      message.channel.send(`${tag} please specify someone to kick.`)
    }
  }  else {
    message.channel.send (
      `${tag} You do not have permission to use this command.`
    )
  };
};
client.login(config.token);
