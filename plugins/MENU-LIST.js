let { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let levelling = require('../lib/levelling')
let fs = require('fs')
const util = require('util')
const os = require('os')
let path = require('path')
let { createHash} = require('crypto')
let fetch = require('node-fetch')
let { perfomance } = require('perf_hooks')
let moment = require('moment-timezone')
const defaultMenu = {
  before:`
 〔─────「 WA-BOT 」─────〕

┌─〔 Your Information 〕
├ ⎔ Name : %name
├ ⎔ Role : %role
├ ⎔ Remaining : %limitⓁ
├ ⎔ Level : %level [%exp / %maxexp]
├ ⎔ %totalexp Xp In Total
└ ⎔ %xp4levelup

┌─〔 Bot Information 〕
├ ⎔ Name : %me
├ ⎔ Runtime : *%uptime*
├ ⎔ Status : Online 24H
├ ⎔ Device : Huawei P30 Lite
├ ⎔ Prosesor : Kirin 710
├ ⎔ Memory : 8GB
├ ⎔ Storage : 128GB
├ ⎔ Speed : Very Fast
└ ⎔ Database : %rtotalreg of %totalreg

┌─〔 Date & Time 〕
├ ⎔ Server Time : %time
├ ⎔ Islamic : %dateIslamic
└ ⎔ Sever Date : %date

%readmore`.trimStart(),
  header: '┌─〔 %category 〕',
  body: '├ ⎔ %cmd %islimit %isPremium',
  footer: '└────\n',
  after: ``,
}

let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'absen', 'rpg', 'anime', 'downloader', 'game', 'fun', 'xp', 'github', 'group', 'image', 'quotes', 'admin', 'info', 'internet', 'islam', 'kerang', 'maker', 'owner', 'suara', 'premium', 'quotes', 'info', 'stalk', 'shortlink', 'sticker', 'tools']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
  'main': '*MENU UTAMA*',
  'advanced': '*ADVANCED*',
  'absen': '*MENU ABSEN*',
  'anime': '*MENU ANIME*',
  'sticker': '*MENU CONVERT*',
  'downloader': '*MENU DOWNLOADER*',
  'xp': '*MENU EXP*',
  'fun': '*MENU FUN*',
  'game': '*MENU GAME*',
  'github': '*MENU GITHUB*',
  'group': '*MENU GROUP*',
  'image': '*MENU IMAGE*',
  'info': '*MENU INFO*',
  'internet': '*INTERNET*',
  'islam' : '*MENU ISLAMI*',
  'kerang': '*MENU KERANG*',
  'maker': '*MENU MAKER*',
  'owner': '*MENU OWNER*',
  'Pengubah Suara': '*PENGUBAH SUARA*',
  'premium': '*PREMIUM MENU*',
  'quotes' : '*MENU QUOTES*',
  'rpg': '*MENU RPG*',
  'stalk': '*MENU STALK*',
  'shortlink': '*SHORT LINK',
  'tools': '*MENU TOOLS*',
  'vote': '*MENU VOTING*',
  }
  if (teks == 'absen') tags = {
    'absen': 'MENU ABSEN',
    'vote': '*MENU VOTING*',
  }
  if (teks == 'anime') tags = {
  'anime': '*MENU ANIME*',
  }
  if (teks == 'sticker') tags = {
  'sticker': '*MENU CONVERT*',
  }
  if (teks == 'downloader') tags = {
  'downloader': '*MENU DOWNLOADER*',
  }
  if (teks == 'xp') tags = {
  'xp': '*MENU EXP*',
  }
  if (teks == 'fun') tags = {
  'fun': '*MENU FUN*',
  }
  if (teks == 'game') tags = {
  'game': '*MENU GAME*',
  }
  if (teks == 'github') tags = {
  'github': '*MENU GITHUB*',
  }
  if (teks == 'group') tags = {
  'group': '*MENU GROUP*',
  }
  if (teks == 'image') tags = {
  'image': '*MENU IMAGE*',
  }
  if (teks == 'info') tags = {
  'info': '*MENU INFO*',
  }
  if (teks == 'internet') tags = {
  'internet': '*INTERNET*',
  }
  if (teks == 'islam') tags = {
  'islam' : '*MENU ISLAMI*',
  }
  if (teks == 'kerang') tags = {
  'kerang': '*MENU KERANG*',
  }
  if (teks == 'maker') tags = {
  'maker': '*MENU MAKER*',
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }
  if (teks == 'suara') tags = {
  'Pengubah Suara': '*PENGUBAH SUARA*',
  }
  if (teks == 'premium') tags = {
  'premium': '*PREMIUM MENU*',
  }
  if (teks == 'quotes') tags = {
  'quotes' : '*MENU QUOTES*',
  }
  if (teks == 'rpg') tags = {
  'rpg': '*MENU RPG*',
  }
  if (teks == 'stalk') tags = {
  'stalk': '*MENU STALK*',
  }
  if (teks == 'shortlink') tags = {
  'shortlink': '*SHORT LINK',
  }
  if (teks == 'tools') tags = {
  'tools': '*MENU TOOLS*',
  }

  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let user = global.db.data.users[who]
    let { exp, limit, level, money, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
  })
    if (teks == '404') {
        const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        listMessage: {
            title: `${ucapan()}
👋${name}
〔─────「 WA-BOT 」─────〕

┌─〔 📍 RULES WA-BOT 📍 〕
├ ⎔ Dilarang Spam
├ ⎔ Beri Jeda 5 Detik
├ ⎔ Dilarang Diperjual belikan
├ ⎔ Dilarang Share Nomer Bot
├ ⎔ Kecuali Izin Owner√
└ ⎔ Selainnya Tanya Owner

┌─〔 💫 INFORMATION 💫 〕
├ Ⓣ : Text
├ ⓔ : Efek
├ Ⓛ : Limit
├ Ⓟ : Premium
└ ⓜ : Maintance

┌─〔 🔥 SUPORT US 🔥 〕
├ Website : http://cmd.to/Ir24q
└ Bot Group : http://cmd.to/IWPB1


`.trim(),
            description: "⎔ Bot Active 24H⎋ Nonstop",
            buttonText: 'TOUCH ME SENPAI',
            listType: 1,
            footerText: "",
            mtype: 'listMessage',
            sections: [
              {
                "rows": [{
                  "title": `😎OWNER BOT😎`,
                  "description": "",
                  "rowId": `.owner`
                },{
                  "title": "🤖INFORMASI🤖",
                  "description": "",
                  "rowId": `${_p}? info`
                }],
                "title": "✨Informasi Bot✨"
              }, {
                "rows": [{
                  "title": `👾SEMUA PERINTAH👾`,
                  "description": "",
                  "rowId": '${_p}? all'
                  }, {
                  "title": "🎉ABSEN & VOTING🎉",
                  "description": "",
                  "rowId": `${_p}? absen`
                }, {
                  "title": "🌟ANIME MENU🌟",
                  "description": "",
                  "rowId": `${_p}? anime`
                }, {
                  "title": "💥STICKER & CONVERTER💥",
                  "description": "",
                  "rowId": `${_p}? sticker`
                }, {
                  "title": "📁DOWNLOADER MENU📁",
                  "description": "",
                  "rowId": `${_p}? downloader`
                }, {
                  "title": "🧬EXP & LIMIT🧬",
                  "description": "",
                  "rowId": `${_p}? xp`
                }, {
                  "title": "🥳FUN MENU🥳",
                  "description": "",
                  "rowId": `${_p}? fun`
                }, {
                  "title": "🎮GAME MENU🎮",
                  "description": "",
                  "rowId": `${_p}? game`
                }, {
                  "title": "👻GITHUB MENU👻",
                  "description": "",
                  "rowId": `${_p}? github`
                }, {
                  "title": "👥GROUP MENU👥",
                  "description": "",
                  "rowId": `${_p}? group`
                }, {
                  "title": "🌌IMAGE MENU🌌",
                  "description": "",
                  "rowId": `${_p}? image`
                }, {
                  "title": "🌏INTERNET MENU🌏",
                  "description": "",
                  "rowId": `${_p}? internet`
                }, {
                  "title": "🌠ISLAM MENU🌠",
                  "description": "",
                  "rowId": `${_p}? islam`
                }, {
                  "title": "🐚KERANG AJAIB🐚",
                  "description": "",
                  "rowId": `${_p}? kerang`
                }, {
                  "title": "🛠️MAKER MENU🛠️",
                  "description": "",
                  "rowId": `${_p}? maker`
                }, {
                  "title": "🔒OWNER MENU🔒",
                  "description": "",
                  "rowId": `${_p}? owner`
                }, {
                  "title": "🎶PENGUBAH SUARA🎶",
                  "description": "",
                  "rowId": `${_p}? suara`
                }, {
                  "title": "💳PREMIUM MENU💳",
                  "description": "",
                  "rowId": `${_p}? premium`
                }, {
                  "title": "💡QUOTES MENU💡",
                  "description": "",
                  "rowId": `${_p}? quotes`
                }, {
                  "title": "💎RPG MENU💎",
                  "description": "",
                  "rowId": `${_p}? rpg`
                }, {
                  "title": "🔖STALKER MENU🔖",
                  "description": "",
                  "rowId": `${_p}? stalk`
                }, {
                  "title": "🏷️SHORT LINK🏷️",
                  "description": "",
                  "rowId": `${_p}? shortlink`
                }, {
                  "title": "🧰TOOLS MENU🧰",
                  "description": "",
                  "rowId": `${_p}? tools`
                }
                  ],
                "title": "📖LIST MENU📖"
              }
            ], "contextInfo": {
              "stanzaId": m.key.id,
              "participant": m.sender,
              "quotedMessage": m.message
            }
    }}), { userJid: m.participant || m.key.remoteJid, quoted: m });
    return await conn.relayMessage(
        m.key.remoteJid,
        template.message,
        { messageId: template.key.id }
    )
    }
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
        before,
        ...Object.keys(tags).map(tag => {
          return header.replace(/%category/g, tags[tag]) + '\n' + [
            ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
              return menu.help.map(help => {
                return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                  .replace(/%islimit/g, menu.limit ? '🅛' : '')
                  .replace(/%isPremium/g, menu.premium ? '🅟' : '')
                  .trim()
              }).join('\n')
            }),
            footer
          ].join('\n')
        }),
        after
      ].join('\n')
      text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, money, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    let pp = fs.readFileSync('./src/welcome.png')
    await conn.sendHButtonLoc(m.chat,pp, text.trim(), '⎔ Status Active 24H⎋ Nonstop', "📍Instagram", instagram, `HOME`, `.menu`, m)
} catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat dinihari🌃"
  if (time >= 4) {
    res = "Selamat pagi🏞️"
  }
  if (time > 10) {
    res = "Selamat siang🏙️"
  }
  if (time >= 15) {
    res = "Selamat sore🌇"
  }
  if (time >= 18) {
    res = "Selamat malam🌌"
  }
  return res
}
