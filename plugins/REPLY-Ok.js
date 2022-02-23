let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/c4e14d96a28213f8f785a.jpg', m, { packname: "", author: "" })
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

module.exports = handler
