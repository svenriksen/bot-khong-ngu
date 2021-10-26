require('dotenv').config();

const ytdl = require('ytdl-core-discord');
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$';




client.login(process.env.TOKEN);


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
    
    if (msg.content.startsWith(prefix))
    {
        const [command, ...args] = msg.content.trim().substring(prefix.length).split(/\s+/);

        if (command === "nguvl")
        {
//            msg.reply('pong');
            msg.channel.send('Long ngu vl');


        }
        else if (command === "play")
        {
            // YD.on("progress", function(progress) {
            //     console.log(JSON.stringify(progress));
            // });
            
            // msg.member.voiceChannel.join().then(connection => {
            //         console.log('joined channel');
                
            //         connection.playStream(ytdl(url)).on('end', () => 
            //         {
            //             console.log('left channel'); // this occurred when song end
            //             connection.channel.leave();
            //         }).catch(console.error);
            //     }).catch(console.error);
            
            const {voice} = msg.member
            if (!voice.channelID)
            {
                msg.reply('mày vô voice channel hộ bố mày cái')
            }
            else
            {
                console.log(args[0])
                voice.channel.join().then(async (connection) => {
                    connection.play(await ytdl(args[0]), { type: 'opus' })
                })
            }
            // async function play(connection, url) {
            //     connection.play(await ytdl(url), { type: 'opus' });
            // }
        }
    }


});