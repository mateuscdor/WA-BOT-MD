const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let anu = `────❑ 「 BALANCE 」 ❑────
⎔ Name: ${user.name}
⎔ Limit: ${user.limit}
⎔ Money: ${user.money}
⎔ Exp: ${user.exp}
⎔ Level: ${user.level}
⎔ Role: ${user.role}
`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: anu,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./src/welcome.png') }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '📍instagram📍',
               url: instagram
             }

           },
               {
             quickReplyButton: {
               displayText: '⎔ BACK TO MENU',
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
handler.help = ['dompet', 'dompet @user', 'profile']
handler.tags = ['xp']
handler.command = /^(my|dompet|profile)$/i

module.exports = handler
