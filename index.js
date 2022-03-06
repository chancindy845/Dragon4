 /*
* XavyBot es una creación de Ochoa
* XavyBot no tiene ningun fin de lucro
* Ochoa se reserva todos los derechos de autor
* © 2021 Ochoa, INC.

Cualquier copia que utilize mi ApiKey sera dado de baja

- Que hay de nuevo?
* Nada
*/

const {
    WAConnection,
    MessageType,
	GroupSettingChange,
    ReconnectMode,
    Presence,
    Mimetype,
    rugaapi,
	WAConnection: _WAConnection,
} = require('@adiwajshing/baileys')

/******COMIENZO DE LA ENTRADA DEL ARCHIVO******/
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./src/bahasa')
const { negara } = require('./src/kodenegara')
const { virtex } = require('./src/virtex')
const { wait, pegatinas, musica, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
/******FIN DE ENTRADA DE ARCHIVO******/

/******COMIENZO DE LA ENTRADA DEL PAQUETE NPM******/
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
let FormData = require('form-data')
const kagApi = require('@kagchi/kag-api')
const axios = require("axios")
const fetch = require('node-fetch')
/*const tiktod = require('tiktok-scraper')*/
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
/*const imgbb = require('imgbb-uploader')*/
const lolis = require('lolis.life')
const loli = new lolis()
const speed = require('performance-now')
/******FIN DE ENTRADA DEL PAQUETE NPM******/

/******COMIENZO DE LA ENTRADA JSON******/
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const user = JSON.parse(fs.readFileSync('./database/json/user.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/json/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/json/level.json'))
/******FIN DE ENTRADA JSON******/

/******INICIO DE LA ENTRADA DEL MENÚ******/
const { help } = require('./src/help')
const { logomaker } = require('./database/menu/logomaker')
const { toinmenu } = require('./src/toinmenu')
const { menuadmin } = require('./src/menuadmin')
const { nsfwmenu } = require('./src/nsfwmenu')
const { desmenu } = require('./src/desmenu')
const { version } = require('./src/version')
const { juegos } = require('./src/juegos')
const { shantera } = require('./src/shantera')
const { antimenu } = require('./src/antimenu')
const { welmenu } = require('./src/welmenu')
const { banmenu } = require('./src/banmenu')
const { otak } = require('./src/otak')
const { levelmenu } = require('./src/levelmenu')
/******FIN DE ENTRADA DEL MENÚ******/

/******CARGA DE ENTRADA VCARD******/
const vcard = 'BEGIN:VCARD\n' // Tarjeta de contacto
            + 'VERSION:3.0\n' 
            + 'FN:Ochoaxd\n' // Nombre
            + 'ORG:Ochoa;\n' // Propietario
            + 'TEL;type=CELL;type=VOICE;waid=573146224366:+57 314 622 4366\n' // ID de WhatsApp + número de teléfono
            + 'END:VCARD'
/******FIN DE ENTRADA VCARD******/

prefix = '!'
blocked = []
banChats = false
hit_today = []

/******CONFIGURACION DE CARGA******/
const settingan = JSON.parse(fs.readFileSync('./admin/set.json'))
const {
	author,
	pack
} = settingan

/******INICIO DE FUNCIONES ENTRADA******/

/******INICIO FUNCIONES BY OCHOA ******/
const { isFiltered, addFilter } = require('./lib/antispam')
const { validmove, setGame } = require("./lib/tictactoe");
const antifake = JSON.parse(fs.readFileSync('./src/antifake.json'))
const { addVote, delVote } = require("./lib/vote");
const voting = JSON.parse(fs.readFileSync("./lib/voting.json"));
const truth = JSON.parse(fs.readFileSync('./database/truth.json'))
const dare = JSON.parse(fs.readFileSync('./database/dare.json'))
const { reto } = require('./src/reto')
const { verdad } = require('./src/verdad')
const { jadibot, stopjadibot, listjadibot } = require("./lib/jadibot");
const { error } = require("qrcode-terminal");
const qrcode = require("qrcode-terminal");
const simple = require("./lib/simple.js");
/******FIN DE FUNCIONES BY OCHOA ******/

/******ARCHIVOS ANTILINK POR OCHOA******/

const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const antiface = JSON.parse(fs.readFileSync('./src/antiface.json'))
const antitik = JSON.parse(fs.readFileSync('./src/antitik.json'))
const antinsta = JSON.parse(fs.readFileSync('./src/antinsta.json'))
const antitube = JSON.parse(fs.readFileSync('./src/antitube.json'))
const antikwai = JSON.parse(fs.readFileSync('./src/antikwai.json'))
const antiwa = JSON.parse(fs.readFileSync('./src/antiwa.json'))
const antidiscord = JSON.parse(fs.readFileSync('./src/antidiscord.json'))

/******FIN DE ARCHIVOS ANTILINK POR OCHOA******/


//LEVEL INICIO
const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
        }
//LEVEL FIN
	
function addMetadata(packname, author) {	
	if (!packname) packname = 'XavyBot'; if (!author) author = 'Ochoa';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./${name}.exif`, buffer, (err) => {	
		return `./${name}.exif`	
	})	

} 
	
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)}Horas ${pad(minutes)}Minutos ${pad(seconds)}Segundos\n\nXavyBot By Ochoa`
}
	const starts = async (client = new WAConnection()) => {
	client.version = [2, 2147, 14]
	client.browserDescription = ["XavyBot", "3.0"];
	client.autoReconnect = ReconnectMode.onConnectionLost;
        client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color('Escanea gil'))
	})

	fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
	client.on('connecting', () => {
		start('2', 'Estas desconectado')
	})
	client.on('open', () => {
		success('2', 'Conectado by Ochoa')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://telegra.ph/file/34137f7a4c7412101de43.jpg'
				}
				teks = `Hola pedazo de aborto @${num.split('@')[0]}\n\nComo estas¿? bueno en realidad no me importa\n\nPresentate o te violo\n\nCumple las reglas gil`
				  let buff = await getBuffer(ppimg)
			client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://telegra.ph/file/34137f7a4c7412101de43.jpg'
				}
				teks = `Se fue in diota :D @${num.split('@')[0]}`
				 let buff = await getBuffer(ppimg)
			client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error: %s', color(e, 'red'))
		}
	})

		client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('chat-update', async (mek) => {
		try {
                        if (!mek.hasNewMessage) return
                        mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const apikey = setting.apikey
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Guayaquil').format('HH:mm:ss')
			const date = moment.tz('America/Guayaquil').format('DD/MM/YY')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined
			const isCmd = body.startsWith(prefix)

			mess = {
				wait: 'Calmao pa estoy procesando😎\n\n❗Por favor no hacer spam👏❗\n\n_*by Ochoa*_',
				success: '✔️ Listo ✔️',
                                levelon: '❬ ✅ ❭ *Level activado*',
				leveloff: ' ❬ ✅ ❭  *Level desactivado*',
				foto: 'Calmao estoy cambiando la foto del grupo\n\nPor favor no hacer spam👏\n\n_*by Ochoa*_',
				unir: 'Espere por favor 🕖\n\nEstoy tratando de unirlo\n\n*Recuerda, si no lo uno es por que el usuario tiene bloqueado la funcion para unirlo a grupos*\n\n_*by Ochoa*_',
                                levelnoton: '❬ ❎ ❭ *Level no esta activado*',
				levelnol: '*Nivel* 0 ',
				error: {
					stick: '[❎] Falló, se produjo un error al convertir la imagen en una pegatina',
					yt: 'Falló en el link o se produjo un error al momento de descargar el video',
					unire: 'Por favor, no coloques (+) solo pon el numero con el codigo de area de su pais\n\nEjemplo: !unir 52xxxxxxxxx',
					Iv: 'Este no es un link de youtube',
					Fb: 'Este no es un link de facebook'
					},
				only: {
					group: '[❗] Este comando es solo para grupos',
					ownerG: '[❗] Este comando solo puede ser utilizado por un admins del grupo',
					ownerB: '[❗] Este comando solo lo usa ShanBot',
					admin: '[❗] Este comando solo puede ser utilizado por administradores del grupo',
					Badmin: '[❗] Este comando solo se puede usar cuando el bot se convierte en administrador',
                                        pegatina: 'Calma crack estoy haciendo tu sticker 👏\n\n*Recuerda los stickersgif son de 6 segundos*\n\n_*by Ochoa*_',
					attp: 'Calma crack estoy haciendo tu texto a sticker 👏\n\n*Esto puede demorar unos minutos*\n\n_*by Ochoa*_',
					imgs: 'Euu flaco 🥴\n\n*Convirtiendo tu Sticker a Imagen 🔄*\n\n_*by Ochoa*_',
					mpcancion: 'Calmaoooo estoy procesando 😎\n\n*Convirtiendo de MP4 a MP3 🔄*\n\n_*by Ochoa*_',
					mpa: 'Euu flaco 🥴\n\n*Estoy descargando tu cancion 🔄*\n\nAguarde un momento, por favor\n\n_*by Ochoa*_',
                                        mpv: 'Calma ✋🥸🤚\n\n*Estoy descargando tu video 🔄*\n\nAguarde un momento, por favor\n\n_*by Ochoa*_',
					insta: 'Calmao 😎\n\n*Estoy descargando tu post 🔄*\n\nAguarde un momento, por favor\n\n_*by Ochoa*_',
					musica: 'Calmao pa estoy bucando tu canción 😎\n\n*Recuerda colocar bien el nombre de la cancion o el link del video de youtube*\n\n*Si el comando !play no funciona utiliza el comando !play2*\n\nSi no envio tu musica checa que version tienes del bot con !version\n\n_*by Ochoa*_',
					musica2: 'Calmao pa estoy bucando tu canción 😎\n\n*Recuerda colocar bien el nombre de la cancion o el link del video de youtube*\n\n*Si el comando !play2 no funciona utiliza el comando !play*\n\nSi no envio tu musica checa que version tienes del bot con !version\n\n_*by Ochoa*_',
					daftarB: `「NO ESTAS REGISTRADO」\n\nQn so puta y pq no estas registrado\n\nPara poder usarme escribe el siguente comando\n\nComando: ${prefix}daftar Nombre\nEjemplo: ${prefix}daftar Ochoa`,
				}
			}
    			const apakah = ['Si','No']
                        const kapankah = ['Otro día','Otra semana','Otro mes','Otro año']
			const botNumber = client.user.jid
			const ownerNumber = ["573146224366@s.whatsapp.net"] // replace this with your number
			const nomorOwner = [ownerNumber]
	                const isGroup = from.endsWith('@g.us')
			const totalchat = await client.chats.all();
			const timestamp = speed();
            const latensi = speed() - timestamp
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const isBanned = ban.includes(sender)
			const argss = body.split(/ +/g)
			const math = (teks) => {
				return Math.floor(teks)
			}
			const groupName = isGroup ? groupMetadata.subject : ''
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAntiDiscord = isGroup ? antidiscord.includes(from) : false
			const isAntiFake = isGroup ? antifake.includes(from) : false
			const os = require('os');
			const X = "❌"
            const O = "⭕️"
			const isAntInsta = isGroup ? antinsta.includes(from) : false
			const isAntiTik = isGroup ? antitik.includes(from) : false
			const isAntiFace = isGroup ? antiface.includes(from) : false
			const isAntiKwai = isGroup ? antikwai.includes(from) : false
			const isAntiTube = isGroup ? antitube.includes(from) : false
			const isAntiWa = isGroup ? antiwa.includes(from) : false
			const groupId = isGroup ? groupMetadata.jid : ''
			const WAConnection = simple.WAConnection(_WAConnection);
			const groupMembers = isGroup ? groupMetadata.participants : ''
                        const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
                        const isUser = user.includes(sender)
                        const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
                        const NomerOwner = '573146224366@s.whatsapp.net'
                        const conts = mek.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
                        const pushname = mek.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'
			
			//......................
			
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
           
//LINKS DE WHATSAPP	

if (budy.includes("https://wa.me/")){
		if (!isGroup) return
		if (!isAntiWa) return
                if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*LINK DE WHATSAPP DETECTADO 📢* ${sender.split("@")[0]} Usted sera eliminado de este grupo`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Bye Puta")
		}, 0)
	}
			
	if (budy.includes("wa.me")){
		if (!isGroup) return
		if (!isAntiWa) return
                if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*LINK DE WHATSAPP DETECTADO 📢* ${sender.split("@")[0]} Usted sera eliminado de este grupo`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Bye Puta")
		}, 0)
	}
			
			
//FIN DE LINKS DE WHATSAPP	

//ANTILINKS DE YOUTUBE

if (budy.includes("https://youtu.be/")){
		if (!isGroup) return
		if (!isAntiTube) return
                if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*LINK DE YOUTUBE DETECTADO 📢* ${sender.split("@")[0]} Usted sera eliminado de este grupo`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Bye Puta")
		}, 0)
	}
			
	if (budy.includes("youtube.com")){
		if (!isGroup) return
		if (!isAntiTube) return
                if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*LINK DE YOUTUBE DETECTADO 📢* ${sender.split("@")[0]} Usted sera eliminado de este grupo`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Bye Puta")
		}, 0)
	}
			
