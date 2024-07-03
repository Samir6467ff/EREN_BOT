import { prepareWAMessageMedia, generateWAMessageFromContent } from '@whiskeysockets/baileys';

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const mentionId = m.key.participant || m.key.remoteJid;

    var joanimiimg = await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/48d1b1b70fcc002571a78.jpg' } }, { upload: conn.waUploadToServer });
    const buttons = [
        { buttonId: '.ميزو1', buttonText: { displayText: '❯⏐اوامـر الـقـروبـات↞📜' }, type: 1 },
        { buttonId: '.ميزو2', buttonText: { displayText: '❯⏐اوامـر الأعـضـاء↞🪽' }, type: 1 },
        { buttonId: '.ميزو3', buttonText: { displayText: '❯⏐اوامـر  الـترفـيـه↞🎀' }, type: 1 },
        { buttonId: '.ميزو4', buttonText: { displayText: '❯⏐اوامـر  التـحمـيل↞🖨️' }, type: 1 },
        { buttonId: '.ميزو5', buttonText: { displayText: '❯⏐اوامـر الـصـور↞☘️' }, type: 1 },
        { buttonId: '.ميزو6', buttonText: { displayText: '❯⏐اوامـر الـلـفـل↞🏅' }, type: 1 },
        { buttonId: '.ميزو7', buttonText: { displayText: '❯⏐اوامـر الملصقات↞❄️' }, type: 1 },
        { buttonId: '.ميزو8', buttonText: { displayText: '❯⏐اوامـر الأصـوات↞🎵' }, type: 1 },
        { buttonId: '.ميزو9', buttonText: { displayText: '❯⏐اوامـر ديـنـيـه↞🕌' }, type: 1 },
        { buttonId: '.ميزو10', buttonText: { displayText: '❯⏐مـعلـومـات الـبـوت↞🪙' }, type: 1 },
        { buttonId: '.ميزو11', buttonText: { displayText: '❯⏐اوامـر الـمطـور↞👑' }, type: 1 },
        { buttonId: '.ميزو12', buttonText: { displayText: '❯⏐جـمـيـع الاوامـر ↞💎' }, type: 1 }
    ];

    const buttonMessage = {
        contentText: `*✧━━ • ━ 「 ✤ 」 ━ • ━━✧*\n*〄┃قائمـة الـاوامـر ┃↞ ❮ 🔮 ❯* \n*✧━━ • ━ 「 ✤ 」 ━ • ━━✧*`.trim(),
        footerText: ` > لا تنسى قبل كل امر تحط نقطة❗\n> راسل المطور اذا حدث اي عطل🧿`.trim(),
        buttons: buttons,
        headerType: 4,
        imageMessage: joanimiimg.imageMessage
    };

    await conn.sendMessage(m.chat, buttonMessage, { quoted: m });
};

handler.help = ['الاوامر'];
handler.tags = ['For Test'];
handler.command = /^(الاوامر|اوامر)$/i;
export default handler;
