const Discord = require('discord.js');
const express = require('express');

var app = express()

app.set('port', (process.env.PORT || 5000));

const client = new Discord.Client();

const prefix = '!';

client.once('ready', () => {
    console.log("Link is online!");
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    const link = args[0]
    const title = args[1]


    if(command === "ping"){
        message.channel.send("pong!")
    } else if (command === "link"){
        message.channel.send({embed: {
            color: 3447003,
            title: title,
            url: link
        }})
    } else if (command === "wie"){
        message.channel.send({embed: {
            color: 3447003,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
              },
            title: "Wie kann ich links kürzen?",
            fields: [{
                name: "**Clean Link**",
                value: "Wenn du einen Link embedden willst, kannst du das easy mit Clean Link machen!"
            },{
                name: "Wie?",
                value: "Gib einfach *!link (url) (title)* ohne Klammern ein und der Link wird als dein selbstgewählter Titel dargestellt!"
            }],
            timestamp: new Date(),
            footer: {
            icon_url: client.user.avatarURL,
            text: "© poorlydisguised"
            }
        }})
    }

});

client.login(process.env.token);
