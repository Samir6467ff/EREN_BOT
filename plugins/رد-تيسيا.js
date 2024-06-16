let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*${taguser}*\n *「وش تـبـي مـن عـمـتك🫠🌸」*`;

    conn.sendFile(m.chat, 'https://telegra.ph/file/d5d676261a0445d87fdb0.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(تيسيا)$/i;
handler.command = new RegExp;

export default handler;
