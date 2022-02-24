let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/e545d83b4dcc4122199d0.png', m, { packname: "sticker by", author: "Yuu Otosaka" })
}

handler.customPrefix = /^(intro)$/i
handler.command = new RegExp

module.exports = handler
