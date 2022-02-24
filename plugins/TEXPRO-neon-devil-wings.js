let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Teks'
  m.reply('✨Please Wait...')
  let res = `http://hadi-api.herokuapp.com/api/textpro/neon-devil-wings?teks=${response[0]}`
  conn.sendFile(m.chat, res, 'underwatee.jpg', `✅Sudah jadi...`, m, false)
}
handler.help = ['devilwings'].map(v => v + ' <text>')
handler.tags = ['textpro']
handler.command = /^(devilwings)$/i

module.exports = handler
