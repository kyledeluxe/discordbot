const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if(!message.member.roles.some(r=>["SHR"].includes(r.name)) )
  return message.reply("Sorry, you don't have permission to use this!");
  const deleteCount = parseInt(args[0], 10);
  if(!deleteCount || deleteCount < 2 || deleteCount > 100)
    return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
  const fetched = await message.channel.fetchMessages({limit: deleteCount});
  message.channel.bulkDelete(fetched)
    .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    let bicon = bot.user.displayAvatarURL;
    let purgeembed = new Discord.RichEmbed()
    .setThumbnail(bicon)
    .setColor("#c68c17")
    .addField("Command", message.content)
    .addField("Issued by:", message.author)
    .addField("Channel:", message.channel)
    .setTimestamp()
      return message.guild.channels.find(`name`, "logs").send(purgeembed);
}

module.exports.help = {
  name: "purge"

}
