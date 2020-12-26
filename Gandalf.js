require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require("node-fetch");


//TOKEN
client.login(process.env.GUARDIANOTOKEN);
const serverID = process.env.SERVERID;



// intervallo
let count = 0;
setInterval(
  () =>
    require("node-fetch")(process.env.URL).then(() =>
      console.log(`[${++count}] here i pinged ${process.env.URL}`)
    ),
  300000
);


//modalità attiva
client.on ('ready', readyDiscord);
function readyDiscord() {
    console.log('💖');
  }
  
  const replies = [
    'tu non puoi passare',
    'chi sa fare sa capire ',
    'tu puoi passare'
  ]
  
  client.on('message', gotMessage);
  
  function gotMessage(msg) {
    if (msg.channel.id == '789805460638531594' && msg.content === '!Gandalf') {
      // msg.reply('🚂🌈💖');
      const index = Math.floor(Math.random() * replies.length);
      msg.channel.send(replies[index]);
    }
  }