//FIN ANTILINKS DE YOUTUBE

//ANTILINKS FACEBOOK GRUPOS PERFILES PUBLICACIONES
			
if (budy.includes("https://www.facebook.com/")){
		if (!isGroup) return
		if (!isAntiFace) return
                if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*LINK DE FACEBOOK DETECTADO 📢* ${sender.split("@")[0]} Usted sera eliminado de este grupo`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Bye Puta")
		}, 0)
	}			
			
if (budy.includes("https://m.facebook.com/")){
		if (!isGroup) return
		if (!isAntiFace) return
                if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*LINK DE FACEBOOK DETECTADO 📢* ${sender.split("@")[0]} Usted sera eliminado de este grupo`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Bye Puta")
		}, 0)
	}
			
			
//FIN ANTILINKS FACEBOOK GRUPOS PERFILES PUBLICACIONES			
			
//FUNCION ANTILINK
	     	
	if (budy.includes("https://discord.com/")){
		if (!isGroup) return
		if (!isAntiDiscord) return
                if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*LINK DE DISCORD DETECTADO 📢* ${sender.split("@")[0]} Usted sera eliminado de este grupo`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Bye Puta")
		}, 0)
	}
			
	if (budy.includes("https://s.kwai.app/")){
		if (!isGroup) return
		if (!isAntiKwai) return
                if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*LINK DE KWAI DETECTADO 📢* ${sender.split("@")[0]} Usted sera eliminado de este grupo`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Bye Puta")
		}, 0)
	}

	if (budy.includes("https://www.instagram.com/")){
		if (!isGroup) return
		if (!isAntInsta) return
	        if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*LINK DE INSTAGRAM DETECTADO 📢* ${sender.split("@")[0]} Usted sera eliminado de este grupo`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Bye Puta")
		}, 0)
	}		
	
	if (budy.includes("https://vm.tiktok.com/")){
		if (!isGroup) return
		if (!isAntiTik) return
                if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*LINK DE TIK TOK DETECTADO 📢* ${sender.split("@")[0]} Usted sera eliminado de este grupo`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Bye Puta")
		}, 0)
	}
	
       if (budy.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*LINK DE WHATSAPP DETECTADO 📢* ${sender.split("@")[0]} Usted será expulsado del grupo`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Bye Puta")
		}, 0)
	}

//FIN DE ANTI LINKS 
		

//FUNCION DE LEVEL
            
     if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`*「 FELICIDADES LEVEL UP 🆙🥳 」*\n\nFelicidades subiste de nivel sigue asi 👏\n\n*NOMBRE*\n${pushname}\n*XP*: ${getLevelingXp(sender)}\n*NIVEL*: ${getLevel} ⟿ ${getLevelingLevel(sender)}\n\n_*Para ver tu XP en tiempo real coloca el comando ${prefix}level*_`)
                }
            } catch (err) {
                console.error(err)
            }
        }

//FIN DE FUNCION DE LEVEL
			
         		
                        colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
         if (isCmd && isBanned) {
        return console.log(color('[ USUÁRIO BANEADO ] Ignorando Comando', 'blue'), color(moment.tz('America/Guayaquil').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))}
    	if (!isGroup && isCmd) console.log('\x1b[1;37m>', '[ \x1b[1;36mMensaje\x1b[1;37m ]', time, color(command), 'De', color(sender.split('@')[0]))
        if (isCmd && isGroup) console.log('\x1b[1;37m>', '[ \x1b[1;36mMensaje\x1b[1;37m ]', time, color(command), 'De', color(sender.split('@')[0]), 'En', color(groupName))

/******ENTRADA FIN DE FUNCIONES******/
			function addMetadata(packname, author) {	
				if (!packname) packname = 'XavyBot'; if (!author) author = 'Ochoa';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			switch(command) {
		case 'm':
		case 'comandos':
		case 'help':
		case 'menu':
	        client.sendMessage(from, help(prefix, sender), text, {quoted: mek})
			const none = fs.readFileSync('./mp3/menu.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
		break
                case 'otak':
		client.sendMessage(from, otak(prefix, sender), text, {quoted: mek})
		break
		case 'juegos':
		client.sendMessage(from, juegos(prefix, sender), text, {quoted: mek})
		break
		case 'idioma':
		client.sendMessage(from, bahasa(prefix, sender), text, {quoted: mek})
		break
		case 'levelmenu':
		client.sendMessage(from, levelmenu(prefix, sender), text, {quoted: mek})
		break
		case 'shanmenu':
		client.sendMessage(from, toinmenu(prefix, sender), text, {quoted: mek})
		break
		case 'menuadmin':
		client.sendMessage(from, menuadmin(prefix, sender), text, {quoted: mek})
		break
		case 'nsfwmenu':
		client.sendMessage(from, nsfwmenu(prefix, sender), text, {quoted: mek})
		break
		case 'banmenu':
		client.sendMessage(from, banmenu(prefix, sender), text, {quoted: mek})
		break
		case 'desmenu':
		client.sendMessage(from, desmenu(prefix, sender), text, {quoted: mek})
		break
		case 'versión':
		case 'version':
		client.sendMessage(from, version(prefix, sender), text, {quoted: mek})
		break
		case 'antimenu':
		client.sendMessage(from, antimenu(prefix, sender), text, {quoted: mek})
		break
                case 'welmenu':
		client.sendMessage(from, welmenu(prefix, sender), text, {quoted: mek})
		break
		case 'shantera':
		client.sendMessage(from, shantera(prefix, sender), text, {quoted: mek})
		break
					
		case 'virtex':
	       case 'troleo':
               client.sendMessage(from, virtex(prefix, sender), text, {quoted: mek})
               break
                            


//FUNCIONES DE BAN Y DESBAN			
			
case 'ban':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '*\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `『 BANEADO 🚫 』\n\n◉Nombre: @${mentioned[0].split('@')[0]}\n◉Razon: Pendejo\n\n*Usted a sido baneado del uso del bot, no podra usar el bot hasta nuevo aviso*`
mentions(`${susp}`, mentioned, true)   
break

case 'desban':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '*\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `『 DESBANEADO ✅ 』\n\n◉Nombre: @${mentioned[0].split('@')[0]}\n\n*Se te a retirado el BAN ya puedes usar el bot*`
mentions(`${susp}`, mentioned, true)   
break		
			
//FIN DE FUNCIONES BAN Y DESBAN					
					
					
/******JUEGOS OCHOA LA PUTA MADRE NO TE OLVIDES******/
					
case 'gay':
if (!isUser) return reply(mess.only.daftarB)
rate = body.slice(5)
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
gay = random
if (gay < 20 ) {ga = 'Usted es hetero 🤪🤙'} else if (gay == 21 ) {ga = 'Mas o menos 🤔'} else if (gay == 23 ) {ga = 'Mas o menos 🤔'} else if (gay == 24 ) {ga = 'Mas o menos 🤔'} else if (gay == 25 ) {ga = 'Mas o menos 🤔'} else if (gay == 26 ) {ga = 'Mas o menos 🤔'} else if (gay == 27 ) {ga = 'Mas o menos 🤔'} else if (gay == 28 ) {ga = 'Mas o menos 🤔'} else if (gay == 29 ) {ga = 'Mas o menos 🤔'} else if (gay == 30 ) {ga = 'Mas o menos 🤔'} else if (gay == 31 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 32 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 33 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 34 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 35 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 36 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 37 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 38 ) {ga = 'TTengo mi dudas 😑'} else if (gay == 39 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 40 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 41 ) {ga = 'Tengo razon? 😏'} else if (gay == 42 ) {ga = 'Tengo razon? 😏'} else if (gay == 43 ) {ga = 'Tengo razon? 😏'} else if (gay == 44 ) {ga = 'Tengo razon? 😏'} else if (gay == 45 ) {ga = 'Tengo razon? 😏'} else if (gay == 46 ) {ga = 'Tengo razon? 😏'} else if (gay == 47 ) {ga = 'Tengo razon? 😏'} else if (gay == 48 ) {ga = 'Tengo razon? 😏'} else if (gay == 49 ) {ga = 'Tengo razon? 😏'} else if (gay == 50 ) {ga = 'Eres o no? 🧐'} else if (gay > 51) {ga = 'Usted es gay 🥸'}
hasil = `${rate}Usted es ${random}% gay\n\n${ga}`
reply(hasil)
break

case 'cuties':
if (!isUser) return reply(mess.only.daftarB)
rate = body.slice(8)
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
cuties = random
if (cuties < 20 ) {cu = 'Mi loco usted va para el cielo 👏'} else if (cuties == 21 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 23 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 24 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 25 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 26 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 27 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 28 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 29 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 30 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 31 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 32 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 33 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 34 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 35 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 36 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 37 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 38 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 39 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 40 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 41 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 42 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 43 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 44 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 45 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 46 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 47 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 48 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 49 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 50 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties > 51) {cu = 'Señores un autentico FAN DE CUTIES esta en el grupo 🥸'}
hasil = `${rate}Usted es ${random}% fan de cuties\n\n${cu}`
reply(hasil)
break
					
case 'racista':
if (!isUser) return reply(mess.only.daftarB)
rate = body.slice(9)
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
racista = random
if (racista < 20 ) {ra = 'Tu no eres racista 👏'} else if (racista == 21 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 23 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 24 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 25 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 26 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 27 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 28 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 29 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 30 ) {ra = 'Mmm tengos mi dudas 🧐'} else if (racista == 31 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 32 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 33 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 34 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 35 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 36 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 37 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 38 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 39 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 40 ) {ra = 'Eres racista en secreto 🙀'} else if (racista == 41 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 42 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 43 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 44 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 45 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 46 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 47 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 48 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 49 ) {ra = 'Fuck men alto racista 😡'} else if (racista == 50 ) {ra = 'Fuck men alto racista 😡'} else if (racista > 51) {ra = 'UN AUTENTICO RACISTA 🥸'}
hasil = `${rate}Usted es ${random}% racista\n\n${ra}`
reply(hasil)
break
				  
case 'rankgay':
try{
if (!isUser) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
d = []
teks = 'Top 5 de los mas gays del grupo\n\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `➔ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Hubo un error intentalo nuevamente :/')
}
break		

