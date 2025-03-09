const { client, GatewayIntentBits } = require('discord.js')

const client = new client({

    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.once('ready', () => {

    console.log('bot is ready ${client.user.tag}');
});
client.login('TOKEN')
