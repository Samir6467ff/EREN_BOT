import { prepareWAMessageMedia, generateWAMessageFromContent } from '@whiskeysockets/baileys';

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const mentionId = m.key.participant || m.key.remoteJid;

    try {
        var joanimiimg = await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/48d1b1b70fcc002571a78.jpg' } }, { upload: conn.waUploadToServer });
        const buttons = [
            { buttonId: 'id1', buttonText: { displayText: 'Button 1' }, type: 1 },
            { buttonId: 'id2', buttonText: { displayText: 'Button 2' }, type: 1 },
            { buttonId: 'id3', buttonText: { displayText: 'Button 3' }, type: 1 }
        ];

        const buttonMessage = {
            contentText: `Your custom message here`.trim(),
            footerText: `Footer text here`.trim(),
            buttons: buttons,
            headerType: 4,
            imageMessage: joanimiimg.imageMessage
        };

        await conn.sendMessage(m.chat, buttonMessage, { quoted: m });
    } catch (error) {
        console.error('Error in preparing media:', error);
    }
};

handler.help = ['template'];
handler.tags = ['For Test'];
handler.command = /^(template|templatecmd)$/i;
export default handler;
