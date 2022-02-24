let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args[0]) throw 'Masukkan text\nContoh: .logokaneki shimmer'
  m.reply('*Wait ngab*\nProses...')
  let res = `https://caliphapi.com/api/kaneki?text=${response}&apikey=fwA4UVbh`
  conn.sendFile(m.chat, res, 'kaneki.jpg', `Sudah jadi`, m, false)
}
handler.help = ['logokaneki'].map(v => v + ' <teks>')
handler.tags = ['maker']
handler.command = /^(logokaneki)$/i
handler.limit = true
handler.register = false

module.exports = handler
