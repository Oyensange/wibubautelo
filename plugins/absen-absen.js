let handler = async (m, { usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) throw `_*Tidak ada absen berlangsung digrup ini!*_\n\n*${usedPrefix}mulaiabsen* - untuk memulai absen`

    let absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) throw '*Kamu sudah absen!*'
    absen.push(m.sender)
    m.reply(`Done!`)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let list = absen.map((v, i) => `โโช ${i + 1}. @${v.split`@`[0]}`).join('\n')
    conn.send2Button(m.chat, `
*๐ Tanggal:* ${date}
${conn.absen[id][2]}

โญโโโ[ *List* ]
โ Total: ${absen.length}
${list}
โฐโโโโโโโยทยทยทยทยทโโโโโโ
`,datebot + '\n' + wm, 'Absen', '.absen', 'Cek Absen', '.cekabsen', m, { contextInfo: { mentionedJid: absen } })
}
handler.help = ['absen']
handler.tags = ['absen']
handler.command = /^(absen|hadir)$/i
handler.group = true
module.exports = handler

let wm = global.botwm
let datebot = global.botdate