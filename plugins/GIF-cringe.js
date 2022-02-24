let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/cringe')
  if (!res.ok) throw 'Error Website sedang down'
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'istri gweh', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['cringe']
handler.tags = ['image']
handler.command = /^(cringe)$/i

handler.limit = true

module.exports = handler
