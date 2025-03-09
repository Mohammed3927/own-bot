const { Client, GatewayIntentBits, Collection, REST, Routes } = require('discord.js');
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const client = new Client({
    intents: Object.keys(GatewayIntentBits).map((a) => {
      return GatewayIntentBits[a];
    }),
});

client.once('ready', () => {

    console.log('bot is ready ${client.user.tag}');
});
client.login('TOKEN')
