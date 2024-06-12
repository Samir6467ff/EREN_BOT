let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*〄┇ الامـر غـلـط سـوي نـقطـة وبـدون فـواصـل ┇〄*\n> ❯⏐ 𝐵𝛩𝑇 𝑀𝐼𝑍𝑈𝐻𝐴𝑅𝐴`;

    conn.sendFile(m.chat, 'https://telegra.ph/file/11d860ee4a36e76e9add1.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(ميزو 2|.ميزو 1|.ميزو|.ميزو 3|.ميزو 4|.ميزو 5|.ميزو 6|.ميزو 7|.ميزو 8.|ميزو)$/i;
handler.command = new RegExp;

export default handler;
