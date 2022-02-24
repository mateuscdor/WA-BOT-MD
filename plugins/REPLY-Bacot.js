let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/ef9c085a4018763fb0217.png', m, { packname: "sticker by", author: "Yuu Otosaka" })
}

handler.customPrefix = /^(bacot)$/i
handler.command = new RegExp

module.exports = handler
