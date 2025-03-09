const { Client, GatewayIntentBits, Collection, REST, Routes } = require('discord.js');
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const client = new Client({
    intents: Object.keys(GatewayIntentBits).map((a) => {
      return GatewayIntentBits[a];
    }),
});

const express = require("express");
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    const imagePath = path.join(__dirname, 'index.html');
    res.sendFile(imagePath);
});
app.listen(port, () => {
    console.log(`🔗 Listening to MohammedQht : http://localhost:${port}`);
});
client.login(process.env.TOKEN || config.token);
module.exports = client;

client.once('ready', () => {

    console.log('bot is ready ${client.user.tag}');
});
client.login('TOKEN')
