const express = require('express')                                //
const app = express();                                            //
const port = 3000                                                 //
app.get ('/',(req, res)=> res.send('ciao'))                       //
                                                                  //
app.listen(port, () =>                                            //
console.log('Il tuo bot è ascoltato da http://localhost:${port}'))//
////////////////////////////////////////////////////////////////////

require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();

//TOKEN
client.login(process.env.BOTTOKEN);
const serverID = process.env.SERVERID;

// modalità attiva
client.on ( "ready" , readyDiscord )
function readyDiscord () {
console . log ( "💖" );
}

const replies = [
"tu non puoi passare",
];

client.on("message", gotMessage);

function gotMessage(msg) {
if (msg.channel.id == "789805460638531594" && msg.content === "") {
// msg.reply('MESSAGGIO');
const index = Math.floor(Math.random() * replies.length);
msg.channel.send(replies[index]);
}
}

client.on("message", getMessage);

function getMessage(msg){
if (msg.channel.id == "789805460638531594" && msg.content === ""){
msg.send('');
}
}
