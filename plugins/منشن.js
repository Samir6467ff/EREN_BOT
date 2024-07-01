let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
  let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
  m.reply(`❏ مجموعة : *${groupMetadata.subject}*\n❏ أعضاء : *${participants.length}*${text ? `\n❐ رسالة : ${text}\n` : ''}\n❅✦━━━━━━[ 𝐊𝐢𝐫𝐚 ]━━━━━━✦❅
*⤹⚜⊰❅⊱⚜⤸* 
*✦━━─━━━⌠❄️⌡━━━─━━✦*
*⤹⚜ المنشن ⊰⚡⊱ الجماعي ⚜⤸*\n` + users.map(v => '│◦❈↲  @' + v.replace(/@.+/, '')).join`\n` + '\n*✦━━━━━━[ 𝐊𝐢𝐫𝐚 ]━━━━━━✦*', null, {
      mentions: users
  })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['منشن']
handler.admin = true
handler.group = true

export default handler
