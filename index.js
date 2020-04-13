const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = '.';

bot.on('ready', () => {
    console.log('Slurp Bot is now online!');
})

bot.on('message', message => {

    let args = message.content.toLowerCase().substring(PREFIX.length).split(" ");
    if (!message.content.startsWith('.')) return;

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
            
        case 'store':
            var embed = new Discord.MessageEmbed()
            .setTitle('DragonAgePvP Store')
            .addField('Store', 'Link to store goes here')
            .setColor(0x77DDDD)
            message.channel.send(embed);
            break;
           
        case 'help':
            var embed = new Discord.MessageEmbed()
            .setTitle('Commands')
            .addField('.Help', 'Shows you this menu')
            .addField('.IP', 'Shows the server IP and the version')
            .addField('.Store', 'Links you to our store!')
            .addField('.Purge', 'Deletes "x" amount of messages. Format: .purge (messages to be deleted)')
            .addField('.Apply', 'Links you to the forums apply section, and states you can apply in the Discord as well')
            .addField('.Report', 'Links you to the forums where you can report bugs/players')
            .addField('.Support', 'Directs you to the channel to get support from the staff team')
            .setColor(0x77DDDD)
            message.channel.send(embed);
            break;
            
        case 'forums':
            var embed = new Discord.MessageEmbed()
            .setTitle('DragonAgePvP Forums')
            .addField('Forums', 'link to forums')
            .setColor(0x77DDDD)
            message.channel.send(embed);
            break;
            
        case 'apply':
            var embed = new Discord.MessageEmbed()
            .setTitle('Apply Here!')
            .addField('Application Link', 'link to forums')
            .addField('Alternatively,', 'You may also apply in <#699027600936271908>')
            .setColor(0x77DDDD)
            message.channel.send(embed);
            break;            
            
        case 'report':
            var embed = new Discord.MessageEmbed()
            .setTitle('Report players and bugs on our Forums!')
            .addField('Link to report players/bugs', 'link to forums to report')
            .setColor(0x77DDDD)
            message.channel.send(embed);
            break;
            
        case 'support':
            var embed = new Discord.MessageEmbed()
            .setTitle('Support')
            .addField('Where to find support?', 'Head on over to <#698392385071218795> to create a support ticket!')
            .setColor(0x77DDDD)
            message.channel.send(embed);
            break;            
            
    }
})

bot.login(process.env.BOT_TOKEN);
