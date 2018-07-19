const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You do not have permission to do this");
let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
if(!wUser) return message.reply("Couldn't find that user.")
if(wUser.hasPermission("ADMINISTRATOR")) return message.reply("You can't warn them.")
let reason = args.join(" ").slice(22);

if(!warns[wUser.id]) warns[wUser.id] = {
  warns: 0
};

warns[wUser.id].warns++;

fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
  if (err) console.log(err)
})

  let warnEmbed = new Discord.RichEmbed()
  .setTitle("Member Warned")
  .addField("**Admin:**", message.author.username)
  .addField("**Warned:**", `<@${wUser.id}>` )
  .addField("**Reason**", reason)
  .addField("**Total Warns:**", warns[wUser.id].warns)

  let warnchannel = message.guild.channels.find(`name`, "bot-commands");
  if(!warnchannel) return message.reply("Couldn't find channel");

  warnchannel.send(warnEmbed);

}


module.exports.help = {
  name: "warn"

}
