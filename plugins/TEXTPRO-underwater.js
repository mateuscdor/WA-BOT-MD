let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Teks'
  m.reply('✨Please Wait...')
  let res = `http://hadi-api.herokuapp.com/api/textpro/3d-underwater-text?teks=${response[0]}`
  conn.sendFile(m.chat, res, 'underwatee.jpg', `Sudah jadi`, m, false)
}
handler.help = ['underwater'].map(v => v + ' <text>')
handler.tags = ['textpro']
handler.command = /^(underwater)$/i

module.exports = handler
