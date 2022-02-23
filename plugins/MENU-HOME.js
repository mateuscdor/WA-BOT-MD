let moment = require('moment-timezone')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
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
Halo senpai👋
Ada Yang Bisa Bot Bantu?
Touch *MENU*
Runtime: ${uptime}
┏ ┅ ━━━━━━━━━━━━━━━ ┅ ━
┃1 Grub / 7 Hari
┃Rp. 5,000 Pulsa, Dana
┃ 
┃Premium / 7 Hari
┃Rp. 10,000 Pulsa, Dana
┃ 
┃1 Grub / 30 Hari
┃Rp. 20,000 Pulsa, Dana
┃
┃Premium / 30 Hari
┃Rp. 30,000 Pulsa, Dana
┃
┃Via Dana/Pulsa : 0895426157070
┗ ┅ ━━━━━━━━━━━━━━━ ┅ ━
`
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
               id: '.ping',
             }

           },
           {
             quickReplyButton: {
               displayText: '🌏 MENU',
               id: '.menu',
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
handler.help = ['home']
handler.tags = ['main']
handler.command = /^(home)$/i

handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false


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
