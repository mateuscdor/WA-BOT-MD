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
 "https://telegra.ph/file/300610838ffa0e6576eb9.png",//patrick pembohong
 "https://telegra.ph/file/954afe562e58c144620ae.png",//spongebob FBI
 "https://telegra.ph/file/72026dcc46e4cb4b6f9ae.png",//mazowski monster inc
 "https://telegra.ph/file/aa9f1bea869e362e6f56e.png",//wkwk
 "https://telegra.ph/file/09bbff0da316ba21b4f8e.png",//kucing2
 "https://telegra.ph/file/2e0637d57e3cc1abcb4a0.png",//patrick anak setan
 "https://telegra.ph/file/d771ae015b5486859d03f.png",//mazowski 2
 "https://telegra.ph/file/9c7606f571c05b4d0c941.png",//hengker
 "https://telegra.ph/file/84fd937257bcd614d6c9e.png",//anjing
 "https://telegra.ph/file/b8ba6989c00c50df049d0.png",//bapak bapak lovee
 "https://telegra.ph/file/2f618fffab6ff7bea32ab.png",//abang saleh
 "https://telegra.ph/file/dfbf483c209a31f01b4e5.png"//hengker2
]
