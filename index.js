require('dotenv').config();

const { Client, Intents } = require('discord.js');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
