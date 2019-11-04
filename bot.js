const Discord = require("discord.js");
const client = new Discord.Client();


client.on("guildMemberAdd", member => {
const qq = member.guild.channels.get("577128686483144705");//ايدي الشات
if(!qq) return;
qq.send(" Weelllcome ");
});


client.login(process.env.BOT_TOKEN);
