const Discord = require("discord.js");

module.exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
if (args.length >= 1) return message.reply({embed: {
            color: 3447003,
            title: "You must provide a text to ask a question!"
        }})
message.channel.send({embed: {
            color: 3447003,
            title: ":ballot_box: " +`${message.author.username}` + " A vote has begun! React with the emojis to vote! :ballot_box:"
        }})

const pollTopic = await message.channel.send({embed: {
            color: 3447003,
            title: "Poll: " + `message.content.slice(2)`
        }})
await pollTopic.react(`✅`);
await pollTopic.react(`⛔`);
// Create a reaction collector
const filter = (reaction) => reaction.emoji.name === '✅';
const collector = pollTopic.createReactionCollector(filter, { time: 15000 });
collector.on('end', collected => message.channel.send({embed: {
            color: 3447003,
            title: "Collected " + `${collected.size}` + "positive votes! :tada:`"
        }}));
}

module.exports.help = {
    name: "poll",
    description: "Create a poll",
    usage: "poll (arguments)",
    type: "Fun"  
}