case 'pendejo':
if (!isUser) return reply(mess.only.daftarB)
rate = body.slice(9)
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
gay = random
if (gay < 20 ) {ga = 'Usted es pendejito 🤪🤙'} else if (gay == 21 ) {ga = 'Mas o menos 🤔'} else if (gay == 23 ) {ga = 'Mas o menos 🤔'} else if (gay == 24 ) {ga = 'Mas o menos 🤔'} else if (gay == 25 ) {ga = 'Mas o menos 🤔'} else if (gay == 26 ) {ga = 'Mas o menos 🤔'} else if (gay == 27 ) {ga = 'Mas o menos 🤔'} else if (gay == 28 ) {ga = 'Mas o menos 🤔'} else if (gay == 29 ) {ga = 'Mas o menos 🤔'} else if (gay == 30 ) {ga = 'Mas o menos 🤔'} else if (gay == 31 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 32 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 33 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 34 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 35 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 36 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 37 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 38 ) {ga = 'TTengo mi dudas 😑'} else if (gay == 39 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 40 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 41 ) {ga = 'Tengo razon? 😏'} else if (gay == 42 ) {ga = 'Tengo razon? 😏'} else if (gay == 43 ) {ga = 'Tengo razon? 😏'} else if (gay == 44 ) {ga = 'Tengo razon? 😏'} else if (gay == 45 ) {ga = 'Tengo razon? 😏'} else if (gay == 46 ) {ga = 'Tengo razon? 😏'} else if (gay == 47 ) {ga = 'Tengo razon? 😏'} else if (gay == 48 ) {ga = 'Tengo razon? 😏'} else if (gay == 49 ) {ga = 'Tengo razon? 😏'} else if (gay == 50 ) {ga = 'Eres o te haces? 🧐'} else if (gay > 51) {ga = 'Usted es pendejo 🥸'}
hasil = `${rate} Usted es ${random}% Pendejo \n\n${ga}`
reply(hasil)
break
					
case 'rankpendejos':
try{
if (!isUser) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
d = []
teks = 'Top 5 de los mas pendejos del grupo\n\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `➔ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Hubo un error intentalo nuevamente :/')
}
break	

