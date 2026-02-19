// import makeWASocket from '@whiskeysockets/baileys'

// const makeWASocket = require('@whiskeysockets/baileys').default

const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason
} = require('@whiskeysockets/baileys')

/*async function start() {
  const sock = makeWASocket({
    printQRInTerminal: false
  })

  sock.ev.on('connection.update', (update) => {
    const { connection } = update
    if (connection === 'open') {
      console.log('WhatsApp Connected!')
    }
  })
}*/

async function start() {
  // INIT AUTH STATE
  const { state, saveCreds } = await useMultiFileAuthState('./auth')

  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true
  })

  sock.ev.on('creds.update', saveCreds)

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update

    if (connection === 'open') {
      console.log('✅ WhatsApp Connected!')
    }

    if (connection === 'close') {
      console.log('❌ Connection closed')
    }
  })
}

start()
