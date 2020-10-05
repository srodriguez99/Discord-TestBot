const Discord = require('discord.js');
const client = new Discord.Client();
const pref = '!';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
    if(msg.author.bot) return;
    
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
    //slice only gets the the ! for pref
    //trim removes whitespaces
    //split just splits up word
    //shift in this case removes the first character
    else{
        const tag = msg.content.slice(pref.length).trim().split(" ");
        const command = tag.shift().toLocaleLowerCase();
    
        if (command === 'kick'){
    
            const kickUser = msg.mentions.users.first();
            var uKick = msg.guild.member(kickUser);
            uKick.kick();
            msg.reply(`${kickUser.tag} was kicked fromt he server!`);
        }
        else if(command === 'ban'){
    
            const discordBan = msg.mentions.users.first();
            var uBan = msg.guild.member(banUser);
            uBan.ban();
            msg.reply(`${banUser.tag} was banned fromt he server!`);
        }
    } 

 });

client.login('Your Token');
//nodemon --inspect index.js
//logged in as <bot-name>
