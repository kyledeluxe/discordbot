const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let suggestionContent = args.join(" ")
  let suggestembed = new Discord.RichEmbed()
  .setTitle(`Suggestion Made By ${message.author.nickname || message.author.username}`)
  .setDescription(suggestionContent)
  .setTimestamp()
    return bot.channels.get("447904299234885642").send(suggestembed).then(embedMessage => {embedMessage.react("👍")
    .then(suggestembed => {embedMessage.react("👎");
  })

})

}

module.exports.help = {
  name: "suggest"

}
