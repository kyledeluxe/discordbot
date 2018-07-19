const botconfig = require ("./botconfig.json");
const Discord = require ("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
const db = require('quick.db');
bot.commands = new Discord.Collection();

fs.readdir("./commands", (err, file) => {

  if(err) console.log(err);

  let jsfile = file.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
  }

  jsfile.forEach((f, i) =>{
      let props = require(`./commands/${f}`);
      console.log(`${f} loaded!`);
      bot.commands.set(props.help.name, props);
  });

})

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`)

  bot.user.setActivity("Grand Luxe Discord", {type:"WATCHING"});

});


bot.on("guildMemberAdd", async member => {
  console.log(`${member.id} joined the server`);

  let welcomechannel = member.guild.channels.find(`name`, "welcome-list");
  welcomechannel.send(`${member} -- Hey, welcome to Grand Luxe Hotels! If you would like to get your role go to <#429483682974400512> and do !verify to get your role. Enjoy your stay at Grand Luxe Hotels!`);

});


bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

let prefix = botconfig.prefix;
if(!message.content.startsWith(prefix)) return;
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);

let commandfile = bot.commands.get(cmd.slice(prefix.length));
if(commandfile) commandfile.run(bot,message,args);


});

bot.login(process.env.TOKEN);
