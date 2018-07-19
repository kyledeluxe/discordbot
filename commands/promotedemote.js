const Discord = require("discord.js");
  const index = require("../index.js");

  module.exports.run = async(bot, message, args) => {

  // +pd [Username] [Promote/Demote] [From Rank] [To Rank] [Reason]


  let error = new Discord.RichEmbed()
    .setTitle("Something isn't quite right:")
    .setDescription("**Try this format: [Username] [Promotion/Demotion] [From Rank ID] [To Rank ID] [Reason]**")
    .addField("Rank IDs:", `**HG** = Hotel Guest\n**2** = Valuable Guest\n**3** = Trainee\n**4** = Receptionist\n**5** = Housekeeping\n**6** = Security\n**SR** = Senior Receptionist\n**7** = Service Coordinator\n**8** = Management Team\n**9** = Supervising Team\n**10** = Shift Manager\n**11** = Chief Management\n**12** = Human Resources\n**13** = Board Of Directors\n**14** = Chairman Advisor\n**15** = Chief Chairman\n**F** = Founder`);


  if(!message.member.roles.some(r=>["Promotion/Demotion permisson"].includes(r.name)) )
      return message.reply("Sorry, you don't have permission to do this!");

  if (args.length < 5){
    return message.channel.send(error);
  }

  let username  = args[0];
  let action = args[1];
  let from = args[2];
  let to = args[3];
  let reason = "";
  let color = "";

  for (var i = 0; i < args.length - 4; i++){
    reason = reason + args[i + 4] + " ";
  }

  let actionLower = action.toLowerCase();

  if (actionLower != "promotion" && actionLower != "demotion"){
    return message.channel.send(error);
  }

  let boolean = (actionLower === ("promotion"));

  if (boolean){
    action = "Promotion";
    color = "#3cea51";
  } else {
    action = "Demotion";
    color = "#ff0000";
  }

  let embed = new Discord.RichEmbed()
  .setTitle(action)
  .setColor(color)
  // .setThumbnail()
  .addField("From Rank", from, true)
  .addField("To Rank", to, true)
  .addField("Username", username,true)
  .addField("Ranker", `<@${message.author.id}>`)
  .addField("Reason", reason);
  message.channel.send("I have logged that sucessfully 👍");

  return bot.channels.get("429717611731877888").send(embed);
  }

  module.exports.help = {
    name: "pd"
  }
