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

  if(command === 'ping') {
    message.channel.send('Pong!');
  } else
  if (command === 'blah') {
    message.channel.send('Meh.');
  } else
  if(command === 'kick') {
    let member = message.mentions.members.first();
    member.kick();
  } else
  if (command === 'say'){
    let text= args.join("");
     message.delete();
     message.channel.send(text);

  }


});


client.login(config.token);
