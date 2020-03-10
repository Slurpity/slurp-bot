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
        case 'website':
            message.channel.send('https://www.coolmathgames.com/')
            break;

        case 'info':
            message.channel.send('Version ' + version);
            break;

        case 'prefix':
            message.channel.send(PREFIX)
            break;

        case 'purge':
            if (!message.member.hasPermission("MANAGE_MESSAGES", explicit = true)) return message.channel.send('You do not have permission to execute this command!')
            if (!args[1]) return message.channel.send('Please send an amount of messages to delete!')
            message.channel.bulkDelete(args[1]);
            message.channel.send(args[1] + ' messages have been deleted!')
            break;

        case 'kick':
            if (!message.member.hasPermission("KICK_MEMBERS", explicit = true)) return message.channel.send('You do not have permission to execute this command!')
            var user = message.mentions.users.first();
            if (user) {
                var member = message.guild.member(user);

                if (member) {
                    member.kick('You have been kicked from this server!').then(() => {
                        message.reply(`Successfully kicked ${user.tag}`);
                    }).catch(err => {
                        message.reply('I was unable to kick the member :(');
                        console.log(err);
                    });
                } else {
                    message.reply('That person is not in the server!')
                }
            } else {
                message.channel.send('You need to specify a person!');
            }
            break;

        case 'ban':
            if (!message.member.hasPermission("BAN_MEMBERS", explicit = true)) return message.channel.send('You do not have permission to execute this command!')
            var user = message.mentions.users.first();
            if (user) {
                var member = message.guild.member(user);

                if (member) {
                   member.ban({reason: 'You have been banned from this Discord server!'}).then(() =>{
                        message.channel.send(`Successfully banned ${user.tag}`)
                   }) 
                } else {
                    message.reply('That person is not in the server!')
                }
            } else {
                message.channel.send('You need to specify a person!');
            }
            break;
        
        case 'creator':
            message.channel.send('Hi, I am Slurpity. I made Slurp-Bot because I was bored lol. Add me! Slurpity#4020');
            break;
        
        case 'killmenow':
            message.channel.send('``The US national suicide prevention lifeline is`` **1-800-273-8255**')
            break;

        case 'ching':
            if (!message.member.hasPermission("ADMINISTRATOR", explicit = true)) return message.channel.send('You do not have permission to execute this command!')
            message.channel.send('Chong!');
            break;

        case 'merkthebeaner':
            if (!message.member.hasPermission("ADMINISTRATOR", explicit = true)) return message.channel.send('You do not have permission to execute this command!')
            message.channel.send('Noah the beaner has been merked!')
            break;
        
        case 'darrinthesexy':
            if (!message.member.hasPermission("ADMINISTRATOR", explicit = true)) return message.channel.send('You do not have permission to execute this command!')
            message.channel.send('**Darrin is the most sexy man alive - hasn**')
            break;

        case 'socials':
            var embed = new Discord.MessageEmbed()
            .setTitle('Team Cyx Socials')
            .addField('Youtube', 'https://www.youtube.com/channel/UCpkAPRxke-HCYDafJEkc2Aw')
            .addField('Instagram', 'https://www.instagram.com/stories/officialcyx/')
            .setColor(0x77DDDD)
            message.channel.send(embed);
            break;
    }
})

bot.login(process.env.BOT_TOKEN);
