let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/7627909d55b01b67e2b32.gif', m, { packname: "sticker by", author: "Yuu Otosaka" })
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

module.exports = handler
