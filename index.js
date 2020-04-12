const Discord = require('discord.js');
const bot = new Discord.Client();
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

        case 'ip':
            var embed = new Discord.MessageEmbed()
            .setTitle('DragonAgePvP')
            .addField('Server IP', 'ip goes here')
            .addField('Versions', '1.8 - 1.12.2')
            .setColor(0x77DDDD)
            message.channel.send(embed);
            break;
            
        case 'links':
            var embed = new Discord.MessageEmbed()
            .setTitle('Website')
            .addField('Forums', 'link to forums')
            .addField('Store', 'Link to store')
            .setColor(0x77DDDD)
            message.channel.send(embed);
            break;
        
           
        case 'help':
            var embed = new Discord.MessageEmbed()
            .setTitle('Commands')
            .addField(';Help', 'Shows you this menu')
            .addField(';IP', 'Shows the server IP, Version, and players online!')
            .addField(';Links', 'Links you to our store and forums!')
            .addField(';Purge', 'Deletes "x" amount of messages. Format: ;purge (messages to be deleted)')
            .setColor(0x77DDDD)
            message.channel.send(embed);
            break;
    }
})

bot.login(process.env.BOT_TOKEN);