case 'ceperos':
try{
if (!isUser) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
d = []
teks = 'Top 10 de los ceperos del grupo\n\n'
for(i = 0; i < 10; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `➔ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Hubo un error intentalo nuevamente :/')
}
break				

case 'simps':
try{
if (!isUser) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
d = []
teks = 'Top 7 de los mas simps del grupo\n\n'
for(i = 0; i < 7; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `➔ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Hubo un error intentalo nuevamente :/')
}
break
					
case 'lucky':
a = '🍇'
b = '🍎'
c = '🍓'
e = '🍑'
f = '💰'
g = '🥝'
pw = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck = pw[Math.floor(Math.random() * pw.length)]
pw1 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck1 = pw1[Math.floor(Math.random() * pw1.length)]
pw2 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck2 = pw2[Math.floor(Math.random() * pw2.length)]
pw3 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck3 = pw3[Math.floor(Math.random() * pw3.length)]
pw4 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck4 = pw4[Math.floor(Math.random() * pw4.length)]
pw5 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck5 = pw5[Math.floor(Math.random() * pw5.length)]
pw6 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck6 = pw6[Math.floor(Math.random() * pw6.length)]
pw7 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck7 = pw7[Math.floor(Math.random() * pw7.length)]
pw7 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck7 = pw7[Math.floor(Math.random() * pw7.length)]
s = `┃ │  ${luck} │  ${luck1} │ ${luck2}`
a = `┃ │  ${luck3} │  ${luck4} │ ${luck5}`
m = `┃ │  ${luck6} │  ${luck7} │ ${luck7}`
u = `
╭──╼┥𝐂𝐀𝐒𝐒𝐈𝐍𝐎┝╾──╮
╽ ┌──────────┐ ┃
${s}
┃ ├──────────┤ ┃
${a}
┃ ├──────────┤ ┃
${m}
╿ └──────────┘ ╿
╰──┨⃞ Dar┠───╯`
reply(`${u}`)
break
					
case 'lucky2':
a = '⭕'
b = '❌'
c = '💢'
e = '♨️'
f = '🛑'
g = '📛'
pw = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck = pw[Math.floor(Math.random() * pw.length)]
pw1 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck1 = pw1[Math.floor(Math.random() * pw1.length)]
pw2 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck2 = pw2[Math.floor(Math.random() * pw2.length)]
pw3 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck3 = pw3[Math.floor(Math.random() * pw3.length)]
pw4 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck4 = pw4[Math.floor(Math.random() * pw4.length)]
pw5 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck5 = pw5[Math.floor(Math.random() * pw5.length)]
pw6 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck6 = pw6[Math.floor(Math.random() * pw6.length)]
pw7 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck7 = pw7[Math.floor(Math.random() * pw7.length)]
pw7 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck7 = pw7[Math.floor(Math.random() * pw7.length)]
s = `┃ │  ${luck} │  ${luck1} │ ${luck2}`
a = `┃ │  ${luck3} │  ${luck4} │ ${luck5}`
m = `┃ │  ${luck6} │  ${luck7} │ ${luck7}`
u = `
╭──┥𝐂𝐀𝐒𝐒𝐈𝐍𝐎┝╾─╮
╽ ┌──────────┐ ┃
${s}
┃ ├──────────┤ ┃
 ${a}
┃ ├──────────┤ ┃
${m}
╿ └──────────┘ ╿
╰───┨⃞  Dar┠───╯`
reply(`${u}`)
break					
					
case 'bot':
if (!isUser) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply(`✳️ Ejemplo: *${prefix + command}* soy feo?`)
d = []
r = ["Si","No","En efecto"," Tal vez","No lo se","Quizas","Mañana","Jamas", "Un domingo", "no lo hace", "muy falso", "muy real", "Sí lo hace", "Simon al rato", "Mmmmm creo que si"]
random = r[Math.floor(Math.random() * (r.length))]
preg = `${random}`
reply(`${preg}`)
break
					
case 'reto':
if (!isUser) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
  const reto = _reto[Math.floor(Math.random() * _reto.length)]
  reply(`‣ *Reto*\n\n${reto}`)
break

case 'verdad':
if (!isUser) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
  const verdad = _verdad[Math.floor(Math.random() * _verdad.length)]
  reply(`‣ *Verdad*\n\n${verdad}`)
break
											
/******JUEGOS OCHOA LA PUTA MADRE NO TE OLVIDES******/					
					
					
       				case 'wa.me':
				  case 'wame':
  client.updatePresence(from, Presence.composing) 
      options = {
          text: `「 *LINK WHATSAPP* 」\n\n_Solicitado por_ : @${sender.split("@s.whatsapp.net")[0]}\n\nSu link de Whatsapp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*O ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
          contextInfo: { mentionedJid: [sender] }
    }
    client.sendMessage(from, options, text, { quoted: mek } )
				break
				if (data.error) return reply(data.error)
				reply(data.result)
				break
		
	
	case 'creador':
	       client.sendMessage(from, {displayname: "Ochoaxd", vcard: vcard}, MessageType.contact, { quoted: mek})
		client.sendMessage(from, 'Hola puta, te saluda Ochoa, este es un mensaje predeterminado.\n\nArriba esta mi contacto por si tienen algun problema con las descargas o yo que se.\nYo soy dueño de este bot y lo controlo, yo cree la base de datos y le doy mantenimiento.\nSi quieres unir este bot a un grupo o yo que se, habla con este numero.\nEl numero osea mi contacto de arriba no es un bot.\nBueno disfruten del bot y si quieres me puedes seguir en instagram.\n\n*Mi instagram:* https://www.instagram.com/ochoa_ofc\n\n_*by Ochoa*_',MessageType.text, { quoted: mek} )
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                break
	
	
				case "hidetag":
					if (!isGroup) return reply('esta función es solo para grupos');
					var value = args.join(" ");
					var group = await client.groupMetadata(from);
					var member = group["participants"];
					var mem = [];
					member.map(async (adm) => {
					  mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
					});
					var optionshidetag = {
					  text: value,
					  contextInfo: { mentionedJid: mem },
					  quoted: mek,
					};
					client.sendMessage(from, optionshidetag, text);
					break;

                               case 'tts':
				   client.updatePresence(from, Presence.recording) 
				   if (args.length < 1) return client.sendMessage(from, 'Cual es el código de idioma?\n\nPara saber el codigo de idioma coloque el comando ${prefix}idioma', text, {quoted: mek})
                                   if (!isUser) return reply(mess.only.daftarB)
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Y el texto?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Texto muy largo weon')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
                
				case 'dioses':
				case 'admins':
				case 'listadmins':
				case 'adminlist':
					client.updatePresence(from, Presence.composing) 
                                        if (!isUser) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group)
					teks = `*Lista De Administradores Del Grupo*\n\n${groupMetadata.subject}\n\nTotal: ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
			case 'setprefix':
					client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`El prefijo se ha cambiado correctamente a : ${prefix}`)
					break
			
			case 'tagall':
            case 'putas':
			case 'esclavos':			
			case 'pendejos':
			case 'todos':
				client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
                                        if (!isUser) return reply(mess.only.daftarB)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(7).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions('╔══✪〘 *TODOS* 〙✪══\n╠➥'+teks+'╚═〘 _*by Ochoa*_ 〙', members_id, true)
					break
                                case 'send':
					var pc = body.slice(6)
					var nomor = pc.split("|")[0];
					var pesan = pc.split("|")[1];
					client.sendMessage(nomor+'@s.whatsapp.net', pesan, text)
					break
				case 'sb':
				client.updatePresence(from, Presence.composing) 
				if (!isQuotedImage) return reply(`Sube una foto con el comando ${prefix}`)
					if (!isOwner) return reply(mess.only.ownerB)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Gracias por el nuevo perfil')
					break
				case 'bc':
					client.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 TRANSMISIÓN 」*\n\n${body.slice(4)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 _*by Ochoa*_ 」*\n\n${body.slice(4)}`)
						}
						reply('Transmisión exitosa')
					}
					break
					case 'bcgc':
					client.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of groupMembers) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 GRUPO BC 」*\n*Grupo* : ${groupName}\n\n${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of groupMembers) {
							sendMess(_.jid, `*「 BC GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`)
						}
						reply('Grupo de transmisión exitoso')
					}
					
                     
				
		
                                       
				
			//ANTILINKS DE REDES SOCIALES FLACO ACEPTALO SOLO LO ESTAS EDITANDO REALMENTE OCHOA TE HIZO TODO ESTO	
				
				case 'antiwa':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply('Coloque !antimenu para ver los comandos de activación de los antilinks')
					if (Number(args[0]) === 1) {
						if (isAntiWa) return reply('El antilink de Whatsapp ya esta activo')
						antiwa.push(from)
						fs.writeFileSync('./src/antidiscord.json', JSON.stringify(antiwa))
						reply('❬ ✅ ❭ La funcion de antilink de Whatsapp esta habilitada en este grupo')
						client.sendMessage(from,`Atención a todos los miembros activos de este grupo 📣\n\nDesde ahora cualquier participante que envie un link de *Discord* a este grupo sera expulsado de inmediato\n\n_*Razones: Spam*_`, text)
					} else if (Number(args[0]) === 0) {
						antiwa.splice(from)
						fs.writeFileSync('./src/antidiscord.json', JSON.stringify(antiwa))
						reply('❬ ✅ ❭ La funcion de antilink de Whatsapp esta deshabilitada en este grupo')
					} else {
						reply('Coloque !antimenu para ver los comandos de activación de los antilinks')
					}
					break
					
				case 'antidiscord':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply('Coloque !antimenu para ver los comandos de activación de los antilinks')
					if (Number(args[0]) === 1) {
						if (isAntiDiscord) return reply('El antilink de Instagram ya esta activo')
						antidiscord.push(from)
						fs.writeFileSync('./src/antidiscord.json', JSON.stringify(antidiscord))
						reply('❬ ✅ ❭ La funcion de antilink de Discord esta habilitada en este grupo')
						client.sendMessage(from,`Atención a todos los miembros activos de este grupo 📣\n\nDesde ahora cualquier participante que envie un link de *Discord* a este grupo sera expulsado de inmediato\n\n_*Razones: Spam*_`, text)
					} else if (Number(args[0]) === 0) {
						antidiscord.splice(from)
						fs.writeFileSync('./src/antidiscord.json', JSON.stringify(antidiscord))
						reply('❬ ✅ ❭ La funcion de antilink de Discord esta deshabilitada en este grupo')
					} else {
						reply('Coloque !antimenu para ver los comandos de activación de los antilinks')
					}
					break

					case 'antitube':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply('Coloque !antimenu para ver los comandos de activación de los antilinks')
					if (Number(args[0]) === 1) {
						if (isAntiTube) return reply('El antilink de Instagram ya esta activo')
						antidiscord.push(from)
						fs.writeFileSync('./src/antitube.json', JSON.stringify(antitube))
						reply('❬ ✅ ❭ La funcion de antilink de Youtube esta habilitada en este grupo')
						client.sendMessage(from,`Atención a todos los miembros activos de este grupo 📣\n\nDesde ahora cualquier participante que envie un link de *Youtube* a este grupo sera expulsado de inmediato\n\n_*Razones: Spam*_`, text)
					} else if (Number(args[0]) === 0) {
						antidiscord.splice(from)
						fs.writeFileSync('./src/antitube.json', JSON.stringify(antitube))
						reply('❬ ✅ ❭ La funcion de antilink de Youtube esta deshabilitada en este grupo')
					} else {
						reply('Coloque !antimenu para ver los comandos de activación de los antilinks')
					}
					break
				
				case 'antikwai':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply('Coloque !antimenu para ver los comandos de activación de los antilinks')
					if (Number(args[0]) === 1) {
						if (isAntiKwai) return reply('El antilink de Instagram ya esta activo')
						antikwai.push(from)
						fs.writeFileSync('./src/antinsta.json', JSON.stringify(antikwai))
						reply('❬ ✅ ❭ La funcion de antilink de Kwai esta habilitada en este grupo')
						client.sendMessage(from,`Atención a todos los miembros activos de este grupo 📣\n\nDesde ahora cualquier participante que envie un link de *Kwai* o de su perfil para pedir likes o followers a este grupo sera expulsado de inmediato\n\n_*Razones: Spam*_`, text)
					} else if (Number(args[0]) === 0) {
						antikwai.splice(from)
						fs.writeFileSync('./src/antinsta.json', JSON.stringify(antikwai))
						reply('❬ ✅ ❭ La funcion de antilink de Kwai esta deshabilitada en este grupo')
					} else {
						reply('Coloque !antimenu para ver los comandos de activación de los antilinks')
					}
					break
				
				case 'antinsta':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply('Coloque !antimenu para ver los comandos de activación de los antilinks')
					if (Number(args[0]) === 1) {
						if (isAntInsta) return reply('El antilink de Instagram ya esta activo')
						antinsta.push(from)
						fs.writeFileSync('./src/antinsta.json', JSON.stringify(antinsta))
						reply('❬ ✅ ❭ La funcion de antilink de Instagram esta habilitada en este grupo')
						client.sendMessage(from,`Atención a todos los miembros activos de este grupo 📣\n\nDesde ahora cualquier participante que envie un link de *Instagram* o de su perfil para pedir likes o followers a este grupo sera expulsado de inmediato\n\n_*Razones: Spam*_`, text)
					} else if (Number(args[0]) === 0) {
						antinsta.splice(from)
						fs.writeFileSync('./src/antinsta.json', JSON.stringify(antinsta))
						reply('❬ ✅ ❭ La funcion de antilink de Instagram esta deshabilitada en este grupo')
					} else {
						reply('Coloque !antimenu para ver los comandos de activación de los antilinks')
					}
					break
				
				
                                  case 'antitik':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply('Coloque !antimenu para ver los comandos de activación de los antilinks')
					if (Number(args[0]) === 1) {
						if (isAntiTik) return reply('El antilink de Tik Tok ya esta activo')
						antitik.push(from)
						fs.writeFileSync('./src/antitik.json', JSON.stringify(antitik))
						reply('❬ ✅ ❭ La funcion de antilink de Tik Tok esta habilitada en este grupo')
						client.sendMessage(from,`Atención a todos los miembros activos de este grupo 📣\n\nDesde ahora cualquier participante que envia un link de *Tik Tok* o de su perfil a este grupo sera expulsado de inmediato\n\n_*Razones: Spam*_`, text)
					} else if (Number(args[0]) === 0) {
						antitik.splice(from)
						fs.writeFileSync('./src/antitik.json', JSON.stringify(antitik))
						reply('❬ ✅ ❭ La funcion de antilink de Tik Tok esta deshabilitada en este grupo')
					} else {
						reply('Coloque !antimenu para ver los comandos de activación de los antilinks')
					}
					break 
				
				
				case 'antiface':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply('Coloque !antimenu para ver los comandos de activación de los antilinks')
					if (Number(args[0]) === 1) {
						if (isAntiFace) return reply('El antilink de facebook ya esta activo')
						antiface.push(from)
						fs.writeFileSync('./src/antiface.json', JSON.stringify(antiface))
						reply('❬ ✅ ❭ La funcion de antilink de Facebook esta habilitada en este grupo')
						client.sendMessage(from,`Atención a todos los miembros activos de este grupo 📣\n\nDesde ahora cualquier participante que envia un link de *Facebook* o de alguna publicacion para pedir likes o grupos a este grupo sera expulsado de inmediato\n\n_*Razones: Spam*_`, text)
					} else if (Number(args[0]) === 0) {
						antiface.splice(from)
						fs.writeFileSync('./src/antiface.json', JSON.stringify(antiface))
						reply('❬ ✅ ❭ La funcion de antilink de Facebook esta deshabilitada en este grupo')
					} else {
						reply('Coloque !antimenu para ver los comandos de activación de los antilinks')
					}
					break
				        
			       case 'antilink':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply('Coloque !antimenu para ver los comandos de activación de los antilinks')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('El antilink ya esta activo')
						antilink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('❬ ✅ ❭ La funcion de antilink de Grupos De Whatsapp esta habilitada en este grupo')
						client.sendMessage(from,`Atención a todos los miembros activos de este grupo 📣\n\nEl antilink esta activo\n\nY solo los admins de este grupo podran pasar el enlace\n\nSi algun participante que no se admin envía un enlace de este grupo u otro grupo sera expulsado de este grupo de inmediato`, text)
					} else if (Number(args[0]) === 0) {
						antilink.splice(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('❬ ✅ ❭ La funcion de antilink de Grupos De Whatsapp esta deshabilitada en este grupo')
					} else {
						reply('Coloque !antimenu para ver los comandos de activación de los antilinks')
					}
					break
			        
				
				//FIN DE ANTILINK HECHO POR SHANDUY
				
//ADMINISTRACION DE GRUPOS
		                
case 'exe':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
setTimeout( () => {
client.groupLeave (from) 
}, 2000)
setTimeout( () => {
client.updatePresence(from, Presence.composing) 
client.sendMessage(from, 'AHI NOS VEMOS DIJO EL CIEGO', text) // ur cods
}, 0)
break
       
case 'grupocr':
client.updatePresence(from, Presence.composing) 
options = {
text: `El creador de este grupo es: @${from.split("-")[0]}`, 
contextInfo: { mentionedJid: [from] }
}
client.sendMessage(from, options, text, { quoted: mek } )
break
                                      
case 'pium':
case 'pum':
case 'pendejo':
case 'kick':
case 'pafuera':
if (!isUser) return reply(mess.only.daftarB)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return reply('Marca al que vamos a funar')
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (entah.length > 1) {
var mems_ids = []
for (let ids of entah) {
mems_ids.push(ids)
}
client.groupRemove(from, mems_ids)
} else {
client.groupRemove(from, [entah[0]])
}
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
client.groupRemove(from, [entah])
}
break

case 'demote':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Flaco te falto agregar a la persona que voy a quitar el admin')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = ''
for (let _ of mentioned) {
teks += `Pedido recibido✅\n\nRetirando cargo como administrador :\n`
teks += `@_.split('@')[0]`
}
mentions(teks, mentioned, true)
client.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Pedido recibido✅\n\nRetirando cargo como administrador @${mentioned[0].split('@')[0]}\n*${groupMetadata.subject}*_`, mentioned, true)
client.groupDemoteAdmin(from, mentioned)
}
break

