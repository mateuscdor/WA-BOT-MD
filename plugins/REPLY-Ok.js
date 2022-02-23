let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/d7ef7ab69cd186b4abe3a.png', m, { packname: "sticker by", author: "Yuu Otosaka" })
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

module.exports = handler
