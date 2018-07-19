const Discord = require("discord.js");
const fs = require("fs");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {


if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't do that.");
let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
if(!wUser) return message.reply("Couldn't find that user.");
let warnlevel = warns[wUser.id].warns;
let warnrole1 = message.guild.roles.find(`name`, "Warning 1");
let warnrole2 = message.guild.roles.find(`name`, "Warning 2");
let warnrole3 = message.guild.roles.find(`name`, "Warning 3");


if(warns[wUser.id]) warns[wUser.id] = {
  warns: 1
};

warns[wUser.id].warns--;
wUser.removeRole(warnrole1.id);
message.reply(`<@${wUser.id}>'s warnings have now been reset`);


fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
  if (err) console.log(err)
});

if(warns[wUser.id]) warns[wUser.id] = {
  warns: 2
};

warns[wUser.id].warns--;
warns[wUser.id].warns--;
wUser.removeRole(warnrole2.id);
wUser.removeRole(warnrole1.id);
message.reply(`<@${wUser.id}>'s warnings have now been reset`);

fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
  if (err) console.log(err)
});

if(warns[wUser.id]) warns[wUser.id] = {
  warns: 3
};

warns[wUser.id].warns--;
warns[wUser.id].warns--;
warns[wUser.id].warns--;
wUser.removeRole(warnrole1.id);
wUser.removeRole(warnrole2.id);
wUser.removeRole(warnrole3.id);
message.reply(`<@${wUser.id}>'s warnings have now been reset`);


fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
  if (err) console.log(err)
});

}


module.exports.help = {
  name: "clearwarnings"

}