case 'promote':
client.updatePresence(from, Presence.composing) 
if (!isUser) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A quien voy a dar admin??\n\n*Ejemplo:* ${prefix}promote @xxxxxxx')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Pedido recibido✅\n\nAgregando cargo como administrador :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
client.groupMakeAdmin(from, mentioned)
} else {
mentions(`Pedido recibido✅\n\nAgregando cargo como administrador : @${mentioned[0].split('@')[0]}`, mentioned, true)
client.groupMakeAdmin(from, mentioned)
}
break				
				
case 'linkgc':
client.updatePresence(from, Presence.composing) 
if (!isGroup) return reply(mess.only.group)
if (!isUser) return reply(mess.only.daftarB)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await client.groupInviteCode (from)
yeh = `Aqui esta el link del grupo\n\nhttps://chat.whatsapp.com/${linkgc}\n\nLink Del Grupo *${groupName}*`
client.sendMessage(from, yeh, text, {quoted: mek, detectLinks: false})
break

case 'close':
case 'c':
case 'cerrar':
case 'closegc':
client.updatePresence(from, Presence.composing) 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var nomor = mek.participant
const close = {
text: `Grupo cerrado por el administrador @${nomor.split("@s.whatsapp.net")[0]}\nAhora *solo los administradores* puede enviar mensajes`,
contextInfo: { mentionedJid: [nomor] }
}
client.groupSettingChange (from, GroupSettingChange.messageSend, true);
reply(close)
break
                
