const express = require("express")
const app = express()

app.get("/", (req, res) => {

  res.send("good")

})

app.listen(3000, () => {
 console.log("Ready!")

})

//webpage for action


const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", ()=>console.log("READY"));

const jointocreate = require("./jointocreate");
jointocreate(client);


client.login(config.TOKEN);
