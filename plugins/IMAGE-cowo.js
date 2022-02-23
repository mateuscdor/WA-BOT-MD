const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    try {
        let res = await fetch(global.API('xteam', '/randomimage/cowo', {}, 'APIKEY'))
        if (res.status != 200) throw await res.text()
        let img = await res.buffer()
        conn.sendFile(m.chat, img, '', '*Nee*', m, false, { thumbnail: Buffer.alloc(0) })
    } catch (e) {
        throw `Limit apikey habis atau error!`
    }
}
handler.help = ['cowo']
handler.tags = ['internet']
handler.command = /^(cowo)$/i
handler.limit = true

module.exports = handler
