let axios = require('axios')
const fetch = require('node-fetch')
let limit = 1024354
const { servers, yta } = require('../lib/y2mate')
let handler = async (m, { conn, args, isPrems, isOwner }) => {
  if (!args || !args[0]) throw 'Uhm... urlnya mana?'
  let chat = global.db.data.chats[m.chat]
  let server = (args[1] || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF} = await yta(args[0], servers.includes(server) ? server : servers[0])
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  let tumbnel = await await (await fetch(thumb)).buffer()
  conn.sendButtonLoc(m.chat, tumbnel, `
*TITLE :* ${title}
*FILESIZE :* ${filesizeF}
*${isLimit ? 'Pakai ': ''}LINK :* 
${await shortlink(dl_link)}
`, `Jika Audio tidak di kirim
silahkan klik link di atas untuk mendownloadnya
`.trim(), 'OK', 'OK', m)
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp3', `
*TITLE :* ${title}
*FILESIZE :* ${filesizeF}
`.trim(), m, null, {
  asDocument: chat.useDocument
})
}
handler.help = ['mp3','a'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler

async function shortlink(url){
isurl = /https?:\/\//.test(url)
return isurl ? (await require('axios').get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''}

