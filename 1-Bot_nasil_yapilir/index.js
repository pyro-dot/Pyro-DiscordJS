const Discord = require("discord.js")
const client = new Discord.Client();
const prefix = "."


client.on("ready", () => {
    console.log("ready")
})

client.on("message", (message) => {
    if (message.content === `${prefix}ping`) {
        message.channel.send("pong")
    }
})


client.login("TOKEN")