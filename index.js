const Discord = require('discord.js');
const bot = new Discord.Client();
var version = '0.420.69'
const PREFIX = ';';

bot.on('ready', () => {
    console.log('Slurp Bot is now online!');
})

bot.on('message', message => {

    let args = message.content.toLowerCase().substring(PREFIX.length).split(" ");
    if (!message.content.startsWith(';')) return;

    switch (args[0]) {
        case 'purge':
            if (!message.member.hasPermission("MANAGE_MESSAGES", explicit = true)) return message.channel.send('You do not have permission to execute this command!')
            if (!args[1]) return message.channel.send('Please send an amount of messages to delete!')
            message.channel.bulkDelete(args[1]);
            message.channel.send(args[1] + ' messages have been deleted!')
            break;

        case 'socials':
            var embed = new Discord.MessageEmbed()
            .setTitle('DragonAgePvP')
            .addField('Server IP', 'ip goes here')
            .addField('Versions', '1.8 - 1.12.2')
            .setColor(0x77DDDD)
            message.channel.send(embed);
            break;
        
    }
})

bot.login(process.env.BOT_TOKEN);
