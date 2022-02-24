let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Teks'
  m.reply('✨Please Wait...')
  let res = `http://hadi-api.herokuapp.com/api/textpro/futuristic-technology?teks=${response[0]}`
  conn.sendFile(m.chat, res, 'technology.jpg', `✅Sudah jadi...`, m, false)
}
handler.help = ['technology'].map(v => v + ' <text>')
handler.tags = ['textpro']
handler.command = /^(technology)$/i

module.exports = handler