case 'open':
case 'abrir':
case 'a':
case 'o':
case 'opengc':                
client.updatePresence(from, Presence.composing) 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
open = {
text: `Grupo abierto por el administrador @${sender.split("@")[0]}\nAhora *todos los participantes* pueden enviar mensajes`,
contextInfo: { mentionedJid: [sender] }
}
client.groupSettingChange (from, GroupSettingChange.messageSend, false)
client.sendMessage(from, open, text, {quoted: mek})
break
				                
case 'unir':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Para emocion ✋\nPara unir a una persona debes escribir el numero sin (+)\n\nEjemplo: !unir 52xxxxxxxxx')
if (args[0].startsWith('+')) return reply(mess.error.unire)
try {0
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
client.groupAdd(from, [num])
} catch (e) {
console.log('Error:', e)
reply('No se pudo agregar el destino, tal vez porque es privado')
}
break
				
case 'foto':
case 'fgc': 
reply(mess.foto)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await client.downloadAndSaveMediaMessage(mek)
await client.updateProfilePicture (from, media)
reply('*⌊✅⌉ El cambio de foto del grupo fue exitoso*')
break						
				
case 'nombre':
case 'name':
case 'ngc':
      if (!isGroup) return reply(mess.only.group)
      if (!isGroupAdmins) return reply(mess.only.admin)
      if (!isBotGroupAdmins) return reply(mess.only.Badmin)
      client.groupUpdateSubject(from, `${body.slice(5)}`)
      client.sendMessage(from, '*⌊✅⌉ El nombre del grupo fue cambiado*', text, {quoted: mek})
      break
					
case 'konstantinova':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
client.groupUpdateSubject(from, `Ꮶσɳsτɑɳτιɳσѵɑ²⁰¹³ﻬ`)
client.sendMessage(from, '*⌊✅⌉ El nombre del grupo fue cambiado*', text, {quoted: mek})
break

case 'des':
case 'descripcion':
case 'dgc':
      if (!isGroup) return reply(mess.only.group)
      if (!isGroupAdmins) return reply(mess.only.admin)
      if (!isBotGroupAdmins) return reply(mess.only.Badmin)
      client.groupUpdateDescription(from, `${body.slice(5)}`)
      client.sendMessage(from, '*⌊✅⌉ La descripción del grupo fue cambiado*', text, {quoted: mek})
      break

case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isUser) return reply(mess.only.daftarB)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Para activar está funcion coloca !welcome 1')
if (Number(args[0]) === 1) {
if (isWelkom) return reply('Ya esta activada!!!')
welkom.push(from)
fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
reply('❬ ✅ ❭ La funcion de bienvenida esta habilitada en este grupo')
} else if (Number(args[0]) === 0) {
welkom.splice(from)
fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
reply('❬ ✅ ❭ La funcion de bienvenida esta deshabilitada en este grupo')
} else {
reply('Escribe el comando 1 para activarlo y 0 para desactivarlo Ejemplo: !welcome 1')
}
break					
					
					
//FIN DE ADMINISTRACION DE GRUPOS				
				
				
				
//CREACION DE STICKERS Y VARIOS				
				
				case 's':
                case 'stiker':
				case 'sticker':
				case 'stickergif':
				case 'stikergif':
				if (!isUser) return reply(mess.only.daftarB)
                               if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
                                                ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(pack, author)} ${ran} -o ${ran}`, async (error) => {
									 if (error) {    
										         fs.unlinkSync(media)	
											 fs.unlinkSync(ran)
											 }
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.only.pegatina)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`[❗] Fallo, al momento de convertir la imagen a sticker`)
							})
							.on('end', function () {
								console.log('Finish')
							        exec(`webpmux -set exif ${addMetadata(pack, author)} ${ran} -o ${ran}`, async (error) => {
									if (error) {
											 fs.unlinkSync(media)	
											 fs.unlinkSync(ran)
											 }
								buff = fs.readFileSync(ran)
								client.sendMessage(from, buff, sticker)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
						})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						}
						break
					
					case 'attp':
						if (!isUser) return reply(mess.only.daftarB)
					        if (args.length < 1) return reply(`¿Dónde está el texto?\n*Ejemplo:* ${prefix}attp ochoa e ma wapo`)
						reply(mess.only.attp)
					        attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
						client.sendMessage(from, attp2, MessageType.sticker, {quoted: mek})
						break
					
			          case 'qrcode':
                buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?data=${body.slice(8)}&size=1080%C3%971080`)
				client.sendMessage(from, buff, image, {quoted: mek})
				break  
				
				case 'toimg':
				    client.updatePresence(from, Presence.composing)
                                    if (!isUser) return reply(mess.only.daftarB)
					if (!isQuotedSticker) return reply('❌ Solo stickers')
					reply(mess.only.imgs)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ No se pudo convertir el sticker en imágenes')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '*⌈ Imagen convertida ✅ ⌉*\n\n_*by Ochoa*_'})
						fs.unlinkSync(ran)
					})
					break
                        case 'tomp3':
                	client.updatePresence(from, Presence.composing) 
                        if (!isUser) return reply(mess.only.daftarB)
					if (!isQuotedVideo) return reply('Responde al video con el comando *tomp3')
					reply(mess.only.mpcancion)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ No se pudo convertir el video a mp3')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break
//CREACION DE STICKERS Y VARIOS	            
		
			
	//SERVICIO DE MUSICA Y VIDEO 			
				
				
	case 'play':   
	if (args.length < 1) return reply('Donde esta el nombre de la canción?\n\nEjemplo: !play Industry Baby - Lil Nas X')
if (!isUser) return reply(mess.only.daftarB)
		reply(mess.only.musica)
		play = body.slice(5)
		anu = await fetchJson(`https://api.zeks.me/api/ytmp3?${play}apikey=XR792sY6C1QbXVukKBLsYdEm9jJ&url=https://www.youtube.com/watch?v`)
		if (anu.error) return reply(anu.error)
		infomp3 = `*⌜Cancion Encontrada ✅⌟*\n◉ *Título:* ${anu.result.title}\n◉ *Fuente:* ${anu.result.source}\n◉ *Tamaño:* ${anu.result.size}\n\n*ESPERE ENVIANDO SU ARCHIVO MP3 ⚠*\n\n_*Servicio proveido por Ochoa*_`
		buffer = await getBuffer(anu.result.thumbnail)
		lagu = await getBuffer(anu.result.url_audio)
		client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
		client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
		break

case 'play2':   
	if (args.length < 1) return reply('Donde esta el nombre de la canción?\n\nEjemplo: !play2 Industry Baby - Lil Nas X')
if (!isUser) return reply(mess.only.daftarB)
	reply(mess.only.musica2)
		play = body.slice(5)
		anu = await fetchJson(`https://api.zeks.me/api/ytmp3?${play}apikey=XR792sY6C1QbXVukKBLsYdEm9jJ&url=https://www.youtube.com/watch?v`)
		if (anu.error) return reply(anu.error)
		infomp3 = `*⌜Cancion Encontrada ✅⌟*\n◉ *Título:* ${anu.result.title}\n◉ *Fuente:* ${anu.result.source}\n◉ *Tamaño:* ${anu.result.size}\n\n*ESPERE ENVIANDO SU ARCHIVO MP3 ⚠*\n\n_*Servicio proveido por shanduy*_`
		buffer = await getBuffer(anu.result.thumbnail)
		lagu = await getBuffer(anu.result.url_audio)
		client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
		client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
		break
                                
		case 'ytmp4':
		if (args.length < 1) return reply('Donde esta la url del video?\n\nEjemplo: !ytmp4 www.youtube.com/xxxxxxxxx')
		if (!isUser) return reply(mess.only.daftarB)
		reply(mess.only.mpv)
		if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
		anu = await fetchJson(`https://api.zeks.me/api/ytmp4?apikey=${apikey}XR792sY6C1QbXVukKBLsYdEm9jJ&url=${args[0]}`, {method: 'get'})
		if (anu.error) return reply(anu.error.yt)
		teks = `*⌜Video Encontrado ✅⌟*\n◉ *Título:* ${anu.result.title} \n◉ *Tamaño:* ${anu.result.size}\n\n*ESPERE ENVIANDO SU ARCHIVO MP4 ⚠*\n\n_*Servicio proveido por Ochoa*_`
		lagu = await getBuffer(anu.result.thumbnail)
                client.sendMessage(from, lagu, image, {quoted: mek, caption: teks})
		buffer = await getBuffer(anu.result.url_video)
		client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek})
		break
				
             											
	//FIN DE SERVICIO DE MUSICA Y VIDEO			
				
