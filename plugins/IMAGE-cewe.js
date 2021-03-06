const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    try {
        let res = await fetch(global.API('xteam', '/randomimage/cewe', {}, 'APIKEY'))
        if (res.status != 200) throw await res.text()
        let img = await res.buffer()
        conn.sendFile(m.chat, img, '', '*Nee*', m, false, { thumbnail: Buffer.alloc(0) })
    } catch (e) {
        throw `Limit apikey habis atau error!`
    }
}
handler.help = ['cewe']
handler.tags = ['image']
handler.command = /^(cewe)$/i
handler.limit = true

module.exports = handler
