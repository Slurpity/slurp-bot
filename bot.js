const Discord = require('discord.js');
const bot = new Discord.Client(); 

const token = 'Njg1MzAzMjUxMDcxMjcwOTI3.XmHclQ.ykjIGhHdSxZJSoCKIoFg7m3OeVw';

const PREFIX = ';';

var version = '0.420.69'

bot.on('ready', () =>{
    console.log('Slurp Bot is now online!');
})

bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'website':
            message.channel.send('https://www.coolmathgames.com/')
            break;
        case 'info':
            message.channel.send('Version ' + version);
            break;
        case 'purge':
            if(!message.member.hasPermission("PRIORITY_SPEAKER", explicit = true)) return message.channel.send('You do not have permission to execute this command!')
            if(!args[1]) return message.channel.send('Please send an amount of messages to delete!')
            message.channel.bulkDelete(args[1]);
            break;
        

    }
})

bot.login(process.env.BOT_TOKEN);
