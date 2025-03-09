const { Client, GatewayIntentBits, Collection, REST, Routes } = require('discord.js');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const axios = require('axios');
const { DisTube } = require('distube');
const { YtDlpPlugin } = require('@distube/yt-dlp');
const { SpotifyPlugin } = require('@distube/spotify');
const { SoundCloudPlugin } = require('@distube/soundcloud');
const { Dynamic } = require('musicard');
const config = require('./config.json');
const musicIcons = require('./UI/icons/musicicons');
const colors = require('./UI/colors/colors');
const loadLogHandlers = require('./logHandlers');
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
