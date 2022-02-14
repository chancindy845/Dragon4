const help = (prefix) => {
	return `
▋▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
▋┋        ┨ ☠XavyBot☠ ┠
▋┋ 
▋┋ Hola,por favor registrarte con:
▋┋ !daftar y tú nombre
▋┋ !reg y tú nombre
▋┋ !rg y tú nombre 
▋┋ !verify y tú nombre 
▋┋ !registrar y tú nombre 
▋┋ Creador: *OCHOA*
▋┋ Comando: ⌜ ${prefix} ⌟
▋┋
▋▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
▋┋ ╭─────────────╮
■█   ✰*CREAR STICKERS*✰
▋┋ ╰─────────────╯
▋┋ *Imagen*
▋┋ ${prefix}sticker
▋┋ *texto*
▋┋ ${prefix}attp
▋┋ *Gif*
▋┋ ${prefix}stickergif
▋┋ *6 segundos de video*
▋┋
▋┋ ╭─────────────╮
■█   ✰*CONVERTIDORES*✰
▋┋ ╰─────────────╯
▋┋ *De sticker a JPG*
▋┋ ${prefix}toimg
▋┋ *De video a MP3*
▋┋ ${prefix}tomp3
▋┋
▋┋ ╭──────────────╮
■█ ✰*AUDIOS Y DESCARGAS*✰
▋┋ ╰──────────────╯
▋┋ *Descargar musica de YT*
▋┋ ${prefix}desmenu
▋┋ *Audio*
▋┋ ${prefix}tts es (mas texto)
▋┋ ${prefix}idioma
▋┋ *Monas chinas*
▋┋ ${prefix}otak
▋┋ *Interactua con el bot*
▋┋ ${prefix}shantera
▋┋
▋┋ ╭──────────────╮
■█       ✰*OTROS*✰
▋┋ ╰──────────────╯
▋┋ *Juega con el bot*
▋┋ ${prefix}juegos
▋┋ *Link de Whatsapp*
▋┋ ${prefix}wame
▋┋ *Coloca un texo*
▋┋ ${prefix}qrcode
▋┋ *Creador del bot*
▋┋ ${prefix}creador
▋┋ *Nswfmenu*
▋┋ ${prefix}nsfwmenu
▋┋
▋┋ ╭──────────────╮
■█  ✰*GRUPOS Y ADMINS*✰
▋┋ ╰──────────────╯
▋┋ *Cerrar el grupo solo admins*
▋┋ ${prefix}close o cerrar
▋┋ *Abrir grupo solo admins*	
▋┋ ${prefix}open o abrir
▋┋ *Eliminar un miembro*
▋┋ ${prefix}kick o alv
▋┋ *Dar admin a un miembro*
▋┋ ${prefix}promote
▋┋ *Elimina virtuales y buzones xd*
▋┋ ${prefix}antifake
▋┋ *Quitar admin a un miembro*
▋┋ ${prefix}demote
▋┋ *Comando de bienvenida solo grupos*
▋┋ ${prefix}welmenu
▋┋ *Menu antilink*
▋┋ ${prefix}antimenu
▋┋ *Link del grupo*
▋┋ ${prefix}linkgc
▋┋ *Nombra admins del grupo*
▋┋ ${prefix}adminlist
▋┋ *Mencionar a todos*
▋┋ ${prefix}hidetag o todos
▋┋ *Mencionar a todos con foto y/o video*
▋┋ ${prefix}totag
▋┋ *Consulta las personas online*
▋┋ ${prefix}listonline
▋┋ *Mira el tiempo on del bot*
▋┋ ${prefix}test
▋┋ *Agregar un miembro con el numero*
▋┋ ${prefix}unir y el numero
▋┋ *Cambiar foto del grupo*
▋┋ ${prefix}fotog
▋┋ *Avisa al creador si hay errores*
▋┋ ${prefix}notificar
▋┋ *Informa para el grupo*
▋┋ ${prefix}notificar
▋┋ *Cambiar descripcion del grupo*
▋┋ ${prefix}dgc
▋┋ *Cambiar nombre del grupo*
▋┋  ${prefix}name
▋┋ ╭──────────────╮
■█  ✰*OWNER*✰
▋┋ ╰──────────────╯
▋┋ *Actualizar el bot*
▋┋ ${prefix}update
▋┋ *Apagar el bot*
▋┋ ${prefix}off
▋┋ *Quita admin a todos*
▋┋ ${prefix}demoteall
▋┋ *Regala admin a todos los participantes*
▋┋ ${prefix}promoteall
▋┋ *Ver los chats del bot*
▋┋ ${prefix}grupos
▋┋ *Reestablecer qr*
▋┋ ${prefix}restore
▋┋ *Vaciar Grupos   MUY PRONTO*
▋┋ ${prefix}vaciar
▋┋
▋┋ *OCHOAXD*
▋▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
`
}

exports.help = help