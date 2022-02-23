function handler(m) {
  this.sendContact(m.chat, '62895426157070', 'z3r0.d4y.3xplo1t', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
