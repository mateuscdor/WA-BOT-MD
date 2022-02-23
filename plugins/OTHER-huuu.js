let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, pickRandom(stikerhuuu), m, { packname: "sticker by", author: "Mx-Shimmer-01" })
}

handler.customPrefix = /^(huuu)$/i
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [
 "https://telegra.ph/file/2a4c4f2acfd122231d6eb.png",//mikey
 "https://telegra.ph/file/fa1b5be2dbafd574e5fd4.png",//anime ramdom
 "https://telegra.ph/file/de0c7f6df8f565023ab55.png",//waifu 
 "https://telegra.ph/file/cd8ed03c65a4fb9f59799.png",//yamete
 "https://telegra.ph/file/f1c8243ea1f860e564a5b.png",//fail
 "https://telegra.ph/file/11584871344c9dd1fb951.png",//censored
 "https://telegra.ph/file/06221645acb50c6846780.png",//pain
 "https://telegra.ph/file/326306bdfefafab19f20c.png",//fake smile
 "https://telegra.ph/file/27dccdb75a07ddc2a86f0.png",//fake smile2
 "https://telegra.ph/file/ecdaa231db9a2889a1f5a.png",//fake smile3
 "https://telegra.ph/file/244ce053442122e951262.png",//fake smile4
 "https://telegra.ph/file/0a1c503dd133127d555cc.png",//love yourself
 "https://telegra.ph/file/09011c161e5acdc09adba.png",//no signal
 "https://telegra.ph/file/9195272cdf4fcb83ff65f.png",//pain 2
 "https://telegra.ph/file/513e77ab1828bf2b04289.png",//supreme
 "https://telegra.ph/file/0d055ae8f069b6008c571.png",//loser
 "https://telegra.ph/file/c9b6480bf242c57204efa.png",//supreme2
 "https://telegra.ph/file/2f618fffab6ff7bea32ab.png",//supreme3
 "https://telegra.ph/file/ec8099f80965561856212.png"//smile
]
