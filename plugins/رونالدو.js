import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let cristiano = (await axios.get(`https://raw.githubusercontent.com/Guru322/api/Guru/BOT-JSON/CristianoRonaldo.json`)).data  
let ronaldo = await cristiano[Math.floor(cristiano.length * Math.random())]
conn.sendButton(m.chat, `💞 ${mid.buscador}: ${text}`, wm, link, [['🔄 𝙎𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚 | 𝙉𝙚𝙭𝙩', `/imagen ${text}`]], null, null, m)
//conn.sendFile(m.chat, link, 'error.jpg', `💞 ${mid.buscador}: ${text}`, m)
{ generateWAMessageFromContent, proto } = pkg
//conn.sendButton(m.chat, "*Siiiuuuuuu*", author, ronaldo, [['⚽ NEXT ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['cristianoronaldo', 'cr7']
handler.tags = ['img']
handler.command = /^(رونالدو|cr7)$/i
export default handler
