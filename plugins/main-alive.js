

let handler = async(m, { conn, text, usedPrefix, command }) => {

    // Sound
    let name = m.pushName || conn.getName(m.sender)
    var vn = "https://a.uguu.se/VHZdvPid.mp3"
    let url = "https://github.com/Guru322/GURU-BOT"
    let murl = "https://youtu.be/DibiLc17dh0?si=xp9bQ-_frEyDB1-i"
    let img = "https://i.imgur.com/pOs39VK.jpeg"
    let con = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mpeg',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "Guru",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "I AM ALIVE"'ꜛ-🫂❤‍🩹🍂🌼-↑

              *👀🙈'³ı̄ı̄†s ─🫨🩷 —✮°⏜⤹𝐒ɦ𝛂ͥƞι 𝐑𝛂ᴊͣᴘͫʊʈ⤸⏜°✮ ː •››̈̈️*

🩷️🩵⎯⎯→🐼",
          body: "GURU BOT",
          thumbnailUrl: img,
          sourceUrl: 'https://chat.whatsapp.com/Esn7W3azds7EWBtJcn16Zt',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };
    
      await conn.sendMessage(m.chat, doc, { quoted: con });
    
    }
    
    handler.help = ['alive']
    handler.tags = ['main']
    handler.command = /^(alive)$/i 

    export default handler;
