exports.run =  (client, message, [mention, ...reason]) => {

  if(!message.member.hasPermission('ADMINISTRATOR'))
    return message.reply("you can't use this command.");

  if(!message.member.hasPermission('KICK_MEMBERS'))
    return message.reply("you can't use this command.");

  if (message.mentions.members.size === 0)
    return message.reply("please mention a user to kick");

  if (!message.guild.me.hasPermission("KICK_MEMBERS"))
    return message.reply("");

  const kickMember = message.mentions.members.first();
	const log = message.mentions.users.first().tag;


  kickMember.kick({reason: reason.join(" ")}).then(member => {
    message.reply(`${member.user.username} was kicked for reasons.`);


  });
};
