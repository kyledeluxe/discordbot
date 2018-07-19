const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let totalSeconds = (bot.uptime / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;
      let botembed = new Discord.RichEmbed()
      .setTitle("__**Bot Information**__")
      .setColor("#c68c17")
      .setThumbnail(bicon)
      .addField("Ping", bot.ping, true)
      .addField("Memory Usage [RAM]", process.memoryUsage().heapUsed / 1024 / 1024, true)
      .addField("Bot Name", bot.user.username, true)
      .addField("Created By", "KyleDeluxe For GLH", true)
      .addField("Bot Uptime", uptime)


      return message.channel.send(botembed);
    }

module.exports.help = {
  name: "botinfo"
}
