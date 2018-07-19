const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

var prefix = "+";
var token = " ";

if (message.content.toLowerCase().startsWith(prefix + `new`)) {
  const reason = message.content.split (" ").slice(1).join(" ");
if (!message.guild.roles.exists("name", "Support")) return message.channel.send(`This server doesn't have a Support Team Role`);
if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`You already have a ticket open.`);
message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
  let role = message.guild.roles.find("name", "Support");
  let role2 = message.guild.roles.find("name", "@everyone");
      c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      })
      c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      })
      c.overwritePermissions(message.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      })
      message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
      const embed = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Team** will be here soon to help.`)
        .setTimestamp()
        c.send ({ embed: embed });
      }).catch(console.error);
}
}

module.exports.help = {
  name: "new"
}
