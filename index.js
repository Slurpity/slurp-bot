const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'Njg1MzAzMjUxMDcxMjcwOTI3.XmMv6w.SLsfca4hx7NtmHjof0NXOxcenDA'
var version = '0.420.69'
const PREFIX = ';';


bot.on('ready', () => {
    console.log('Slurp Bot is now online!');
})

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'website':
            if (!message.content.startsWith('.')) return;
            message.channel.send('https://www.coolmathgames.com/')
            break;

        case 'info':
            if (!message.content.startsWith('.')) return;
            message.channel.send('Version ' + version);
            break;

        case 'prefix':
            if (!message.content.startsWith('.')) return;
            message.channel.send(PREFIX)
            break;

        case 'purge':
            if (!message.content.startsWith('.')) return;
            if (!message.member.hasPermission("MANAGE_MESSAGES", explicit = true)) return message.channel.send('You do not have permission to execute this command!')
            if (!args[1]) return message.channel.send('Please send an amount of messages to delete!')
            message.channel.bulkDelete(args[1]);
            message.channel.send(args[1] + ' messages have been deleted!')
            break;

        case 'kick':
            if (!message.content.startsWith('.')) return;
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
            if (!message.content.startsWith('.')) return;
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
    }
})

bot.login(token);
