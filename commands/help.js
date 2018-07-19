const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let help = new Discord.RichEmbed()
  .setTitle("Bot Commands")
  .setColor("#c68c17")
  .addField("For Everyone", `**+help** = Displays a list of the commands\n**+new** = Opens a support ticket viewable by users with the Support Role\n**+suggest** = Allows users to suggest features, where it is placed into a channel for everyone to rate\n**+serverinfo** = Information on the GLH Discord\n**+8ball QUESTION** = Rolls an 8 ball for the question asked.\n**+weather -location-** Dispalys the current weather for the location specified.`)
  .addField("For Users With Demotion/Promotion permission", `**+pd** = Promote/Demote a user`)
  .addField("For SHR", `**+ban** = Bans the user tagged with the reason\n**+kick** = Kicks the user tagged from the server\n**+purge** = Deletes specified number of messages under 14 days old\n**+warn** = Warns the user for the reason specified, then logs it.\n**+warnlevel** = Shows the warnings for user specified\n**+clearwarnings** = Clears the warnings for the user specified.`)

  return message.channel.send(help);

}


module.exports.help = {
  name: "help"

}
