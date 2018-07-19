const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  // SET THIS TO ID
      if (message.channel.id !== "456503826225299486"){
        return message.reply("You cannot issue this command in this channel")
      };

  let role = message.guild.roles.find("name", "Staff");

    message.member.addRole(role)
    return message.reply("I have given you the staff role👍!");

}

module.exports.help = {
  name: "staffrole"

}