//REGISTRO				
case 'rg':
case 'reg':
case 'verify':
case 'registro':
case 'daftar':
client.updatePresence(from, Presence.composing)
if (isUser) return reply('Ya estas registrado pendejo')
if (args.length < 1) return reply(`Incorrecto ❎\nComando: ${prefix}daftar Nombre\n\nEjemplo: ${prefix}daftar Ochoa`)
var reg = body.slice(8)
var nombre = reg.split("|")[0];
user.push(sender)
fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
client.sendMessage(from, `\`\`\`REGISTRADO ✅\`\`\`\n\n\`\`\`DNI: PUTA DE OCHOA\`\`\`\n\n\`\`\`Hora COL: ${time}\`\`\`\n\n\`\`\`Fecha: ${date}\`\`\`\n\n\`\`\`[Usuario]: ${nombre}\`\`\`\n\`\`\`[Número]: wa.me/${sender.split("@")[0]}\`\`\`\n\n\`\`\`Para usar el bot\`\`\`\n\`\`\`Por favor\`\`\`\n\`\`\`enviar ${prefix}help\`\`\`\n\`\`\`\nTotal de usuários: ${user.length}\`\`\``, text, {quoted: mek})
break
                                
//FIN DE REGISTRO  
				
				case 'nsfwneko':
				    try{
						if (!isNsfw) return reply('❌ *NSFW NO ESTA ACTIVADO* ❌')
                                                if (!isUser) return reply(mess.only.daftarB)
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'mesum'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
                              	case 'nsfw':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Digita 1 para activar los NSFW')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('Recursos Activados ✅')
						nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('❬ ✅ ❭ La funcion NSFW esta habilitado en este grupo')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('❬ ✅ ❭ La funcion NSFW esta deshabilitado en este grupo')
					} else {
						reply('Digite 1 para activarlo, 0 para desactivarlo')
					}
					break	
				case 'waifu':
					gatauda = body.slice(7)
					reply(mess.wait)
                                        if (!isUser) return reply(mess.only.daftarB)
					anu = await fetchJson(`https://arugaz.my.id/api/nekonime`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image,{quoted: mek})
					break
				case 'randomanime':
					gatauda = body.slice(13)
					reply(mess.wait)
                                        if (!isUser) return reply(mess.only.daftarB)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break						
                             case 'delete':
					case 'del':
					if (!isGroup)return reply(mess.only.group)
                                        if (!isUser) return reply(mess.only.daftarB)
		                        client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
                 case 'level':
                if (!isLevelingOn) return reply(mess.levelnoton)
                if (!isGroup) return reply(mess.only.group)
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
		sem = sender.replace('@s.whatsapp.net','')
		if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
                resul = `『 *TUS ESTADISTICAS 🆙* 』\n\nTus estadisticas en tiempo real 🕐\n\n├─ ❏ *NOMBRE:* ${sem}\n├─ ❏ *XP 🆙:* ${userXp}\n└─ ❏ *NIVEL:* ${userLevel}`
               client.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
            break
				
            case 'leveling':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('Digita *leveling 1 para activar este recurso')
                if (args[0] === '1') {
                    if (isLevelingOn) return reply('*La función de nivel ya estaba activa*')
                    _leveling.push(groupId)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(mess.levelon)
                } else if (args[0] === '0') {
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(mess.leveloff)
                } else {
                    reply(` *Digita el comando 1 para activar, 0 para desactivar *\n * Ejemplo: ${prefix}leveling 1*`)
                }
            break
                               
					case 'nsfwbobs': 
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/biganimetiddies`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Quiero ver tetas'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					
				
					case 'nsfwsidebobs':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/sideoppai`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'La vieja de gabo, tremenda puta'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
					    break
					
					case 'nsfwahegao':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/ahegao`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Joder, quisiera follarmela'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					
					case 'nsfwfeets':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animefeets`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'MMMMM PATAS'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌') 
						}
						break
				
						
                                case 'ping':    
			   	        if (!isUser) return reply(mess.only.userB)
                                        client.updatePresence(from, Presence.composing) 
				        uptime = process.uptime()
                                        client.sendMessage(from, `Velocidad: *${latensi.toFixed(4)} _Segundos_*`, text, { quoted: mek})
                                        break
                                case 'ttp':
					if (args.length < 1) return reply('Y el texto flaco?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(4).trim()
					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break

//Nuevas Funciones
case "runtime":
      case "test":
        run = process.uptime();
        teks = `${kyun(run)}`;
        reply(teks);
        break;

		case 'listonline': 
		if (!isGroup) return reply(`*Solo puede ser utilizado en grupos*`)
					 try {
					 let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
					 let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
					 client.sendMessage(from, '*Lista de activos:*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
					 } catch (e) {
					 reply(`${e}`)
		}
		break 

case 'demoteall':
if (!isOwner) return reply(mess.only.ownerB)
if (!isGroup) return reply(mess.only.group)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
client.groupDemoteAdmin(from, members_id)
break

case 'promoteall':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isGroup) return reply(mess.only.group)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
client.groupMakeAdmin(from, members_id)
break

		case "rentbot":
        if (!isOwner) return
        jadibot(reply, client, from);
        break;
      case "stoprentbot":
        if (!isOwner) return
        stopjadibot(reply);
        break;
      case "listbot":
        let tekss = "「 *LISTA USUARIO RENT* 」\n";
        for (let i of listjadibot) {
          tekss += `*Numero* : ${i.jid.split("@")[0]}
*Nombre* : ${i.name}
*Dispositivo* : ${i.phone.device_manufacturer}
*Modelo* : ${i.phone.device_model}\n\n`;
        }
        reply(tekss);
        break;

		case "totag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `Etiqueta : sticker/audio/video/imagen con ${prefix}totag`
          );
        }
        break;

case 'notificar':
client.updatePresence(from, Presence.composing)
if (!isGroup) return reply(mess.only.group)
teks = `Notificación dada por @${sender.split("@")[0]}\n*Mensaje : ${args.join(' ')}*`
const groupN = await client.groupMetadata(from);
member = groupN['participants']
jids = [];
member.map(async adm => {
jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
text: teks,
contextInfo: {
mentionedJid: jids, "forwardingScore": 9999, "isForwarded": true
},
quoted: mek
}
addFilter(from)
await client.sendMessage(from, options, MessageType.text)
break

case 'apagar':
if (!isOwner) return reply('No eres mi jefe tons me quedare on')
reply('Me apagare en 3 Segundos....')
setTimeout( () => {
client.close() }, 3000)
break

case 'restaurar':
if (!isOwner) return reply('No eres mi jefe para reestablecer')
reply('*LA INFORMACION DE ESTE USUARIO SE RESTABLECERA PARA PODER USAR Y ESCANEAR EL CODIGO EN OTRO DISPOSITIVO*')
exec(`bash restore.sh`, (err, stdout) => {
if (err) return reply(err)
if (stdout) reply(stdout)
})
break
	
case 'actualizar':
case 'update':
if (!isOwner) return reply('No eres mi jefe para que me actualices')
reply('*ESPERE UN MOMENTO... EL BOT ESTA SIENDO ACTUALIZADO CON LAS ÚLTIMAS MODIFICACIONES*')
exec(`bash update.sh`, (err, stdout) => {
if (err) return reply(err)
if (stdout) reply(`*El bot se ah actualizado de forma satisfactoria*\n Informe de la actualización:\n\n${stdout}\n\nLos cambios se mostraran despues de volver a iniciar el bot!.`)
})
break
		
case 'chats':
client.updatePresence(from, Presence.composing)
client.sendMessage(from, `*CHATS TOTALES* : ${totalchat.length} Chat`, MessageType.text, {quoted  : mek})
break

case 'reportar':
if (args.length <= 1) return reply(`Ejemplo: ${prefix}reportar "Amm... disculpa, tengo un error en...."`)
if (args.length >= 300) return client.sendMessage(from, '*El limite del reporte es de maximo 300 caracteres!*', MessageType.text, {quoted: mek})
var numerorepo = client.participant
reporte = `[REPORTE]\nDe: @${sender.split("@s.whatsapp.net")[0]}\n\n`
var options = { text: reporte, contextInfo: { mentionedJid: [sender] },}
client.sendMessage('573146224366@s.whatsapp.net', options, MessageType.text, {quoted: mek})
reply("*El reporte fue enviado al CREADOR del bot, reporte falso o bura = Block*")
addFilter(from)
break

case 'antifake':                
if (!isWelkom) return reply('*Este comando solo se puede usar cuando la bienvenida esta activada*')
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Escribe *1* para activar')          
if (args[0] === '1') {                                    
	if (isAntiFake) return reply('*Ya está activo*')          
	antifake.push(from)                          
	fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))      
	reply(`*[ Activado ]*`)  
	reply(`*Los numeros considerados como FAKEs, sera eliminados del grupo*`)  
} else if (args[0] === '0') {             
	var ini = antifake.indexOf(from)
	antifake.splice(ini, 1)           
	fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))       
	reply(`Desactivado`)              
} else {                                         
	reply('1 para activar, 0 para desactivar')           
}           
break

case "plataforma":
if (!isGroupAdmins) return reply(mess.only.admin)
ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
        teks = `Plataforma: ${os.platform()}`;
        reply(teks);
        break;

		case 'ig':
			if (!isUser) return reply(mess.only.daftarB)
			  reply('https://www.instagram.com/ochoa_ofc')
			break

			case 'owner':
			if (!isUser) return reply (mess.only.daftarB)
			reply('wa.me/+573146224366')
			break

