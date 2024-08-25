module.exports = {
 config: {
	 name: "prefix",
	 version: "1.0",
	 author: "𝐜𝐢𝐝 𝐤𝐚𝐠𝐞𝐧𝐨",// don't change this credit
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "system",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `☣𝐏𝐑𝐄𝐅𝐈𝐗×͜×𝐒𝐇𝐀𝐃𝐎𝐖☣:↠%1↞\n╔≕≔≕≔≕≔≕≔≕≔≕≔≕≔≕≔╗\n☛𝐀𝐓𝐎𝐌𝐈𝐂۝𝐒𝐘𝐒𝐓𝐄𝐌𝐄⚑:⇨%2⇦\n╚≕≔≕≔≕≔≕≔≕≔≕≔≕≔≕≔≕≔╝\n☣𝑀𝑌☣ 𝐶𝑅𝐸𝐴𝑇𝑂𝑅☣\n━━━━━━━━━━━━━━━━\๖ۣ•҉✞𝐂𝐈𝐃×͜×𝐊𝐀𝐆𝐄𝐍𝐎✞๖ۣ•҉\n━━━━━━━━━━━━━━━━\n👷✨♫𝗧𝗮𝗽𝗲 %1𝗵𝗲𝗹𝗽 𝗽𝗼𝘂𝗿 𝗮𝘃𝗼𝗶𝗿 𝗹𝗮 𝗹𝗶𝘀𝘁𝗲 𝗱𝗲 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀✨👷`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/WDjk7VW.mp4")
 });
 }
 }
}
