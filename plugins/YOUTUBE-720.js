let xfar = require('xfarr-api')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text }) => {
    if (!text) throw 'Masukkan Link\n\nContoh: .ytv720 https://youtube.com/xxxxxx'
  let res = await xfar.Youtube(text)
m.reply('*Tunggu Sebentar...*')
conn.sendFile(m.chat,res.medias[2].url, '', `YOUTUBE DOWNLOADER
720p Quality
jika masih blur, berarti videonya.`, m)

}
handler.help = ['ytv720 <url>']
handler.tags = ['internet']
handler.command = /^ytv720$/i


module.exports = handler
