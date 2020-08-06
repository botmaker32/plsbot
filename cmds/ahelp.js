const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let a = message.author
    let embed = new Discord.RichEmbed()
    .setTitle("Команды:")
    .setColor('#FF0000')
    .addField("/jopka","автоматический краш")
    .addField("/invite","получить ссылку на приглашение бота")
    .addField("/help","вызвать меню помощи")
    .addField("Серверов", `${bot.guilds.size.toLocaleString()}`, true)
    .addField("Подписаться на новости:","https://discord.gg/8VU4kVJ")

    bot.send(embed);
    
};
module.exports.help = {
    name: "help"
};