case 'info':
	if (!isGroupAdmins) return reply(mess.only.admin)
	run = process.uptime();
	uptime = process.uptime()
	const timestamp = speed();
    const latensi = speed() - timestamp
	teks = `*Prefix:* !\n\*Plataforma:* ${os.platform()}\n\*Chats Totales:* ${totalchat.length}\n\*Velocidad:* ${latensi.toFixed(4)} _Segundos_\n\Tiempo Activo: Tiempo Activo:* ${kyun(run)}`;
        reply(teks);
        break;

		case 'tictactoe':
case 'ttt':
if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `*🎮 Tictactoe Game 🎳*
Actualmente hay una sesión de juego grupal\n\n@${boardnow.X} VS @${boardnow.O}
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
Girar : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
client.sendMessage(from, chatMove, MessageType.text, {
quoted: mek,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
},
});
return;
}
if (argss.length === 1)
return reply(
`Etiqueta a quien quieras que sea ser tu oponente!\n\nEjemplo : *${prefix}ttt <@tag>*`
);
	const boardnow = setGame(`${from}`);
	console.log(`NUEVA SECCION DE TTT ${boardnow.session}`);
	boardnow.status = false;
	boardnow.X = sender.replace("@s.whatsapp.net", "");
	boardnow.O = argss[1].replace("@", "");
	fs.writeFileSync(
		 `./lib/tictactoe/db/${from}.json`,
		 JSON.stringify(boardnow, null, 2)
);
const strChat = `*🎮 Iniciar el juego tictactoe 🎳*
@${sender.replace(
		 "@s.whatsapp.net",
		 ""
)} desafio a convertirte en un oponente del juego
_[ ${argss[1]} ] Escribe "S"o "N" para aceptar o rechazar el juego._ 
`;
client.sendMessage(from, strChat, MessageType.text, {
quoted: mek,
contextInfo: {
mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
},
});
break
case 'delttc':
	// if(!isOwner && !revz.key.fromMe) return vean.sendMessage(id, yan, MessageType.text);
if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
reply(`Sesión eliminada con éxito en este grupo!`);
} else {
reply(`No hay sesión en curso.`);
}
break


//Fin Nuevas Funciones
                default:
                
		if (budy.includes(`Bot`)) {
                reply(`Ola zi dime`)
                }

		if (budy.includes(`bot`)) {
				reply(`Ola zi dime`)
				}

		if (budy.includes(`BOT`)) {
				reply(`Ola zi dime`)
				}

		if (budy.includes(`gracias`)) {
				reply(`De Nada UwU`)
				}

		if (budy.includes(`Pene`)) {
				reply(`Comes`)
				}

		if (budy.includes(`pene`)) {
				reply(`Comes`)
				}

		if (budy.includes(`Pito`)) {
				reply(`Tragas`)
				}
		
		if (budy.includes(`pito`)) {
			    reply(`Tragas`)
				}

		if (budy.includes(`Todo bien`)) {
				reply(`Si amigo todo bien`)
				}

		if (budy.includes(`Buenos dias`)) {
                reply(`Buenos Dias Amores`)
                }

		if (budy.includes(`Bot gay`)) {
                  reply(`Miren a este boludito`)
                  }
					
		if (budy.includes(`Che messi vo le preguntaste?`)) {
                  reply(`No`)
                  }

		if (budy.includes(`Gracias`)) {
                  reply(`De Nada UwU`)
                  }
				
		if (budy.includes(`Opa`)) {
                  reply(`opaaaaa`)
                  }
                 
	
	if (budy.startsWith(`Pasen porno`)) {
        const none = fs.readFileSync('./mp3/maau2.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }			
	if (budy.startsWith(`VAMOOO`)) {
        const none = fs.readFileSync('./mp3/vamo.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Hora del sexito`)) {
        const none = fs.readFileSync('./mp3/maau1.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
        if (budy.startsWith(`Cuentate un chiste`)) {
        const none = fs.readFileSync('./mp3/dylan2.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Admin party`)) {
        const none = fs.readFileSync('./mp3/fiesta.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
        if (budy.startsWith(`Fiesta del admin`)) {
        const none = fs.readFileSync('./mp3/admin.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Viernes`)) {
        const none = fs.readFileSync('./mp3/viernes.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`:v`)) {
        const none = fs.readFileSync('./mp3/viejo1.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`La toca 7w7`)) {
        const none = fs.readFileSync('./anishan/anime5.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Quien es tu sempai botsito`)) {
        const none = fs.readFileSync('./anishan/anime4.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Me gimes 7u7`)) {
        const none = fs.readFileSync('./anishan/anime3.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Te amo botsito uwu`)) {
        const none = fs.readFileSync('./anishan/anime2.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Onichan`)) {
        const none = fs.readFileSync('./anishan/anime1.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Pasen sexo`)) {
        const none = fs.readFileSync('./mp3/fernan.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Paraguayo`)) {
        const none = fs.readFileSync('./mp3/gaspi11.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Venezolano`)) {
        const none = fs.readFileSync('./mp3/gaspi10.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Gaspi corte`)) {
        const none = fs.readFileSync('./mp3/gaspi12.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Gaspi buenos dias`)) {
        const none = fs.readFileSync('./mp3/gaspi13.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Enano`)) {
        const none = fs.readFileSync('./mp3/gaspi14.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Buenas noches`)) {
        const none = fs.readFileSync('./mp3/gaspi15.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
        if (budy.startsWith(`Peruano`)) {
        const none = fs.readFileSync('./mp3/gaspi16.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Alto temazo`)) {
        const none = fs.readFileSync('./mp3/sombare14.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`GOOOOD`)) {
        const none = fs.readFileSync('./mp3/sombare13.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Ya me voy a dormir`)) {
        const none = fs.readFileSync('./mp3/sombare12.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
        if (budy.startsWith(`Calefon`)) {
        const none = fs.readFileSync('./mp3/sombare11.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Bot de mierda`)) {
        const none = fs.readFileSync('./mp3/sombare10.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Apurate bot`)) {
        const none = fs.readFileSync('./mp3/sombare9.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Un chino`)) {
        const none = fs.readFileSync('./mp3/sombare7.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }				
        if (budy.startsWith(`No funciona`)) {
        const none = fs.readFileSync('./mp3/sombare8.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Boliviano`)) {
        const none = fs.readFileSync('./mp3/gaspi3.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Corte`)) {
        const none = fs.readFileSync('./mp3/gaspi2.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Gaspi me saludas`)) {
        const none = fs.readFileSync('./mp3/gaspi4.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Gaspi y las minitas`)) {
        const none = fs.readFileSync('./mp3/gaspi6.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Gaspi todo bien`)) {
        const none = fs.readFileSync('./mp3/gaspi7.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Me quiero suicidar`)) {
        const none = fs.readFileSync('./mp3/gaspi81.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Gaspi ya no aguanto`)) {
        const none = fs.readFileSync('./mp3/gaspi9.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Contate algo bot`)) {
        const none = fs.readFileSync('./mp3/gaspi5.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
               if (budy.startsWith(`Sexo`)) { 
        const none = fs.readFileSync('./mp3/sexo.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Pongan cuties`)) { 
        const none = fs.readFileSync('./mp3/neymar1.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
                 if (budy.startsWith(`Momento epico`)) {
        const none = fs.readFileSync('./mp3/sombare1.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
		if (budy.startsWith(`El bot del orto no funciona`)) {
        const none = fs.readFileSync('./mp3/sombare2.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
		if (budy.startsWith(`Epicardo`)) {
        const none = fs.readFileSync('./mp3/sombare3.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
		if (budy.startsWith(`Insta de la minita`)) {
        const none = fs.readFileSync('./mp3/sombare4.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
                 if (budy.startsWith(`Una mierda de bot`)) {
        const none = fs.readFileSync('./mp3/sombare5.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
		 if (budy.startsWith(`Ultimo momento`)) {
        const none = fs.readFileSync('./mp3/sombare6.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }			
		if (budy.startsWith(`Nefasto`)) {
        const none = fs.readFileSync('./mp3/gaspi1.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
				 
				  if (!isOwner) return;
				  if (_chats.startsWith(">")) {
					try {
					  return client.sendMessage(
						from,
						JSON.stringify(eval(budy.slice(2)), null, "\t"),
						text,
						{ quoted: mek }
					  );
					} catch (err) {
					  e = String(err);
					  reply(e);
					}
				  }
			  }
		  
			  if (isGroup && budy != undefined) {
			  } else {
				console.log(
				  color("XavyBot", "red"),
				  "Ochoa",
				  color(sender.split("@")[0])
				);
			  }
			 } catch (e) {
			  e = String(e); 
			  if (!e.includes("this.isZero") && !e.includes("jid") && !e.includes("Cannot read property 'fromMe' of undefined") && !e.includes("Cannot use 'in' operator to search for 'text' in undefined") && !e.includes("Cannot read property 'key' of undefined") && !e.includes("Cannot use 'in' operator to search for 'text' in undefined")) {
				console.log("Message : %s", color(e, "yellow"));
			  }
			  // console.log(e)
			}
		  })
	}
	starts()
