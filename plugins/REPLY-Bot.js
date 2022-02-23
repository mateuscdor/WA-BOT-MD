
let moment = require('moment-timezone')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let name = conn.getName(m.sender)
let handler = async (m, {conn}) => {
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let anu = `${ucapan()}
Halo ${name}👋
Ada Yang Bisa Bot Bantu?
Touch *MENU*

Runtime: ${uptime}`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: anu,
           locationMessage: { 
           jpegThumbnail: gambar() }, 
           hydratedFooterText: `${date}`,
           hydratedButtons: [{
             urlButton: {
               displayText: '👤 Private Chat',
               url: 'https://wa.me/6285745434522'
             }

           },
             {
             urlButton: {
               displayText: '👥 Group Chat',
               url: 'https://wa.me/6285745434522'
             }

           },
               {
             quickReplyButton: {
               displayText: '👤 PROFILE',
               id: '.profile',
             }

           },
               {
             quickReplyButton: {
               displayText: '⚡ SPEED',
               id: '.donasi',
             }

           },
           {
             quickReplyButton: {
               displayText: '🌏 MENU',
               id: '.menulist',
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
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
module.exports = handler

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  if (time >= 5) {
    res = "Selamat pagi🌄"
  }
  if (time > 9) {
    res = "Selamat siang🏞️"
  }
  if (time >= 15) {
    res = "Selamat sore🌇"
  }
  if (time >= 19) {
    res = "Selamat malam🌃"
  }
  return res
}
function gambar() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  if (time >= 5) {
    res = fs.readFileSync('./src/welcome.png')
  }
  if (time > 9) {
    res = fs.readFileSync('./src/welcome.png')
  }
  if (time >= 15) {
    res = fs.readFileSync('./src/welcome.png')
  }
  if (time >= 19) {
    res = fs.readFileSync('./src/welcome.png')
  }
  return res
}
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
