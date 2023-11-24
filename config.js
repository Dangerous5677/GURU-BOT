import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['923455116994', '*~_.メ⤹𝐒ɦ𝛂ͥƞι 𝐑𝛂ᴊͣᴘͫʊʈ⤸メ._~*', true],
  ['923455116994', '*~_. SHANI_RAJOUT🤥🍭メ★_~*', true], 
  [''] 
] //Number of owners

//global.pairingNumber = "" //put your bot number here

global.mods = ['917605902011','32460248586'] 
global.prems = ['917605902011', '32460248586', '919398758484']
global.allowed = ['917605902011', '32460248586', '19152999993']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://i.imgur.com/sjNolYH.jpg', 
  dzx: 'https://i.imgur.com/sjNolYH.jpg',
  lol: 'https://i.imgur.com/sjNolYH.jpg',
  violetics: 'https://i.imgur.com/sjNolYH.jpg',
  neoxr: 'https://i.imgur.com/sjNolYH.jpg',
  zenzapis: 'https://i.imgur.com/sjNolYH.jpg',
  akuari: 'https://i.imgur.com/sjNolYH.jpg',
  akuari2: 'https://i.imgur.com/sjNolYH.jpg',
  nrtm: 'https://i.imgur.com/sjNolYH.jpg',
  bg: 'https://i.imgur.com/sjNolYH.jpg',
  fgmods: 'https://i.imgur.com/sjNolYH.jpg'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://i.imgur.com/sjNolYH.jpg': 'd90a9e986e18778b',
  'https://i.imgur.com/sjNolYH.jpg': '85faf717d0545d14074659ad',
  'https://i.imgur.com/sjNolYH.jpg': `${keysneoxr}`,	
  'https://i.imgur.com/sjNolYH.jpg': 'beta',
  'https://i.imgur.com/sjNolYH.jpg': `${keysxxx}`, 
  'https://i.imgur.com/sjNolYH.jpg': 'fg-dylux'
}

// Sticker WM
global.botname = 'ᴛʜᴇ *~_.メ⤹𝐒ɦ𝛂ͥƞι 𝐑𝛂ᴊͣᴘͫʊʈ⤸メ._~*-ʙᴏᴛ'
global.premium = 'true'
global.packname = '✤᮫⤹⏤ₒ᮫ᷤ₃᮫ͪ₄᮫ͣ₅᮫ᷠ₌᮫ͥ₅᮫₁᮫ᷢ₁᮫ͣ₆᮫ᷬ₉᮫ⷬ₉᮫ⷰ₄ⷮ⏤⤸✤' 
global.author = '.' 
global.menuvid = 'https://i.imgur.com/XOvvvpP.mp4'
global.igfg = 'https://wa.me/message/65LQF2X2ISI3F1' 
global.dygp = 'https://chat.whatsapp.com/Esn7W3azds7EWBtJcn16Zt'
global.fgsc = 'https://github.com/Dangerous1332/GURU-BOT/edit/main/config.js' 
global.fgyt = 'https://wa.me/message/65LQF2X2ISI3F1'
global.fgpyp = 'https://wa.me/message/65LQF2X2ISI3F1'
global.fglog = 'https://github.com/Dangerous1332/GURU-BOT/edit/main/config.js' 
global.thumb = fs.readFileSync('./Assets/Gurulogo.jpg')


global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
