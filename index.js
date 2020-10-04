const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
    if (msg.content === 'Hello This Is a Test, how are you doing today Bidoof Bot') {
        ///ranodm number bettween 1 & 10
        var random = Math.floor(Math.random() * 10)+1;
        
        if(random == 1){
            msg.reply(' Good Evening');
        }
        else if(random == 2){
            msg.reply(' Good Morning');
        }
        else if(random == 3){
            msg.reply(' Thanks for asking');
        }
        else if(random == 4){
            msg.reply(' Good');
        }
        else if(random == 5){
            msg.reply(' How are you?');
        }
        else if(random == 6){
            msg.reply(' Ok');
        }
        else if(random == 7){
            msg.reply(' I feel like coding today');
        }
        else if(random == 8){
            msg.reply(' Not sure');
        }
        else if(random == 9){
            msg.reply(' Ask your other bot');
        }
        else if(random == 10){
            msg.reply(' Thank you for your comment, I am doing great thanks for asking');
        }
        
        
    }   
 });

client.login('Your Token');
//nodemon --inspect index.js
//logged in as <bot-name>