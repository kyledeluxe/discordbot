const Discord = require('discord.js');
const fs = require('fs');



module.exports.run = async (bot, message, args) => {
        let ball = new Discord.RichEmbed()
        .setColor('#ffbb69')
        .setTitle(args.join(' '))
        .setImage(`https://raw.githubusercontent.com/NicksWorld/DiscordEconomy/master/8ball%20images/${Math.floor(Math.random() * 8) + 1}.png`);
            return message.channel.send(ball).then(msg => {msg.delete(7000)});

  }

module.exports.help = {
  name: "8ball"
}
