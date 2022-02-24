let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix }) => {
  if (!text) throw `Contoh Penggunaan\n${usedPrefix}spamsms 628xxxxxxxx`
  let nomor = text.replace(/[^0-9]/gi, '').slice(2)
  if (!nomor.startsWith('8')) throw `Contoh Penggunaan\n${usedPrefix}spamcall 628xxxxxxxx`
  m.reply('✨Tunggu permintaan anda sedang diproses...')
  let anu = await fetch(`https://id.jagreward.com/member/verify-mobile/${nomor}`).then(a => a.json())
  let spcall = `*Nomor bot* : _${anu.phone_prefix}_\n\n💌Bot berhasil sms anda!`
  conn.reply(m.chat, `${spcall}`.trim(), m)
}
handler.help = ['spamsms <nomor>']
handler.tags = ['tools']
handler.command = /^(spamsms)$/i
handler.limit = true

module.exports = handler
