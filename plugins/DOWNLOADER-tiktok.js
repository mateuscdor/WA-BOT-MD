let moment = require('moment-timezone')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, {text}) => {
if (!text) return conn.reply(m.chat, 'Harap masukkan link\n\nContoh: .tiktok https://tiktok.com/xxxxxx', m)

    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    let more = String.fromCharCode(8206)
    let readMore = more.repeat(4001)
let anu = `*γ Tiktok Downloader γ*

β : Tanpa Watermark
β : Pakai Watermark

SILAHKAN PILIH SENDIRI`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: anu,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/tiktok.png')}, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'πinstagramπ',
               url: instagram
               }
               
             },
             {
             quickReplyButton: {
               displayText: 'β WATERMARK β',
               id: `.tiktoknowm ${text}`,
             }
           },
           {
             quickReplyButton: {
               displayText: 'β WATERMARK β',
               id: `.tiktokwm ${text}`,
             }
           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}


module.exports = handler
