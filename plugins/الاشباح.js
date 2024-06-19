let handler = async (m, { conn, text, participants }) => {
let member = participants.map(u => u.id)
if(!text) {
    await conn.sendMessage(m.chat, { image: imageBuffer, caption: messageText });
}
var sum = member.length
} else {
var sum = text} 
var total = 0
var sider = []
for(let i = 0; i < sum; i++) {
let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
if((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) { 
if (typeof global.db.data.users[member[i]] !== 'undefined'){
if(global.db.data.users[member[i]].whitelist == false){
total++
sider.push(member[i])}
}else {
total++
sider.push(member[i])}}}
if(total == 0) return conn.reply(m.chat, `*✓┃هذه المجموعة نشطة وليس بها أشباح┃✓*`, m) 
m.reply(`*[ ⚠ الناس ال مبتتفاعلش خالص ⚠ ]*\n\n*الجروب:* ${await conn.getName(m.chat)}\n*الاعضاء:* ${sum}\n\n*┃🚫┃┊قائمة الأشباح┊┃🚫┃*\n${sider.map(v => '  ❈↲ تفاعل ⚡️ @' + v.replace(/@.+/, '')).join('\n')}\n\n*✓┃ملحوظة : مش شرط ان البوت يكون صح 100% غير انه بيعد الرسايل وهو شغال بس او وقت ما دخل الجروب + الاشباح هنا المقصود بيهم ال دخلو الجروب ومتفاعلوش خالص┃✓*`, null, { mentions: sider })}
handler.command = /^(verfantasmas|الاشباح|sider)$/i
handler.admin = true
handler.botAdmin = true
export default handler
