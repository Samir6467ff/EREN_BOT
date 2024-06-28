let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*˼❄️˹┊「 مرحبآ ↫ ${taguser}」*\n> اهـلًا مـعـك بـوت ابو سعد\n> لـلمـساعـدة اكــتب الـاوامـر او شـرح\n> لإضافة البوت لقروبك اكـتب الـمـطـور\n*✧━━ • ━ 「  ✤  」 ━ • ━━✧*
\n> ❯⏐ 𝐵𝛩𝑇 𝑀𝐼𝑍𝑈𝐻𝐴𝑅𝐴`;

    conn.sendFile(m.chat, 'https://telegra.ph/file/80c9171c93b29f99d4cfe.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(بوت|اوامر|الاوامر)$/i;
handler.command = new RegExp;

export default handler;
